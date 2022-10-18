"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.array.concat.js"),require("core-js/modules/es.string.trim.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.array.find.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.object.keys.js"),require("core-js/modules/web.dom-collections.for-each.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),vue_1=require("vue"),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),vuexgenerator_1=require("@ctsj/vuexgenerator"),searchtable_1=tslib_1.__importStar(require("./searchtable")),selectorPrefix="adherev-ui-searchtableimplement",extend=adherev_util_1.default._util.extend;exports.default=function(t){return(0,vue_1.defineComponent)(extend({mixins:t?[searchtable_1.default,(0,vuexgenerator_1.cleanMixin)([t])]:[searchtable_1.default],data:function(){var e;return tslib_1.__assign(tslib_1.__assign({},this.getParams()),((e={})[this.getOrderFieldProp()]=this.getOrderFieldValue(),e[this.getOrderProp()]=this.getOrderPropValue()||"descend",e.searchParams=tslib_1.__assign({},this.getParams()),e.selectedRowKeys=[],e.selectedRows=[],e))},computed:t?tslib_1.__assign({},(0,vuexgenerator_1.mapState)([t])):{},methods:Object.assign({getFetchListPropName:function(){return""},getFetchListPropNameToFirstUpper:function(){var e=this.getFetchListPropName();return 1<e.length?"".concat(e.charAt(0).toUpperCase()).concat(e.substring(1)):e},onSelectChange:function(e,t){this[e]=t},onInputChange:function(e,t){this[e]=t.target.value.trim()},onDateTimeRangeChange:function(e,t){this[e[0]]=t&&t.length?t[0]:null,this[e[1]]=t&&t.length?t[1]:null},getParams:function(){return{}},getServiceName:function(){return t},getFetchDataParams:function(){return{}},isShowNumber:function(){return!0},getNumberGeneratorRule:function(){return searchtable_1.NUMBER_GENERATOR_RULE_CONTINUITY},getRowSelectionMode:function(){return searchtable_1.ROW_SELECTION_NORMAL_MODE},getTableNumberColumnWidth:function(){return 80},getTableNumberColumnProps:function(){return{}},getRowKey:function(){return"id"},getDataKey:function(){return"list"},getTotalKey:function(){return"totalCount"},getData:function(){return this["".concat(t).concat(this.getFetchListPropNameToFirstUpper())][this.getDataKey()]},getTotal:function(){return this["".concat(t).concat(this.getFetchListPropNameToFirstUpper())][this.getTotalKey()]},getRowSelection:function(){var n=this,e=this.selectedRowKeys,t=this;function s(e,r){var n=t.getRowKey();e?(t.selectedRowKeys=tslib_1.__spreadArray(tslib_1.__spreadArray([],t.selectedRowKeys||[],!0),r.map(function(e){return e[n]}),!0),t.selectedRows=tslib_1.__spreadArray(tslib_1.__spreadArray([],t.selectedRows||[],!0),r,!0)):(t.selectedRows=(t.selectedRows||[]).filter(function(t){return!r.find(function(e){return e[n]===t[n]})}),t.selectedRowKeys=t.selectedRowKeys.filter(function(t){return!r.find(function(e){return e[n]===t})}))}return{selectedRowKeys:e,onChange:function(e,t){n.getRowSelectionMode()!==searchtable_1.ROW_SELECTION_CONTINUOUS_MODE&&(n.selectedRowKeys=e,n.selectedRows=t)},onSelect:function(e,t){n.getRowSelectionMode()!==searchtable_1.ROW_SELECTION_NORMAL_MODE&&s(t,[e])},onSelectAll:function(e,t,r){n.getRowSelectionMode()!==searchtable_1.ROW_SELECTION_NORMAL_MODE&&s(e,r)}}},renderSearchForm:function(){return null},renderInner:function(){var e=this.$renderInnerSearchTable();return(0,_vue.createVNode)("div",{ref:"innerWrapRef",class:"".concat(selectorPrefix,"-tablewrapper")},[e])},renderSearchFooterItems:function(){return[]},getOrderFieldProp:function(){return"orderField"},getOrderFieldValue:function(){return""},getOrderProp:function(){return"order"},getOrderPropValue:function(){return"descend"},clear:function(){var r=this;return new Promise(function(e){var t;Object.assign(r,tslib_1.__assign(tslib_1.__assign({},r.getParams()),((t={})[r.getOrderFieldProp()]=r.getOrderFieldValue(),t[r.getOrderProp()]=r.getOrderPropValue()||"descend",t.searchParams=tslib_1.__assign({},r.getParams()),t.selectedRowKeys=[],t.selectedRows=[],t))),r.$nextTick(function(){e()})})},showLoading:function(){return this.loading["".concat(t,"/").concat(this.getFetchListPropName())]},getSearchParams:function(){var e=this.page,t=this.limit,r=this.searchParams,n=this[this.getOrderProp()];return tslib_1.__assign({},tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({page:e,limit:t},r),((e={})[this.getOrderProp()]="descend"===n?"desc":"asc",e[this.getOrderFieldProp()]=this[this.getOrderFieldProp()],e)),this.getFetchDataParams()))},fetchData:function(){return this.fetchDataExecute(this.getSearchParams())},fetchDataExecute:function(e){return this["".concat(t).concat(this.getFetchListPropNameToFirstUpper(),"Action")](e)},onSearch:function(){var r=this,e=Object.keys(this.getParams()),n={};return e.forEach(function(e){n[e]=r[e]}),new Promise(function(e){var t;r.searchParams=tslib_1.__assign(tslib_1.__assign({},n),((t={})[r.getOrderFieldProp()]=r[r.getOrderFieldProp()],t[r.getOrderProp()]=r[r.getOrderProp()],t)),r.$nextTick(function(){r.fetchData().then(function(){e()})})})},getColumns:function(){return[]},onSubTableChange:function(){},renderSearchFormAfter:function(){return null},renderSearchFormBefore:function(){return null},renderTableFooter:function(){return null},renderTableHeader:function(){return null}},t?tslib_1.__assign(tslib_1.__assign({},(0,vuexgenerator_1.mapActions)([t])),(0,vuexgenerator_1.mapMutations)([t])):{})}))};
//# sourceMappingURL=searchtableimplement.js.map
