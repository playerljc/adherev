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
      // @ts-ignore
      const { className, tableClassName, tableStyle, searchStyle, searchClassName } = this;

      // 作用域插槽
      const scopedSlots = {
        // @ts-ignore
        ...(this.getScopedSlots(h) || {}),
      };

      return (
        // @ts-ignore
        <FlexLayout
          direction="vertical"
          className={classNames(selectorPrefix, ...(className || '').split(' '))}
        >
          {/*@ts-ignore*/}
          <FlexLayout.Fixed
            className={classNames(
              `${selectorPrefix}-SearchWrapper`,
              ...(searchClassName || '').split(' '),
            )}
            style={searchStyle}
          >
            {/*@ts-ignore*/}
            <FlexLayout>
              {/*@ts-ignore*/}
              <FlexLayout.Fixed>{this.renderSearchForm(h)}</FlexLayout.Fixed>
              {/*@ts-ignore*/}
              <FlexLayout.Fixed>{this.renderSearchFooter(h)}</FlexLayout.Fixed>
            </FlexLayout>
          </FlexLayout.Fixed>

          {/*@ts-ignore*/}
          <FlexLayout.Auto
            className={classNames(
              `${selectorPrefix}-TableWrapper`,
              ...(tableClassName || '').split(' '),
            )}
            style={tableStyle}
          >
            {/*@ts-ignore*/}
            <Table
              // @ts-ignore
              rowKey={this.getRowKey()}
              // @ts-ignore
              dataSource={this.getData()}
              columns={this.getTableColumns(h)}
              onChange={this.onTableChange}
              pagination={this.getPagination()}
              // @ts-ignore
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
      // @ts-ignore
      const items = this.renderSearchFooterItems(h) || [];

      return (
        // @ts-ignore*
        <div class={`${selectorPrefix}-SearchFooterWrapper`}>
          {/*@ts-ignore*/}
          <Button
            // @ts-ignore
            class={`${selectorPrefix}-SearchFooterItem`}
            type="primary"
            onClick={() => {
              // @ts-ignore
              this.page = 1;
              // @ts-ignore
              this.onSearch();
            }}
          >
            {/*@ts-ignore*/}
            <i class="iconfont iconsousuo" />
            {Intl.tv('查询')}
          </Button>
          {/*@ts-ignore*/}
          <Button class={`${selectorPrefix}-SearchFooterItem`} onClick={this.onClear}>
            {Intl.tv('重置')}
          </Button>
          {items.map((t) => (
            // @ts-ignore
            <div class={`${selectorPrefix}-SearchFooterItem`}>{t}</div>
          ))}
        </div>
      );
    },
    /**
     * onTableChange - 表格change
     */
    getTableColumns(h: CreateElement): Array<any> {
      // @ts-ignore
      const isShowNumber = this.isShowNumber();
      // @ts-ignore
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
                // @ts-ignore
                this.getNumberGeneratorRule() || NUMBER_GENERATOR_RULE_ALONE;

              // @ts-ignore
              const { page, limit } = this;

              return (
                // @ts-ignore
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
        ].concat(
          // @ts-ignore
          this.getColumns(),
        );
      }

      // @ts-ignore
      return this.getColumns();
    },
    /**
     * onTableChange
     * @param pagination
     * @param filters
     * @param sorter
     */
    onTableChange(pagination, filters, sorter) {
      // @ts-ignore
      this[this.getOrderFieldProp()] = sorter.field;
      // @ts-ignore
      this[this.getOrderProp()] = sorter.order;

      const { order } = sorter;

      if (!order) return;

      // @ts-ignore
      this.fetchData();

      // @ts-ignore
      this.onSubTableChange(pagination, filters, sorter);
    },
    /**
     * onClear - 清除操作
     */
    onClear() {
      // @ts-ignore
      this.page = 1;
      // @ts-ignore
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
      return this[this.getOrderFieldProp()] === columnName
        ? // @ts-ignore
          this[this.getOrderProp()]
        : '';
    },
    /**
     * getPagination - 获取分页信息
     */
    getPagination() {
      return {
        onChange: (page, limit) => {
          // @ts-ignore
          this.page = page;
          // @ts-ignore
          this.limit = limit;
          // @ts-ignore
          this.fetchData();
        },
        onShowSizeChange: (page, limit) => {
          // @ts-ignore
          this.page = page;
          // @ts-ignore
          this.limit = limit;
          // @ts-ignore
          this.fetchData();
        },
        showTotal: (total) => {
          return Intl.tv(
            `当前 {page}-{pageSize}/共 {total}条`,
            // @ts-ignore
            {
              // @ts-ignore
              page: this.page,
              // @ts-ignore
              pageSize: this.limit,
              total,
            },
          );
        },
        // @ts-ignore
        total: this.getTotal(),
        // @ts-ignore
        current: this.page,
        // @ts-ignore
        pageSize: this.limit,
        showQuickJumper: true,
      };
    },
  },
};
