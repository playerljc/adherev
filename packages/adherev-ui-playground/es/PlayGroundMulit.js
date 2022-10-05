import"core-js/modules/es.object.keys.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.get-own-property-descriptor.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.define-properties.js";import"core-js/modules/es.object.define-property.js";import _defineProperty from"@babel/runtime/helpers/defineProperty";function ownKeys(o,e){var r,t=Object.keys(o);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(o),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})),t.push.apply(t,r)),t}function _objectSpread(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach(function(e){_defineProperty(o,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.array.map.js";import{__assign,__rest,__spreadArrays}from"tslib";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import ContextMenu from"@baifendian/adherev-ui-contextmenu";import Card from"./Card";import CodePanel from"./CodePanel";import CodeTabPanel from"./CodeTabPanel";import PlayGroundMixins,{PlaygroundMixinsProps}from"./PlayGroundMixins";var selectPrefix="adherev-ui-playground-mulit",PlayGroundMulitPropTypes=__assign(__assign({},PlaygroundMixinsProps),{defaultConfig:{type:Array,default:function(){return[]}}}),PlaygroundMulit={name:"adv-playground-mulit",mixins:[PlayGroundMixins],props:__assign({},PlayGroundMulitPropTypes),data:function(){var t=this;return{$configMap:new Map([["CodePanel",{render:function(e,o){o.type;var r=o.codeText,o=(o.title,__rest(o,["type","codeText","title"]));return e(CodePanel,{props:_objectSpread({},o)},[r])},getCodeText:function(e){return e.codeText}}],["CodeTabPanel",{render:function(e,o,r){o.type;o=__rest(o,["type"]);return e(CodeTabPanel,{props:_objectSpread({},o),on:{change:function(e){var o=__spreadArrays(t.config);o[r].active=e,t.config=o}}})},getCodeText:function(o){var e;return null===(e=o.config.find(function(e){return e.key===o.active}))||void 0===e?void 0:e.codeText}}]]),config:this.defaultConfig}},watch:{defaultConfig:function(e){this.config=e}},methods:{getClipboardText:function(e){var o=this.config,s=this.$data;return new Promise(function(t){ContextMenu.open(o.map(function(e,o){return{name:e.title,id:""+o,separation:!1,attribute:{config:e},children:[]}}),{width:200,x:e.clientX,y:e.clientY,maskClosable:!0,handler:function(e,o){var r;t(null===(r=s.$configMap.get(o.config.type||"CodePanel"))||void 0===r?void 0:r.getCodeText(o.config))}})})},renderCodePanelView:function(e,o,r){var t=this.$data;return e("div",{key:""+r,class:selectPrefix+"-codeviewwrap"},[e("div",{class:selectPrefix+"-codeviewwrap-title"},[o.title]),e("div",{class:selectPrefix+"-codeviewwrap-inner"},[t.$configMap.get(o.type||"CodePanel").render(e,o,r)])])},renderCodeView:function(r){var t=this,e=this.expand,o=this.config;return r(ConditionalRender.Show,{attrs:{conditional:e}},[r(Card,[(o||[]).map(function(e,o){return t.renderCodePanelView(r,e,o)})])])}}};export default PlaygroundMulit;export{PlayGroundMulitPropTypes};
//# sourceMappingURL=PlayGroundMulit.js.map