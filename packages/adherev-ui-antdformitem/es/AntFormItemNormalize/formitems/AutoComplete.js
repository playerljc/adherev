import{AutoComplete}from"ant-design-vue";import{assignAttrs,extend}from"../util";var Wrap=extend(AutoComplete,{functional:!0,inject:["getEl"],render:function(t,e){return assignAttrs(AutoComplete,e,Wrap.defaultProps),t(AutoComplete,e.data,e.children)}});Wrap.defaultProps={allowClear:!0};export default Wrap;
//# sourceMappingURL=AutoComplete.js.map
