import _TreeSelect from"ant-design-vue/es/tree-select";import{assignAttrs,extend}from"../util";var Wrap=extend(_TreeSelect,{functional:!0,inject:["getEl"],render:function(e,t){return assignAttrs(_TreeSelect,t,Wrap.defaultProps),e(_TreeSelect,t.data,t.children)}});Wrap.defaultProps={};export default Wrap;
//# sourceMappingURL=TreeSelect.js.map
