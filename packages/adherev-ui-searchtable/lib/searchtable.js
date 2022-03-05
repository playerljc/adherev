"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_babelHelperVueJsxMergeProps=_interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.symbol.js"),require("core-js/modules/es.symbol.description.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.string.starts-with.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.array.concat.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.NUMBER_GENERATOR_RULE_CONTINUITY=exports.NUMBER_GENERATOR_RULE_ALONE=void 0;var tslib_1=require("tslib"),vue_1=tslib_1.__importDefault(require("vue")),ant_design_vue_1=require("ant-design-vue"),classnames_1=tslib_1.__importDefault(require("classnames")),adherev_ui_suspense_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-suspense")),adherev_ui_flexlayout_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-flexlayout")),adherev_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-conditionalrender")),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),adherev_util_mixins_1=tslib_1.__importDefault(require("@baifendian/adherev-util-mixins")),selectorPrefix="adherev-ui-searchtable",updatedEx=adherev_util_mixins_1.default.updatedEx,Fixed=adherev_ui_flexlayout_1.default.Fixed,Auto=adherev_ui_flexlayout_1.default.Auto;exports.NUMBER_GENERATOR_RULE_ALONE=Symbol(),exports.NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),exports.default=vue_1.default.extend({mixins:[adherev_ui_suspense_1.default,updatedEx],props:{wrapStyle:{type:String,default:""},className:{type:String,default:""},tableClassName:{type:String,default:""},tableStyle:{type:String,default:""},searchClassName:{type:String,default:""},searchStyle:{type:String,default:""},reset:{type:Boolean,default:!0},antdTableProps:{type:Object,default:function(){return{}}},isShowExpandSearch:{type:Boolean,default:!0},defaultExpandSearchCollapse:{type:Boolean,default:!0},fitSearch:{type:Boolean,default:!0},fitTable:{type:Boolean,default:!0},autoFixed:{type:Boolean,default:!0},fixedHeaderAutoTable:{type:Boolean,default:!1},fixedTableSpaceBetween:{type:Boolean,default:!1}},data:function(){return{page:1,limit:10,expand:this.defaultExpandSearchCollapse,scrollY:0}},updatedEx:function(e){var t,r;this.$refs.tableWrapRef&&(!this.fixedHeaderAutoTable||(r=this.getData())&&r.length&&(0===e.scrollY&&0===this.scrollY||e.scrollY!==this.scrollY||e.expand!==this.expand)&&(t=this.$refs.tableWrapRef,(r=this.getScrollBodyEl())&&(r.removeEventListener("scroll",this.onScrollBodyScroll),r.addEventListener("scroll",this.onScrollBodyScroll)),r=(null===(e=t.querySelector(".ant-table-thead"))||void 0===e?void 0:e.offsetHeight)||0,e=(null===(e=t.querySelector(".ant-table-pagination"))||void 0===e?void 0:e.offsetHeight)||0,this.scrollY=t.clientHeight-(r+(e?e+32:0))))},beforeDestroy:function(){var e;this.fixedHeaderAutoTable&&null!==(e=this.getScrollBodyEl())&&void 0!==e&&e.removeEventListener("scroll",this.onScrollBodyScroll)},methods:{onScrollBodyScroll:function(){var e=this.getScrollBodyEl();this.getScrollHeaderEl().scrollLeft=null==e?void 0:e.scrollLeft},getScrollHeaderEl:function(){var e=this.$refs.tableWrapRef;return null==e?void 0:e.querySelector(".ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-header")},getScrollBodyEl:function(){var e=this.$refs.tableWrapRef;return null==e?void 0:e.querySelector(".ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-body")},renderTableNumberColumn:function(e,t,r){return e("span",[t=void 0===t?"":t])},renderSearchTableInner:function(e){var t=this,r=t.wrapStyle,a=t.className,i=t.tableClassName,l=t.tableStyle,s=t.searchStyle,n=t.searchClassName,o=t.fitSearch,d=t.fitTable,u=t.autoFixed,t=t.fixedTableSpaceBetween;return e(adherev_ui_flexlayout_1.default,{attrs:{direction:"vertical"},style:r||"",class:classnames_1.default.apply(void 0,tslib_1.__spreadArrays([selectorPrefix,t?"fixedtablespacebetween":""],(a||"").split(/\s+/)))},[e(Fixed,{style:s||"",class:classnames_1.default.apply(void 0,tslib_1.__spreadArrays([selectorPrefix+"-searchwrapper"],(n||"").split(/\s+/))),attrs:{fit:o}},[e(adherev_ui_flexlayout_1.default,{attrs:{direction:"vertical"}},[e(Fixed,[e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:this.expand}},[this.renderSearchForm(e)])]),e(Fixed,[this.renderSearchFooter(e)])])]),e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!!this.$slots.tableHeader}},[e(Fixed,[this.$slots.tableHeader])]),e(Auto,{style:l||"",class:classnames_1.default.apply(void 0,tslib_1.__spreadArrays([selectorPrefix+"-autowrapper"],(i||"").split(/\s+/),[u?"autofixed":""])),attrs:{fit:d,autoFixed:u}},[e("div",{ref:"tableWrapRef",class:selectorPrefix+"-tablewrapper"},[this.renderTable(e)])]),e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!!this.$slots.tableFooter}},[e(Fixed,[this.$slots.tableFooter])])])},renderInner:function(e){return this.renderSearchTableInner(e)},renderSearchTableSearchFooter:function(t){var e=this,r=this.isShowExpandSearch,a=[t(ant_design_vue_1.Button,{class:selectorPrefix+"-searchfooteritem",attrs:{type:"primary"},on:{click:function(){e.page=1,e.onSearch()}}},[t("i",{class:"iconfont iconsousuo"}),adherev_util_intl_1.default.tv("查询")]),t(ant_design_vue_1.Button,{class:selectorPrefix+"-searchfooteritem",on:{click:this.onClear}},[adherev_util_intl_1.default.tv("重置")])];r&&a.push(t(adherev_ui_conditionalrender_1.default,{attrs:{conditional:this.expand}},[t("a",{slot:"noMatch",style:"display: flex; align-items: center",on:{click:function(){e.expand=!0}}},[t("span",{style:"margin-right: 5px;"},[adherev_util_intl_1.default.tv("展开")]),t("img",{style:"width: 16px;",attrs:{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMjYyMTM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MjQ0IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOTkuMzYgNTcyLjc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDIyLjYyNC05LjM3NmwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OEw1MzguNzUyIDIwMS4zNzZhMzIgMzIgMCAwIDAtNDUuMjggMEwxNzYuNzA0IDUxOC4xNDRhMzEuOTY4IDMxLjk2OCAwIDAgMCAyMi42NTYgNTQuNjI0eiBtMzM5LjQyNC0xMTUuMzkyYTMyIDMyIDAgMCAwLTQ1LjI4IDBMMTc2LjczNiA3NzQuMTQ0YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4IDQ1LjI0OGwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OGwtMzA4LjMyLTMwOC4zNTJ6IiBwLWlkPSIxNTI0NSIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjwvc3ZnPg==",alt:"up"}})]),t("a",{style:"display: flex; align-items: center",on:{click:function(){e.expand=!1}}},[t("span",{style:"margin-right: 5px;"},[adherev_util_intl_1.default.tv("关闭")]),t("img",{style:"width: 16px;",attrs:{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMTc4MzI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0ODY3IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00OTMuNTA0IDU1OC4xNDRhMzEuOTA0IDMxLjkwNCAwIDAgMCA0NS4yOCAwbDMwOC4zNTItMzA4LjM1MmEzMS45NjggMzEuOTY4IDAgMSAwLTQ1LjI0OC00NS4yNDhMNTE2LjE2IDQ5MC4yNzIgMjIxLjk4NCAxOTYuMTI4YTMxLjk2OCAzMS45NjggMCAxIDAtNDUuMjQ4IDQ1LjI0OGwzMTYuNzY4IDMxNi43Njh6IiBwLWlkPSIxNDg2OCIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04MDEuODg4IDQ2MC41NzZMNTE2LjE2IDc0Ni4zMDQgMjIyLjAxNiA0NTIuMTZhMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDggNDUuMjQ4bDMxNi43NjggMzE2Ljc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDQ1LjI4IDBsMzA4LjM1Mi0zMDguMzUyYTMyIDMyIDAgMSAwLTQ1LjI4LTQ1LjI0OHoiIHAtaWQ9IjE0ODY5IiBmaWxsPSIjMTg5MGZmIj48L3BhdGg+PC9zdmc+",alt:"down"}})])]));a=this.renderSearchFooterItems(t,a)||tslib_1.__spreadArrays(a);return t("div",{class:selectorPrefix+"-searchfooterwrapper"},[a.map(function(e){return t("div",{class:selectorPrefix+"-searchfooteritem"},[e])})])},renderSearchFooter:function(e){return this.renderSearchTableSearchFooter(e)},renderSearchTableTable:function(e){var t,r=this.antdTableProps,a=this.fixedHeaderAutoTable,i=tslib_1.__assign({},this.getScopedSlots(e)||{}),l={},s={},n=r||{};for(t in n)t.startsWith("on")?s[t.substring(2).toLowerCase()]=n[t]:l[t]=n[t];i={scopedSlots:i,props:tslib_1.__assign({rowKey:this.getRowKey(),dataSource:this.getData(),columns:this.getTableColumns(e),pagination:this.getPagination(),rowSelection:this.getRowSelection()},l||{}),on:tslib_1.__assign({change:this.onTableChange},s||{})};return a&&(a=this.scrollY,l&&l.scroll?i.props.scroll.y=a:i.props.scroll={y:a}),e(ant_design_vue_1.Table,(0,_babelHelperVueJsxMergeProps.default)([{},i]))},renderTable:function(e){return this.renderSearchTableTable(e)},getSearchTableTableColumns:function(s){var n=this,e=this.isShowNumber(),t=this.getTableNumberColumnWidth(),r=this.getColumns().filter(function(e){return!("authorized"in e)||e.authorized()});return e?[{title:adherev_util_intl_1.default.tv("序号"),key:"number",align:"center",width:t||80,customRender:function(e,t,r){var a=n.getNumberGeneratorRule()||exports.NUMBER_GENERATOR_RULE_ALONE,i=n.page,l=n.limit;return s(adherev_ui_conditionalrender_1.default,{attrs:{conditional:a===exports.NUMBER_GENERATOR_RULE_ALONE}},[s("span",[n.renderTableNumberColumn(s,r+1,{record:t,index:r})]),s("span",{slot:"noMatch"},[n.renderTableNumberColumn(s,(i-1)*l+(r+1),{record:t,index:r})])])}}].concat(r):r},getTableColumns:function(e){return this.getSearchTableTableColumns(e)},onTableChange:function(e,t,r){this[this.getOrderFieldProp()]=r.field,this[this.getOrderProp()]=r.order,r.order&&(this.fetchData(),this.onSubTableChange(e,t,r))},onClear:function(){var e=this;this.page=1,this.limit=10,this.clear().then(function(){e.fetchData()})},sortOrder:function(e){return this[this.getOrderFieldProp()]===e?this[this.getOrderProp()]:""},getSearchTablePagination:function(){var r=this;return{onChange:function(e,t){r.page=e,r.limit=t,r.fetchData()},onShowSizeChange:function(e,t){r.page=e,r.limit=t,r.fetchData()},showTotal:function(e){return adherev_util_intl_1.default.tv("当前 {page}-{pageSize}/共 {total}条",{page:r.page,pageSize:r.limit,total:e})},total:this.getTotal(),current:this.page,pageSize:this.limit,showQuickJumper:!0}},getPagination:function(){return this.getSearchTablePagination()},renderSearchTable:function(e){return e("div",{class:selectorPrefix+"-wrap"},[this.renderSuspense(e)])}},render:function(e){return this.renderSearchTable(e)}});
//# sourceMappingURL=searchtable.js.map
