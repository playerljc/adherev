import { CreateElement } from 'vue';
import { Table, Button } from 'ant-design-vue';
import classNames from 'classnames';

import Suspense from '@baifendian/adherev-ui-suspense';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import Intl from '@baifendian/adherev-util-intl';

const selectorPrefix = 'adherev-ui-searchtable';

// 单独模式
export const NUMBER_GENERATOR_RULE_ALONE = Symbol();
// 连续模式
export const NUMBER_GENERATOR_RULE_CONTINUITY = Symbol();

export default {
  // @overview
  mixins: [Suspense],
  props: {
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
    tableProps: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      page: 1,
      limit: 10,
      expand: true,
    };
  },
  methods: {
    /**
     * renderTableNumberColumn
     * @description - 渲染序号列
     * @param number
     */
    renderTableNumberColumn(h: CreateElement, number: string = '') {
      return <span>{number}</span>;
    },
    /**
     * renderInner
     * @param h
     */
    renderInner(h: CreateElement) {
      const { className, tableClassName, tableStyle, searchStyle, searchClassName } = this;

      // 作用域插槽
      const scopedSlots = {
        ...(this.getScopedSlots(h) || {}),
      };

      return (
        <FlexLayout
          direction="vertical"
          className={classNames(selectorPrefix, ...(className || '').split(' '))}
        >
          <FlexLayout.Fixed
            className={classNames(
              `${selectorPrefix}-SearchWrapper`,
              ...(searchClassName || '').split(' '),
            )}
            style={searchStyle}
          >
            <FlexLayout>
              <FlexLayout.Fixed>
                <ConditionalRender conditional={this.expand}>
                  {this.renderSearchForm(h)}
                </ConditionalRender>
              </FlexLayout.Fixed>

              <FlexLayout.Fixed>{this.renderSearchFooter(h)}</FlexLayout.Fixed>
            </FlexLayout>
          </FlexLayout.Fixed>

          <FlexLayout.Auto
            className={classNames(
              `${selectorPrefix}-TableWrapper`,
              ...(tableClassName || '').split(' '),
            )}
            style={tableStyle}
          >
            <Table
              rowKey={this.getRowKey()}
              dataSource={this.getData()}
              columns={this.getTableColumns(h)}
              onChange={this.onTableChange}
              pagination={this.getPagination()}
              rowSelection={this.getRowSelection()}
              scopedSlots={scopedSlots}
              props={{ ...this.tableProps }}
            />
          </FlexLayout.Auto>
        </FlexLayout>
      );
    },
    /**
     * renderSearchFooter
     * @param h
     */
    renderSearchFooter(h: CreateElement) {
      const defaultItems = [
        <Button
          class={`${selectorPrefix}-SearchFooterItem`}
          type="primary"
          onClick={() => {
            this.page = 1;

            this.onSearch();
          }}
        >
          <i class="iconfont iconsousuo" />
          {Intl.tv('查询')}
        </Button>,
        <Button class={`${selectorPrefix}-SearchFooterItem`} onClick={this.onClear}>
          {Intl.tv('重置')}
        </Button>,
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
      ];

      // 返回的是VNodes数组
      const items = this.renderSearchFooterItems(h, defaultItems) || [...defaultItems];

      return (
        <div class={`${selectorPrefix}-SearchFooterWrapper`}>
          {items.map((t) => (
            <div class={`${selectorPrefix}-SearchFooterItem`}>{t}</div>
          ))}
        </div>
      );
    },
    /**
     * onTableChange - 表格change
     */
    getTableColumns(h: CreateElement): Array<any> {
      const isShowNumber = this.isShowNumber();

      const getTableNumberColumnWidth = this.getTableNumberColumnWidth();

      if (isShowNumber) {
        return [
          {
            title: Intl.tv('序号'),
            // dataIndex: 'number',
            key: 'number',
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
                  {/* @ts-ignore */}
                  <span>{this.renderTableNumberColumn(h, index + 1)}</span>
                  {/* @ts-ignore */}
                  <span slot="noMatch">
                    {this.renderTableNumberColumn(h, (page - 1) * limit + (index + 1))}
                  </span>
                </ConditionalRender>
              );
            },
          },
        ].concat(this.getColumns());
      }

      return this.getColumns();
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

      this.onSubTableChange(pagination, filters, sorter);
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
     * getPagination - 获取分页信息
     */
    getPagination() {
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
  },
};
