import _Upload from"ant-design-vue/es/upload";import{assignAttrs,extend}from"../util";var Wrap=extend(_Upload,{functional:!0,inject:["getEl"],render:function(t,a){return assignAttrs(_Upload,a,Wrap.defaultProps),t(_Upload,a.data,a.children)}});Wrap.defaultProps={name:"file",withCredentials:!0};export default Wrap;
//# sourceMappingURL=Upload.js.map
