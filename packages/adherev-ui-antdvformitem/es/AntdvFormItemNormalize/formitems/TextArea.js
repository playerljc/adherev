import _Input from"ant-design-vue/es/input";import{assignAttrs,extend}from"../util";var Wrap=extend(_Input.TextArea,{functional:!0,inject:["getEl"],render:function(t,e){return assignAttrs(_Input.TextArea,e,Wrap.defaultProps),t(_Input.TextArea,e.data,e.children)}});Wrap.defaultProps={allowClear:!0,maxLength:1e3};export default Wrap;
//# sourceMappingURL=TextArea.js.map
