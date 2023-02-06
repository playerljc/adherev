"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.pushProps=void 0,require("tslib")),classnames_1=tslib_1.__importDefault(require("classnames")),vue_1=require("vue"),vue_types_1=require("vue-types"),slide_1=tslib_1.__importStar(require("./slide")),slidelayout_1=require("./slidelayout"),selectorPrefix="adherev-ui-slidelayout-push";exports.pushProps=tslib_1.__assign(tslib_1.__assign({},slide_1.slideProps),{className:(0,vue_types_1.string)().def(""),style:(0,vue_types_1.object)().def({}),slaveClassName:(0,vue_types_1.string)().def(""),slaveStyle:(0,vue_types_1.object)().def({})}),exports.default=(0,vue_1.defineComponent)({name:"adv-slidelayout-push",props:exports.pushProps,slots:["slide","master"],emits:["after-show","after-close"],setup:function(s,e){var t=e.slots,l=e.emit,i=(0,vue_1.ref)(),o=(0,vue_1.ref)(),e=(0,slide_1.default)(s,e),a=e.setPositionConfig,u=e.getDuration,r=e.getElRef,n=e.initial;return(0,vue_1.watch)(function(){return s.zIndex},function(e){i.value.style.zIndex="".concat(e-1),r().value.style.zIndex="".concat(e),o.value.style.zIndex="".concat(e-2)}),(0,vue_1.onMounted)(function(){a(function(e){var s=e.el,t=e.maskEl;return{init:{left:function(){s.value.style.left="0",o.value.style.left="".concat(s.value.offsetWidth,"px"),(0,slidelayout_1.slider)(i.value,"-".concat(s.value.offsetWidth,"px"),"0","0","0")},right:function(){s.value.style.right="0",o.value.style.right="".concat(s.value.offsetWidth,"px"),(0,slidelayout_1.slider)(i.value,"".concat(s.value.offsetWidth,"px"),"0","0","0")}},show:{left:function(e){(0,slidelayout_1.slider)(i.value,"0","0","0","".concat(u(e),"ms"),function(){l("after-show")}),t&&(t.style.display="block")},right:function(e){(0,slidelayout_1.slider)(i.value,"0","0","0","".concat(u(e),"ms"),function(){l("after-show")}),t&&(t.style.display="block")}},close:{left:function(e){(0,slidelayout_1.slider)(i.value,"-".concat(s.value.offsetWidth,"px"),"0","0","".concat(u(e),"ms"),function(){l("after-close")}),t&&(t.style.display="none")},right:function(e){(0,slidelayout_1.slider)(i.value,"".concat(s.value.offsetWidth,"px"),"0","0","".concat(u(e),"ms"),function(){l("after-close")}),t&&(t.style.display="none")}}}}).then(function(){return n()})}),function(){var e;return(0,_vue.createVNode)("div",{class:"".concat(selectorPrefix,"-master"),ref:i},[(0,_vue.createVNode)("div",{class:(0,classnames_1.default)(selectorPrefix,s.direction,s.className.split(/\s+/)),style:s.style,ref:r()},[null==(e=null==t?void 0:t.slide)?void 0:e.call(t)]),(0,_vue.createVNode)("div",{class:(0,classnames_1.default)("".concat(selectorPrefix,"-slave"),(s.slaveClassName||"").split(/\s+/)),style:s.slaveStyle,ref:o},[null==(e=null==t?void 0:t.master)?void 0:e.call(t)])])}}});
//# sourceMappingURL=push.js.map
