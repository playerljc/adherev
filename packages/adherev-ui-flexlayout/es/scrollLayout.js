import{createVNode as _createVNode}from"vue";import{defineComponent,provide,ref}from"vue";import{bool}from"vue-types";import{selectorPrefix as _selectorPrefix}from"./flexlayout";var selectorPrefix="".concat(_selectorPrefix,"-scrolllayout"),props={scrollY:bool().def(!0)};export default defineComponent({name:"adv-flexlayout-horizontal",props:props,setup:function(o,e){var r=e.slots,t=ref();return provide("getEl",function(){return t.value}),function(){var e;return _createVNode("div",{ref:t,class:selectorPrefix,style:"overflow-y: ".concat(o.scrollY?"auto":"hidden")},[null==(e=null==r?void 0:r.default)?void 0:e.call(r)])}}});
//# sourceMappingURL=scrollLayout.js.map
