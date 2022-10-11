"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),suspense_1=tslib_1.__importDefault(require("./suspense")),SuspenseAsync={name:"adv-suspense-async",mixins:[suspense_1.default],props:{isEmpty:{type:Boolean,default:!1},renderEmpty:{type:Function,default:function(){return null}},fetchAsyncData:{type:Function,default:function(){return null}}},slots:["empty"],data:function(){return{loading:!1}},methods:{showLoading:function(){return this.loading},renderInner:function(e){return this.isEmpty()?this.$slots.empty||this.renderEmpty||e(ant_design_vue_1.Empty):this.$slots.default},resetAsync:function(){var n=this;return new Promise(function(e){n.isFirst=!0,n.isFirstLoading=!1,n.fetchData().then(function(){return e()}).catch(function(){return e()})})},fetchData:function(){var t=this;return new Promise(function(e){var n;return t.fetchAsyncData?(t.loading=!0,null===(n=null===(n=null===(n=null==t?void 0:t.fetchAsyncData)||void 0===n?void 0:n.call(t))||void 0===n?void 0:n.then(function(){t.loading=!1,t.$nextTick(function(){e()})}))||void 0===n?void 0:n.catch(function(){t.loading=!1,t.$nextTick(function(){e()})})):(t.loading=!1,void e())})}}};exports.default=SuspenseAsync;
//# sourceMappingURL=async.js.map