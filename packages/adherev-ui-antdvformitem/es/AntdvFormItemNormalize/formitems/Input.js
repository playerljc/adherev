import _Input from"ant-design-vue/es/input";import{assignAttrs,extend}from"../util";var Wrap=extend(_Input,{functional:!0,inject:["getEl"],render:function(t,e){return assignAttrs(_Input,e,Wrap.defaultProps),t(_Input,e.data,e.children)}});Wrap.defaultProps={allowClear:!0,maxLength:1e3};export default Wrap;
//# sourceMappingURL=Input.js.map
