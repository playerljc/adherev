import{InputNumber}from"ant-design-vue";import{assignAttrs,extend}from"../util";var Wrap=extend(InputNumber,{functional:!0,inject:["getEl"],render:function(r,t){return assignAttrs(InputNumber,t,Wrap.defaultProps),r(InputNumber,t.data,t.children)}});Wrap.defaultProps={precision:0};export default Wrap;
//# sourceMappingURL=InputNumberInteger.js.map
