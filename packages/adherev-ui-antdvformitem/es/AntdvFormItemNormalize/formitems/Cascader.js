import _Cascader from"ant-design-vue/es/cascader";import{assignAttrs,extend}from"../util";var Wrap=extend(_Cascader,{functional:!0,inject:["getEl"],render:function(a,r){return assignAttrs(_Cascader,r,Wrap.defaultProps),a(_Cascader,r.data,r.children)}});Wrap.defaultProps={allowClear:!0};export default Wrap;
//# sourceMappingURL=Cascader.js.map
