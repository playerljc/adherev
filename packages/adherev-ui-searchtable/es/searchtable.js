import _mergeJSXProps from"@vue/babel-helper-vue-jsx-merge-props";import"core-js/modules/es.symbol.js";import"core-js/modules/es.symbol.description.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.sort.js";import"core-js/modules/es.string.starts-with.js";import{__assign,__spreadArray}from"tslib";import{Button,Table}from"ant-design-vue";import classNames from"classnames";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import FlexLayout from"@baifendian/adherev-ui-flexlayout";import Suspense from"@baifendian/adherev-ui-suspense";import Util from"@baifendian/adherev-util";import Intl from"@baifendian/adherev-util-intl";import Mixins from"@baifendian/adherev-util-mixins";import ColumnResizable,{SearchTableResizableObserver,SearchTableResizableTitle}from"./Extension/ColumnResizable";import ColumnSetting from"./Extension/ColumnSetting";import TableDensitySetting from"./Extension/TableDensitySetting";import{TableDensity}from"./types";var selectorPrefix="adherev-ui-searchtable",updatedEx=Mixins.updatedEx,watchEffect=Mixins.watchEffect,Fixed=FlexLayout.Fixed,Auto=FlexLayout.Auto,extend=Util._util.extend,NUMBER_GENERATOR_RULE_ALONE=Symbol(),NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),ROW_SELECTION_NORMAL_MODE=Symbol(),ROW_SELECTION_CONTINUOUS_MODE=Symbol(),SearchTable=extend({className:"SearchTable",mixins:[Suspense,updatedEx,watchEffect],props:{className:{type:String,default:""},wrapStyle:{type:String,default:""},tableClassName:{type:String,default:""},tableStyle:{type:String,default:""},searchClassName:{type:String,default:""},searchStyle:{type:String,default:""},reset:{type:Boolean,default:!0},antdTableProps:{type:Object,default:function(){return{}}},isShowExpandSearch:{type:Boolean,default:!0},defaultExpandSearchCollapse:{type:Boolean,default:!0},fitSearch:{type:Boolean,default:!0},fitTable:{type:Boolean,default:!0},autoFixed:{type:Boolean,default:!0},fixedHeaderAutoTable:{type:Boolean,default:!1},fixedTableSpaceBetween:{type:Boolean,default:!1},showColumnSetting:{type:Boolean,default:!1}},scopedSlots:["searchFormBefore","searchFormAfter","searchForm","tableHeader","tableFooter","tableNumberColumn","columnSetting","tableDensitySetting","searchFooter","table","inner","searchTable"],data:function(){return{page:1,limit:10,expand:this.defaultExpandSearchCollapse,scrollY:0,columnSetting:[],tableDensity:TableDensity.DEFAULT,$columnResizable:new ColumnResizable,$columnObserver:null}},computed:{components:function(){var e=this.getTableColumns(this.$createElement);return{header:{cell:SearchTableResizableTitle(e)}}}},provide:function(){return{getContext:this.getContext}},created:function(){this.columnSetting=this.getTableColumns(this.$createElement).map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})}),this.tableDensity=this.getTableDensity()},updatedEx:function(e){this.$refs.tableWrapRef&&(this.searchTableResizableEffectLayout(),this.fixedHeaderAutoTableEffectLayout(e))},watchEffect:function(){this.columnSettingEffect()},beforeDestroy:function(){var e;this.fixedHeaderAutoTable&&null!=(e=this.getScrollBodyEl())&&e.removeEventListener("scroll",this.onScrollBodyScroll)},methods:{getContext:function(){return this},searchTableResizableEffectLayout:function(){this.$data.$columnObserver||(this.$data.$columnObserver=SearchTableResizableObserver(this))},fixedHeaderAutoTableEffectLayout:function(e){var t,n;this.fixedHeaderAutoTable&&(t=this.getData())&&t.length&&(0===e.scrollY&&0===this.scrollY||e.scrollY!==this.scrollY||e.expand!==this.expand)&&(t=this.$refs.tableWrapRef,(e=this.getScrollBodyEl())&&(e.removeEventListener("scroll",this.onScrollBodyScroll),e.addEventListener("scroll",this.onScrollBodyScroll)),e=(null==(e=t.querySelector(".ant-table-thead"))?void 0:e.offsetHeight)||0,n=(null==(n=t.querySelector(".ant-table-pagination"))?void 0:n.offsetHeight)||0,this.scrollY=t.clientHeight-(e+(n?n+32:0)))},columnSettingEffect:function(){var e,t,n,o=this,r=this.columnSetting||[],i=this.getTableColumns(this.$createElement).map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})});(null==r?void 0:r.length)!==i.length?this.columnSetting=i:(e=null==(e=null==r?void 0:r.map)?void 0:e.call(r,function(e){return e[o.getRowKey()]}),t=null==(t=null==i?void 0:i.map)?void 0:t.call(i,function(e){return e[o.getRowKey()]}),(null==e?void 0:e.toString())!==t.toString()&&(n=this.getRowKey()||"id",this.columnSetting=null==i?void 0:i.map(function(t){var e=null==r?void 0:r.find(function(e){return e[n]===t[n]});return __assign(__assign({},t),{display:!e||e.display})})))},onSearchPanelCollapseBefore:function(){},onSearchPanelCollapseAfter:function(){},onTableChange:function(t,n,o){this[this.getOrderFieldProp()]=o.field||this.getOrderFieldValue(),this[this.getOrderProp()]=o.order||this.getOrderPropValue(),this.$nextTick(function(){var e;o.order&&(this.fetchData(),null!=(e=this.onSubTableChange))&&e.call(this,t,n,o)})},onClear:function(){var e=this;return new Promise(function(t){e.page=1,e.limit=e.getLimit(),e.$nextTick(function(){var e=this;this.clear().then(function(){e.fetchData(),t()})})})},onScrollBodyScroll:function(){var e=this.getScrollBodyEl();this.getScrollHeaderEl().scrollLeft=null==e?void 0:e.scrollLeft},sortOrder:function(e){return this[this.getOrderFieldProp()]===e?this[this.getOrderProp()]:""},getLimit:function(){return 10},getPagination:function(){var n=this;return{onChange:function(e,t){n.page=e,n.limit=t,n.$nextTick(function(){this.fetchData()})},onShowSizeChange:function(e,t){n.page=e,n.limit=t,n.$nextTick(function(){this.fetchData()})},showTotal:function(e){return Intl.tv("当前 {page}-{pageSize}/共 {total}条",{page:n.page,pageSize:n.limit,total:e})},total:this.getTotal(),current:this.page,pageSize:this.limit,showQuickJumper:!0}},getTableDensity:function(){return TableDensity.DEFAULT},getTableColumns:function(o){var r,i,a,l=this,e=this.isShowNumber(),t=this.getTableNumberColumnWidth(),n=this.getColumns().filter(function(e){return!("authorized"in e)||e.authorized()}).map(function(e,t){return"resizable"in e&&e.resizable?l.$data.$columnResizable.searchTableResizableColumnItem(l,t,e):e});return e?(r=this.getNumberGeneratorRule()||SearchTable.NUMBER_GENERATOR_RULE_ALONE,e=this.page,i=void 0===e?0:e,e=this.limit,a=void 0===e?10:e,[__assign(__assign({},this.getTableNumberColumnProps&&this.getTableNumberColumnProps()||{}),{title:Intl.tv("序号"),key:"_number",align:"center",width:t||80,customRender:function(e,t,n){return o(ConditionalRender,{attrs:{conditional:r===NUMBER_GENERATOR_RULE_ALONE}},[o("span",{slot:"default"},[l.renderTableNumberColumn(o,n+1,{value:e,record:t,index:n})]),o("span",{slot:"noMatch"},[l.renderTableNumberColumn(o,(i-1)*a+(n+1),{value:e,record:t,index:n})])])}})].concat(n)):n},getSortColumnSetting:function(){var e=__spreadArray([],this.columnSetting,!0);return e.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),e},getScrollHeaderEl:function(){var e=this.$refs.tableWrapRef;return null==e?void 0:e.querySelector(".ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-header")},getScrollBodyEl:function(){var e=this.$refs.tableWrapRef;return null==e?void 0:e.querySelector(".ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-body")},renderTableNumberColumn:function(e,t,n){var o,r;return void 0===t&&(t=""),(null==(r=null==(o=this.$scopedSlots)?void 0:o.tableNumberColumn)?void 0:r.call(o,{context:this.getContext(),number:t}))||e("span",[t])},renderColumnSetting:function(e){var t,n,o=this,r=__spreadArray([],this.columnSetting,!0);return r.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),(null==(n=null==(t=this.$scopedSlots)?void 0:t.columnSetting)?void 0:n.call(t,{context:this.getContext(),columns:r}))||e(ColumnSetting,{attrs:{columns:r},on:{showColumns:function(t){var e;o.columnSetting=null==(e=o.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{display:t})})},reset:function(){o.columnSetting=o.getTableColumns(e).map(function(e,t){return __assign(__assign({},e),{display:!0,sort:t})})},displayColumn:function(t,n){var e;o.columnSetting=null==(e=o.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{display:e.key===t.key?n:e.display})})},sortEnd:function(t){var e;o.columnSetting=null==(e=o.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{sort:t.get(e.key)})})}}})},renderTableDensitySetting:function(){var e,t,n=this;return(null==(t=null==(e=this.$scopedSlots)?void 0:e.tableDensitySetting)?void 0:t.call(e,this))||h(TableDensitySetting,{attrs:{density:this.tableDensity},on:{change:function(e){n.tableDensity=e},reset:function(){n.tableDensity=n.getTableDensity()}}})},renderSearchFooter:function(n){var e,t=this,o=this.isShowExpandSearch,r=[n(Button,{class:"".concat(selectorPrefix,"-searchfooteritem"),attrs:{type:"primary"},key:"search",on:{click:function(){t.page=1,t.$nextTick(function(){this.onSearch()})}}},[n("i",{class:classNames("".concat(selectorPrefix,"-searchfooteritem-search-btn-icon"),"iconfont iconsousuo")}),Intl.tv("查询")]),n(Button,{class:"".concat(selectorPrefix,"-searchfooteritem"),key:"reset",on:{click:this.onClear}},[Intl.tv("重置")])],o=(o&&r.push(n(ConditionalRender,{attrs:{conditional:this.expand}},[n("a",{slot:"noMatch",key:"expand",class:"".concat(selectorPrefix,"-searchfooteritem-expand-search-up-btn"),on:{click:function(){t.onSearchPanelCollapseBefore&&t.onSearchPanelCollapseBefore(),t.expand=!0,t.$nextTick(function(){this.onSearchPanelCollapseAfter&&this.onSearchPanelCollapseAfter()})}}},[n("span",[Intl.tv("展开")]),n("i",{class:"iconfont iconup"})]),n("a",{key:"hide",class:"".concat(selectorPrefix,"-searchfooteritem-expand-search-down-btn"),on:{click:function(){t.onSearchPanelCollapseBefore&&t.onSearchPanelCollapseBefore(),t.expand=!1,t.$nextTick(function(){this.onSearchPanelCollapseAfter&&this.onSearchPanelCollapseAfter()})}}},[n("span",[Intl.tv("关闭")]),n("i",{class:"iconfont icondownarrow"})])])),this.renderSearchFooterItems(n,r)||__spreadArray([],r,!0));return n("div",{class:"".concat(selectorPrefix,"-searchfooterwrapper")},[(null==(e=null==(r=this.$scopedSlots)?void 0:r.searchFooter)?void 0:e.call(r,{context:this.getContext(),items:o}))||o.map(function(e,t){return n("div",{key:t,class:"".concat(selectorPrefix,"-searchfooteritem")},[e])})])},renderTable:function(e){if(null!=(o=this.$scopedSlots)&&o.table)return null==(n=null==(o=this.$scopedSlots)?void 0:o.table)?void 0:n.call(o,this);var t,n=this.antdTableProps,o=this.fixedHeaderAutoTable,r=__assign({},this.getScopedSlots(e)||{}),i={},a={},l=n||{};for(t in l)t.startsWith("on")?a[t.substring(2).toLowerCase()]=l[t]:i[t]=l[t];var n=this.columnSetting,s=void 0===n?[]:n,n=this.tableDensity,c=this.getTableColumns(e).map(function(e,t){return __assign(__assign({},s[t]),e)}).filter(function(e){return e.display}),r=(c.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),{scopedSlots:r,props:__assign({rowKey:this.getRowKey(),dataSource:this.getData(),columns:c,size:n,pagination:this.getPagination(),rowSelection:this.getRowSelection(),components:this.components},i||{}),on:__assign({change:this.onTableChange},a||{})});return o&&(c=this.scrollY,i&&i.scroll?r.props.scroll.y=c:r.props.scroll={y:c}),e(Table,_mergeJSXProps([{},r]))},renderInner:function(e){var t,n,o,r,i,a,l,s,c,u;return null!=(t=this.$scopedSlots)&&t.inner?null==(u=null==(t=this.$scopedSlots)?void 0:t.inner)?void 0:u.call(t,this):(t=(u=this).className,n=u.wrapStyle,o=u.tableClassName,r=u.tableStyle,i=u.searchStyle,a=u.searchClassName,l=u.fitSearch,s=u.fitTable,c=u.autoFixed,u=u.fixedTableSpaceBetween,e(FlexLayout,{attrs:{direction:"vertical"},style:n||"",class:classNames(selectorPrefix,u?"fixedtablespacebetween":"",t||"")},[e(Fixed,{class:classNames("".concat(selectorPrefix,"-searchwrapper"),a||""),style:i||"",attrs:{fit:l}},[e(FlexLayout,{attrs:{direction:"vertical"}},[e(ConditionalRender,{attrs:{conditional:this.$scopedSlots.searchFormBefore||!!this.renderSearchFormBefore}},[e(Fixed,{slot:"default"},[(null==(u=null==(n=this.$scopedSlots)?void 0:n.searchFormBefore)?void 0:u.call(n,this))||this.renderSearchFormBefore(e)])]),e(Fixed,[e(ConditionalRender,{attrs:{conditional:this.expand}},[(null==(a=null==(t=this.$scopedSlots)?void 0:t.searchForm)?void 0:a.call(t,this))||this.renderSearchForm(e)])]),e(Fixed,[this.renderSearchFooter(e)]),e(ConditionalRender,{attrs:{conditional:this.$scopedSlots.searchFormAfter||!!this.renderSearchFormAfter}},[e(Fixed,{slot:"default"},[(null==(l=null==(i=this.$scopedSlots)?void 0:i.searchFormAfter)?void 0:l.call(i,this))||this.renderSearchFormAfter(e)])])])]),e(ConditionalRender,{attrs:{conditional:!!this.$scopedSlots.tableHeader||!!this.renderTableHeader}},[e(Fixed,{slot:"default"},[(null==(n=null==(u=this.$scopedSlots)?void 0:u.tableHeader)?void 0:n.call(u,this))||this.renderTableHeader(e)])]),e(Auto,{class:classNames("".concat(selectorPrefix,"-autowrapper"),o||"",c?"autofixed":""),style:r||"",attrs:{fit:s,autoFixed:c}},[e("div",{ref:"tableWrapRef",class:"".concat(selectorPrefix,"-tablewrapper")},[this.renderTable(e)])]),e(ConditionalRender,{attrs:{conditional:!!this.$scopedSlots.tableFooter||!!this.renderTableFooter}},[e(Fixed,{slot:"default"},[(null==(t=null==(a=this.$scopedSlots)?void 0:a.tableFooter)?void 0:t.call(a,this))||this.renderTableFooter(e)])])]))},renderSearchTable:function(e){var t,n;return(null==(n=null==(t=this.$scopedSlots)?void 0:t.searchTable)?void 0:n.call(t,this))||e("div",{class:"".concat(selectorPrefix,"-wrap")},[this.$renderSuspense(e)])}},render:function(e){return this.renderSearchTable(e)}});export default SearchTable;export{selectorPrefix,NUMBER_GENERATOR_RULE_ALONE,NUMBER_GENERATOR_RULE_CONTINUITY,ROW_SELECTION_NORMAL_MODE,ROW_SELECTION_CONTINUOUS_MODE};
//# sourceMappingURL=searchtable.js.map
