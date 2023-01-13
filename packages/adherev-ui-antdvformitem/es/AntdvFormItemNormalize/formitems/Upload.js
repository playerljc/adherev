import{Upload}from"ant-design-vue";import{assignAttrs,extend}from"../util";var Wrap=extend(Upload,{functional:!0,inject:["getEl"],render:function(t,a){return assignAttrs(Upload,a,Wrap.defaultProps),t(Upload,a.data,a.children)}});Wrap.defaultProps={name:"file",withCredentials:!0};export default Wrap;
//# sourceMappingURL=Upload.js.map
