import _TreeSelect from"ant-design-vue/es/tree-select";import{HOC,assignAttrs}from"../util";var Wrap=HOC(_TreeSelect,{functional:!0,inject:["getEl"],render:function(e,r){return assignAttrs(_TreeSelect,r,Wrap.defaultProps),e(_TreeSelect,r.data,r.children)}});Wrap.defaultProps={showSearch:!0,allowClear:!0,treeNodeFilterProp:"title"};export default Wrap;
//# sourceMappingURL=TreeSelect.js.map
