import"core-js/modules/es.array.includes.js";import"core-js/modules/es.string.includes.js";import{Select}from"ant-design-vue";import{assignAttrs,extend}from"../util";var Wrap=extend(Select,{functional:!0,inject:["getEl"],render:function(e,t){return assignAttrs(Select,t,Wrap.defaultProps),e(Select,t.data,t.children)}});Wrap.defaultProps={allowClear:!0,showSearch:!0,mode:"multiple",filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().includes(e.toLowerCase())}};export default Wrap;
//# sourceMappingURL=MultipleSelect.js.map
