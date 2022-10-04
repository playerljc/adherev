import"core-js/modules/es.object.keys.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.object.get-own-property-descriptor.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.define-properties.js";import"core-js/modules/es.object.define-property.js";import _defineProperty from"@babel/runtime/helpers/defineProperty";function ownKeys(e,t){var o,r=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)),r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}import"core-js/modules/es.array.map.js";import{__assign,__rest}from"tslib";import classNames from"classnames";import{Fragment}from"vue-fragment";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import{selectorPrefix as _selectorPrefix}from"./flexlayout";import VerticalFlexLayout from"./verticalFlexLayout";var selectorPrefix=_selectorPrefix+"-toolbarlayout",ToolBarLayout={name:"adv-flexlayout-toolbar",props:{topClassName:{type:String,default:""},topStyle:{type:String,default:""},bottomClassName:{type:String,default:""},bottomStyle:{type:String,default:""},mainClassName:{type:String,default:""},mainStyle:{type:String,default:""},mainAutoWrapClassName:{type:String,default:""},mainAutoStyle:{type:String,default:""},mainWrapClassName:{type:String,default:""},mainWrapStyle:{type:String,default:""},topToolBarSlotNames:{type:Array,default:function(){return[]}},bottomToolBarSlotNames:{type:Array,default:function(){return[]}},topProps:{type:Object,default:function(){return{}}},bottomProps:{type:Object,default:function(){return{}}},mainProps:{type:Object,default:function(){return{}}},mainAutoWrapProps:{type:Object,default:function(){return{}}}},computed:{_topProps:function(){return __assign({fit:!1},this.topProps||{})},_bottomProps:function(){return __assign({fit:!1},this.bottomProps||{})},otherProps:function(){var t,e=this,o=(e.topClassName,e.bottomClassName,e.mainAutoWrapClassName,e.topToolBarSlotNames,e.bottomToolBarSlotNames,__rest(e,["topClassName","bottomClassName","mainAutoWrapClassName","topToolBarSlotNames","bottomToolBarSlotNames"])),r={};for(t in this.$props)t in o&&(r[t]=o[t]);return r}},render:function(o){var r=this,t=this,e=t.topClassName,s=void 0===e?"":e,a=t.bottomClassName,n=void 0===a?"":a,e=t.mainAutoWrapClassName,a=void 0===e?"":e,e=t.topToolBarSlotNames,e=void 0===e?[]:e,t=t.bottomToolBarSlotNames,t=void 0===t?[]:t;return o(VerticalFlexLayout,{attrs:{topClassName:classNames((e||[]).length?selectorPrefix+"-top":null,s||""),bottomClassName:classNames((t||[]).length?selectorPrefix+"-bottom":null,n||""),mainAutoWrapClassName:classNames(selectorPrefix+"-main-auto-wrap",a||""),topProps:this._topProps,bottomProps:this._bottomProps},props:_objectSpread({},this.otherProps)},[o(ConditionalRender,{slot:"renderTop",attrs:{conditional:!!(e||[]).length}},[e.map(function(t,e){return o("div",{key:e,attrs:{className:selectorPrefix+"-toolbar-item"}},[r.$slots[t]])})]),o(Fragment,{slot:"renderMain"},[this.$slots.default]),o(ConditionalRender,{slot:"renderBottom",attrs:{conditional:!!(t||[]).length}},[t.map(function(t,e){return o("div",{key:e,attrs:{className:selectorPrefix+"-toolbar-item"}},[r.$slots[t]])})])])}};export default ToolBarLayout;
//# sourceMappingURL=toolBarLayout.js.map
