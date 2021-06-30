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
              <FlexLayout.Fixed>{this.renderSearchForm(h)}</FlexLayout.Fixed>

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
              console.log('number scopeSlot');
              const numberGeneratorRule =
                this.getNumberGeneratorRule() || NUMBER_GENERATOR_RULE_ALONE;

              const { page, limit } = this;

              return (
                <ConditionalRender
                  conditional={numberGeneratorRule === NUMBER_GENERATOR_RULE_ALONE}
                >
                  {/* @ts-ignore */}
                  <span>{index + 1}</span>
                  {/* @ts-ignore */}
                  <span slot="noMatch">{(page - 1) * limit + (index + 1)}</span>
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
          return Intl.tv(
            `当前 {page}-{pageSize}/共 {total}条`,
            {
              page: this.page,
              pageSize: this.limit,
              total,
            },
          );
        },
        total: this.getTotal(),
        current: this.page,
        pageSize: this.limit,
        showQuickJumper: true,
      };
    },
  },
};
