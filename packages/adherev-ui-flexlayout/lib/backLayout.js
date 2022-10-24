"use strict";var _vue=require("vue");function _isSlot(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,_vue.isVNode)(e)}require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.replace.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),vue_1=require("vue"),vue_router_1=require("vue-router"),vue_types_1=require("vue-types"),adherev_ui_historyback_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-historyback")),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),toolBarLayout_1=tslib_1.__importDefault(require("./toolBarLayout")),props={topClassName:(0,vue_types_1.string)().def(""),topStyle:(0,vue_types_1.object)().def({}),bottomClassName:(0,vue_types_1.string)().def(""),bottomStyle:(0,vue_types_1.object)().def({}),mainClassName:(0,vue_types_1.string)().def(""),mainStyle:(0,vue_types_1.object)().def({}),mainAutoWrapClassName:(0,vue_types_1.string)().def(""),mainAutoStyle:(0,vue_types_1.object)().def({}),mainWrapClassName:(0,vue_types_1.string)().def(""),mainWrapStyle:(0,vue_types_1.object)().def({}),topProps:(0,vue_types_1.object)().def({}),bottomProps:(0,vue_types_1.object)().def({}),mainProps:(0,vue_types_1.object)().def({}),mainAutoWrapProps:(0,vue_types_1.object)().def({}),topToolBarSlotNames:(0,vue_types_1.array)().def([]),bottomToolBarSlotNames:(0,vue_types_1.array)().def([]),backPath:(0,vue_types_1.string)().def("/"),enforceBackPath:(0,vue_types_1.string)().def(""),isShowBack:(0,vue_types_1.bool)().def(!0)};exports.default=(0,vue_1.defineComponent)({name:"adv-flexlayout-back",props:props,setup:function(a,e){var u=e.slots,t=(0,vue_router_1.useRouter)(),s=(0,vue_1.computed)(function(){var e,t=(0,vue_1.toRefs)(a),o=(t.isShowBack,t.backPath,t.enforceBackPath,tslib_1.__rest(t,["isShowBack","backPath","enforceBackPath"])),r={};for(e in o)e in o&&(r[e]=o[e].value);return r});return function(){var e,o,r;return(0,_vue.createVNode)(toolBarLayout_1.default,tslib_1.__assign(tslib_1.__assign({},s.value||{}),{topToolBarSlotNames:tslib_1.__spreadArray(tslib_1.__spreadArray([],a.topToolBarSlotNames||[],!0),["$back"],!1)}),_isSlot(e=tslib_1.__assign(tslib_1.__assign({default:function(){var e;return null==(e=null==u?void 0:u.default)?void 0:e.call(u)}},(r={},(a.topToolBarSlotNames||[]).forEach(function(t){return r[t]=function(){var e;return null==(e=null==u?void 0:u[t])?void 0:e.call(u)}}),a.isShowBack&&(r.$back=function(){var e;return(0,_vue.createVNode)(ant_design_vue_1.Button,{onClick:function(){a.enforceBackPath?t.replace(a.enforceBackPath):(0,adherev_ui_historyback_1.default)(t,a.backPath)}},{default:function(){return[(null==(e=null==u?void 0:u.backTitle)?void 0:e.call(u))||adherev_util_intl_1.default.tv("返回")]}})}),r)),(o={},(a.bottomToolBarSlotNames||[]).forEach(function(t){return o[t]=function(){var e;return null==(e=null==u?void 0:u[t])?void 0:e.call(u)}}),o)))?e:{default:function(){return[e]}})}}});
//# sourceMappingURL=backLayout.js.map
