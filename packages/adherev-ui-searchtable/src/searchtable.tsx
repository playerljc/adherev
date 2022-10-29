import { Button, Table } from 'ant-design-vue';
import classNames from 'classnames';
import { CreateElement, PropType, VNode } from 'vue';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import Suspense from '@baifendian/adherev-ui-suspense';
import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Mixins from '@baifendian/adherev-util-mixins';

import ColumnResizable, {
  SearchTableResizableObserver,
  SearchTableResizableTitle,
} from './Extension/ColumnResizable';
import ColumnSetting from './Extension/ColumnSetting';
import TableDensitySetting from './Extension/TableDensitySetting';
import { TableDensity } from './types';

export const selectorPrefix = 'adherev-ui-searchtable';

const { updatedEx, watchEffect } = Mixins;

const { Fixed, Auto } = FlexLayout;

const {
  _util: { extend },
} = Util;

// 单独模式
export const NUMBER_GENERATOR_RULE_ALONE = Symbol();
// 连续模式
export const NUMBER_GENERATOR_RULE_CONTINUITY = Symbol();

// 全选的规则 - 标准模式(不能跨页)
export const ROW_SELECTION_NORMAL_MODE = Symbol();
// 全选的规则 - 可以跨页
export const ROW_SELECTION_CONTINUOUS_MODE = Symbol();

const SearchTable: any = extend({
  className: 'SearchTable',
  // @overview
  mixins: [Suspense, updatedEx, watchEffect],
  props: {
    className: {
      type: String,
      default: '',
    },
    wrapStyle: {
      type: String,
      default: '',
    },
    tableClassName: {
      type: String,
      default: '',
    },
    tableStyle: {
      type: String,
      default: '',
    },
    searchClassName: {
      type: String,
      default: '',
    },
    searchStyle: {
      type: String,
      default: '',
    },
    reset: {
      type: Boolean,
      default: true,
    },
    antdTableProps: {
      type: Object as PropType<Table>,
      default: () => ({}),
    },
    // 是否有展开和收缩的功能
    isShowExpandSearch: {
      type: Boolean,
      default: true,
    },
    // 展开和收缩的默认状态
    defaultExpandSearchCollapse: {
      type: Boolean,
      default: true,
    },
    // 撑开search
    fitSearch: {
      type: Boolean,
      default: true,
    },
    // 撑开表格
    fitTable: {
      type: Boolean,
      default: true,
    },
    // 是否是查询固定，表格自适应
    autoFixed: {
      type: Boolean,
      default: true,
    },
    // 锁定列头，表格滚动
    fixedHeaderAutoTable: {
      type: Boolean,
      default: false,
    },
    // 两端固定(表格的头始终在上方，分页始终在下方)
    fixedTableSpaceBetween: {
      type: Boolean,
      default: false,
    },
    // 是否显示列设置
    showColumnSetting: {
      type: Boolean,
      default: false,
    },
  },
  scopedSlots: [
    'searchFormBefore',
    'searchFormAfter',
    'searchForm',
    'tableHeader',
    'tableFooter',
    'tableNumberColumn',
    'columnSetting',
    'tableDensitySetting',
    'searchFooter',
    'table',
    'inner',
    'searchTable',
  ],
  data() {
    return {
      page: 1,
      limit: 10,
      expand: this.defaultExpandSearchCollapse,
      scrollY: 0,
      // 列设置
      columnSetting: [],
      // 表格密度
      // 表格密度设置
      tableDensity: TableDensity.DEFAULT,
      // 列拖动对象
      $columnResizable: new ColumnResizable(),
      // 列属性监控对象
      $columnObserver: null,
    };
  },
  computed: {
    // 自定义表格部分
    components() {
      return {
        header: {
          cell: SearchTableResizableTitle(this.getTableColumns(this.$createElement)),
        },
      };
    },
  },
  provide() {
    return {
      getContext: this.getContext,
    };
  },
  created() {
    this.columnSetting = this.getTableColumns(this.$createElement).map((column, index) => ({
      ...column,
      sort: index,
      display: true,
    }));

    this.tableDensity = this.getTableDensity();
  },
  updatedEx(prevState) {
    if (!this.$refs.tableWrapRef) return;

    this.searchTableResizableEffectLayout();
    this.fixedHeaderAutoTableEffectLayout(prevState);
  },
  watchEffect() {
    this.columnSettingEffect();
  },
  beforeDestroy() {
    const { fixedHeaderAutoTable } = this;

    if (fixedHeaderAutoTable) {
      this.getScrollBodyEl()?.removeEventListener('scroll', this.onScrollBodyScroll);
    }
  },
  methods: {
    /**
     * getContext
     */
    getContext() {
      return this;
    },
    /**
     * searchTableResizableEffectLayout
     * @protected
     */
    searchTableResizableEffectLayout() {
      // 监控header的属性变化(colgroup)
      if (!this.$data.$columnObserver) {
        this.$data.$columnObserver = SearchTableResizableObserver(this);
      }
    },
    /**
     * fixedHeaderAutoTableEffectLayout
     * @param prevState
     * @protected
     */
    fixedHeaderAutoTableEffectLayout(prevState) {
      if (this.fixedHeaderAutoTable) {
        const dataSource = this.getData();

        if (
          dataSource &&
          dataSource.length &&
          ((prevState.scrollY === 0 && this.scrollY === 0) ||
            prevState.scrollY !== this.scrollY ||
            prevState.expand !== this.expand)
        ) {
          const tableWrapRef = this.$refs.tableWrapRef as HTMLElement;

          const scrollBodyEl = this.getScrollBodyEl();
          if (scrollBodyEl) {
            scrollBodyEl.removeEventListener('scroll', this.onScrollBodyScroll);
            scrollBodyEl.addEventListener('scroll', this.onScrollBodyScroll);
          }

          const tableHeaderHeight =
            (tableWrapRef.querySelector('.ant-table-thead') as HTMLElement)?.offsetHeight || 0;

          const tablePaginationHeight =
            (tableWrapRef.querySelector('.ant-table-pagination') as HTMLElement)?.offsetHeight || 0;

          this.scrollY =
            tableWrapRef.clientHeight -
            (tableHeaderHeight + (tablePaginationHeight ? tablePaginationHeight + 16 * 2 : 0));
        }
      }
    },
    /**
     * columnSettingEffect
     * @param props
     * @protected
     */
    columnSettingEffect() {
      const preColumnSetting = this.columnSetting || [];
      const columnSetting = this.getTableColumns(this.$createElement).map((column, index) => ({
        ...column,
        sort: index,
        display: true,
      }));

      // 长度不相等
      if (preColumnSetting?.length !== columnSetting.length) {
        this.columnSetting = columnSetting;

        return;
      }

      const preColumnSettingRowKeys = preColumnSetting?.map?.((t) => t[this.getRowKey()]);
      const columnSettingRowKeys = columnSetting?.map?.((t) => t[this.getRowKey()]);

      // 长度相等但是key有变化
      if (preColumnSettingRowKeys?.toString() !== columnSettingRowKeys.toString()) {
        const rowKey = this.getRowKey() || 'id';

        this.columnSetting = columnSetting?.map((t) => {
          const item = preColumnSetting?.find((item) => item[rowKey] === t[rowKey]);

          return {
            ...t,
            display: item ? item.display : true,
          };
        });
      }
    },

    /**
     * onSearchPanelCollapse
     * @description 查询面板展开之前
     * @protected
     */
    onSearchPanelCollapseBefore() {},
    /**
     * onSearchPanelCollapseAfter
     * @description 查询面板展开之后
     * @protected
     */
    onSearchPanelCollapseAfter() {},

    /**
     * onTableChange
     * @param pagination
     * @param filters
     * @param sorter
     */
    onTableChange(pagination, filters, sorter) {
      this[this.getOrderFieldProp()] = sorter.field || this.getOrderFieldValue();
      this[this.getOrderProp()] = sorter.order || this.getOrderPropValue();

      this.$nextTick(function () {
        const { order } = sorter;

        if (!order) return;

        this.fetchData();

        this.onSubTableChange?.(pagination, filters, sorter);
      });
    },
    /**
     * onClear - 清除操作
     */
    onClear(): Promise<void> {
      return new Promise<void>((resolve) => {
        this.page = 1;
        this.limit = this.getLimit();

        this.$nextTick(function () {
          this.clear().then(() => {
            this.fetchData();

            resolve();
          });
        });
      });
    },
    /**
     * onScrollBodyScroll
     */
    onScrollBodyScroll() {
      const scrollBodyEl = this.getScrollBodyEl();
      const scrollHeaderEl = this.getScrollHeaderEl();

      (scrollHeaderEl as HTMLElement).scrollLeft = scrollBodyEl?.scrollLeft;
    },

    /**
     * sortOrder
     * @param columnName
     */
    sortOrder(columnName: string): string {
      return this[this.getOrderFieldProp()] === columnName ? this[this.getOrderProp()] : '';
    },

    /**
     * getLimit
     * @description limit参数
     */
    getLimit(): number {
      return 10;
    },
    /**
     * getPagination
     */
    getPagination() {
      return {
        onChange: (page, limit) => {
          this.page = page;

          this.limit = limit;

          this.$nextTick(function () {
            this.fetchData();
          });
        },
        onShowSizeChange: (page, limit) => {
          this.page = page;

          this.limit = limit;

          this.$nextTick(function () {
            this.fetchData();
          });
        },
        showTotal: (total) => {
          return Intl.tv(`当前 {page}-{pageSize}/共 {total}条`, {
            page: this.page,
            pageSize: this.limit,
            total,
          });
        },
        total: this.getTotal(),
        current: this.page,
        pageSize: this.limit,
        showQuickJumper: true,
      };
    },
    /**
     * getTableDensity
     * @description 表格密度
     */
    getTableDensity() {
      return TableDensity.DEFAULT;
    },
    /**
     * onTableChange - 表格change
     */
    getTableColumns(h: CreateElement): Array<any> {
      const isShowNumber = this.isShowNumber();
      const getTableNumberColumnWidth = this.getTableNumberColumnWidth();

      // 对权限进行过滤
      const columns = this.getColumns()
        .filter((column) => {
          if ('authorized' in column) {
            return column.authorized();
          }

          return true;
        })
        .map((column, index) => {
          if ('resizable' in column && !!column.resizable) {
            return this.$data.$columnResizable.searchTableResizableColumnItem(this, index, column);
          }

          return column;
        });

      if (isShowNumber) {
        const numberGeneratorRule =
          this.getNumberGeneratorRule() ?? SearchTable.NUMBER_GENERATOR_RULE_ALONE;

        const { page = 0, limit = 10 } = this;

        return [
          {
            ...(this.getTableNumberColumnProps ? this.getTableNumberColumnProps() || {} : {}),
            ...{
              title: Intl.tv('序号'),
              key: '_number',
              align: 'center',
              width: getTableNumberColumnWidth || 80,
              customRender: (text, row, index) => {
                // const numberGeneratorRule =
                //   this.getNumberGeneratorRule() || NUMBER_GENERATOR_RULE_ALONE;
                //
                // const { page = 0, limit = 10 } = this;
                return (
                  <ConditionalRender
                    conditional={numberGeneratorRule === NUMBER_GENERATOR_RULE_ALONE}
                  >
                    <span slot="default">
                      {this.renderTableNumberColumn(h, index + 1, {
                        value: text,
                        record: row,
                        index,
                      })}
                    </span>

                    <span slot="noMatch">
                      {this.renderTableNumberColumn(h, (page - 1) * limit + (index + 1), {
                        value: text,
                        record: row,
                        index,
                      })}
                    </span>
                  </ConditionalRender>
                );
              },
            },
          },
        ].concat(columns);
      }

      return columns;
    },

    getSortColumnSetting() {
      const columns = [...this.columnSetting];

      columns.sort((c1, c2) => {
        if (c1.sort > c2.sort) return 1;
        if (c1.sort < c2.sort) return -1;
        return 0;
      });

      return columns;
    },
    getScrollHeaderEl(): HTMLElement | null {
      const tableWrapRef: HTMLElement = this.$refs.tableWrapRef as HTMLElement;

      return tableWrapRef?.querySelector(
        '.ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-header',
      );
    },
    getScrollBodyEl(): HTMLElement | null {
      const tableWrapRef: HTMLElement = this.$refs.tableWrapRef as HTMLElement;

      return tableWrapRef?.querySelector(
        '.ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-body',
      );
    },

    /**
     * renderTableNumberColumn
     * @description - 渲染序号列
     * @param h
     * @param number
     * @param params
     */
    renderTableNumberColumn(
      h: CreateElement,
      number = '',
      params: { value: any; record: object; index: number },
    ) {
      return (
        this.$scopedSlots?.tableNumberColumn?.({ context: this.getContext(), number }) || (
          <span>{number}</span>
        )
      );
    },
    /**
     * renderColumnSetting
     * @description 创建列设置组件
     */
    renderColumnSetting(h): VNode {
      const columns = [...(this.columnSetting as any[])];

      columns.sort((c1, c2) => {
        if (c1.sort > c2.sort) return 1;
        if (c1.sort < c2.sort) return -1;
        return 0;
      });

      return (
        this.$scopedSlots?.columnSetting?.({ context: this.getContext(), columns }) || (
          // @ts-ignore
          <ColumnSetting
            columns={columns}
            onShowColumns={(checked) => {
              this.columnSetting = (this.columnSetting || [])?.map((column) => ({
                ...column,
                display: checked,
              }));

              // this.setState(({ columnSetting }) => ({
              //   columnSetting: (columnSetting || [])?.map((column) => ({
              //     ...column,
              //     display: checked,
              //   })),
              // }));
            }}
            onReset={() => {
              this.columnSetting = this.getTableColumns(h).map((column, index) => ({
                ...column,
                display: true,
                sort: index,
              }));

              // this.setState(() => ({
              //   columnSetting: this.getTableColumns().map((column, index) => ({
              //     ...column,
              //     display: true,
              //     sort: index,
              //   })),
              // }));
            }}
            onDisplayColumn={(column, checked) => {
              this.columnSetting = (this.columnSetting || [])?.map((_column) => ({
                ..._column,
                display: _column.key === column.key ? checked : _column.display,
              }));

              // this.setState(({ columnSetting }) => ({
              //   columnSetting: (columnSetting || [])?.map((_column) => ({
              //     ..._column,
              //     display: _column.key === column.key ? checked : _column.display,
              //   })),
              // }));
            }}
            onSortEnd={(map) => {
              this.columnSetting = (this.columnSetting || [])?.map((column) => ({
                ...column,
                sort: map.get(column.key),
              }));

              // this.setState(({ columnSetting }) => ({
              //   columnSetting: (columnSetting || [])?.map((column) => ({
              //     ...column,
              //     sort: map.get(column.key),
              //   })),
              // }));
            }}
          />
        )
      );
    },
    /**
     * renderTableDensitySetting
     * @description 表格密度设置
     */
    renderTableDensitySetting(): VNode {
      return (
        this.$scopedSlots?.tableDensitySetting?.(this) || (
          // @ts-ignore
          <TableDensitySetting
            density={this.tableDensity}
            onChange={(density) => {
              this.tableDensity = density;
              // this.setState({
              //   tableDensity: density,
              // });
            }}
            onReset={() => {
              this.tableDensity = this.getTableDensity();

              // this.setState({
              //   tableDensity: this.getTableDensity(),
              // });
            }}
          />
        )
      );
    },
    /**
     * renderSearchFooter
     * @param h
     */
    renderSearchFooter(h: CreateElement) {
      const { isShowExpandSearch } = this;

      const defaultItems = [
        <Button
          // @ts-ignore
          class={`${selectorPrefix}-searchfooteritem`}
          type="primary"
          key="search"
          onClick={() => {
            this.page = 1;

            this.$nextTick(function () {
              this.onSearch();
            });
          }}
        >
          <i
            class={classNames(
              `${selectorPrefix}-searchfooteritem-search-btn-icon`,
              'iconfont iconsousuo',
            )}
          />
          {Intl.tv('查询')}
        </Button>,
        <Button
          // @ts-ignore
          class={`${selectorPrefix}-searchfooteritem`}
          key="reset"
          onClick={this.onClear}
        >
          {Intl.tv('重置')}
        </Button>,
      ];

      if (isShowExpandSearch) {
        defaultItems.push(
          <ConditionalRender conditional={this.expand}>
            <a
              slot="noMatch"
              key="expand"
              class={`${selectorPrefix}-searchfooteritem-expand-search-up-btn`}
              // style="display: flex; align-items: center"
              onClick={() => {
                // this.expand = true;
                this.onSearchPanelCollapseBefore && this.onSearchPanelCollapseBefore();

                this.expand = true;

                this.$nextTick(function () {
                  this.onSearchPanelCollapseAfter && this.onSearchPanelCollapseAfter();
                });
              }}
            >
              <span>{Intl.tv('展开')}</span>
              <i className="iconfont iconup" />
              {/*<img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMjYyMTM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MjQ0IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOTkuMzYgNTcyLjc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDIyLjYyNC05LjM3NmwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OEw1MzguNzUyIDIwMS4zNzZhMzIgMzIgMCAwIDAtNDUuMjggMEwxNzYuNzA0IDUxOC4xNDRhMzEuOTY4IDMxLjk2OCAwIDAgMCAyMi42NTYgNTQuNjI0eiBtMzM5LjQyNC0xMTUuMzkyYTMyIDMyIDAgMCAwLTQ1LjI4IDBMMTc2LjczNiA3NzQuMTQ0YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4IDQ1LjI0OGwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OGwtMzA4LjMyLTMwOC4zNTJ6IiBwLWlkPSIxNTI0NSIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjwvc3ZnPg=="
                alt="up"
              />*/}

              {/*<span style="margin-right: 5px;">{Intl.tv('展开')}</span>
              <img
                style="width: 16px;"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMjYyMTM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MjQ0IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOTkuMzYgNTcyLjc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDIyLjYyNC05LjM3NmwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OEw1MzguNzUyIDIwMS4zNzZhMzIgMzIgMCAwIDAtNDUuMjggMEwxNzYuNzA0IDUxOC4xNDRhMzEuOTY4IDMxLjk2OCAwIDAgMCAyMi42NTYgNTQuNjI0eiBtMzM5LjQyNC0xMTUuMzkyYTMyIDMyIDAgMCAwLTQ1LjI4IDBMMTc2LjczNiA3NzQuMTQ0YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4IDQ1LjI0OGwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OGwtMzA4LjMyLTMwOC4zNTJ6IiBwLWlkPSIxNTI0NSIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjwvc3ZnPg=="
                alt="up"
              />*/}
            </a>

            <a
              key="hide"
              class={`${selectorPrefix}-searchfooteritem-expand-search-down-btn`}
              // style="display: flex; align-items: center"
              onClick={() => {
                // this.expand = false;
                this.onSearchPanelCollapseBefore && this.onSearchPanelCollapseBefore();

                this.expand = false;

                this.$nextTick(function () {
                  this.onSearchPanelCollapseAfter && this.onSearchPanelCollapseAfter();
                });
              }}
            >
              <span>{Intl.tv('关闭')}</span>
              <i className="iconfont icondownarrow" />
              {/*<img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMTc4MzI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0ODY3IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00OTMuNTA0IDU1OC4xNDRhMzEuOTA0IDMxLjkwNCAwIDAgMCA0NS4yOCAwbDMwOC4zNTItMzA4LjM1MmEzMS45NjggMzEuOTY4IDAgMSAwLTQ1LjI0OC00NS4yNDhMNTE2LjE2IDQ5MC4yNzIgMjIxLjk4NCAxOTYuMTI4YTMxLjk2OCAzMS45NjggMCAxIDAtNDUuMjQ4IDQ1LjI0OGwzMTYuNzY4IDMxNi43Njh6IiBwLWlkPSIxNDg2OCIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04MDEuODg4IDQ2MC41NzZMNTE2LjE2IDc0Ni4zMDQgMjIyLjAxNiA0NTIuMTZhMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDggNDUuMjQ4bDMxNi43NjggMzE2Ljc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDQ1LjI4IDBsMzA4LjM1Mi0zMDguMzUyYTMyIDMyIDAgMSAwLTQ1LjI4LTQ1LjI0OHoiIHAtaWQ9IjE0ODY5IiBmaWxsPSIjMTg5MGZmIj48L3BhdGg+PC9zdmc+"
                alt="down"
              />*/}

              {/*<span style="margin-right: 5px;">{Intl.tv('关闭')}</span>
              <img
                style="width: 16px;"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMTc4MzI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0ODY3IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00OTMuNTA0IDU1OC4xNDRhMzEuOTA0IDMxLjkwNCAwIDAgMCA0NS4yOCAwbDMwOC4zNTItMzA4LjM1MmEzMS45NjggMzEuOTY4IDAgMSAwLTQ1LjI0OC00NS4yNDhMNTE2LjE2IDQ5MC4yNzIgMjIxLjk4NCAxOTYuMTI4YTMxLjk2OCAzMS45NjggMCAxIDAtNDUuMjQ4IDQ1LjI0OGwzMTYuNzY4IDMxNi43Njh6IiBwLWlkPSIxNDg2OCIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04MDEuODg4IDQ2MC41NzZMNTE2LjE2IDc0Ni4zMDQgMjIyLjAxNiA0NTIuMTZhMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDggNDUuMjQ4bDMxNi43NjggMzE2Ljc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDQ1LjI4IDBsMzA4LjM1Mi0zMDguMzUyYTMyIDMyIDAgMSAwLTQ1LjI4LTQ1LjI0OHoiIHAtaWQ9IjE0ODY5IiBmaWxsPSIjMTg5MGZmIj48L3BhdGg+PC9zdmc+"
                alt="down"
              />*/}
            </a>
          </ConditionalRender>,
        );
      }

      // 返回的是VNodes数组
      const items = this.renderSearchFooterItems(h, defaultItems) || [...defaultItems];

      return (
        <div class={`${selectorPrefix}-searchfooterwrapper`}>
          {this.$scopedSlots?.searchFooter?.({ context: this.getContext(), items }) ||
            items.map((t, index) => (
              <div key={index} class={`${selectorPrefix}-searchfooteritem`}>
                {t}
              </div>
            ))}
        </div>
      );
    },
    /**
     * renderTable
     * @description - 认选表格体
     * @protected
     */
    renderTable(h: CreateElement) {
      if (this.$scopedSlots?.table) {
        return this.$scopedSlots?.table?.(this);
      }

      const { antdTableProps, fixedHeaderAutoTable } = this;

      // 作用域插槽
      const scopedSlots = {
        ...(this.getScopedSlots(h) || {}),
      };

      const tablePropsAttr = {};
      const tableOnAttr = {};

      const mergeProps = antdTableProps || {};

      for (const p in mergeProps) {
        if (p.startsWith('on')) {
          tableOnAttr[p.substring(2).toLowerCase()] = mergeProps[p];
        } else {
          tablePropsAttr[p] = mergeProps[p];
        }
      }

      const { columnSetting = [], tableDensity } = this;

      const columns = this.getTableColumns(h)
        .map((column, index) => ({
          ...columnSetting[index],
          ...column,
        }))
        .filter((column) => column.display);

      columns.sort((c1, c2) => {
        if (c1.sort > c2.sort) return 1;
        if (c1.sort < c2.sort) return -1;
        return 0;
      });

      // Table的antdProps配置
      const tableProps = {
        scopedSlots,
        props: {
          rowKey: this.getRowKey(),
          dataSource: this.getData(),
          columns,
          size: tableDensity,
          pagination: this.getPagination(),
          rowSelection: this.getRowSelection(),
          components: this.components,
          ...(tablePropsAttr || {}),
        },
        on: {
          change: this.onTableChange,
          ...(tableOnAttr || {}),
        },
      };

      // 是否支持锁定列头，表格体滚动
      if (fixedHeaderAutoTable) {
        const { scrollY } = this;

        if (tablePropsAttr) {
          // @ts-ignore
          if (tablePropsAttr.scroll) {
            // @ts-ignore
            tableProps.props.scroll.y = scrollY;
          } else {
            // @ts-ignore
            tableProps.props.scroll = { y: scrollY };
          }
        } else {
          // @ts-ignore
          tableProps.props.scroll = { y: scrollY };
        }
      }

      return <Table {...tableProps} />;
    },
    /**
     * renderInner
     * @param h
     */
    renderInner(h: CreateElement) {
      if (this.$scopedSlots?.inner) {
        return this.$scopedSlots?.inner?.(this);
      }

      const {
        className,
        wrapStyle,
        tableClassName,
        tableStyle,
        searchStyle,
        searchClassName,
        fitSearch,
        fitTable,
        autoFixed,
        fixedTableSpaceBetween,
      } = this;

      return (
        <FlexLayout
          direction="vertical"
          style={wrapStyle || ''}
          class={classNames(
            selectorPrefix,
            fixedTableSpaceBetween ? 'fixedtablespacebetween' : '',
            className || '',
          )}
        >
          <Fixed
            class={classNames(`${selectorPrefix}-searchwrapper`, searchClassName || '')}
            style={searchStyle || ''}
            fit={fitSearch}
          >
            <FlexLayout direction="vertical">
              <ConditionalRender
                conditional={this.$scopedSlots.searchFormBefore || !!this.renderSearchFormBefore}
              >
                <Fixed slot="default">
                  {this.$scopedSlots?.searchFormBefore?.(this) || this.renderSearchFormBefore(h)}
                </Fixed>
              </ConditionalRender>

              <Fixed>
                <ConditionalRender conditional={this.expand}>
                  {this.$scopedSlots?.searchForm?.(this) || this.renderSearchForm(h)}
                </ConditionalRender>
              </Fixed>

              <Fixed>{this.renderSearchFooter(h)}</Fixed>

              <ConditionalRender
                conditional={this.$scopedSlots.searchFormAfter || !!this.renderSearchFormAfter}
              >
                <Fixed slot="default">
                  {this.$scopedSlots?.searchFormAfter?.(this) || this.renderSearchFormAfter(h)}
                </Fixed>
              </ConditionalRender>
            </FlexLayout>
          </Fixed>

          <ConditionalRender
            conditional={!!this.$scopedSlots.tableHeader || !!this.renderTableHeader}
          >
            <Fixed slot="default">
              {this.$scopedSlots?.tableHeader?.(this) || this.renderTableHeader(h)}
            </Fixed>
          </ConditionalRender>

          <Auto
            class={classNames(
              `${selectorPrefix}-autowrapper`,
              tableClassName || '',
              autoFixed ? 'autofixed' : '',
            )}
            style={tableStyle || ''}
            fit={fitTable}
            autoFixed={autoFixed}
          >
            <div ref="tableWrapRef" class={`${selectorPrefix}-tablewrapper`}>
              {this.renderTable(h)}
            </div>
          </Auto>

          <ConditionalRender
            conditional={!!this.$scopedSlots.tableFooter || !!this.renderTableFooter}
          >
            <Fixed slot="default">
              {this.$scopedSlots?.tableFooter?.(this) || this.renderTableFooter(h)}
            </Fixed>
          </ConditionalRender>
        </FlexLayout>
      );
    },
    /**
     * renderSearchTable
     * @description - renderSearchTable
     * @param h
     */
    renderSearchTable(h) {
      return (
        this.$scopedSlots?.searchTable?.(this) || (
          <div class={`${selectorPrefix}-wrap`}>{this.$renderSuspense(h)}</div>
        )
      );
    },
  },
  render(h) {
    return this.renderSearchTable(h);
  },
});

export default SearchTable;
