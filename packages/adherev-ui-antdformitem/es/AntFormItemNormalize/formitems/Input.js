import{Input}from"ant-design-vue";import{assignAttrs,extend}from"../util";var Wrap=extend(Input,{functional:!0,inject:["getEl"],render:function(t,r){return assignAttrs(Input,r,Wrap.defaultProps),t(Input,r.data,r.children)}});Wrap.defaultProps={allowClear:!0,maxLength:2};export default Wrap;
//# sourceMappingURL=Input.js.map
