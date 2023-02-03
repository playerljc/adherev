import _InputNumber from"ant-design-vue/es/input-number";import{HOC,assignAttrs}from"../util";var Wrap=HOC(_InputNumber,{functional:!0,inject:["getEl"],render:function(r,t){return assignAttrs(_InputNumber,t,Wrap.defaultProps),r(_InputNumber,t.data,t.children)}});Wrap.defaultProps={precision:1};export default Wrap;
//# sourceMappingURL=InputNumberDecimal1.js.map
