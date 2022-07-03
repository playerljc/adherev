"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-ignore
var vuexgenerator_1 = require("@ctsj/vuexgenerator");
var vue_1 = require("vue");
var searchtable_1 = (0, tslib_1.__importStar)(require("./searchtable"));
var selectorPrefix = 'adherev-ui-searchtableimplement';
exports.default = (function (serviceName) {
    return (0, vue_1.defineComponent)({
        mixins: serviceName ? [searchtable_1.default, (0, vuexgenerator_1.cleanMixin)([serviceName])] : [searchtable_1.default],
        data: function () {
            var _a;
            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, this.getParams()), (_a = {}, _a[this.getOrderFieldProp()] = this.getOrderFieldValue(), _a[this.getOrderProp()] = this.getOrderPropValue() || 'descend', 
            // 查询参数
            _a.searchParams = (0, tslib_1.__assign)({}, this.getParams()), _a.selectedRowKeys = [], _a.selectedRows = [], _a));
        },
        computed: serviceName
            ? (0, tslib_1.__assign)({}, (0, vuexgenerator_1.mapState)([serviceName])) : {},
        methods: Object.assign({
            /**
             * getFetchListPropName
             * @override
             * @description - 获取调用列表接口的函数名
             */
            getFetchListPropName: function () {
                return '';
            },
            /**
             * getFetchListPropNameToFirstUpper
             * @override
             * @description - 获取调用列表接口的函数名首字母大写
             * @return string
             */
            getFetchListPropNameToFirstUpper: function () {
                var fetchListPropName = this.getFetchListPropName();
                if (fetchListPropName.length > 1) {
                    return "".concat(fetchListPropName.charAt(0).toUpperCase()).concat(fetchListPropName.substring(1));
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
            onSelectChange: function (property, v) {
                // @ts-ignore
                this[property] = v;
            },
            /**
             * onInputChange
             * @description - onInputChange
             * @param property
             * @param e
             */
            onInputChange: function (property, e) {
                // @ts-ignore
                this[property] = e.target.value.trim();
            },
            /**
             * onDateTimeRangeChange
             * @description - onDateTimeRangeChange
             * @param propertys
             * @param moments
             */
            onDateTimeRangeChange: function (propertys, moments) {
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
            getParams: function () {
                return {};
            },
            /**
             * getServiceName
             * @override
             * @description - 获取接口服务的model名称
             */
            getServiceName: function () {
                return serviceName;
            },
            /**
             * getFetchDataParams
             * @override
             * @description - 获取调用数据接口的参数
             */
            getFetchDataParams: function () {
                return {};
            },
            /**
             * isShowNumber
             * @description - 是否线上序号列
             * @override
             * @return {boolean}
             */
            isShowNumber: function () {
                return true;
            },
            /**
             * getNumberGeneratorRule
             * @override
             * @description - 表格序号列的生成规则
             */
            getNumberGeneratorRule: function () {
                return searchtable_1.NUMBER_GENERATOR_RULE_CONTINUITY;
            },
            /**
             * getNumberGeneratorRule - 获取符号列的生成规则
             */
            getRowSelectionMode: function () {
                return searchtable_1.ROW_SELECTION_NORMAL_MODE;
            },
            /**
             * getTableNumberColumnWidth
             * @override
             * @description - 表格序号列的宽度
             */
            getTableNumberColumnWidth: function () {
                return 80;
            },
            /**
             * getRowKey
             * @override
             * @description - 数据的主键
             */
            getRowKey: function () {
                return 'id';
            },
            /**
             * getDataKey
             * @description - 获取数据的key
             * @protected
             */
            getDataKey: function () {
                return 'list';
            },
            /**
             * getTotalKey
             * @description - 获取total的key
             * @protected
             */
            getTotalKey: function () {
                return 'totalCount';
            },
            /**
             * getData
             * @description - Table的数据(Table的dataSource字段)
             * @override
             * @return {Array}
             */
            getData: function () {
                // @ts-ignore
                return this["".concat(serviceName).concat(this.getFetchListPropNameToFirstUpper())][this.getDataKey()];
            },
            /**
             * getTotal
             * @description - Table数据的总条数
             * @override
             */
            getTotal: function () {
                // @ts-ignore
                return this["".concat(serviceName).concat(this.getFetchListPropNameToFirstUpper())][this.getTotalKey()];
            },
            /**
             * getRowSelection
             * @override
             * @description - 获取表格行选择对象
             */
            getRowSelection: function () {
                var _this = this;
                var selectedRowKeys = this.selectedRowKeys;
                var self = this;
                function filter(selected, records) {
                    var rowKey = self.getRowKey();
                    if (selected) {
                        // add
                        self.selectedRowKeys = (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], self.selectedRowKeys, true), records.map(function (r) { return r[rowKey]; }), true);
                        self.selectedRows = (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], self.selectedRows, true), records, true);
                    }
                    else {
                        // remove
                        self.selectedRows = self.selectedRows.filter(function (row) { return !records.find(function (r) { return r[rowKey] === row[rowKey]; }); });
                        self.selectedRowKeys = self.selectedRowKeys.filter(function (key) { return !records.find(function (r) { return r[rowKey] === key; }); });
                    }
                }
                return {
                    selectedRowKeys: selectedRowKeys,
                    onChange: function (selectedRowKeys, selectedRows) {
                        if (_this.getRowSelectionMode() === searchtable_1.ROW_SELECTION_CONTINUOUS_MODE)
                            return;
                        _this.selectedRowKeys = selectedRowKeys;
                        _this.selectedRows = selectedRows;
                    },
                    onSelect: function (record, selected) {
                        if (_this.getRowSelectionMode() === searchtable_1.ROW_SELECTION_NORMAL_MODE)
                            return;
                        filter(selected, [record]);
                    },
                    onSelectAll: function (selected, selectedRows, changeRows) {
                        if (_this.getRowSelectionMode() === searchtable_1.ROW_SELECTION_NORMAL_MODE)
                            return;
                        filter(selected, changeRows);
                    },
                };
            },
            /**
             * renderSearchForm
             * @override
             * @description - 渲染Table查询的表单
             */
            renderSearchForm: function () {
                return null;
            },
            renderSearchTableImplementInner: function () {
                // @ts-ignore
                var innerVNode = this.renderSearchTableInner();
                return (<div ref="innerWrapRef" 
                // @ts-ignore
                class={"".concat(selectorPrefix, "-tablewrapper")}>
              {innerVNode}
            </div>);
            },
            /**
             * renderInner
             * @override
             * @description - 渲染主体
             */
            renderInner: function () {
                return this.renderSearchTableImplementInner();
            },
            /**
             * renderSearchFooterItems
             * @description - 渲染表格的工具栏
             * @override
             */
            renderSearchFooterItems: function () {
                return [];
            },
            /**
             * getOrderFieldProp
             * @description - 获取排序字段
             * @override
             */
            getOrderFieldProp: function () {
                return 'orderField';
            },
            /**
             * getOrderFieldValue
             * @description - 获取默认排序字段的值
             * @override
             * @protected
             */
            getOrderFieldValue: function () {
                return '';
            },
            /**
             * getOrderProp
             * @description - 获取排序方式
             */
            getOrderProp: function () {
                return 'order';
            },
            /**
             * getOrderPropValue
             * @override
             * @description - 获取默认排序方式
             * @protected
             */
            getOrderPropValue: function () {
                return 'descend';
            },
            /**
             * clear
             * @description - 清空查询条件
             * @override
             */
            clear: function () {
                var _this = this;
                return new Promise(function (resolve) {
                    var _a;
                    Object.assign(_this, (0, tslib_1.__assign)((0, tslib_1.__assign)({}, _this.getParams()), (_a = {}, _a[_this.getOrderFieldProp()] = _this.getOrderFieldValue(), _a[_this.getOrderProp()] = _this.getOrderPropValue() || 'descend', 
                    // 查询参数
                    _a.searchParams = (0, tslib_1.__assign)({}, _this.getParams()), _a.selectedRowKeys = [], _a)));
                    // @ts-ignore
                    _this.$nextTick(function () {
                        resolve(null);
                    });
                });
            },
            /**
             * showLoading
             * @description - 是否显示遮罩
             * @override
             */
            showLoading: function () {
                // @ts-ignore
                return this.loading["".concat(serviceName, "/").concat(this.getFetchListPropName())];
            },
            /**
             * getSearchParams
             * @description - 获取查询参数
             * @protected
             */
            getSearchParams: function () {
                var _a;
                var _b = this, page = _b.page, limit = _b.limit, searchParams = _b.searchParams;
                return (0, tslib_1.__assign)({}, (0, tslib_1.__assign)((0, tslib_1.__assign)((0, tslib_1.__assign)({ page: page, limit: limit }, searchParams), (_a = {}, _a[this.getOrderFieldProp()] = this.getOrderFieldValue(), _a[this.getOrderProp()] = this.getOrderPropValue() || 'descend', _a)), this.getFetchDataParams()));
            },
            /**
             * fetchData
             * @description - 加载数据
             * @override
             */
            fetchData: function () {
                return this.fetchDataExecute(this.getSearchParams());
            },
            /**
             * fetchDataExecute
             * @description - 真正的执行获取列表数据的接口
             * @param searchParams
             * @protected
             */
            fetchDataExecute: function (searchParams) {
                // @ts-ignore
                return this["".concat(serviceName).concat(this.getFetchListPropNameToFirstUpper(), "Action")](searchParams);
            },
            /**
             * onSearch
             * @description - 点击查询
             * @override
             */
            onSearch: function () {
                var _this = this;
                var keys = Object.keys(this.getParams());
                var params = {};
                keys.forEach(function (key) {
                    // @ts-ignore
                    params[key] = _this[key];
                });
                return new Promise(function (resolve) {
                    var _a;
                    // @ts-ignore
                    _this.searchParams = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, params), (_a = {}, _a[_this.getOrderFieldProp()] = _this[_this.getOrderFieldProp()], _a[_this.getOrderProp()] = _this[_this.getOrderProp()], _a));
                    // @ts-ignore
                    _this.$nextTick(function () {
                        _this.fetchData().then(function () {
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
            renderSearchTableImplement: function () {
                // @ts-ignore
                return this.renderSearchTable();
            },
        }, serviceName
            ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, (0, vuexgenerator_1.mapActions)([serviceName])), (0, vuexgenerator_1.mapMutations)([serviceName])) : {}),
        render: function () {
            return this.renderSearchTableImplement();
        },
    });
});
//# sourceMappingURL=searchtableimplement.jsx.map