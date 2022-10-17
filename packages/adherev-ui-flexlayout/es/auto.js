import{createVNode as _createVNode}from"vue";import classNames from"classnames";import{defineComponent,ref}from"vue";import{bool}from"vue-types";import{selectorPrefix as parentSelectorPrefix}from"./flexlayout";var selectorPrefix="".concat(parentSelectorPrefix,"-auto"),props={autoFixed:bool().def(!0),fit:bool().def(!0)};export default defineComponent({name:"adv-flexlayout-auto",props:props,setup:function(e,o){var t=o.slots,o=o.expose,r=ref(null);return o({getEl:function(){return r.value}}),function(){return _createVNode("div",{ref:r,class:classNames(selectorPrefix,"".concat(e.autoFixed?"".concat(selectorPrefix,"-autoFixed"):""),"".concat(e.fit?"".concat(selectorPrefix,"-fit"):""))},[t.default?t.default():null])}}});
//# sourceMappingURL=auto.js.map
