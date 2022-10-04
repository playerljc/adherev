"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),vue_1=tslib_1.__importDefault(require("vue")),selectorPrefix="adherev-ui-suspense",Suspense=vue_1.default.extend({props:{reset:{type:Boolean,default:!1}},data:function(){return{isFirst:!0,isFirstLoading:!1}},watch:{reset:function(e){e&&(this.isFirst=!0,this.isFirstLoading=!1,this.$forceUpdate())}},mounted:function(){this.fetchData()},methods:{renderNormalFirstLoading:function(e){for(var i=[],s=0;s<7;s++)i.push(e(ant_design_vue_1.Skeleton,{key:s+1,attrs:{loading:!0,active:!0,avatar:!0}}));return e("div",{class:selectorPrefix+"-loading"},[i])},renderFirstLoading:function(e){var i=this.$slots;return i.firstLoading||this.renderNormalFirstLoading(e)},renderNormal:function(e){return e(ant_design_vue_1.Spin,{attrs:{size:"large",spinning:this.showLoading()}},[this.renderInner(e)])},renderDispatch:function(e){var i=this.showLoading();return this.isFirst&&!this.isFirstLoading&&i&&(this.isFirstLoading=!0),this.isFirst&&this.isFirstLoading&&!i&&(this.isFirst=!1,this.isFirstLoading=!1),this.isFirst?this.renderFirstLoading(e):this.renderNormal(e)},renderSuspense:function(e){return e("div",{class:selectorPrefix},[this.renderDispatch(e)])}},render:function(e){return this.renderSuspense(e)}});exports.default=Suspense;
//# sourceMappingURL=suspense.js.map
