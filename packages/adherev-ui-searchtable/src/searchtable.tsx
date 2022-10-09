import { Button, Table } from 'ant-design-vue';
import classNames from 'classnames';
import Vue, { CreateElement, PropType, VNode } from 'vue';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import Suspense from '@baifendian/adherev-ui-suspense';
import Intl from '@baifendian/adherev-util-intl';
import Mixins from '@baifendian/adherev-util-mixins';

import ColumnResizable, {
  SearchTableResizableObserver,
  SearchTableResizableTitle,
} from './Extension/ColumnResizable';
import { TableDensity } from './types';

export const selectorPrefix = 'adherev-ui-searchtable';

const { updatedEx } = Mixins;

const { Fixed, Auto } = FlexLayout;

// 单独模式
export const NUMBER_GENERATOR_RULE_ALONE = Symbol();
// 连续模式
export const NUMBER_GENERATOR_RULE_CONTINUITY = Symbol();

// 全选的规则 - 标准模式(不能跨页)
export const ROW_SELECTION_NORMAL_MODE = Symbol();
// 全选的规则 - 可以跨页
export const ROW_SELECTION_CONTINUOUS_MODE = Symbol();

const SearchTable: any = Vue.extend({
  // @overview
  mixins: [Suspense, updatedEx],
  props: {
    wrapStyle: {
      type: String,
      default: '',
    },
    className: {
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
      type: Object,
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
    renderTableHeader: {
      type: Object as PropType<VNode>,
      default: () => null,
    },
    renderTableFooter: {
      type: Object as PropType<VNode>,
      default: () => null,
    },
  },
  // @ts-ignore
  slots: ['tableHeader', 'tableFooter'],
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
          cell: SearchTableResizableTitle(this.getSearchTableTableColumns()),
        },
      };
    },
  },
  provide() {
    return {
      getContext: this.getContext,
    };
  },
  // @ts-ignore
  updatedEx(prevState) {
    if (!this.$refs.tableWrapRef) return;

    // 监控header的属性变化(colgroup)
    if (!this.$data.$columnObserver) {
      this.$data.$columnObserver = SearchTableResizableObserver(this);
    }

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
  beforeDestroy() {
    const { fixedHeaderAutoTable } = this;

    if (fixedHeaderAutoTable) {
      this.getScrollBodyEl()?.removeEventListener('scroll', this.onScrollBodyScroll);
    }
  },
  created() {
    this.columnSetting = this.getTableColumns().map((column, index) => ({
      ...column,
      sort: index,
      display: true,
    }));

    this.tableDensity = this.getTableDensity();
  },
  methods: {
    getContext() {
      return this;
    },
    getTableDensity() {
      return TableDensity.DEFAULT;
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
    onScrollBodyScroll() {
      const scrollBodyEl = this.getScrollBodyEl();
      const scrollHeaderEl = this.getScrollHeaderEl();

      (scrollHeaderEl as HTMLElement).scrollLeft = scrollBodyEl?.scrollLeft;
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
      return <span>{number}</span>;
    },
    renderSearchTableInner(h: CreateElement) {
      const {
        wrapStyle,
        className,
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
            style={searchStyle || ''}
            class={classNames(`${selectorPrefix}-searchwrapper`, searchClassName || '')}
            fit={fitSearch}
          >
            <FlexLayout direction="vertical">
              <Fixed>
                <ConditionalRender conditional={this.expand}>
                  {this.renderSearchForm(h)}
                </ConditionalRender>
              </Fixed>

              <Fixed>{this.renderSearchFooter(h)}</Fixed>
            </FlexLayout>
          </Fixed>

          <ConditionalRender conditional={!!this.$slots.tableHeader || !!this.renderTableHeader}>
            <Fixed>{this.$slots.tableHeader || this.renderTableHeader}</Fixed>
          </ConditionalRender>

          <Auto
            style={tableStyle || ''}
            class={classNames(
              `${selectorPrefix}-autowrapper`,
              tableClassName || '',
              autoFixed ? 'autofixed' : '',
            )}
            fit={fitTable}
            autoFixed={autoFixed}
          >
            <div ref="tableWrapRef" class={`${selectorPrefix}-tablewrapper`}>
              {this.renderTable(h)}
            </div>
          </Auto>

          <ConditionalRender conditional={!!this.$slots.tableFooter || !!this.renderTableFooter}>
            <Fixed>{this.$slots.tableFooter || this.renderTableFooter}</Fixed>
          </ConditionalRender>
        </FlexLayout>
      );
    },
    /**
     * renderInner
     * @param h
     */
    renderInner(h: CreateElement) {
      return this.renderSearchTableInner(h);
    },
    renderSearchTableSearchFooter(h: CreateElement) {
      const { isShowExpandSearch } = this;

      const defaultItems = [
        <Button
          // @ts-ignore
          class={`${selectorPrefix}-searchfooteritem`}
          type="primary"
          onClick={() => {
            this.page = 1;

            this.onSearch();
          }}
        >
          <i class="iconfont iconsousuo" />
          {Intl.tv('查询')}
        </Button>,
        <Button
          // @ts-ignore
          class={`${selectorPrefix}-searchfooteritem`}
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
              style="display: flex; align-items: center"
              onClick={() => {
                this.expand = true;
              }}
            >
              <span style="margin-right: 5px;">{Intl.tv('展开')}</span>
              <img
                style="width: 16px;"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMjYyMTM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MjQ0IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOTkuMzYgNTcyLjc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDIyLjYyNC05LjM3NmwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OEw1MzguNzUyIDIwMS4zNzZhMzIgMzIgMCAwIDAtNDUuMjggMEwxNzYuNzA0IDUxOC4xNDRhMzEuOTY4IDMxLjk2OCAwIDAgMCAyMi42NTYgNTQuNjI0eiBtMzM5LjQyNC0xMTUuMzkyYTMyIDMyIDAgMCAwLTQ1LjI4IDBMMTc2LjczNiA3NzQuMTQ0YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4IDQ1LjI0OGwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OGwtMzA4LjMyLTMwOC4zNTJ6IiBwLWlkPSIxNTI0NSIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjwvc3ZnPg=="
                alt="up"
              />
            </a>

            <a
              style="display: flex; align-items: center"
              onClick={() => {
                this.expand = false;
              }}
            >
              <span style="margin-right: 5px;">{Intl.tv('关闭')}</span>
              <img
                style="width: 16px;"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMTc4MzI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0ODY3IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00OTMuNTA0IDU1OC4xNDRhMzEuOTA0IDMxLjkwNCAwIDAgMCA0NS4yOCAwbDMwOC4zNTItMzA4LjM1MmEzMS45NjggMzEuOTY4IDAgMSAwLTQ1LjI0OC00NS4yNDhMNTE2LjE2IDQ5MC4yNzIgMjIxLjk4NCAxOTYuMTI4YTMxLjk2OCAzMS45NjggMCAxIDAtNDUuMjQ4IDQ1LjI0OGwzMTYuNzY4IDMxNi43Njh6IiBwLWlkPSIxNDg2OCIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04MDEuODg4IDQ2MC41NzZMNTE2LjE2IDc0Ni4zMDQgMjIyLjAxNiA0NTIuMTZhMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDggNDUuMjQ4bDMxNi43NjggMzE2Ljc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDQ1LjI4IDBsMzA4LjM1Mi0zMDguMzUyYTMyIDMyIDAgMSAwLTQ1LjI4LTQ1LjI0OHoiIHAtaWQ9IjE0ODY5IiBmaWxsPSIjMTg5MGZmIj48L3BhdGg+PC9zdmc+"
                alt="down"
              />
            </a>
          </ConditionalRender>,
        );
      }

      // 返回的是VNodes数组
      const items = this.renderSearchFooterItems(h, defaultItems) || [...defaultItems];

      return (
        <div class={`${selectorPrefix}-searchfooterwrapper`}>
          {items.map((t) => (
            <div class={`${selectorPrefix}-searchfooteritem`}>{t}</div>
          ))}
        </div>
      );
    },
    /**
     * renderSearchFooter
     * @param h
     */
    renderSearchFooter(h: CreateElement) {
      return this.renderSearchTableSearchFooter(h);
    },
    renderSearchTableTable(h: CreateElement) {
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

      const { columnSetting } = this;

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
          size: this.tableDensity,
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
     * renderTable
     * @description - 认选表格体
     * @protected
     */
    renderTable(h: CreateElement) {
      return this.renderSearchTableTable(h);
    },
    getSearchTableTableColumns(h: CreateElement): Array<any> {
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
        return [
          {
            title: Intl.tv('序号'),
            // dataIndex: 'number',
            key: '_number',
            align: 'center',
            width: getTableNumberColumnWidth || 80,
            customRender: (text, row, index) => {
              const numberGeneratorRule =
                this.getNumberGeneratorRule() || NUMBER_GENERATOR_RULE_ALONE;

              const { page, limit } = this;

              return (
                <ConditionalRender
                  conditional={numberGeneratorRule === NUMBER_GENERATOR_RULE_ALONE}
                >
                  <span>
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
        ].concat(columns);
      }

      return columns;
    },
    /**
     * onTableChange - 表格change
     */
    getTableColumns(h: CreateElement): Array<any> {
      return this.getSearchTableTableColumns(h);
    },
    /**
     * onTableChange
     * @param pagination
     * @param filters
     * @param sorter
     */
    onTableChange(pagination, filters, sorter) {
      this[this.getOrderFieldProp()] = sorter.field;

      this[this.getOrderProp()] = sorter.order;

      const { order } = sorter;

      if (!order) return;

      this.fetchData();

      this.onSubTableChange?.(pagination, filters, sorter);
    },
    /**
     * onClear - 清除操作
     */
    onClear() {
      this.page = 1;

      this.limit = 10;

      this.clear().then(() => {
        this.fetchData();
      });
    },
    /**
     * sortOrder
     * @param columnName
     */
    sortOrder(columnName: string): string {
      return this[this.getOrderFieldProp()] === columnName ? this[this.getOrderProp()] : '';
    },
    /**
     * getSearchTablePagination
     */
    getSearchTablePagination() {
      return {
        onChange: (page, limit) => {
          this.page = page;

          this.limit = limit;

          this.fetchData();
        },
        onShowSizeChange: (page, limit) => {
          this.page = page;

          this.limit = limit;

          this.fetchData();
        },
        showTotal: (total) => {
          // @ts-ignore
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
     * getPagination - 获取分页信息
     */
    getPagination() {
      return this.getSearchTablePagination();
    },
    /**
     * renderSearchTable
     * @description - renderSearchTable
     * @param h
     */
    renderSearchTable(h) {
      return <div class={`${selectorPrefix}-wrap`}>{this.renderSuspense(h)}</div>;
    },
  },
  render(h) {
    return this.renderSearchTable(h);
  },
});

export default SearchTable;
