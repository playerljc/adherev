import{mergeProps as _mergeProps,createVNode as _createVNode}from"vue";import"core-js/modules/es.array.map.js";import{__assign,__rest}from"tslib";import classNames from"classnames";import{computed,defineComponent,toRefs}from"vue";import{array,object,string}from"vue-types";import{selectorPrefix as _selectorPrefix}from"./flexlayout";import VerticalFlexLayout from"./verticalFlexLayout";var selectorPrefix="".concat(_selectorPrefix,"-toolbarlayout"),toolBarLayoutProps={topClassName:string().def(""),topStyle:object().def({}),bottomClassName:string().def(""),bottomStyle:object().def({}),mainClassName:string().def(""),mainStyle:object().def({}),mainAutoWrapClassName:string().def(""),mainAutoStyle:object().def({}),mainWrapClassName:string().def(""),mainWrapStyle:object().def({}),topToolBarSlotNames:array().def([]),bottomToolBarSlotNames:array().def([]),topProps:object().def({}),bottomProps:object().def({}),mainProps:object().def({}),mainAutoWrapProps:object().def({})};export default defineComponent({name:"adv-flexlayout-toolbar",props:toolBarLayoutProps,setup:function(r,o){var e=o.slots,t=computed(function(){return __assign({fit:!1},r.topProps||{})}),a=computed(function(){return __assign({fit:!1},r.bottomProps||{})}),s=computed(function(){var o,t=toRefs(r),e=(t.topClassName,t.bottomClassName,t.mainAutoWrapClassName,t.topToolBarSlotNames,t.bottomToolBarSlotNames,__rest(t,["topClassName","bottomClassName","mainAutoWrapClassName","topToolBarSlotNames","bottomToolBarSlotNames"])),a={};for(o in e)o in e&&(a[o]=e[o].value);return a});return function(){return _createVNode(VerticalFlexLayout,_mergeProps({class:selectorPrefix,topClassName:classNames((r.topToolBarSlotNames||[]).length?"".concat(selectorPrefix,"-top"):null,r.topClassName||""),bottomClassName:classNames((r.bottomToolBarSlotNames||[]).length?"".concat(selectorPrefix,"-bottom"):null,r.bottomClassName||""),mainAutoWrapClassName:classNames("".concat(selectorPrefix,"-main-auto-wrap"),r.mainAutoWrapClassName||"")},s.value||{},{topProps:t.value,bottomProps:a.value}),{renderTop:function(){return(r.topToolBarSlotNames||[]).map(function(o,t){return _createVNode("div",{key:t,class:"".concat(selectorPrefix,"-toolbar-item")},[null==(t=null==e?void 0:e[o])?void 0:t.call(e)])})},renderMain:function(){var o;return null==(o=null==e?void 0:e.default)?void 0:o.call(e)},renderBottom:function(){return(r.bottomToolBarSlotNames||[]).map(function(o,t){return _createVNode("div",{key:t,class:"".concat(selectorPrefix,"-toolbar-item")},[null==(t=null==e?void 0:e[o])?void 0:t.call(e)])})}})}}});export{toolBarLayoutProps};
//# sourceMappingURL=toolBarLayout.js.map
