"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.playGroundProps=void 0,require("tslib")),omit_js_1=tslib_1.__importDefault(require("omit.js")),vue_1=require("vue"),vue_types_1=require("vue-types"),adherev_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-conditionalrender")),Card_1=tslib_1.__importDefault(require("./Card")),CodePanel_1=tslib_1.__importStar(require("./CodePanel")),PlayGroundBase_1=tslib_1.__importStar(require("./PlayGroundBase"));exports.playGroundProps=tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({},CodePanel_1.codePanelProps),PlayGroundBase_1.playGroundBaseProps),{codeText:(0,vue_types_1.string)().def("")}),exports.default=(0,vue_1.defineComponent)({name:"adv-playground",props:exports.playGroundProps,setup:function(t,e){function u(){return Promise.resolve(t.codeText)}function o(e){d.value=!e}var a=e.slots,n=(0,omit_js_1.default)(PlayGroundBase_1.playGroundBaseProps,["getClipboardText","defaultExpand"]),d=(0,vue_1.ref)(t.defaultExpand);return(0,vue_1.watch)(function(){return t.defaultExpand},function(e){return d.value=e}),function(){var e,r={};for(e in n)r[e]=t[e];return(0,_vue.createVNode)(PlayGroundBase_1.default,(0,_vue.mergeProps)(r,{defaultExpand:d.value,getClipboardText:u,onExpand:o}),{default:function(){var e;return null==(e=null==a?void 0:a.default)?void 0:e.call(a)},codeView:function(){return(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default.Show,{conditional:d.value},{default:function(){return[(0,_vue.createVNode)(Card_1.default,null,{default:function(){return[(0,_vue.createVNode)(CodePanel_1.default,{lang:t.lang,codeText:t.codeText},null)]}})]}})}})}}});
//# sourceMappingURL=PlayGround.js.map
