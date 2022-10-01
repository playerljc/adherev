import"core-js/modules/es.object.assign.js";import"core-js/modules/es.string.trim.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/web.dom-collections.for-each.js";import{__assign,__spreadArrays}from"tslib";import Vue from"vue";import{cleanMixin,mapActions,mapMutations,mapState}from"@ctsj/vuexgenerator";import SearchTable,{NUMBER_GENERATOR_RULE_CONTINUITY,ROW_SELECTION_CONTINUOUS_MODE,ROW_SELECTION_NORMAL_MODE}from"./searchtable";var selectorPrefix="adherev-ui-searchtableimplement";export default function(t){return Vue.extend({mixins:t?[SearchTable,cleanMixin([t])]:[SearchTable],data:function(){var e;return __assign(__assign({},this.getParams()),((e={})[this.getOrderFieldProp()]=this.getOrderFieldValue(),e[this.getOrderProp()]=this.getOrderPropValue()||"descend",e.searchParams=__assign({},this.getParams()),e.selectedRowKeys=[],e.selectedRows=[],e))},computed:t?__assign({},mapState([t])):{},methods:Object.assign({getFetchListPropName:function(){return""},getFetchListPropNameToFirstUpper:function(){var e=this.getFetchListPropName();return 1<e.length?""+e.charAt(0).toUpperCase()+e.substring(1):e},onSelectChange:function(e,t){this[e]=t},onInputChange:function(e,t){this[e]=t.target.value.trim()},onDateTimeRangeChange:function(e,t){this[e[0]]=t&&t.length?t[0]:null,this[e[1]]=t&&t.length?t[1]:null},getParams:function(){return{}},getServiceName:function(){return t},getFetchDataParams:function(){return{}},isShowNumber:function(){return!0},getNumberGeneratorRule:function(){return NUMBER_GENERATOR_RULE_CONTINUITY},getRowSelectionMode:function(){return ROW_SELECTION_NORMAL_MODE},getTableNumberColumnWidth:function(){return 80},getRowKey:function(){return"id"},getDataKey:function(){return"list"},getTotalKey:function(){return"totalCount"},getData:function(){return this[""+t+this.getFetchListPropNameToFirstUpper()][this.getDataKey()]},getTotal:function(){return this[""+t+this.getFetchListPropNameToFirstUpper()][this.getTotalKey()]},getRowSelection:function(){var n=this,t=this;function s(e,r){var n=t.getRowKey();e?(t.selectedRowKeys=__spreadArrays(t.selectedRowKeys,r.map(function(e){return e[n]})),t.selectedRows=__spreadArrays(t.selectedRows,r)):(t.selectedRows=t.selectedRows.filter(function(t){return!r.find(function(e){return e[n]===t[n]})}),t.selectedRowKeys=t.selectedRowKeys.filter(function(t){return!r.find(function(e){return e[n]===t})}))}return{selectedRowKeys:this.selectedRowKeys,onChange:function(e,t){n.getRowSelectionMode()!==ROW_SELECTION_CONTINUOUS_MODE&&(n.selectedRowKeys=e,n.selectedRows=t)},onSelect:function(e,t){n.getRowSelectionMode()!==ROW_SELECTION_NORMAL_MODE&&s(t,[e])},onSelectAll:function(e,t,r){n.getRowSelectionMode()!==ROW_SELECTION_NORMAL_MODE&&s(e,r)}}},renderSearchForm:function(e){return null},renderSearchTableImplementInner:function(e){var t=this.renderSearchTableInner(e);return e("div",{ref:"innerWrapRef",class:selectorPrefix+"-tablewrapper"},[t])},renderInner:function(e){return this.renderSearchTableImplementInner(e)},renderSearchFooterItems:function(){return[]},getOrderFieldProp:function(){return"orderField"},getOrderFieldValue:function(){return""},getOrderProp:function(){return"order"},getOrderPropValue:function(){return"descend"},clear:function(){var r=this;return new Promise(function(e){var t;Object.assign(r,__assign(__assign({},r.getParams()),((t={})[r.getOrderFieldProp()]=r.getOrderFieldValue(),t[r.getOrderProp()]=r.getOrderPropValue()||"descend",t.searchParams=__assign({},r.getParams()),t.selectedRowKeys=[],t))),r.$nextTick(function(){e()})})},showLoading:function(){return this.loading[t+"/"+this.getFetchListPropName()]},getSearchParams:function(){var e=this.page,t=this.limit,r=this.searchParams;return __assign({},__assign(__assign(__assign({page:e,limit:t},r),((r={})[this.getOrderFieldProp()]=this.getOrderFieldValue(),r[this.getOrderProp()]=this.getOrderPropValue()||"descend",r)),this.getFetchDataParams()))},fetchData:function(){return this.fetchDataExecute(this.getSearchParams())},fetchDataExecute:function(e){return this[""+t+this.getFetchListPropNameToFirstUpper()+"Action"](e)},onSearch:function(){var r=this,e=Object.keys(this.getParams()),n={};return e.forEach(function(e){n[e]=r[e]}),new Promise(function(e){var t;r.searchParams=__assign(__assign({},n),((t={})[r.getOrderFieldProp()]=r[r.getOrderFieldProp()],t[r.getOrderProp()]=r[r.getOrderProp()],t)),r.$nextTick(function(){r.fetchData().then(function(){e()})})})},renderSearchTableImplement:function(e){return this.renderSearchTable(e)}},t?__assign(__assign({},mapActions([t])),mapMutations([t])):{}),render:function(e){return this.renderSearchTableImplement(e)}})}
//# sourceMappingURL=searchtableimplement.js.map
