"use strict";var _vue=require("vue");function _isSlot(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,_vue.isVNode)(e)}require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.map.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/esnext.map.delete-all.js"),require("core-js/modules/esnext.map.every.js"),require("core-js/modules/esnext.map.filter.js"),require("core-js/modules/esnext.map.find.js"),require("core-js/modules/esnext.map.find-key.js"),require("core-js/modules/esnext.map.includes.js"),require("core-js/modules/esnext.map.key-of.js"),require("core-js/modules/esnext.map.map-keys.js"),require("core-js/modules/esnext.map.map-values.js"),require("core-js/modules/esnext.map.merge.js"),require("core-js/modules/esnext.map.reduce.js"),require("core-js/modules/esnext.map.some.js"),require("core-js/modules/esnext.map.update.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.array.find.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var codeType,tslib_1=require("tslib"),adherev_ui_conditionalrender_1=(0,tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender")),adherev_ui_contextmenu_1=(0,tslib_1.__importDefault)(require("@baifendian/adherev-ui-contextmenu")),omit_js_1=(0,tslib_1.__importDefault)(require("omit.js")),vue_1=require("vue"),vue_types_1=require("vue-types"),Card_1=(0,tslib_1.__importDefault)(require("./Card")),CodePanel_1=(0,tslib_1.__importDefault)(require("./CodePanel")),CodeTabPanel_1=(0,tslib_1.__importDefault)(require("./CodeTabPanel")),PlayGroundBase_1=(0,tslib_1.__importStar)(require("./PlayGroundBase")),selectPrefix="adherev-ui-playground-mulit",playGroundMulitProps=(!function(e){e.CodePanel="CodePanel",e.CodeTabPanel="CodeTabPanel"}(codeType=codeType||{}),(0,tslib_1.__assign)((0,tslib_1.__assign)({},PlayGroundBase_1.playGroundBaseProps),{defaultConfig:(0,vue_types_1.array)().def([])}));exports.default=(0,vue_1.defineComponent)({name:"adv-playground-mulit",props:playGroundMulitProps,setup:function(t,e){function o(e){return new Promise(function(o){adherev_ui_contextmenu_1.default.open(s.value.map(function(e,r){return{name:e.title,id:"".concat(r),separation:!1,attribute:{config:e},children:[]}}),{width:200,x:e.clientX,y:e.clientY,maskClosable:!0,handler:function(e,r){var t;o(null===(t=null==l?void 0:l.get(r.config.type||codeType.CodePanel))||void 0===t?void 0:t.getCodeText(r.config))}})})}function u(e){i.value=!e}var n=e.slots,a=(0,omit_js_1.default)(PlayGroundBase_1.playGroundBaseProps,["getClipboardText","defaultExpand"]),i=(0,vue_1.ref)(t.defaultExpand),s=(0,vue_1.ref)(t.defaultConfig),l=new Map([[codeType.CodePanel,{render:function(e){return(0,_vue.createVNode)(CodePanel_1.default,e,null)},getCodeText:function(e){return e.codeText}}],[codeType.CodeTabPanel,{render:function(e,r){return(0,_vue.createVNode)(CodeTabPanel_1.default,(0,_vue.mergeProps)(e,{onChange:function(e){s.value[r].active=e}}),null)},getCodeText:function(r){var e;return null===(e=r.config.find(function(e){return e.key===r.active}))||void 0===e?void 0:e.codeText}}]]);return(0,vue_1.watch)(function(){return t.defaultExpand},function(e){i.value=e}),(0,vue_1.watch)(function(){return t.defaultConfig},function(e){s.value=e}),function(){var e,r={};for(e in a)r[e]=t[e];return(0,_vue.createVNode)(PlayGroundBase_1.default,(0,_vue.mergeProps)(r,{defaultExpand:i.value,getClipboardText:o,onExpand:u}),{default:function(){var e;return null===(e=null==n?void 0:n.default)||void 0===e?void 0:e.call(n)},codeView:function(){var e;return(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default.Show,{conditional:i.value},{default:function(){return[(0,_vue.createVNode)(Card_1.default,null,_isSlot(e=(s.value||[]).map(function(e,r){return e=e,r=r,(0,_vue.createVNode)("div",{key:"".concat(r),class:"".concat(selectPrefix,"-codeviewwrap")},[(0,_vue.createVNode)("div",{class:"".concat(selectPrefix,"-codeviewwrap-title")},[e.title]),(0,_vue.createVNode)("div",{class:"".concat(selectPrefix,"-codeviewwrap-inner")},[null===(t=l.get(e.type||codeType.CodePanel))||void 0===t?void 0:t.render((0,omit_js_1.default)(e,["title","type"]),r)])]);var t}))?e:{default:function(){return[e]}})]}})}})}}});
//# sourceMappingURL=PlayGroundMulit.js.map
