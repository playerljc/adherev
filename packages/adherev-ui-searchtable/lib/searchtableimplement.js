"use strict";require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.string.trim.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.object.keys.js"),require("core-js/modules/web.dom-collections.for-each.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var vue_1=__importDefault(require("vue")),vuexgenerator_1=require("@ctsj/vuexgenerator"),searchtable_1=__importStar(require("./searchtable")),selectorPrefix="adherev-ui-searchtableimplement";exports.default=function(t){return vue_1.default.extend({mixins:t?[searchtable_1.default,vuexgenerator_1.cleanMixin([t])]:[searchtable_1.default],data:function(){var e;return __assign(__assign({},this.getParams()),((e={})[this.getOrderFieldProp()]=this.getOrderFieldValue(),e[this.getOrderProp()]=this.getOrderPropValue()||"descend",e.searchParams=__assign({},this.getParams()),e.selectedRowKeys=[],e))},computed:t?__assign({},vuexgenerator_1.mapState([t])):{},methods:Object.assign({getFetchListPropName:function(){return""},getFetchListPropNameToFirstUpper:function(){var e=this.getFetchListPropName();return 1<e.length?""+e.charAt(0).toUpperCase()+e.substring(1):e},onSelectChange:function(e,t){this[e]=t},onInputChange:function(e,t){this[e]=t.target.value.trim()},onDateTimeRangeChange:function(e,t){this[e[0]]=t&&t.length?t[0]:null,this[e[1]]=t&&t.length?t[1]:null},getParams:function(){return{}},getServiceName:function(){return t},getFetchDataParams:function(){return{}},isShowNumber:function(){return!0},getNumberGeneratorRule:function(){return searchtable_1.NUMBER_GENERATOR_RULE_CONTINUITY},getTableNumberColumnWidth:function(){return 80},getRowKey:function(){return"id"},getDataKey:function(){return"list"},getTotalKey:function(){return"totalCount"},getData:function(){return this[""+t+this.getFetchListPropNameToFirstUpper()][this.getDataKey()]},getTotal:function(){return this[""+t+this.getFetchListPropNameToFirstUpper()][this.getTotalKey()]},getRowSelection:function(){var t=this;return{selectedRowKeys:this.selectedRowKeys,onChange:function(e){t.selectedRowKeys=e}}},renderSearchForm:function(e){return null},renderSearchTableImplementInner:function(e){var t=this.renderSearchTableInner(e);return e("div",{ref:"innerWrapRef",class:selectorPrefix+"-tablewrapper"},[t])},renderInner:function(e){return this.renderSearchTableImplementInner(e)},renderSearchFooterItems:function(){return[]},getOrderFieldProp:function(){return"orderField"},getOrderFieldValue:function(){return""},getOrderProp:function(){return"order"},getOrderPropValue:function(){return"descend"},clear:function(){var r=this;return new Promise(function(e){var t;Object.assign(r,__assign(__assign({},r.getParams()),((t={})[r.getOrderFieldProp()]=r.getOrderFieldValue(),t[r.getOrderProp()]=r.getOrderPropValue()||"descend",t.searchParams=__assign({},r.getParams()),t.selectedRowKeys=[],t))),r.$nextTick(function(){e()})})},showLoading:function(){return this.loading[t+"/"+this.getFetchListPropName()]},getSearchParams:function(){var e=this.page,t=this.limit,r=this.searchParams;return __assign({},__assign(__assign(__assign({page:e,limit:t},r),((r={})[this.getOrderFieldProp()]=this.getOrderFieldValue(),r[this.getOrderProp()]=this.getOrderPropValue()||"descend",r)),this.getFetchDataParams()))},fetchData:function(){return this.fetchDataExecute(this.getSearchParams())},fetchDataExecute:function(e){return this[""+t+this.getFetchListPropNameToFirstUpper()+"Action"](e)},onSearch:function(){var r=this,e=Object.keys(this.getParams()),n={};return e.forEach(function(e){n[e]=r[e]}),new Promise(function(e){var t;r.searchParams=__assign(__assign({},n),((t={})[r.getOrderFieldProp()]=r[r.getOrderFieldProp()],t[r.getOrderProp()]=r[r.getOrderProp()],t)),r.$nextTick(function(){r.fetchData().then(function(){e()})})})},renderSearchTableImplement:function(e){return this.renderSearchTable(e)}},t?__assign(__assign({},vuexgenerator_1.mapActions([t])),vuexgenerator_1.mapMutations([t])):{}),render:function(e){return this.renderSearchTableImplement(e)}})};
//# sourceMappingURL=searchtableimplement.js.map