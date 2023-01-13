import{Input}from"ant-design-vue";import{assignAttrs,extend}from"../util";var Wrap=extend(Input.TextArea,{functional:!0,inject:["getEl"],render:function(t,e){return assignAttrs(Input.TextArea,e,Wrap.defaultProps),t(Input.TextArea,e.data,e.children)}});Wrap.defaultProps={allowClear:!0,maxLength:1e3};export default Wrap;
//# sourceMappingURL=TextArea.js.map
