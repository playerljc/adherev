import { Button, Table } from 'ant-design-vue';
import { TableProps } from 'ant-design-vue/es/table';
import classNames from 'classnames';
import cloneDeep from 'lodash.clonedeep';
import { CSSProperties, VNode } from 'vue';
import { bool, object, string } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import Suspense from '@baifendian/adherev-ui-suspense';
import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Mixins from '@baifendian/adherev-util-mixins';

import ColumnSetting from './Extension/ColumnSetting';
import TableBody from './Extension/TableComponents/TableBody';
import TableCell from './Extension/TableComponents/TableCell';
import TableRow from './Extension/TableComponents/TableRow';
import TableDensitySetting from './Extension/TableDensitySetting';
import {
  BodyConfig,
  BodyConfigReducer,
  CellConfigReducer,
  ColumnTypeExt,
  RowConfig,
  RowConfigReducer,
  TableDensity,
} from './types';

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
  mixins: [Suspense, updatedEx, watchEffect],
  props: {
    className: string().def(''),
    wrapStyle: object<CSSProperties>().def({}),
    tableClassName: string().def(''),
    tableStyle: object<CSSProperties>().def({}),
    searchClassName: string().def(''),
    searchStyle: object<CSSProperties>().def({}),
    reset: bool().def(true),
    antdTableProps: object<TableProps>().def({}),
    // 是否有展开和收缩的功能
    isShowExpandSearch: bool().def(true),
    // 展开和收缩的默认状态
    defaultExpandSearchCollapse: bool().def(true),
    // 撑开search
    fitSearch: bool().def(true),
    // 撑开表格
    fitTable: bool().def(true),
    // 是否是查询固定，表格自适应
    autoFixed: bool().def(true),
    // 锁定列头，表格滚动
    fixedHeaderAutoTable: bool().def(false),
    // 两端固定(表格的头始终在上方，分页始终在下方)
    fixedTableSpaceBetween: bool().def(false),
    // 是否显示列设置
    showColumnSetting: bool().def(false),
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
  data(): {
    page: number;
    limit: number;
    expand: boolean;
    scrollY: number;
    columnSetting: any[];
    tableDensity: TableDensity;
    // $columnResizable: ColumnResizable;
    $columnObserver: any;
    $bodyConfigReducers: BodyConfigReducer[];
    $rowConfigReducers: RowConfigReducer[];
    $cellConfigReducers: CellConfigReducer[];
    $tableBodyComponentReducers: string[];
    $tableRowComponentReducers: string[];
    $tableCellComponentReducers: string[];
  } {
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
      // $columnResizable: new ColumnResizable(),
      // 列属性监控对象
      $columnObserver: null,
      // bodyConfigReducers
      // 给TableBody传递props的reducer
      $bodyConfigReducers: [],
      // rowConfigReducers
      // 给TableRow传递props的reducer
      $rowConfigReducers: [],
      // cellConfigReducers
      // 给TableCell传递props的reducer
      $cellConfigReducers: [],
      // tableBodyComponentReducers
      // 处理TableBody的reducer
      $tableBodyComponentReducers: [],
      // tableRowComponentReducers
      // 处理TableRow的reducer
      $tableRowComponentReducers: [],
      // tableCellComponentReducers
      // 处理TableCell的reducer
      $tableCellComponentReducers: [],
    };
  },
  computed: {
    // 自定义表格部分
    components() {
      return {
        body: {
          wrapper: TableBody,
          row: TableRow,
          cell: TableCell,
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
    const columns = this.getColumns();
    this.$data.$tableBodyComponentReducers = this.onTableBodyComponentReducers?.(columns) || [];
    this.$data.$tableRowComponentReducers = this.onTableRowComponentReducers?.(columns) || [];
    this.$data.$tableCellComponentReducers = this.onTableCellComponentReducers?.(columns) || [];

    this.columnSetting = this.getTableColumns().map((column, index) => ({
      ...column,
      sort: index,
      display: true,
    }));

    this.tableDensity = this.getTableDensity();
  },
  updatedEx(prevState) {
    if (!this.$refs.tableWrapRef) return;

    // this.searchTableResizableEffectLayout();
    this.fixedHeaderAutoTableEffectLayout(prevState);
  },
  watchEffect() {
    this.columnSettingEffect();
  },
  beforeUnmount() {
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
      return {
        context: this,
      };
    },
    // /**
    //  * searchTableResizableEffectLayout
    //  * @protected
    //  */
    // searchTableResizableEffectLayout() {
    //   // 监控header的属性变化(colgroup)
    //   if (!this.$data.$columnObserver) {
    //     this.$data.$columnObserver = SearchTableResizableObserver(this);
    //   }
    // },
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
     * @protected
     */
    columnSettingEffect() {
      const preColumnSetting = this.columnSetting || [];
      const columnSetting = this.getTableColumns().map((column, index) => ({
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
      this[this.getOrderProp()] = sorter.order /*|| this.getOrderPropValue()*/;

      this.$nextTick(function () {
        const { order } = sorter;

        if (!order) return;

        this.fetchData();

        this.onSubTableChange?.(pagination, filters, sorter);
      });
    },
    /**
     * onResizeColumn
     * @description 列拖动的时候触发
     * @param w
     * @param col
     */
    onResizeColumn(w, col) {
      this.columnSetting = [...this.columnSetting].map((t) => {
        if (col.dataIndex === t.dataIndex) {
          t.width = w;
        } else {
          if ('children' in t && Array.isArray(t.children) && t.children.length) {
            const loop = (children) => {
              for (let i = 0; i < children.length; i++) {
                if (children[i].dataIndex === col.dataIndex) {
                  children[i].width = w;
                  break;
                }

                loop(children[i].children || []);
              }
            };

            loop(t.children);
          }
        }

        return t;
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
     * onCellConfigReducers
     * @description 所有onCell的处理
     * @return ColumnTypeExt
     */
    onCellConfigReducers(params: {
      rowIndex: number;
      column: ColumnTypeExt;
      record: { [prop: string]: any };
      columns: ColumnTypeExt[];
    }): ColumnTypeExt {
      const { rowIndex, column, record, columns } = params;

      return this.$data.$cellConfigReducers.reduce(
        (params, reducer) => {
          params.value = reducer.call(this, { rowIndex, record, columns, column: params.value });
          return params;
        },
        { value: column },
      ).value;
    },
    /**
     * onRowConfigReducers
     * @description 所有row的处理
     * @param params
     */
    onRowConfigReducers(params: {
      rowIndex: number;
      record: { [prop: string]: any };
      columns: ColumnTypeExt[];
    }): RowConfig {
      const { rowIndex, record, columns } = params;

      return this.$data.$rowConfigReducers.reduce(
        (params, reducer) => {
          params.value = reducer.call(this, { rowIndex, record, columns, rowConfig: params.value });
          return params;
        },
        { value: {} },
      ).value;
    },
    /**
     * onBodyConfigReducers
     * @description 所有body的处理
     */
    onBodyConfigReducers(): BodyConfig {
      return this.$data.$bodyConfigReducers.reduce(
        (params, reducer) => {
          params.value = reducer.call(this, params.value);
          return params;
        },
        { value: {} },
      ).value;
    },
    /**
     * onBody
     */
    onBody() {
      return {
        columns: this.getColumns(),
        bodyConfig: this.onBodyConfigReducers(),
      };
    },
    /**
     * onRow
     * @description 自定义bodyRow传递props参数
     * @param primaryValue
     */
    onRow(primaryValue) {
      // customRow: (record, rowIndex) => {
      //   // 这块可能以后会有很多操作
      //   // 行的所有操作都可以在这里处理
      //   return {
      //     props: {
      //       record,
      //       rowIndex,
      //       columns,
      //       rowKey: this.getRowKey(),
      //       rowConfig: this.onRowConfigReducers({
      //         rowIndex: Number(rowIndex),
      //         record,
      //         columns,
      //       }),
      //     },
      //   };
      // },

      const dataSource = this.getData();
      if (!dataSource) return;

      const rowIndex = dataSource.findIndex((t) => t[this.getRowKey()] === primaryValue);

      if (rowIndex === -1) return;

      const record = dataSource[rowIndex];

      const columns = this.getColumns();

      return {
        record,
        rowIndex,
        columns,
        rowKey: this.getRowKey(),
        rowConfig: this.onRowConfigReducers({
          rowIndex: Number(rowIndex),
          record,
          columns,
        }),
      };
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
    getTableColumns(): Array<any> {
      const isShowNumber = this.isShowNumber();
      const getTableNumberColumnWidth = this.getTableNumberColumnWidth();

      // 对权限进行过滤
      const columns = this.getColumns()
        .filter((column: ColumnTypeExt) => {
          if ('$hide' in column && !column.$hide) return false;

          if ('$authorized' in column) return column?.$authorized?.();

          return true;
        })
        .map((column: ColumnTypeExt) => {
          return {
            ...column,
            // 每个单元格都会调用
            // 给TableCell传递的props参数
            customCell: (record, rowIndex) => {
              const _column = cloneDeep(column);

              return {
                // 行的索引
                rowIndex,
                // 行的数据
                record,
                // 列的配置
                column: this.onCellConfigReducers({
                  rowIndex,
                  column: _column,
                  record,
                  columns,
                }),
                // 所有列的配置
                columns,
              };
            },
          };
        });

      if (isShowNumber) {
        // const numberGeneratorRule =
        //   this.getNumberGeneratorRule() || SearchTable.NUMBER_GENERATOR_RULE_ALONE;

        // const { page = 0, limit = 10 } = this;

        return [
          {
            ...(this.getTableNumberColumnProps ? this.getTableNumberColumnProps() || {} : {}),
            ...{
              title: Intl.tv('序号'),
              key: '_number',
              dataIndex: '_number',
              align: 'center',
              width: getTableNumberColumnWidth || 80,
              // customRender: (text, row, index) => {
              //   return (
              //     <ConditionalRender
              //       conditional={numberGeneratorRule === NUMBER_GENERATOR_RULE_ALONE}
              //     >
              //       {{
              //         default: () =>
              //           this.renderTableNumberColumn(h, index + 1, {
              //             value: text,
              //             record: row,
              //             index,
              //           }),
              //         noMatch: () =>
              //           this.renderTableNumberColumn(h, (page - 1) * limit + (index + 1), {
              //             value: text,
              //             record: row,
              //             index,
              //           }),
              //       }}
              //     </ConditionalRender>
              //   );
              // },
            },
          },
          ...columns,
        ];
      }

      return columns;
    },
    /**
     * getTableBodyComponentReducers
     */
    getTableBodyComponentReducers() {
      return this.$data.$tableBodyComponentReducers;
    },
    /**
     * getTableRowComponentReducers
     */
    getTableRowComponentReducers() {
      return this.$data.$tableRowComponentReducers;
    },
    /**
     * getColumnByDataIndex
     * @description 通过dataIndex寻找column
     * @param dataIndex
     */
    getColumnByDataIndex(dataIndex) {
      const columns = this.getTableColumns();

      function loop(_columns) {
        let column;

        for (let i = 0; i < _columns.length; i++) {
          const item = _columns[i];

          if (item.dataIndex === dataIndex) {
            column = item;
            break;
          }

          column = loop(item.children || []);
          if (column) break;
        }

        return column;
      }

      return loop(columns);
    },
    /**
     * getTableCellComponentReducers
     */
    getTableCellComponentReducers() {
      return this.$data.$tableCellComponentReducers;
    },
    /**
     * getSortColumnSetting
     */
    getSortColumnSetting() {
      const columns = [...this.columnSetting];

      columns.sort((c1, c2) => {
        if (c1.sort > c2.sort) return 1;
        if (c1.sort < c2.sort) return -1;
        return 0;
      });

      return columns;
    },
    /**
     * getScrollHeaderEl
     */
    getScrollHeaderEl(): HTMLElement | null {
      const tableWrapRef: HTMLElement = this.$refs.tableWrapRef as HTMLElement;

      return tableWrapRef?.querySelector(
        '.ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-header',
      );
    },
    /**
     * getScrollBodyEl
     */
    getScrollBodyEl(): HTMLElement | null {
      const tableWrapRef: HTMLElement = this.$refs.tableWrapRef as HTMLElement;

      return tableWrapRef?.querySelector(
        '.ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-body',
      );
    },
    /**
     * getBodyCellScopedSlotsInner
     * @param row
     */
    getBodyCellScopedSlotsInner(row) {
      const { record, index, column } = row;

      if (column.dataIndex === '_number') {
        const { getNumberGeneratorRule } = this;

        const numberGeneratorRule = getNumberGeneratorRule() || NUMBER_GENERATOR_RULE_ALONE;

        const { page, limit } = this;

        return (
          <ConditionalRender conditional={numberGeneratorRule === NUMBER_GENERATOR_RULE_ALONE}>
            {{
              default: () => (
                <span>{this.renderTableNumberColumn(index + 1, { record: row, index })}</span>
              ),
              noMatch: () => (
                <span>
                  {this.renderTableNumberColumn((page - 1) * limit + (index + 1), {
                    record,
                    index,
                  })}
                </span>
              ),
            }}
          </ConditionalRender>
        );
      }

      return this?.getBodyCellScopedSlots?.(row);
    },
    /**
     * receiveDataMutation
     * @description 使用新的dataSource更新数据流
     * @param dataSource
     */
    receiveDataMutation(dataSource) {
      const serviceName = this.getServiceName();
      const fetchListPropName = this.getFetchListPropName();
      const data = this[`${serviceName}${this.getFetchListPropNameToFirstUpper()}`];

      this[`${serviceName}ReceiveMutation`]({
        key: fetchListPropName,
        value: {
          ...data,
          [this.getDataKey()]: dataSource,
        },
      });
    },
    /**
     * renderTableNumberColumn
     * @description - 渲染序号列
     * @param number
     * @param params
     */
    renderTableNumberColumn(number = '', params: { value: any; record: object; index: number }) {
      return (
        this.$slots?.tableNumberColumn?.({
          context: this.getContext?.()?.context,
          number,
        }) || <span>{number}</span>
      );
    },
    /**
     * renderColumnSetting
     * @description 创建列设置组件
     */
    renderColumnSetting(): VNode {
      const columns = [...(this.columnSetting as any[])];

      columns.sort((c1, c2) => {
        if (c1.sort > c2.sort) return 1;
        if (c1.sort < c2.sort) return -1;
        return 0;
      });

      return (
        this.$slots?.columnSetting?.({ context: this.getContext?.()?.context, columns }) || (
          <ColumnSetting
            // columns={columns}
            // onShowColumns={(checked) => {
            //   this.columnSetting = (this.columnSetting || [])?.map((column) => ({
            //     ...column,
            //     display: checked,
            //   }));
            // }}
            // onReset={() => {
            //   this.columnSetting = this.getTableColumns().map((column, index) => ({
            //     ...column,
            //     display: true,
            //     sort: index,
            //   }));
            // }}
            // onDisplayColumn={({ column, checked }) => {
            //   this.columnSetting = (this.columnSetting || [])?.map((_column) => ({
            //     ..._column,
            //     display: _column.key === column.key ? checked : _column.display,
            //   }));
            // }}
            // onSortEnd={(map) => {
            //   this.columnSetting = (this.columnSetting || [])?.map((column) => ({
            //     ...column,
            //     sort: map.get(column.key),
            //   }));
            // }}
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
        this.$slots?.tableDensitySetting?.(this) || (
          <TableDensitySetting
            // density={this.tableDensity}
            // onChange={(density) => {
            //   this.tableDensity = density;
            // }}
            // onReset={() => {
            //   this.tableDensity = this.getTableDensity();
            // }}
          />
        )
      );
    },
    /**
     * renderSearchFooter
     */
    renderSearchFooter() {
      const { isShowExpandSearch } = this;

      const defaultItems = [
        <Button
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
        <Button class={`${selectorPrefix}-searchfooteritem`} key="reset" onClick={this.onClear}>
          {Intl.tv('重置')}
        </Button>,
      ];

      if (isShowExpandSearch) {
        defaultItems.push(
          <ConditionalRender conditional={this.expand}>
            {{
              default: () => (
                <a
                  key="hide"
                  class={`${selectorPrefix}-searchfooteritem-expand-search-down-btn`}
                  onClick={() => {
                    this.onSearchPanelCollapseBefore && this.onSearchPanelCollapseBefore();

                    this.expand = false;

                    this.$nextTick(function () {
                      this.onSearchPanelCollapseAfter && this.onSearchPanelCollapseAfter();
                    });
                  }}
                >
                  <span>{Intl.tv('关闭')}</span>
                  <i class="iconfont icondownarrow" />
                </a>
              ),
              noMatch: () => (
                <a
                  key="expand"
                  class={`${selectorPrefix}-searchfooteritem-expand-search-up-btn`}
                  onClick={() => {
                    this.onSearchPanelCollapseBefore && this.onSearchPanelCollapseBefore();

                    this.expand = true;

                    this.$nextTick(function () {
                      this.onSearchPanelCollapseAfter && this.onSearchPanelCollapseAfter();
                    });
                  }}
                >
                  <span>{Intl.tv('展开')}</span>
                  <i class="iconfont iconup" />
                </a>
              ),
            }}
          </ConditionalRender>,
        );
      }

      // 返回的是VNodes数组
      const items = this.renderSearchFooterItems(defaultItems) || [...defaultItems];

      return (
        <div class={`${selectorPrefix}-searchfooterwrapper`}>
          {this.$slots?.searchFooter?.({ context: this.getContext?.()?.context, items }) ||
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
    renderTable() {
      if (this.$slots?.table) {
        return this.$slots?.table?.(this);
      }

      const { antdTableProps, fixedHeaderAutoTable } = this;

      // 作用域插槽
      // const scopedSlots = {
      //   ...(this?.getScopedSlots?.() || {}),
      // };

      const tablePropsAttr: TableProps = {};
      const tableOnAttr: TableProps = {};

      const mergeProps = antdTableProps || {};

      for (const p in mergeProps) {
        if (p.startsWith('on')) {
          tableOnAttr[p.substring(2).toLowerCase()] = mergeProps[p];
        } else {
          tablePropsAttr[p] = mergeProps[p];
        }
      }

      const { columnSetting = [], tableDensity } = this;

      const columns = this.getTableColumns()
        .map((column, index) => ({
          ...column,
          ...columnSetting[index],
        }))
        .filter((column) => column.display);

      columns.sort((c1, c2) => {
        if (c1.sort > c2.sort) return 1;
        if (c1.sort < c2.sort) return -1;
        return 0;
      });

      // Table的antdProps配置
      const tableProps: TableProps = {
        // @ts-ignore
        ref: 'antdTableRef',
        rowKey: this.getRowKey(),
        dataSource: this.getData(),
        columns,
        size: tableDensity,
        pagination: this.getPagination(),
        rowSelection: this.getRowSelection(),
        components: this.components,
        change: this.onTableChange,
        onResizeColumn: this.onResizeColumn,
        // @ts-ignore
        customRow: (record, rowIndex, column) => ({
          record,
          rowIndex,
          column,
        }),
        ...(tablePropsAttr || {}),
        ...(tableOnAttr || {}),
      };

      // 是否支持锁定列头，表格体滚动
      if (fixedHeaderAutoTable) {
        const { scrollY } = this;

        if (tablePropsAttr) {
          if (tablePropsAttr.scroll) {
            tableProps!.scroll!.y = scrollY;
          } else {
            if (scrollY !== 0) {
              tableProps.scroll = { y: scrollY };
            }
          }
        } else {
          if (scrollY !== 0) {
            tableProps.scroll = { y: scrollY };
          }
        }
      }

      return (
        <Table
          v-slots={{
            bodyCell: (row) => this.getBodyCellScopedSlotsInner(row),
            customFilterDropdown: (...params) => this?.getCustomFilterDropdown?.(...params),
            customFilterIcon: (...params) => this?.getCustomFilterIcon?.(...params),
          }}
          {...tableProps}
        />
      );
    },
    /**
     * renderInner
     */
    renderInner() {
      if (this.$slots?.inner) {
        return this.$slots?.inner?.(this);
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
                conditional={this.$slots.searchFormBefore || !!this.renderSearchFormBefore}
              >
                {{
                  default: () => (
                    <Fixed>
                      {this.$slots?.searchFormBefore?.(this) || this.renderSearchFormBefore()}
                    </Fixed>
                  ),
                }}
              </ConditionalRender>

              <Fixed>
                <ConditionalRender conditional={this.expand}>
                  {{
                    default: () => this.$slots?.searchForm?.(this) || this.renderSearchForm(),
                  }}
                </ConditionalRender>
              </Fixed>

              <Fixed>{this.renderSearchFooter()}</Fixed>

              <ConditionalRender
                conditional={this.$slots.searchFormAfter || !!this.renderSearchFormAfter}
              >
                {{
                  default: () => (
                    <Fixed>
                      {this.$slots?.searchFormAfter?.(this) || this.renderSearchFormAfter()}
                    </Fixed>
                  ),
                }}
              </ConditionalRender>
            </FlexLayout>
          </Fixed>

          <ConditionalRender conditional={!!this.$slots.tableHeader || !!this.renderTableHeader}>
            {{
              default: () => (
                <Fixed>{this.$slots?.tableHeader?.(this) || this.renderTableHeader()}</Fixed>
              ),
            }}
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
              {this.renderTable()}
            </div>
          </Auto>

          <ConditionalRender conditional={!!this.$slots.tableFooter || !!this.renderTableFooter}>
            {{
              default: () => (
                <Fixed>{this.$slots?.tableFooter?.(this) || this.renderTableFooter()}</Fixed>
              ),
            }}
          </ConditionalRender>
        </FlexLayout>
      );
    },
    /**
     * renderSearchTable
     * @description - renderSearchTable
     */
    renderSearchTable() {
      return (
        this.$slots?.searchTable?.(this) || (
          <div class={`${selectorPrefix}-wrap`}>{this.$renderSuspense()}</div>
        )
      );
    },
  },
  render() {
    return this.renderSearchTable();
  },
});

export default SearchTable;
