import{createVNode as _createVNode}from"vue";import classNames from"classnames";import{computed,defineComponent,inject}from"vue";import{string}from"vue-types";var selectorPrefix="adherev-ui-jdcategorytab",jdCategoryTabItemProps={id:string().def("")};export default defineComponent({name:"adv-jdcategorytab-item",props:jdCategoryTabItemProps,setup:function(e,t){var r=t.slots,a=inject("activeKey"),o=computed(function(){return classNames("".concat(selectorPrefix,"-tab-item"),a.value==e.id?"active":null)});return function(){return _createVNode("li",{class:o.value},[r.default?r.default():null])}}});export{jdCategoryTabItemProps};
//# sourceMappingURL=item.js.map
