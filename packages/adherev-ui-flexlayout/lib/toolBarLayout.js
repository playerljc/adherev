"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),classnames_1=tslib_1.__importDefault(require("classnames")),vue_1=require("vue"),vue_types_1=require("vue-types"),flexlayout_1=require("./flexlayout"),verticalFlexLayout_1=tslib_1.__importDefault(require("./verticalFlexLayout")),selectorPrefix="".concat(flexlayout_1.selectorPrefix,"-toolbarlayout"),props={topClassName:(0,vue_types_1.string)().def(""),topStyle:(0,vue_types_1.object)().def({}),bottomClassName:(0,vue_types_1.string)().def(""),bottomStyle:(0,vue_types_1.object)().def({}),mainClassName:(0,vue_types_1.string)().def(""),mainStyle:(0,vue_types_1.object)().def({}),mainAutoWrapClassName:(0,vue_types_1.string)().def(""),mainAutoStyle:(0,vue_types_1.object)().def({}),mainWrapClassName:(0,vue_types_1.string)().def(""),mainWrapStyle:(0,vue_types_1.object)().def({}),topToolBarSlotNames:(0,vue_types_1.array)().def([]),bottomToolBarSlotNames:(0,vue_types_1.array)().def([]),topProps:(0,vue_types_1.object)().def({}),bottomProps:(0,vue_types_1.object)().def({}),mainProps:(0,vue_types_1.object)().def({}),mainAutoWrapProps:(0,vue_types_1.object)().def({})};exports.default=(0,vue_1.defineComponent)({name:"adv-flexlayout-toolbar",props:props,setup:function(s,e){var o=e.slots,t=(0,vue_1.computed)(function(){return tslib_1.__assign({fit:!1},s.topProps||{})}),a=(0,vue_1.computed)(function(){return tslib_1.__assign({fit:!1},s.bottomProps||{})}),r=(0,vue_1.computed)(function(){var e,t=(0,vue_1.toRefs)(s),o=(t.topClassName,t.bottomClassName,t.mainAutoWrapClassName,t.topToolBarSlotNames,t.bottomToolBarSlotNames,tslib_1.__rest(t,["topClassName","bottomClassName","mainAutoWrapClassName","topToolBarSlotNames","bottomToolBarSlotNames"])),a={};for(e in o)e in o&&(a[e]=o[e].value);return a});return function(){return(0,_vue.createVNode)(verticalFlexLayout_1.default,(0,_vue.mergeProps)({class:selectorPrefix,topClassName:(0,classnames_1.default)((s.topToolBarSlotNames||[]).length?"".concat(selectorPrefix,"-top"):null,s.topClassName||""),bottomClassName:(0,classnames_1.default)((s.bottomToolBarSlotNames||[]).length?"".concat(selectorPrefix,"-bottom"):null,s.bottomClassName||""),mainAutoWrapClassName:(0,classnames_1.default)("".concat(selectorPrefix,"-main-auto-wrap"),s.mainAutoWrapClassName||""),topProps:t.value,bottomProps:a.value},r.value||{}),{renderTop:function(){return(s.topToolBarSlotNames||[]).map(function(e,t){return(0,_vue.createVNode)("div",{key:t,class:"".concat(selectorPrefix,"-toolbar-item")},[null==(t=null==o?void 0:o[e])?void 0:t.call(o)])})},renderMain:function(){var e;return null==(e=null==o?void 0:o.default)?void 0:e.call(o)},renderBottom:function(){return(s.bottomToolBarSlotNames||[]).map(function(e,t){return(0,_vue.createVNode)("div",{key:t,class:"".concat(selectorPrefix,"-toolbar-item")},[null==(t=null==o?void 0:o[e])?void 0:t.call(o)])})}})}}});
//# sourceMappingURL=toolBarLayout.js.map
