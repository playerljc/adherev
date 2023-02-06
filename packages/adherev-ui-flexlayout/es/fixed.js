import{createVNode as _createVNode}from"vue";import classNames from"classnames";import{defineComponent,ref}from"vue";import{bool}from"vue-types";import{selectorPrefix as parentSelectorPrefix}from"./flexlayout";var selectorPrefix="".concat(parentSelectorPrefix,"-fixed"),fixedProps={fit:bool().def(!0)};export default defineComponent({name:"adv-flexlayout-fixed",props:fixedProps,setup:function(e,r){var o=r.slots,r=r.expose,t=ref(null);return r({getEl:function(){return t.value}}),function(){return _createVNode("div",{ref:t,class:classNames(selectorPrefix,"".concat(e.fit?"".concat(selectorPrefix,"-fit"):""))},[o.default?o.default():null])}}});export{fixedProps};
//# sourceMappingURL=fixed.js.map
