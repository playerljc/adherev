import Vue, { CreateElement, VNode } from 'vue';
import { mapState, mapMutations, mapActions, cleanMixin } from '@ctsj/vuexgenerator';
import { TableRowSelection } from 'ant-design-vue/lib/table/interface';
import SearchTable, { NUMBER_GENERATOR_RULE_CONTINUITY } from './searchtable';

const selectorPrefix = 'adherev-ui-searchtableimplement';

export default (serviceName) =>
  Vue.extend({
    mixins: serviceName ? [SearchTable, cleanMixin([serviceName])] : [SearchTable],
    data() {
      return {
        ...this.getParams(),
        [this.getOrderFieldProp()]: this.getOrderFieldValue(),
        [this.getOrderProp()]: this.getOrderPropValue() || 'descend',
        // 查询参数
        searchParams: {
          ...this.getParams(),
        },
        selectedRowKeys: [],
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
          this[property] = v;
        },
        /**
         * onInputChange
         * @description - onInputChange
         * @param property
         * @param e
         */
        onInputChange(property: string, e): void {
          this[property] = e.target.value.trim();
        },
        /**
         * onDateTimeRangeChange
         * @description - onDateTimeRangeChange
         * @param propertys
         * @param moments
         */
        onDateTimeRangeChange(propertys: Array<string>, moments: Array<any>) {
          this[propertys[0]] = moments && moments.length ? moments[0] : null;
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
          return {
            selectedRowKeys: this.selectedRowKeys,
            onChange: (selectedRowKeys: Array<any>) => {
              this.selectedRowKeys = selectedRowKeys;
            },
          };
        },
        /**
         * renderSearchForm
         * @override
         * @description - 渲染Table查询的表单
         */
        renderSearchForm(h: CreateElement): VNode | null {
          return null;
        },
        renderSearchTableImplementInner(h: CreateElement): VNode | null {
          const innerVNode = this.renderSearchTableInner(h);

          return (
            <div ref="innerWrapRef" class={`${selectorPrefix}-tablewrapper`}>
              {innerVNode}
            </div>
          );
        },
        /**
         * renderInner
         * @override
         * @description - 渲染主体
         */
        renderInner(h: CreateElement): VNode | null {
          return this.renderSearchTableImplementInner(h);
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
          return new Promise((resolve) => {
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

            this.$nextTick(() => {
              resolve();
            });
          });
        },
        /**
         * showLoading
         * @description - 是否显示遮罩
         * @override
         */
        showLoading(): boolean {
          return this.loading[`${serviceName}/${this.getFetchListPropName()}`];
        },
        /**
         * getSearchParams
         * @description - 获取查询参数
         * @protected
         */
        getSearchParams(): any {
          const { page, limit, searchParams } = this;

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
            params[key] = this[key];
          });

          return new Promise((resolve) => {
            this.searchParams = {
              ...params,
              [this.getOrderFieldProp()]: this[this.getOrderFieldProp()],
              [this.getOrderProp()]: this[this.getOrderProp()],
            };

            this.$nextTick(() => {
              this.fetchData().then(() => {
                resolve();
              });
            });
          });
        },
        /**
         * renderSearchTableImplement
         * @description - renderSearchTableImplement
         * @param h
         */
        renderSearchTableImplement(h) {
          return this.renderSearchTable(h);
        },
      },
      serviceName
        ? {
            ...mapActions([serviceName]),
            ...mapMutations([serviceName]),
          }
        : {},
    ),
    render(h) {
      return this.renderSearchTableImplement(h);
    },
  });
