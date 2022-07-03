"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROW_SELECTION_CONTINUOUS_MODE = exports.ROW_SELECTION_NORMAL_MODE = exports.NUMBER_GENERATOR_RULE_CONTINUITY = exports.NUMBER_GENERATOR_RULE_ALONE = exports.selectorPrefix = void 0;
var tslib_1 = require("tslib");
var adherev_ui_conditionalrender_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender"));
var adherev_ui_flexlayout_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-flexlayout"));
var adherev_ui_suspense_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-suspense"));
var adherev_util_intl_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-intl"));
var adherev_util_mixins_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-mixins"));
var ant_design_vue_1 = require("ant-design-vue");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var vue_1 = require("vue");
var ColumnResizable_1 = (0, tslib_1.__importStar)(require("./Extension/ColumnResizable"));
var types_1 = require("./types");
exports.selectorPrefix = 'adherev-ui-searchtable';
var updatedEx = adherev_util_mixins_1.default.updatedEx;
var Fixed = adherev_ui_flexlayout_1.default.Fixed, Auto = adherev_ui_flexlayout_1.default.Auto;
// 单独模式
exports.NUMBER_GENERATOR_RULE_ALONE = Symbol();
// 连续模式
exports.NUMBER_GENERATOR_RULE_CONTINUITY = Symbol();
// 全选的规则 - 标准模式(不能跨页)
exports.ROW_SELECTION_NORMAL_MODE = Symbol();
// 全选的规则 - 可以跨页
exports.ROW_SELECTION_CONTINUOUS_MODE = Symbol();
exports.default = (0, vue_1.defineComponent)({
    // @overview
    mixins: [adherev_ui_suspense_1.default, updatedEx],
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
            default: function () { return ({}); },
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
    data: function () {
        return {
            page: 1,
            limit: 10,
            expand: this.defaultExpandSearchCollapse,
            scrollY: 0,
            // 列设置
            // @ts-ignore
            columnSetting: [],
            // 表格密度
            // 表格密度设置
            tableDensity: types_1.TableDensity.DEFAULT,
            // 列拖动对象
            $columnResizable: new ColumnResizable_1.default(),
            // 列属性监控对象
            $columnObserver: null,
        };
    },
    computed: {
        // 自定义表格部分
        components: function () {
            return {
                header: {
                    cell: (0, ColumnResizable_1.SearchTableResizableTitle)(this.getSearchTableTableColumns()),
                },
            };
        },
    },
    provide: function () {
        return {
            getContext: this.getContext,
        };
    },
    updatedEx: function (prevState) {
        var _a, _b;
        var _c = this, $refs = _c.$refs, scrollY = _c.scrollY, expand = _c.expand, fixedHeaderAutoTable = _c.fixedHeaderAutoTable;
        if (!$refs.tableWrapRef)
            return;
        // 监控header的属性变化(colgroup)
        if (!this.$data.$columnObserver) {
            this.$data.$columnObserver = (0, ColumnResizable_1.SearchTableResizableObserver)(this);
        }
        if (fixedHeaderAutoTable) {
            // @ts-ignore
            var dataSource = this.getData();
            if (dataSource &&
                dataSource.length &&
                ((prevState.scrollY === 0 && scrollY === 0) ||
                    prevState.scrollY !== scrollY ||
                    prevState.expand !== expand)) {
                var tableWrapRef = $refs.tableWrapRef;
                var scrollBodyEl = this.getScrollBodyEl();
                if (scrollBodyEl) {
                    scrollBodyEl.removeEventListener('scroll', this.onScrollBodyScroll);
                    scrollBodyEl.addEventListener('scroll', this.onScrollBodyScroll);
                }
                var tableHeaderHeight = ((_a = tableWrapRef.querySelector('.ant-table-thead')) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
                var tablePaginationHeight = ((_b = tableWrapRef.querySelector('.ant-table-pagination')) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;
                this.scrollY =
                    tableWrapRef.clientHeight -
                        (tableHeaderHeight + (tablePaginationHeight ? tablePaginationHeight + 16 * 2 : 0));
            }
        }
    },
    beforeUnmount: function () {
        var _a;
        var fixedHeaderAutoTable = this.fixedHeaderAutoTable;
        if (fixedHeaderAutoTable) {
            (_a = this.getScrollBodyEl()) === null || _a === void 0 ? void 0 : _a.removeEventListener('scroll', this.onScrollBodyScroll);
        }
    },
    created: function () {
        this.columnSetting = this.getTableColumns().map(function (column, index) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, column), { sort: index, display: true })); });
        this.tableDensity = this.getTableDensity();
    },
    methods: {
        getContext: function () {
            return this;
        },
        getTableDensity: function () {
            return types_1.TableDensity.DEFAULT;
        },
        getSortColumnSetting: function () {
            var columns = (0, tslib_1.__spreadArray)([], this.columnSetting, true);
            columns.sort(function (c1, c2) {
                if (c1.sort > c2.sort)
                    return 1;
                if (c1.sort < c2.sort)
                    return -1;
                return 0;
            });
            return columns;
        },
        onScrollBodyScroll: function () {
            var _a;
            var scrollBodyEl = this.getScrollBodyEl();
            var scrollHeaderEl = this.getScrollHeaderEl();
            // @ts-ignore
            (_a = scrollHeaderEl) === null || _a === void 0 ? void 0 : _a.scrollLeft = scrollBodyEl === null || scrollBodyEl === void 0 ? void 0 : scrollBodyEl.scrollLeft;
        },
        getScrollHeaderEl: function () {
            var tableWrapRef = this.$refs.tableWrapRef;
            return tableWrapRef === null || tableWrapRef === void 0 ? void 0 : tableWrapRef.querySelector('.ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-header');
        },
        getScrollBodyEl: function () {
            var tableWrapRef = this.$refs.tableWrapRef;
            return tableWrapRef === null || tableWrapRef === void 0 ? void 0 : tableWrapRef.querySelector('.ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-body');
        },
        /**
         * renderTableNumberColumn
         * @description - 渲染序号列
         * @param number
         * @param params
         */
        renderTableNumberColumn: function (number, params) {
            if (number === void 0) { number = ''; }
            return <span>{number}</span>;
        },
        renderSearchTableInner: function () {
            var _a = this, wrapStyle = _a.wrapStyle, className = _a.className, tableClassName = _a.tableClassName, tableStyle = _a.tableStyle, searchStyle = _a.searchStyle, searchClassName = _a.searchClassName, fitSearch = _a.fitSearch, fitTable = _a.fitTable, autoFixed = _a.autoFixed, fixedTableSpaceBetween = _a.fixedTableSpaceBetween, $slots = _a.$slots;
            return (
            // @ts-ignore
            <adherev_ui_flexlayout_1.default direction="vertical" style={wrapStyle || ''} class={classnames_1.default.apply(void 0, (0, tslib_1.__spreadArray)([exports.selectorPrefix,
                    fixedTableSpaceBetween ? 'fixedtablespacebetween' : ''], (className || '').split(/\s+/), false))}>
          <Fixed style={searchStyle || ''} class={classnames_1.default.apply(void 0, (0, tslib_1.__spreadArray)(["".concat(exports.selectorPrefix, "-searchwrapper")], (searchClassName || '').split(/\s+/), false))} fit={fitSearch}>
            {/*@ts-ignore*/}
            <adherev_ui_flexlayout_1.default direction="vertical">
              <Fixed>
                {/*@ts-ignore**/}
                <adherev_ui_conditionalrender_1.default conditional={this.expand}>
                  {
                // @ts-ignore
                this.renderSearchForm()}
                </adherev_ui_conditionalrender_1.default>
              </Fixed>

              <Fixed>{this.renderSearchFooter()}</Fixed>
            </adherev_ui_flexlayout_1.default>
          </Fixed>

          {/*@ts-ignore*/}
          <adherev_ui_conditionalrender_1.default conditional={!!$slots.tableHeader}>
            <Fixed>{$slots.tableHeader()}</Fixed>
          </adherev_ui_conditionalrender_1.default>

          <Auto style={tableStyle || ''} class={classnames_1.default.apply(void 0, (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)(["".concat(exports.selectorPrefix, "-autowrapper")], (tableClassName || '').split(/\s+/), false), [autoFixed ? 'autofixed' : ''], false))} fit={fitTable} autoFixed={autoFixed}>
            <div ref="tableWrapRef" 
            // @ts-ignore
            class={"".concat(exports.selectorPrefix, "-tablewrapper")}>
              {this.renderTable()}
            </div>
          </Auto>

          {/*@ts-ignore*/}
          <adherev_ui_conditionalrender_1.default conditional={!!$slots.tableFooter}>
            <Fixed>{$slots.tableFooter()}</Fixed>
          </adherev_ui_conditionalrender_1.default>
        </adherev_ui_flexlayout_1.default>);
        },
        /**
         * renderInner
         */
        renderInner: function () {
            return this.renderSearchTableInner();
        },
        renderSearchTableSearchFooter: function () {
            var _this = this;
            var isShowExpandSearch = this.isShowExpandSearch;
            var defaultItems = [
                // @ts-ignore
                <ant_design_vue_1.Button class={"".concat(exports.selectorPrefix, "-searchfooteritem")} type="primary" onClick={function () {
                        _this.page = 1;
                        // @ts-ignore
                        _this.onSearch();
                    }}>
          <i 
                // @ts-ignore
                class="iconfont iconsousuo"/>
          {adherev_util_intl_1.default.tv('查询')}
        </ant_design_vue_1.Button>,
                // @ts-ignore
                <ant_design_vue_1.Button class={"".concat(exports.selectorPrefix, "-searchfooteritem")} onClick={this.onClear}>
          {adherev_util_intl_1.default.tv('重置')}
        </ant_design_vue_1.Button>,
            ];
            if (isShowExpandSearch) {
                defaultItems.push(
                // @ts-ignore
                <adherev_ui_conditionalrender_1.default conditional={this.expand}>
            {{
                        default: function () { return (<a 
                        // @ts-ignore
                        style="display: flex; align-items: center" onClick={function () {
                                _this.expand = false;
                            }}>
                  <span 
                        // @ts-ignore
                        style="margin-right: 5px;">
                    {adherev_util_intl_1.default.tv('关闭')}
                  </span>
                  <img 
                        // @ts-ignore
                        style="width: 16px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMTc4MzI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0ODY3IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00OTMuNTA0IDU1OC4xNDRhMzEuOTA0IDMxLjkwNCAwIDAgMCA0NS4yOCAwbDMwOC4zNTItMzA4LjM1MmEzMS45NjggMzEuOTY4IDAgMSAwLTQ1LjI0OC00NS4yNDhMNTE2LjE2IDQ5MC4yNzIgMjIxLjk4NCAxOTYuMTI4YTMxLjk2OCAzMS45NjggMCAxIDAtNDUuMjQ4IDQ1LjI0OGwzMTYuNzY4IDMxNi43Njh6IiBwLWlkPSIxNDg2OCIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04MDEuODg4IDQ2MC41NzZMNTE2LjE2IDc0Ni4zMDQgMjIyLjAxNiA0NTIuMTZhMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDggNDUuMjQ4bDMxNi43NjggMzE2Ljc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDQ1LjI4IDBsMzA4LjM1Mi0zMDguMzUyYTMyIDMyIDAgMSAwLTQ1LjI4LTQ1LjI0OHoiIHAtaWQ9IjE0ODY5IiBmaWxsPSIjMTg5MGZmIj48L3BhdGg+PC9zdmc+" alt="down"/>
                </a>); },
                        noMatch: function () { return (<a 
                        // @ts-ignore
                        style="display: flex; align-items: center" onClick={function () {
                                _this.expand = true;
                            }}>
                  <span 
                        // @ts-ignore
                        style="margin-right: 5px;">
                    {adherev_util_intl_1.default.tv('展开')}
                  </span>
                  <img 
                        // @ts-ignore
                        style="width: 16px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMjYyMTM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MjQ0IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOTkuMzYgNTcyLjc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDIyLjYyNC05LjM3NmwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OEw1MzguNzUyIDIwMS4zNzZhMzIgMzIgMCAwIDAtNDUuMjggMEwxNzYuNzA0IDUxOC4xNDRhMzEuOTY4IDMxLjk2OCAwIDAgMCAyMi42NTYgNTQuNjI0eiBtMzM5LjQyNC0xMTUuMzkyYTMyIDMyIDAgMCAwLTQ1LjI4IDBMMTc2LjczNiA3NzQuMTQ0YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4IDQ1LjI0OGwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OGwtMzA4LjMyLTMwOC4zNTJ6IiBwLWlkPSIxNTI0NSIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjwvc3ZnPg==" alt="up"/>
                </a>); },
                    }}
          </adherev_ui_conditionalrender_1.default>);
            }
            // 返回的是VNodes数组
            // @ts-ignore
            var items = this.renderSearchFooterItems(defaultItems) || (0, tslib_1.__spreadArray)([], defaultItems, true);
            return (<div 
            // @ts-ignore
            class={"".concat(exports.selectorPrefix, "-searchfooterwrapper")}>
          {items.map(function (t) { return (<div 
                // @ts-ignore
                class={"".concat(exports.selectorPrefix, "-searchfooteritem")}>
              {t}
            </div>); })}
        </div>);
        },
        /**
         * renderSearchFooter
         */
        renderSearchFooter: function () {
            return this.renderSearchTableSearchFooter();
        },
        renderSearchTableTable: function () {
            var _a = this, getScopedSlotsInner = _a.getScopedSlotsInner, antdTableProps = _a.antdTableProps, fixedHeaderAutoTable = _a.fixedHeaderAutoTable, getRowKey = _a.getRowKey, getData = _a.getData, getRowSelection = _a.getRowSelection;
            // 作用域插槽
            // const scopedSlots = {
            //   // @ts-ignore
            //   ...(getScopedSlots() || {}),
            // };
            var tablePropsAttr = {};
            var tableOnAttr = {};
            var mergeProps = antdTableProps || {};
            for (var p in mergeProps) {
                if (p.startsWith('on')) {
                    // @ts-ignore
                    tableOnAttr[p.substring(2).toLowerCase()] = mergeProps[p];
                }
                else {
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
            var columnSetting = this.columnSetting;
            var columns = this.getTableColumns()
                .map(function (column, index) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, columnSetting[index]), column)); })
                .filter(function (column) { return column.display; });
            columns.sort(function (c1, c2) {
                if (c1.sort > c2.sort)
                    return 1;
                if (c1.sort < c2.sort)
                    return -1;
                return 0;
            });
            var tableProps = (0, tslib_1.__assign)((0, tslib_1.__assign)((0, tslib_1.__assign)({ 
                // @ts-ignore
                rowKey: getRowKey(), 
                // @ts-ignore
                dataSource: getData(), columns: columns, size: this.tableDensity, pagination: this.getPagination(), 
                // @ts-ignore
                rowSelection: getRowSelection(), components: this.components }, (tablePropsAttr || {})), { onChange: this.onTableChange }), (tableOnAttr || {}));
            // 是否支持锁定列头，表格体滚动
            if (fixedHeaderAutoTable) {
                var scrollY_1 = this.scrollY;
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
                        tableProps.scroll.y = scrollY_1;
                    }
                    else {
                        tableProps.scroll = { y: scrollY_1 };
                    }
                }
                else {
                    tableProps.scroll = { y: scrollY_1 };
                }
            }
            return (
            // @ts-ignore
            <ant_design_vue_1.Table {...tableProps} v-slots={{
                    // @ts-ignore
                    bodyCell: function (row) { return getScopedSlotsInner(row); },
                }}/>);
        },
        /**
         * renderTable
         * @description - 认选表格体
         * @protected
         */
        renderTable: function () {
            return this.renderSearchTableTable();
        },
        getScopedSlotsInner: function (row) {
            var _this = this;
            var record = row.record, index = row.index, column = row.column;
            if (column.key === '_number') {
                var getNumberGeneratorRule = this.getNumberGeneratorRule;
                // @ts-ignore
                var numberGeneratorRule = getNumberGeneratorRule() || exports.NUMBER_GENERATOR_RULE_ALONE;
                var _a = this, page_1 = _a.page, limit_1 = _a.limit;
                return (
                // @ts-ignore
                <adherev_ui_conditionalrender_1.default conditional={numberGeneratorRule === exports.NUMBER_GENERATOR_RULE_ALONE}>
            {{
                        default: function () { return (
                        // @ts-ignore
                        <span>{_this.renderTableNumberColumn(index + 1, { record: row, index: index })}</span>); },
                        noMatch: function () { return (<span>
                  {
                            // @ts-ignore
                            _this.renderTableNumberColumn((page_1 - 1) * limit_1 + (index + 1), {
                                record: record,
                                index: index,
                            })}
                </span>); },
                    }}
          </adherev_ui_conditionalrender_1.default>);
            }
            return this.getScopedSlots(row);
        },
        getSearchTableTableColumns: function () {
            // const { /*getNumberGeneratorRule, */ getColumns } = this;
            var _this = this;
            // @ts-ignore
            var isShowNumber = this.isShowNumber();
            // @ts-ignore
            var getTableNumberColumnWidth = this.getTableNumberColumnWidth();
            var _columns = this.getColumns();
            // 对权限进行过滤
            // @ts-ignore
            var columns = _columns
                .filter(function (column) {
                if ('authorized' in column) {
                    return column.authorized();
                }
                return true;
            })
                .map(function (column, index) {
                if ('resize' in column && !!column.resize) {
                    return _this.$data.$columnResizable.searchTableResizableColumnItem(_this, index, column);
                }
                return column;
            });
            if (isShowNumber) {
                return [
                    {
                        title: adherev_util_intl_1.default.tv('序号'),
                        // dataIndex: 'number',
                        key: '_number',
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
        getTableColumns: function () {
            return this.getSearchTableTableColumns();
        },
        /**
         * onTableChange
         * @param pagination
         * @param filters
         * @param sorter
         */
        onTableChange: function (pagination, filters, sorter) {
            // console.log('onTableChange', pagination, filters, sorter);
            var _a;
            // @ts-ignore
            this[this.getOrderFieldProp()] = sorter.field;
            // @ts-ignore
            this[this.getOrderProp()] = sorter.order;
            var order = sorter.order;
            if (!order)
                return;
            // @ts-ignore
            this.fetchData();
            // @ts-ignore
            (_a = this.onSubTableChange) === null || _a === void 0 ? void 0 : _a.call(this, pagination, filters, sorter);
        },
        /**
         * onClear - 清除操作
         */
        onClear: function () {
            var _this = this;
            this.page = 1;
            this.limit = 10;
            // @ts-ignore
            this.clear().then(function () {
                // @ts-ignore
                _this.fetchData();
            });
        },
        /**
         * sortOrder
         * @param columnName
         */
        sortOrder: function (columnName) {
            // @ts-ignore
            return this[this.getOrderFieldProp()] === columnName ? this[this.getOrderProp()] : '';
        },
        /**
         * getSearchTablePagination
         */
        getSearchTablePagination: function () {
            var _this = this;
            return {
                onChange: function (page, limit) {
                    _this.page = page;
                    _this.limit = limit;
                    // @ts-ignore
                    _this.fetchData();
                },
                onShowSizeChange: function (page, limit) {
                    _this.page = page;
                    _this.limit = limit;
                    // @ts-ignore
                    _this.fetchData();
                },
                showTotal: function (total) {
                    // @ts-ignore
                    return adherev_util_intl_1.default.tv("\u5F53\u524D {page}-{pageSize}/\u5171 {total}\u6761", {
                        page: _this.page,
                        pageSize: _this.limit,
                        total: total,
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
        getPagination: function () {
            return this.getSearchTablePagination();
        },
        /**
         * renderSearchTable
         * @description - renderSearchTable
         */
        renderSearchTable: function () {
            return (<div 
            // @ts-ignore
            class={"".concat(exports.selectorPrefix, "-wrap")}>
          {
                // @ts-ignore
                this.renderSuspense()}
        </div>);
        },
    },
    render: function () {
        return this.renderSearchTable();
    },
});
//# sourceMappingURL=searchtable.jsx.map