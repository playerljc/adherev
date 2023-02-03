import _Input from"ant-design-vue/es/input";import{HOC,assignAttrs}from"../util";var Wrap=HOC(_Input.TextArea,{functional:!0,inject:["getEl"],render:function(t,r){return assignAttrs(_Input.TextArea,r,Wrap.defaultProps),t(_Input.TextArea,r.data,r.children)}});Wrap.defaultProps={allowClear:!0,maxLength:1e3};export default Wrap;
//# sourceMappingURL=TextArea.js.map
