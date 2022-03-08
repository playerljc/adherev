"use strict";require("core-js/modules/es.object.to-string.js");var _vue=require("vue");function _isSlot(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,_vue.isVNode)(e)}require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var ant_design_vue_1=require("ant-design-vue"),vue_1=require("vue"),vue_types_1=require("vue-types"),selectorPrefix="adherev-ui-suspense",suspenseProps={reset:(0,vue_types_1.bool)().def(!1)};exports.default=(0,vue_1.defineComponent)({props:suspenseProps,slots:["firstLoading"],data:function(){return{isFirst:!0,isFirstLoading:!1}},watch:{reset:function(e){e&&(this.isFirst=!0,this.isFirstLoading=!1,this.$forceUpdate())}},mounted:function(){this.fetchData()},methods:{renderNormalFirstLoading:function(){for(var e=[],r=0;r<7;r++)e.push((0,_vue.createVNode)(ant_design_vue_1.Skeleton,{key:r+1,loading:!0,active:!0,avatar:!0},null));return(0,_vue.createVNode)("div",{class:"".concat(selectorPrefix,"-loading")},[e])},renderFirstLoading:function(){var e=this.$slots;return e.firstLoading?e.firstLoading():this.renderNormalFirstLoading()},renderNormal:function(){var e;return(0,_vue.createVNode)(ant_design_vue_1.Spin,{size:"large",spinning:this.showLoading()},_isSlot(e=this.renderInner())?e:{default:function(){return[e]}})},renderDispatch:function(){var e=this.showLoading();return this.isFirst&&!this.isFirstLoading&&e&&(this.isFirstLoading=!0),this.isFirst&&this.isFirstLoading&&!e&&(this.isFirst=!1,this.isFirstLoading=!1),this.isFirst?this.renderFirstLoading():this.renderNormal()},renderSuspense:function(){return(0,_vue.createVNode)("div",{class:selectorPrefix},[this.renderDispatch()])}},render:function(){return this.renderSuspense()}});
//# sourceMappingURL=suspense.js.map
