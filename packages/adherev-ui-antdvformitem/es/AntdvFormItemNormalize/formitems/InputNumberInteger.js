import _InputNumber from"ant-design-vue/es/input-number";import{assignAttrs,extend}from"../util";var Wrap=extend(_InputNumber,{functional:!0,inject:["getEl"],render:function(r,t){return assignAttrs(_InputNumber,t,Wrap.defaultProps),r(_InputNumber,t.data,t.children)}});Wrap.defaultProps={precision:0};export default Wrap;
//# sourceMappingURL=InputNumberInteger.js.map
