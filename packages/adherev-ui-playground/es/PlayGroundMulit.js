import{isVNode as _isVNode,mergeProps as _mergeProps,createVNode as _createVNode}from"vue";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import ContextMenu from"@baifendian/adherev-ui-contextmenu";import omit from"omit.js";import{defineComponent,ref,watch}from"vue";import{array}from"vue-types";import Card from"./Card";import CodePanel from"./CodePanel";import CodeTabPanel from"./CodeTabPanel";import PlayGroundBase,{playGroundBaseProps}from"./PlayGroundBase";function _isSlot(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!_isVNode(e)}var codeType,selectPrefix="adherev-ui-playground-mulit",playGroundMulitProps=(!function(e){e.CodePanel="CodePanel",e.CodeTabPanel="CodeTabPanel"}(codeType=codeType||{}),__assign(__assign({},playGroundBaseProps),{defaultConfig:array().def([])}));export default defineComponent({name:"adv-playground-mulit",props:playGroundMulitProps,setup:function(t,e){function r(e){return new Promise(function(r){ContextMenu.open(s.value.map(function(e,o){return{name:e.title,id:"".concat(o),separation:!1,attribute:{config:e},children:[]}}),{width:200,x:e.clientX,y:e.clientY,maskClosable:!0,handler:function(e,o){var t;r(null===(t=null==l?void 0:l.get(o.config.type||codeType.CodePanel))||void 0===t?void 0:t.getCodeText(o.config))}})})}function n(e){d.value=!e}var a=e.slots,i=omit(playGroundBaseProps,["getClipboardText","defaultExpand"]),d=ref(t.defaultExpand),s=ref(t.defaultConfig),l=new Map([[codeType.CodePanel,{render:function(e){return _createVNode(CodePanel,e,null)},getCodeText:function(e){return e.codeText}}],[codeType.CodeTabPanel,{render:function(e,o){return _createVNode(CodeTabPanel,_mergeProps(e,{onChange:function(e){s.value[o].active=e}}),null)},getCodeText:function(o){var e;return null===(e=o.config.find(function(e){return e.key===o.active}))||void 0===e?void 0:e.codeText}}]]);return watch(function(){return t.defaultExpand},function(e){d.value=e}),watch(function(){return t.defaultConfig},function(e){s.value=e}),function(){var e,o={};for(e in i)o[e]=t[e];return _createVNode(PlayGroundBase,_mergeProps(o,{defaultExpand:d.value,getClipboardText:r,onExpand:n}),{default:function(){var e;return null===(e=null==a?void 0:a.default)||void 0===e?void 0:e.call(a)},codeView:function(){var e;return _createVNode(ConditionalRender.Show,{conditional:d.value},{default:function(){return[_createVNode(Card,null,_isSlot(e=(s.value||[]).map(function(e,o){return e=e,_createVNode("div",{key:"".concat(o=o),class:"".concat(selectPrefix,"-codeviewwrap")},[_createVNode("div",{class:"".concat(selectPrefix,"-codeviewwrap-title")},[e.title]),_createVNode("div",{class:"".concat(selectPrefix,"-codeviewwrap-inner")},[null===(t=l.get(e.type||codeType.CodePanel))||void 0===t?void 0:t.render(omit(e,["title","type"]),o)])]);var t}))?e:{default:function(){return[e]}})]}})}})}}});
//# sourceMappingURL=PlayGroundMulit.js.map
