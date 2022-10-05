import _mergeJSXProps from"@vue/babel-helper-vue-jsx-merge-props";import"core-js/modules/es.symbol.js";import"core-js/modules/es.symbol.description.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.array.sort.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.split.js";import"core-js/modules/es.string.starts-with.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.array.concat.js";import{__assign,__spreadArrays}from"tslib";import{Button,Table}from"ant-design-vue";import classNames from"classnames";import Vue from"vue";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import FlexLayout from"@baifendian/adherev-ui-flexlayout";import Suspense from"@baifendian/adherev-ui-suspense";import Intl from"@baifendian/adherev-util-intl";import Mixins from"@baifendian/adherev-util-mixins";import ColumnResizable,{SearchTableResizableObserver,SearchTableResizableTitle}from"./Extension/ColumnResizable";import{TableDensity}from"./types";var selectorPrefix="adherev-ui-searchtable",updatedEx=Mixins.updatedEx,Fixed=FlexLayout.Fixed,Auto=FlexLayout.Auto,NUMBER_GENERATOR_RULE_ALONE=Symbol(),NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),ROW_SELECTION_NORMAL_MODE=Symbol(),ROW_SELECTION_CONTINUOUS_MODE=Symbol(),SearchTable=Vue.extend({mixins:[Suspense,updatedEx],props:{wrapStyle:{type:String,default:""},className:{type:String,default:""},tableClassName:{type:String,default:""},tableStyle:{type:String,default:""},searchClassName:{type:String,default:""},searchStyle:{type:String,default:""},reset:{type:Boolean,default:!0},antdTableProps:{type:Object,default:function(){return{}}},isShowExpandSearch:{type:Boolean,default:!0},defaultExpandSearchCollapse:{type:Boolean,default:!0},fitSearch:{type:Boolean,default:!0},fitTable:{type:Boolean,default:!0},autoFixed:{type:Boolean,default:!0},fixedHeaderAutoTable:{type:Boolean,default:!1},fixedTableSpaceBetween:{type:Boolean,default:!1}},data:function(){return{page:1,limit:10,expand:this.defaultExpandSearchCollapse,scrollY:0,columnSetting:[],tableDensity:TableDensity.DEFAULT,$columnResizable:new ColumnResizable,$columnObserver:null}},computed:{components:function(){return{header:{cell:SearchTableResizableTitle(this.getSearchTableTableColumns())}}}},provide:function(){return{getContext:this.getContext}},updatedEx:function(e){var t,r;this.$refs.tableWrapRef&&(this.$data.$columnObserver||(this.$data.$columnObserver=SearchTableResizableObserver(this)),!this.fixedHeaderAutoTable||(r=this.getData())&&r.length&&(0===e.scrollY&&0===this.scrollY||e.scrollY!==this.scrollY||e.expand!==this.expand)&&(t=this.$refs.tableWrapRef,(r=this.getScrollBodyEl())&&(r.removeEventListener("scroll",this.onScrollBodyScroll),r.addEventListener("scroll",this.onScrollBodyScroll)),r=(null===(e=t.querySelector(".ant-table-thead"))||void 0===e?void 0:e.offsetHeight)||0,e=(null===(e=t.querySelector(".ant-table-pagination"))||void 0===e?void 0:e.offsetHeight)||0,this.scrollY=t.clientHeight-(r+(e?e+32:0))))},beforeDestroy:function(){var e;this.fixedHeaderAutoTable&&null!==(e=this.getScrollBodyEl())&&void 0!==e&&e.removeEventListener("scroll",this.onScrollBodyScroll)},created:function(){this.columnSetting=this.getTableColumns().map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})}),this.tableDensity=this.getTableDensity()},methods:{getContext:function(){return this},getTableDensity:function(){return TableDensity.DEFAULT},getSortColumnSetting:function(){var e=__spreadArrays(this.columnSetting);return e.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),e},onScrollBodyScroll:function(){var e=this.getScrollBodyEl();this.getScrollHeaderEl().scrollLeft=null==e?void 0:e.scrollLeft},getScrollHeaderEl:function(){var e=this.$refs.tableWrapRef;return null==e?void 0:e.querySelector(".ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-header")},getScrollBodyEl:function(){var e=this.$refs.tableWrapRef;return null==e?void 0:e.querySelector(".ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-body")},renderTableNumberColumn:function(e,t,r){return e("span",[t=void 0===t?"":t])},renderSearchTableInner:function(e){var t=this,r=t.wrapStyle,a=t.className,i=t.tableClassName,n=t.tableStyle,o=t.searchStyle,s=t.searchClassName,l=t.fitSearch,c=t.fitTable,d=t.autoFixed,t=t.fixedTableSpaceBetween;return e(FlexLayout,{attrs:{direction:"vertical"},style:r||"",class:classNames.apply(void 0,__spreadArrays([selectorPrefix,t?"fixedtablespacebetween":""],(a||"").split(/\s+/)))},[e(Fixed,{style:o||"",class:classNames.apply(void 0,__spreadArrays([selectorPrefix+"-searchwrapper"],(s||"").split(/\s+/))),attrs:{fit:l}},[e(FlexLayout,{attrs:{direction:"vertical"}},[e(Fixed,[e(ConditionalRender,{attrs:{conditional:this.expand}},[this.renderSearchForm(e)])]),e(Fixed,[this.renderSearchFooter(e)])])]),e(ConditionalRender,{attrs:{conditional:!!this.$slots.tableHeader}},[e(Fixed,[this.$slots.tableHeader])]),e(Auto,{style:n||"",class:classNames.apply(void 0,__spreadArrays([selectorPrefix+"-autowrapper"],(i||"").split(/\s+/),[d?"autofixed":""])),attrs:{fit:c,autoFixed:d}},[e("div",{ref:"tableWrapRef",class:selectorPrefix+"-tablewrapper"},[this.renderTable(e)])]),e(ConditionalRender,{attrs:{conditional:!!this.$slots.tableFooter}},[e(Fixed,[this.$slots.tableFooter])])])},renderInner:function(e){return this.renderSearchTableInner(e)},renderSearchTableSearchFooter:function(t){var e=this,r=this.isShowExpandSearch,a=[t(Button,{class:selectorPrefix+"-searchfooteritem",attrs:{type:"primary"},on:{click:function(){e.page=1,e.onSearch()}}},[t("i",{class:"iconfont iconsousuo"}),Intl.tv("查询")]),t(Button,{class:selectorPrefix+"-searchfooteritem",on:{click:this.onClear}},[Intl.tv("重置")])];r&&a.push(t(ConditionalRender,{attrs:{conditional:this.expand}},[t("a",{slot:"noMatch",style:"display: flex; align-items: center",on:{click:function(){e.expand=!0}}},[t("span",{style:"margin-right: 5px;"},[Intl.tv("展开")]),t("img",{style:"width: 16px;",attrs:{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMjYyMTM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MjQ0IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOTkuMzYgNTcyLjc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDIyLjYyNC05LjM3NmwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OEw1MzguNzUyIDIwMS4zNzZhMzIgMzIgMCAwIDAtNDUuMjggMEwxNzYuNzA0IDUxOC4xNDRhMzEuOTY4IDMxLjk2OCAwIDAgMCAyMi42NTYgNTQuNjI0eiBtMzM5LjQyNC0xMTUuMzkyYTMyIDMyIDAgMCAwLTQ1LjI4IDBMMTc2LjczNiA3NzQuMTQ0YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4IDQ1LjI0OGwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OGwtMzA4LjMyLTMwOC4zNTJ6IiBwLWlkPSIxNTI0NSIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjwvc3ZnPg==",alt:"up"}})]),t("a",{style:"display: flex; align-items: center",on:{click:function(){e.expand=!1}}},[t("span",{style:"margin-right: 5px;"},[Intl.tv("关闭")]),t("img",{style:"width: 16px;",attrs:{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMTc4MzI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0ODY3IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00OTMuNTA0IDU1OC4xNDRhMzEuOTA0IDMxLjkwNCAwIDAgMCA0NS4yOCAwbDMwOC4zNTItMzA4LjM1MmEzMS45NjggMzEuOTY4IDAgMSAwLTQ1LjI0OC00NS4yNDhMNTE2LjE2IDQ5MC4yNzIgMjIxLjk4NCAxOTYuMTI4YTMxLjk2OCAzMS45NjggMCAxIDAtNDUuMjQ4IDQ1LjI0OGwzMTYuNzY4IDMxNi43Njh6IiBwLWlkPSIxNDg2OCIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04MDEuODg4IDQ2MC41NzZMNTE2LjE2IDc0Ni4zMDQgMjIyLjAxNiA0NTIuMTZhMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDggNDUuMjQ4bDMxNi43NjggMzE2Ljc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDQ1LjI4IDBsMzA4LjM1Mi0zMDguMzUyYTMyIDMyIDAgMSAwLTQ1LjI4LTQ1LjI0OHoiIHAtaWQ9IjE0ODY5IiBmaWxsPSIjMTg5MGZmIj48L3BhdGg+PC9zdmc+",alt:"down"}})])]));a=this.renderSearchFooterItems(t,a)||__spreadArrays(a);return t("div",{class:selectorPrefix+"-searchfooterwrapper"},[a.map(function(e){return t("div",{class:selectorPrefix+"-searchfooteritem"},[e])})])},renderSearchFooter:function(e){return this.renderSearchTableSearchFooter(e)},renderSearchTableTable:function(e){var t,r=this.antdTableProps,a=this.fixedHeaderAutoTable,i=__assign({},this.getScopedSlots(e)||{}),n={},o={},s=r||{};for(t in s)t.startsWith("on")?o[t.substring(2).toLowerCase()]=s[t]:n[t]=s[t];var l=this.columnSetting,r=this.getTableColumns(e).map(function(e,t){return __assign(__assign({},l[t]),e)}).filter(function(e){return e.display});r.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0});r={scopedSlots:i,props:__assign({rowKey:this.getRowKey(),dataSource:this.getData(),columns:r,size:this.tableDensity,pagination:this.getPagination(),rowSelection:this.getRowSelection(),components:this.components},n||{}),on:__assign({change:this.onTableChange},o||{})};return a&&(a=this.scrollY,n&&n.scroll?r.props.scroll.y=a:r.props.scroll={y:a}),e(Table,_mergeJSXProps([{},r]))},renderTable:function(e){return this.renderSearchTableTable(e)},getSearchTableTableColumns:function(o){var s=this,e=this.isShowNumber(),t=this.getTableNumberColumnWidth(),r=this.getColumns().filter(function(e){return!("authorized"in e)||e.authorized()}).map(function(e,t){return"resizable"in e&&e.resizable?s.$data.$columnResizable.searchTableResizableColumnItem(s,t,e):e});return e?[{title:Intl.tv("序号"),key:"_number",align:"center",width:t||80,customRender:function(e,t,r){var a=s.getNumberGeneratorRule()||NUMBER_GENERATOR_RULE_ALONE,i=s.page,n=s.limit;return o(ConditionalRender,{attrs:{conditional:a===NUMBER_GENERATOR_RULE_ALONE}},[o("span",[s.renderTableNumberColumn(o,r+1,{value:e,record:t,index:r})]),o("span",{slot:"noMatch"},[s.renderTableNumberColumn(o,(i-1)*n+(r+1),{value:e,record:t,index:r})])])}}].concat(r):r},getTableColumns:function(e){return this.getSearchTableTableColumns(e)},onTableChange:function(e,t,r){var a;this[this.getOrderFieldProp()]=r.field,this[this.getOrderProp()]=r.order,r.order&&(this.fetchData(),null!==(a=this.onSubTableChange)&&void 0!==a&&a.call(this,e,t,r))},onClear:function(){var e=this;this.page=1,this.limit=10,this.clear().then(function(){e.fetchData()})},sortOrder:function(e){return this[this.getOrderFieldProp()]===e?this[this.getOrderProp()]:""},getSearchTablePagination:function(){var r=this;return{onChange:function(e,t){r.page=e,r.limit=t,r.fetchData()},onShowSizeChange:function(e,t){r.page=e,r.limit=t,r.fetchData()},showTotal:function(e){return Intl.tv("当前 {page}-{pageSize}/共 {total}条",{page:r.page,pageSize:r.limit,total:e})},total:this.getTotal(),current:this.page,pageSize:this.limit,showQuickJumper:!0}},getPagination:function(){return this.getSearchTablePagination()},renderSearchTable:function(e){return e("div",{class:selectorPrefix+"-wrap"},[this.renderSuspense(e)])}},render:function(e){return this.renderSearchTable(e)}});export default SearchTable;export{selectorPrefix,NUMBER_GENERATOR_RULE_ALONE,NUMBER_GENERATOR_RULE_CONTINUITY,ROW_SELECTION_NORMAL_MODE,ROW_SELECTION_CONTINUOUS_MODE};
//# sourceMappingURL=searchtable.js.map