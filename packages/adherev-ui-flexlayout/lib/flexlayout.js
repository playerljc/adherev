"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.concat.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectorPrefix=void 0,require("tslib")),classnames_1=tslib_1.__importDefault(require("classnames")),vue_1=require("vue"),vue_types_1=require("vue-types"),props=(exports.selectorPrefix="adherev-ui-flexlayout",{direction:(0,vue_types_1.oneOf)(["vertical","horizontal"]).def("vertical")});exports.default=(0,vue_1.defineComponent)({name:"adv-flexlayout",props:props,setup:function(e,r){var t=r.slots;return(0,vue_1.provide)("direction",e.direction),console.log("direction",e.direction),function(){return(0,_vue.createVNode)("div",{class:(0,classnames_1.default)(exports.selectorPrefix,"".concat(exports.selectorPrefix,"-").concat(e.direction))},[t.default?t.default():null])}}});
//# sourceMappingURL=flexlayout.js.map
