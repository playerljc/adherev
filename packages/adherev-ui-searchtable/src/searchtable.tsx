import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import Suspense from '@baifendian/adherev-ui-suspense';
import Intl from '@baifendian/adherev-util-intl';
import Mixins from '@baifendian/adherev-util-mixins';
import { Button, Table } from 'ant-design-vue';
import classNames from 'classnames';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { defineComponent } from 'vue';
import { ISearchTableData, ISearchTableSelf } from './types';

const selectorPrefix = 'adherev-ui-searchtable';

const { updatedEx } = Mixins;

const { Fixed, Auto } = FlexLayout;

// 单独模式
export const NUMBER_GENERATOR_RULE_ALONE = Symbol();
// 连续模式
export const NUMBER_GENERATOR_RULE_CONTINUITY = Symbol();

export default defineComponent({
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
  },
  data(): ISearchTableData {
    return {
      page: 1,
      limit: 10,
      expand: this.defaultExpandSearchCollapse,
      scrollY: 0,
    };
  },
  updatedEx(prevState: { scrollY: number; expand: boolean }) {
    const { $refs, scrollY, expand, fixedHeaderAutoTable } = this as unknown as ISearchTableSelf;

    if (!$refs.tableWrapRef) return;

    if (fixedHeaderAutoTable) {
      // @ts-ignore
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
          (tableWrapRef.querySelector('.ant-table-pagination') as HTMLElement)?.offsetHeight || 0;

        this.scrollY =
          tableWrapRef.clientHeight -
          (tableHeaderHeight + (tablePaginationHeight ? tablePaginationHeight + 16 * 2 : 0));
      }
    }
  },
  beforeUnmount() {
    const { fixedHeaderAutoTable } = this;

    if (fixedHeaderAutoTable) {
      this.getScrollBodyEl()?.removeEventListener('scroll', this.onScrollBodyScroll);
    }
  },
  methods: {
    onScrollBodyScroll() {
      const scrollBodyEl = this.getScrollBodyEl();
      const scrollHeaderEl = this.getScrollHeaderEl();

      // @ts-ignore
      (scrollHeaderEl as HTMLElement)?.scrollLeft = scrollBodyEl?.scrollLeft;
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
    renderTableNumberColumn(number = '', params: { record: object; index: number }) {
      return <span>{number}</span>;
    },
    renderSearchTableInner() {
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
      } = this as unknown as ISearchTableSelf;

      return (
        // @ts-ignore
        <FlexLayout
          direction="vertical"
          style={wrapStyle || ''}
          class={classNames(
            selectorPrefix,
            fixedTableSpaceBetween ? 'fixedtablespacebetween' : '',
            ...(className || '').split(/\s+/),
          )}
        >
          <Fixed
            style={searchStyle || ''}
            class={classNames(
              `${selectorPrefix}-searchwrapper`,
              ...(searchClassName || '').split(/\s+/),
            )}
            fit={fitSearch}
          >
            {/*@ts-ignore*/}
            <FlexLayout direction="vertical">
              <Fixed>
                {/*@ts-ignore**/}
                <ConditionalRender conditional={this.expand}>
                  {
                    // @ts-ignore
                    this.renderSearchForm()
                  }
                </ConditionalRender>
              </Fixed>

              <Fixed>{this.renderSearchFooter()}</Fixed>
            </FlexLayout>
          </Fixed>

          {/*@ts-ignore*/}
          <ConditionalRender conditional={!!$slots.tableHeader}>
            <Fixed>{$slots.tableHeader()}</Fixed>
          </ConditionalRender>

          <Auto
            style={tableStyle || ''}
            class={classNames(
              `${selectorPrefix}-autowrapper`,
              ...(tableClassName || '').split(/\s+/),
              autoFixed ? 'autofixed' : '',
            )}
            fit={fitTable}
            autoFixed={autoFixed}
          >
            <div
              ref="tableWrapRef"
              // @ts-ignore
              class={`${selectorPrefix}-tablewrapper`}
            >
              {this.renderTable()}
            </div>
          </Auto>

          {/*@ts-ignore*/}
          <ConditionalRender conditional={!!$slots.tableFooter}>
            <Fixed>{$slots.tableFooter()}</Fixed>
          </ConditionalRender>
        </FlexLayout>
      );
    },
    /**
     * renderInner
     */
    renderInner() {
      return this.renderSearchTableInner();
    },
    renderSearchTableSearchFooter() {
      const { isShowExpandSearch } = this as unknown as ISearchTableSelf;

      const defaultItems = [
        // @ts-ignore
        <Button
          class={`${selectorPrefix}-searchfooteritem`}
          type="primary"
          onClick={() => {
            this.page = 1;
            // @ts-ignore
            this.onSearch();
          }}
        >
          <i
            // @ts-ignore
            class="iconfont iconsousuo"
          />
          {Intl.tv('查询')}
        </Button>,
        // @ts-ignore
        <Button class={`${selectorPrefix}-searchfooteritem`} onClick={this.onClear}>
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
                  // @ts-ignore
                  style="display: flex; align-items: center"
                  onClick={() => {
                    this.expand = false;
                  }}
                >
                  <span
                    // @ts-ignore
                    style="margin-right: 5px;"
                  >
                    {Intl.tv('关闭')}
                  </span>
                  <img
                    // @ts-ignore
                    style="width: 16px;"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMTc4MzI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0ODY3IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00OTMuNTA0IDU1OC4xNDRhMzEuOTA0IDMxLjkwNCAwIDAgMCA0NS4yOCAwbDMwOC4zNTItMzA4LjM1MmEzMS45NjggMzEuOTY4IDAgMSAwLTQ1LjI0OC00NS4yNDhMNTE2LjE2IDQ5MC4yNzIgMjIxLjk4NCAxOTYuMTI4YTMxLjk2OCAzMS45NjggMCAxIDAtNDUuMjQ4IDQ1LjI0OGwzMTYuNzY4IDMxNi43Njh6IiBwLWlkPSIxNDg2OCIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04MDEuODg4IDQ2MC41NzZMNTE2LjE2IDc0Ni4zMDQgMjIyLjAxNiA0NTIuMTZhMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDggNDUuMjQ4bDMxNi43NjggMzE2Ljc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDQ1LjI4IDBsMzA4LjM1Mi0zMDguMzUyYTMyIDMyIDAgMSAwLTQ1LjI4LTQ1LjI0OHoiIHAtaWQ9IjE0ODY5IiBmaWxsPSIjMTg5MGZmIj48L3BhdGg+PC9zdmc+"
                    alt="down"
                  />
                </a>
              ),
              noMatch: () => (
                <a
                  // @ts-ignore
                  style="display: flex; align-items: center"
                  onClick={() => {
                    this.expand = true;
                  }}
                >
                  <span
                    // @ts-ignore
                    style="margin-right: 5px;"
                  >
                    {Intl.tv('展开')}
                  </span>
                  <img
                    // @ts-ignore
                    style="width: 16px;"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMjYyMTM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MjQ0IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOTkuMzYgNTcyLjc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDIyLjYyNC05LjM3NmwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OEw1MzguNzUyIDIwMS4zNzZhMzIgMzIgMCAwIDAtNDUuMjggMEwxNzYuNzA0IDUxOC4xNDRhMzEuOTY4IDMxLjk2OCAwIDAgMCAyMi42NTYgNTQuNjI0eiBtMzM5LjQyNC0xMTUuMzkyYTMyIDMyIDAgMCAwLTQ1LjI4IDBMMTc2LjczNiA3NzQuMTQ0YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4IDQ1LjI0OGwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OGwtMzA4LjMyLTMwOC4zNTJ6IiBwLWlkPSIxNTI0NSIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjwvc3ZnPg=="
                    alt="up"
                  />
                </a>
              ),
            }}
          </ConditionalRender>,
        );
      }

      // 返回的是VNodes数组
      // @ts-ignore
      const items = this.renderSearchFooterItems(defaultItems) || [...defaultItems];

      return (
        <div
          // @ts-ignore
          class={`${selectorPrefix}-searchfooterwrapper`}
        >
          {items.map((t: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined) => (
            <div
              // @ts-ignore
              class={`${selectorPrefix}-searchfooteritem`}
            >
              {t}
            </div>
          ))}
        </div>
      );
    },
    /**
     * renderSearchFooter
     */
    renderSearchFooter() {
      return this.renderSearchTableSearchFooter();
    },
    renderSearchTableTable() {
      const {
        getScopedSlotsInner,
        antdTableProps,
        fixedHeaderAutoTable,
        getRowKey,
        getData,
        getRowSelection,
      } = this;

      // 作用域插槽
      // const scopedSlots = {
      //   // @ts-ignore
      //   ...(getScopedSlots() || {}),
      // };

      const tablePropsAttr: any = {};
      const tableOnAttr = {};

      const mergeProps = antdTableProps || {};

      for (const p in mergeProps) {
        if (p.startsWith('on')) {
          // @ts-ignore
          tableOnAttr[p.substring(2).toLowerCase()] = mergeProps[p];
        } else {
          tablePropsAttr[p] = mergeProps[p];
        }
      }

      // Table的antdProps配置
      // const tableProps = {
      //   scopedSlots,
      //   props: {
      //     // @ts-ignore
      //     rowKey: getRowKey(),
      //     // @ts-ignore
      //     dataSource: getData(),
      //     columns: this.getTableColumns(),
      //     pagination: this.getPagination(),
      //     // @ts-ignore
      //     rowSelection: getRowSelection(),
      //     ...(tablePropsAttr || {}),
      //   },
      //   on: {
      //     change: this.onTableChange,
      //     ...(tableOnAttr || {}),
      //   },
      // };

      const tableProps = {
        // @ts-ignore
        rowKey: getRowKey(),
        // @ts-ignore
        dataSource: getData(),
        columns: this.getTableColumns(),
        pagination: this.getPagination(),
        // @ts-ignore
        rowSelection: getRowSelection(),
        ...(tablePropsAttr || {}),
        onChange: this.onTableChange,
        ...(tableOnAttr || {}),
      };

      // 是否支持锁定列头，表格体滚动
      if (fixedHeaderAutoTable) {
        const { scrollY } = this;

        // if (tablePropsAttr) {
        //   if (tablePropsAttr.scroll) {
        //     tableProps.props.scroll.y = scrollY;
        //   } else {
        //     tableProps.props.scroll = { y: scrollY };
        //   }
        // } else {
        //   tableProps.props.scroll = { y: scrollY };
        // }

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
        // @ts-ignore
        <Table
          {...tableProps}
          v-slots={{
            // @ts-ignore
            bodyCell: (row) => getScopedSlotsInner(row),
          }}
        />
      );
    },
    /**
     * renderTable
     * @description - 认选表格体
     * @protected
     */
    renderTable() {
      return this.renderSearchTableTable();
    },
    getScopedSlotsInner(row) {
      const { record, index, column } = row;

      if (column.key === 'number') {
        const { getNumberGeneratorRule } = this;

        // @ts-ignore
        const numberGeneratorRule = getNumberGeneratorRule() || NUMBER_GENERATOR_RULE_ALONE;

        const { page, limit } = this;

        return (
          // @ts-ignore
          <ConditionalRender conditional={numberGeneratorRule === NUMBER_GENERATOR_RULE_ALONE}>
            {{
              default: () => (
                // @ts-ignore
                <span>{this.renderTableNumberColumn(index + 1, { record: row, index })}</span>
              ),
              noMatch: () => (
                <span>
                  {
                    // @ts-ignore
                    this.renderTableNumberColumn((page - 1) * limit + (index + 1), {
                      record,
                      index,
                    })
                  }
                </span>
              ),
            }}
          </ConditionalRender>
        );
      }

      return this.getScopedSlots(row);
    },
    getSearchTableTableColumns(): Array<any> {
      const { /*getNumberGeneratorRule, */ getColumns } = this;

      // @ts-ignore
      const isShowNumber = this.isShowNumber();

      // @ts-ignore
      const getTableNumberColumnWidth = this.getTableNumberColumnWidth();

      // 对权限进行过滤
      // @ts-ignore
      const columns = getColumns().filter((column) => {
        if ('authorized' in column) {
          return column.authorized();
        }

        return true;
      });

      if (isShowNumber) {
        return [
          {
            title: Intl.tv('序号'),
            // dataIndex: 'number',
            key: 'number',
            align: 'center',
            width: getTableNumberColumnWidth || 80,
          },
        ].concat(columns);
      }

      return columns;
    },
    /**
     * onTableChange - 表格change
     */
    getTableColumns(): Array<any> {
      return this.getSearchTableTableColumns();
    },
    /**
     * onTableChange
     * @param pagination
     * @param filters
     * @param sorter
     */
    onTableChange(pagination: any, filters: any, sorter: { field?: any; order: any }) {
      // console.log('onTableChange', pagination, filters, sorter);

      // @ts-ignore
      this[this.getOrderFieldProp()] = sorter.field;

      // @ts-ignore
      this[this.getOrderProp()] = sorter.order;

      const { order } = sorter;

      if (!order) return;

      // @ts-ignore
      this.fetchData();

      // @ts-ignore
      this.onSubTableChange?.(pagination, filters, sorter);
    },
    /**
     * onClear - 清除操作
     */
    onClear() {
      this.page = 1;

      this.limit = 10;

      // @ts-ignore
      this.clear().then(() => {
        // @ts-ignore
        this.fetchData();
      });
    },
    /**
     * sortOrder
     * @param columnName
     */
    sortOrder(columnName: string): string {
      // @ts-ignore
      return this[this.getOrderFieldProp()] === columnName ? this[this.getOrderProp()] : '';
    },
    /**
     * getSearchTablePagination
     */
    getSearchTablePagination() {
      return {
        onChange: (page: number, limit: number) => {
          this.page = page;

          this.limit = limit;

          // @ts-ignore
          this.fetchData();
        },
        onShowSizeChange: (page: number, limit: number) => {
          this.page = page;

          this.limit = limit;

          // @ts-ignore
          this.fetchData();
        },
        showTotal: (total: any) => {
          // @ts-ignore
          return Intl.tv(`当前 {page}-{pageSize}/共 {total}条`, {
            page: this.page,
            pageSize: this.limit,
            total,
          });
        },
        // @ts-ignore
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
     */
    renderSearchTable() {
      return (
        <div
          // @ts-ignore
          class={`${selectorPrefix}-wrap`}
        >
          {
            // @ts-ignore
            this.renderSuspense()
          }
        </div>
      );
    },
  },
  render() {
    return this.renderSearchTable();
  },
});
