import{Cascader}from"ant-design-vue";import{assignAttrs,extend}from"../util";var Wrap=extend(Cascader,{functional:!0,inject:["getEl"],render:function(a,r){return assignAttrs(Cascader,r,Wrap.defaultProps),a(Cascader,r.data,r.children)}});Wrap.defaultProps={allowClear:!0};export default Wrap;
//# sourceMappingURL=Cascader.js.map
