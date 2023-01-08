import{Tooltip}from"ant-design-vue";import{assignAttrs,extend}from"../util";var Wrap=extend(Tooltip,{functional:!0,inject:["getEl"],render:function(t,r){return assignAttrs(Tooltip,r,Wrap.defaultProps),t(Tooltip,r.data,r.children)}});Wrap.defaultProps={};export default Wrap;
//# sourceMappingURL=Tooltip.js.map
