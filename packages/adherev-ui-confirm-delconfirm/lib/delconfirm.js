"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.delCConfirmProps=exports.open=void 0,require("tslib")),vue_1=require("vue"),vue_types_1=require("vue-types"),adherev_ui_messagedialog_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-messagedialog")),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),adherev_util_resource_1=tslib_1.__importDefault(require("@baifendian/adherev-util-resource")),selectorPrefix="adherev-ui-delconfirm";function open(e){var r=e.success,e=tslib_1.__rest(e,["success"]);adherev_ui_messagedialog_1.default.Confirm(tslib_1.__assign(tslib_1.__assign({},e),{title:e.title||adherev_util_intl_1.default.tv("提示"),text:e.text||"".concat(adherev_util_intl_1.default.tv("确定删除吗"),"?"),zIndex:"zIndex"in e?e.zIndex:adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,onSuccess:function(){return new Promise(function(e,t){r?r().then(function(){e()}).catch(function(){t()}):e()})}}))}exports.open=open,exports.delCConfirmProps={zIndex:(0,vue_types_1.number)().def(adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value),success:(0,vue_types_1.func)(),title:(0,vue_types_1.string)().def(adherev_util_intl_1.default.tv("提示")),text:(0,vue_types_1.string)().def(adherev_util_intl_1.default.tv("确定删除吗"))},exports.default=(0,vue_1.defineComponent)({name:"adv-delconfirm",props:exports.delCConfirmProps,setup:function(e,t){function r(){return open({success:e.success,title:e.title,text:e.text,zIndex:e.zIndex})}var i=t.slots;return function(){return(0,_vue.createVNode)("div",{class:selectorPrefix,onClick:r},[i.default?i.default():null])}}});
//# sourceMappingURL=delconfirm.js.map
