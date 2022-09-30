// @ts-ignore
import { TableRowSelection } from 'ant-design-vue/lib/table/interface';
import { VNode, defineComponent } from 'vue';

// @ts-ignore
import { cleanMixin, mapActions, mapMutations, mapState } from '@ctsj/vuexgenerator';

import SearchTable, {
  NUMBER_GENERATOR_RULE_CONTINUITY,
  ROW_SELECTION_CONTINUOUS_MODE,
  ROW_SELECTION_NORMAL_MODE,
} from './searchtable';
import { ISearchTableSelf } from './types';

const selectorPrefix = 'adherev-ui-searchtableimplement';

export default (serviceName: string) =>
  defineComponent({
    mixins: serviceName ? [SearchTable, cleanMixin([serviceName])] : [SearchTable],
    data() {
      return {
        // @ts-ignore
        ...this.getParams(),
        // @ts-ignore
        [this.getOrderFieldProp()]: this.getOrderFieldValue(),
        // @ts-ignore
        [this.getOrderProp()]: this.getOrderPropValue() || 'descend',
        // 查询参数
        searchParams: {
          // @ts-ignore
          ...this.getParams(),
        },
        selectedRowKeys: [],
        selectedRows: [],
      };
    },
    computed: serviceName
      ? {
          ...mapState([serviceName]),
        }
      : {},
    methods: Object.assign(
      {
        /**
         * getFetchListPropName
         * @override
         * @description - 获取调用列表接口的函数名
         */
        getFetchListPropName(): string {
          return '';
        },
        /**
         * getFetchListPropNameToFirstUpper
         * @override
         * @description - 获取调用列表接口的函数名首字母大写
         * @return string
         */
        getFetchListPropNameToFirstUpper(): string {
          const fetchListPropName = this.getFetchListPropName();

          if (fetchListPropName.length > 1) {
            return `${fetchListPropName.charAt(0).toUpperCase()}${fetchListPropName.substring(1)}`;
          }

          return fetchListPropName;
        },
        // ------------ 不需要重写(override)的方法 start ------------------
        /**
         * onSelectChange
         * @description - onSelectChange
         * @param property
         * @param v
         */
        onSelectChange(property: string, v: string): void {
          // @ts-ignore
          this[property] = v;
        },
        /**
         * onInputChange
         * @description - onInputChange
         * @param property
         * @param e
         */
        onInputChange(property: string, e: { target: { value: string } }): void {
          // @ts-ignore
          this[property] = e.target.value.trim();
        },
        /**
         * onDateTimeRangeChange
         * @description - onDateTimeRangeChange
         * @param propertys
         * @param moments
         */
        onDateTimeRangeChange(propertys: Array<string>, moments: Array<any>) {
          // @ts-ignore
          this[propertys[0]] = moments && moments.length ? moments[0] : null;
          // @ts-ignore
          this[propertys[1]] = moments && moments.length ? moments[1] : null;
        },
        // ------------ 不需要重写(override)的方法 end ------------------
        /**
         * getParams
         * @override
         * @description - 获取查询参数对象
         */
        getParams(): object {
          return {};
        },
        /**
         * getServiceName
         * @override
         * @description - 获取接口服务的model名称
         */
        getServiceName(): string {
          return serviceName;
        },
        /**
         * getFetchDataParams
         * @override
         * @description - 获取调用数据接口的参数
         */
        getFetchDataParams(): object {
          return {};
        },
        /**
         * isShowNumber
         * @description - 是否线上序号列
         * @override
         * @return {boolean}
         */
        isShowNumber(): boolean {
          return true;
        },
        /**
         * getNumberGeneratorRule
         * @override
         * @description - 表格序号列的生成规则
         */
        getNumberGeneratorRule(): Symbol {
          return NUMBER_GENERATOR_RULE_CONTINUITY;
        },
        /**
         * getNumberGeneratorRule - 获取符号列的生成规则
         */
        getRowSelectionMode(): Symbol {
          return ROW_SELECTION_NORMAL_MODE;
        },
        /**
         * getTableNumberColumnWidth
         * @override
         * @description - 表格序号列的宽度
         */
        getTableNumberColumnWidth(): number {
          return 80;
        },
        /**
         * getRowKey
         * @override
         * @description - 数据的主键
         */
        getRowKey(): string {
          return 'id';
        },
        /**
         * getDataKey
         * @description - 获取数据的key
         * @protected
         */
        getDataKey(): string {
          return 'list';
        },
        /**
         * getTotalKey
         * @description - 获取total的key
         * @protected
         */
        getTotalKey(): string {
          return 'totalCount';
        },
        /**
         * getData
         * @description - Table的数据(Table的dataSource字段)
         * @override
         * @return {Array}
         */
        getData(): Array<object> {
          // @ts-ignore
          return this[`${serviceName}${this.getFetchListPropNameToFirstUpper()}`][
            this.getDataKey()
          ];
        },
        /**
         * getTotal
         * @description - Table数据的总条数
         * @override
         */
        getTotal(): number {
          // @ts-ignore
          return this[`${serviceName}${this.getFetchListPropNameToFirstUpper()}`][
            this.getTotalKey()
          ];
        },
        /**
         * getRowSelection
         * @override
         * @description - 获取表格行选择对象
         */
        getRowSelection(): TableRowSelection<object> {
          const { selectedRowKeys } = this as unknown as ISearchTableSelf;

          const self = this;

          function filter(this: any, selected: boolean, records: Array<any>): void {
            const rowKey = self.getRowKey();

            if (selected) {
              // add
              self.selectedRowKeys = [...self.selectedRowKeys, ...records.map((r) => r[rowKey])];
              self.selectedRows = [...self.selectedRows, ...records];
            } else {
              // remove
              self.selectedRows = self.selectedRows.filter(
                (row) => !records.find((r) => r[rowKey] === row[rowKey]),
              );
              self.selectedRowKeys = self.selectedRowKeys.filter(
                (key) => !records.find((r) => r[rowKey] === key),
              );
            }
          }

          return {
            selectedRowKeys,
            onChange: (selectedRowKeys: Array<any>, selectedRows: Array<any>) => {
              if (this.getRowSelectionMode() === ROW_SELECTION_CONTINUOUS_MODE) return;

              this.selectedRowKeys = selectedRowKeys;
              this.selectedRows = selectedRows;
            },
            onSelect: (record, selected) => {
              if (this.getRowSelectionMode() === ROW_SELECTION_NORMAL_MODE) return;

              filter(selected, [record]);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
              if (this.getRowSelectionMode() === ROW_SELECTION_NORMAL_MODE) return;

              filter(selected, changeRows);
            },
          };
        },
        /**
         * renderSearchForm
         * @override
         * @description - 渲染Table查询的表单
         */
        renderSearchForm(): VNode | null {
          return null;
        },
        renderSearchTableImplementInner(): VNode | null {
          // @ts-ignore
          const innerVNode = this.renderSearchTableInner();

          return (
            <div
              ref="innerWrapRef"
              // @ts-ignore
              class={`${selectorPrefix}-tablewrapper`}
            >
              {innerVNode}
            </div>
          );
        },
        /**
         * renderInner
         * @override
         * @description - 渲染主体
         */
        renderInner(): VNode | null {
          return this.renderSearchTableImplementInner();
        },
        /**
         * renderSearchFooterItems
         * @description - 渲染表格的工具栏
         * @override
         */
        renderSearchFooterItems(): Array<any> {
          return [];
        },
        /**
         * getOrderFieldProp
         * @description - 获取排序字段
         * @override
         */
        getOrderFieldProp(): string {
          return 'orderField';
        },
        /**
         * getOrderFieldValue
         * @description - 获取默认排序字段的值
         * @override
         * @protected
         */
        getOrderFieldValue(): string {
          return '';
        },
        /**
         * getOrderProp
         * @description - 获取排序方式
         */
        getOrderProp(): string {
          return 'order';
        },
        /**
         * getOrderPropValue
         * @override
         * @description - 获取默认排序方式
         * @protected
         */
        getOrderPropValue(): 'descend' | 'ascend' {
          return 'descend';
        },
        /**
         * clear
         * @description - 清空查询条件
         * @override
         */
        clear(): Promise<any> {
          return new Promise<null>((resolve) => {
            Object.assign(this, {
              ...this.getParams(),
              [this.getOrderFieldProp()]: this.getOrderFieldValue(),
              [this.getOrderProp()]: this.getOrderPropValue() || 'descend',
              // 查询参数
              searchParams: {
                ...this.getParams(),
              },
              selectedRowKeys: [],
            });

            // @ts-ignore
            this.$nextTick(() => {
              resolve(null);
            });
          });
        },
        /**
         * showLoading
         * @description - 是否显示遮罩
         * @override
         */
        showLoading(): boolean {
          // @ts-ignore
          return this.loading[`${serviceName}/${this.getFetchListPropName()}`];
        },
        /**
         * getSearchParams
         * @description - 获取查询参数
         * @protected
         */
        getSearchParams(): any {
          const { page, limit, searchParams } = this as unknown as ISearchTableSelf;

          return {
            ...{
              page,
              limit,
              ...searchParams,
              [this.getOrderFieldProp()]: this.getOrderFieldValue(),
              [this.getOrderProp()]: this.getOrderPropValue() || 'descend',
              ...this.getFetchDataParams(),
            },
          };
        },
        /**
         * fetchData
         * @description - 加载数据
         * @override
         */
        fetchData(): Promise<any> {
          return this.fetchDataExecute(this.getSearchParams());
        },
        /**
         * fetchDataExecute
         * @description - 真正的执行获取列表数据的接口
         * @param searchParams
         * @protected
         */
        fetchDataExecute(searchParams: object): Promise<any> {
          // @ts-ignore
          return this[`${serviceName}${this.getFetchListPropNameToFirstUpper()}Action`](
            searchParams,
          );
        },
        /**
         * onSearch
         * @description - 点击查询
         * @override
         */
        onSearch(): Promise<any> {
          const keys = Object.keys(this.getParams());
          const params = {};
          keys.forEach((key) => {
            // @ts-ignore
            params[key] = this[key];
          });

          return new Promise<null>((resolve) => {
            // @ts-ignore
            this.searchParams = {
              ...params,
              // @ts-ignore
              [this.getOrderFieldProp()]: this[this.getOrderFieldProp()],
              // @ts-ignore
              [this.getOrderProp()]: this[this.getOrderProp()],
            };

            // @ts-ignore
            this.$nextTick(() => {
              this.fetchData().then(() => {
                resolve(null);
              });
            });
          });
        },
        /**
         * renderSearchTableImplement
         * @description - renderSearchTableImplement
         */
        // @ts-ignore
        renderSearchTableImplement() {
          // @ts-ignore
          return this.renderSearchTable();
        },
      },
      serviceName
        ? {
            ...mapActions([serviceName]),
            ...mapMutations([serviceName]),
          }
        : {},
    ),
    render() {
      return this.renderSearchTableImplement();
    },
  });
