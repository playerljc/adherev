import { Button, Table } from 'ant-design-vue';
import { TableProps } from 'ant-design-vue/lib/table/Table';
import classNames from 'classnames';
import { PropType, VNode, defineComponent } from 'vue';

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

export default defineComponent(
  extend({
    className: 'SearchTable',
    // @overview
    mixins: [Suspense, updatedEx],
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
        type: Object as PropType<TableProps>,
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
    slots: [
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
    created() {
      this.columnSetting = this.getTableColumns().map((column, index) => ({
        ...column,
        sort: index,
        display: true,
      }));

      this.tableDensity = this.getTableDensity();
    },
    updatedEx(prevState: { scrollY: number; expand: boolean }) {
      const { $refs } = this;

      if (!$refs.tableWrapRef) return;

      this.searchTableResizableEffectLayout();
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
        const { $refs, scrollY, expand, fixedHeaderAutoTable } = this;

        if (fixedHeaderAutoTable) {
          const dataSource = this.getData();

          if (
            dataSource &&
            dataSource.length &&
            ((prevState.scrollY === 0 && scrollY === 0) ||
              prevState.scrollY !== scrollY ||
              prevState.expand !== expand)
          ) {
            const tableWrapRef = $refs.tableWrapRef as HTMLElement;

            const scrollBodyEl = this.getScrollBodyEl();
            if (scrollBodyEl) {
              scrollBodyEl.removeEventListener('scroll', this.onScrollBodyScroll);
              scrollBodyEl.addEventListener('scroll', this.onScrollBodyScroll);
            }

            const tableHeaderHeight =
              (tableWrapRef.querySelector('.ant-table-thead') as HTMLElement)?.offsetHeight || 0;

            const tablePaginationHeight =
              (tableWrapRef.querySelector('.ant-table-pagination') as HTMLElement)?.offsetHeight ||
              0;

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
      onTableChange(pagination: any, filters: any, sorter: { field?: any; order: any }) {
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
       * getPagination - 获取分页信息
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
        // const { /*getNumberGeneratorRule, */ getColumns } = this;

        const isShowNumber = this.isShowNumber();

        const getTableNumberColumnWidth = this.getTableNumberColumnWidth();

        const _columns = this.getColumns();

        // 对权限进行过滤
        const columns = _columns
          .filter((column) => {
            if ('authorized' in column) {
              return column.authorized();
            }

            return true;
          })
          .map((column, index) => {
            if ('resize' in column && !!column.resize) {
              return this.$data.$columnResizable.searchTableResizableColumnItem(
                this,
                index,
                column,
              );
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

      getScopedSlotsInner(row) {
        const { record, index, column } = row;

        if (column.key === '_number') {
          const { getNumberGeneratorRule } = this;

          const numberGeneratorRule = getNumberGeneratorRule() || NUMBER_GENERATOR_RULE_ALONE;

          const { page, limit } = this;

          return (
            // @ts-ignore
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

        return this.getScopedSlots(row);
      },
      /**
       * getSearchTablePagination
       */
      getSearchTablePagination() {
        return {
          onChange: (page: number, limit: number) => {
            this.page = page;

            this.limit = limit;

            this.fetchData();
          },
          onShowSizeChange: (page: number, limit: number) => {
            this.page = page;

            this.limit = limit;

            this.fetchData();
          },
          showTotal: (total: any) => {
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
       * renderTableNumberColumn
       * @description - 渲染序号列
       * @param number
       * @param params
       */
      renderTableNumberColumn(number = '', params: { record: object; index: number }) {
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
      renderColumnSetting(): VNode {
        const columns = [...(this.columnSetting as any[])];

        columns.sort((c1, c2) => {
          if (c1.sort > c2.sort) return 1;
          if (c1.sort < c2.sort) return -1;
          return 0;
        });

        return (
          this.$scopedSlots?.columnSetting?.({ context: this.getContext(), columns }) || (
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
                this.columnSetting = this.getTableColumns().map((column, index) => ({
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
            <TableDensitySetting
              density={this.tableDensity}
              onChange={(density) => (this.tableDensity = density)}
              onReset={() => (this.tableDensity = this.getTableDensity())}
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
            // @ts-ignore
            <ConditionalRender conditional={this.expand}>
              {{
                default: () => (
                  <a
                    key="hide"
                    class={`${selectorPrefix}-searchfooteritem-expand-search-down-btn`}
                    // @ts-ignore
                    onClick={() => (this.expand = false)}
                  >
                    <span>{Intl.tv('关闭')}</span>
                    <i class="iconfont icondownarrow" />
                  </a>
                ),
                noMatch: () => (
                  <a
                    key="expand"
                    class={`${selectorPrefix}-searchfooteritem-expand-search-up-btn`}
                    // @ts-ignore
                    onClick={() => (this.expand = true)}
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
            {this.$slots?.searchFooter?.({ context: this.getContext(), items }) ||
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
          return this.$slots?.table?.(this.getContext());
        }

        const {
          getScopedSlotsInner,
          antdTableProps,
          fixedHeaderAutoTable,
          getRowKey,
          getData,
          getRowSelection,
        } = this;

        const tablePropsAttr: any = {};
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

        const columns = this.getTableColumns()
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

        const tableProps = {
          rowKey: getRowKey(),
          dataSource: getData(),
          columns,
          size: this.tableDensity,
          pagination: this.getPagination(),
          rowSelection: getRowSelection(),
          components: this.components,
          ...(tablePropsAttr || {}),
          onChange: this.onTableChange,
          ...(tableOnAttr || {}),
        };

        // 是否支持锁定列头，表格体滚动
        if (fixedHeaderAutoTable) {
          const { scrollY } = this;

          if (tablePropsAttr) {
            if (tablePropsAttr.scroll) {
              tableProps.scroll.y = scrollY;
            } else {
              tableProps.scroll = { y: scrollY };
            }
          } else {
            tableProps.scroll = { y: scrollY };
          }
        }

        return (
          <Table
            {...tableProps}
            v-slots={{
              bodyCell: (row) => getScopedSlotsInner(row),
            }}
          />
        );
      },
      /**
       * renderInner
       */
      renderInner() {
        if (this.$slots?.inner) {
          return this.$slots?.inner?.(this.getContext());
        }

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
          $slots,
        } = this;

        return (
          // @ts-ignore
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
              {/*@ts-ignore*/}
              <FlexLayout direction="vertical">
                {/*@ts-ignore*/}
                <ConditionalRender
                  conditional={$slots.searchFormBefore || !!this.renderSearchFormBefore}
                >
                  {{
                    default: () => (
                      <Fixed>
                        {$slots?.searchFormBefore?.(this.getContext()) ||
                          this.renderSearchFormBefore()}
                      </Fixed>
                    ),
                  }}
                </ConditionalRender>

                <Fixed>
                  {/*@ts-ignore**/}
                  <ConditionalRender conditional={this.expand}>
                    {$slots?.searchForm?.(this.getContext()) || this.renderSearchForm()}
                  </ConditionalRender>
                </Fixed>

                <Fixed>{this.renderSearchFooter()}</Fixed>

                {/*@ts-ignore**/}
                <ConditionalRender
                  conditional={$slots.searchFormAfter || !!this.renderSearchFormAfter}
                >
                  {{
                    default: () => (
                      <Fixed>
                        {$slots?.searchFormAfter?.(this.getContext()) ||
                          this.renderSearchFormAfter()}
                      </Fixed>
                    ),
                  }}
                </ConditionalRender>
              </FlexLayout>
            </Fixed>

            {/*@ts-ignore*/}
            <ConditionalRender conditional={!!$slots.tableHeader || !!this.renderTableHeader}>
              {{
                default: () => (
                  <Fixed>{$slots.tableHeader(this.getContext()) || this.renderTableHeader()}</Fixed>
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

            {/*@ts-ignore*/}
            <ConditionalRender conditional={!!$slots.tableFooter || !!this.renderTableFooter}>
              {{
                default: () => (
                  <Fixed>{$slots.tableFooter(this.getContext()) || this.renderTableFooter()}</Fixed>
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
          this.$slots?.searchTable?.(this.getContext()) || (
            <div class={`${selectorPrefix}-wrap`}>{this.$renderSuspense()}</div>
          )
        );
      },
    },
    render() {
      return this.renderSearchTable();
    },
  }),
);
