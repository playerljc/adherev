"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.open=void 0,require("tslib")),adherev_ui_messagedialog_1=(0,tslib_1.__importDefault)(require("@baifendian/adherev-ui-messagedialog")),adherev_util_intl_1=(0,tslib_1.__importDefault)(require("@baifendian/adherev-util-intl")),adherev_util_resource_1=(0,tslib_1.__importDefault)(require("@baifendian/adherev-util-resource")),vue_1=require("vue"),vue_types_1=require("vue-types"),selectorPrefix="adherev-ui-delconfirm";function open(u,e){adherev_ui_messagedialog_1.default.Confirm({title:adherev_util_intl_1.default.tv("提示"),text:"".concat(adherev_util_intl_1.default.tv("确定删除吗"),"?"),zIndex:e,onSuccess:function(){return new Promise(function(e,r){u?u().then(function(){e()}).catch(function(){r()}):e()})}})}exports.open=open;var props={zIndex:(0,vue_types_1.number)().def(adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value),success:(0,vue_types_1.func)()};exports.default=(0,vue_1.defineComponent)({name:"adv-delconfirm",props:props,setup:function(e,r){function u(){return open(e.success,e.zIndex||adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value)}var t=r.slots;return function(){return(0,_vue.createVNode)("div",{class:selectorPrefix,onClick:u},[t.default?t.default():null])}}});
//# sourceMappingURL=delconfirm.js.map
