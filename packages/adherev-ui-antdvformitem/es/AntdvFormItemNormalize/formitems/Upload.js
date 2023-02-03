import _Upload from"ant-design-vue/es/upload";import{HOC,assignAttrs}from"../util";var Wrap=HOC(_Upload,{functional:!0,inject:["getEl"],render:function(a,r){return assignAttrs(_Upload,r,Wrap.defaultProps),a(_Upload,r.data,r.children)}});Wrap.defaultProps={name:"file",withCredentials:!0};export default Wrap;
//# sourceMappingURL=Upload.js.map
