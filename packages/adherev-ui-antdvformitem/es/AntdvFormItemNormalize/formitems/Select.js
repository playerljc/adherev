import _Select from"ant-design-vue/es/select";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.string.includes.js";import{assignAttrs,extend}from"../util";var Wrap=extend(_Select,{functional:!0,inject:["getEl"],render:function(e,t){return assignAttrs(_Select,t,Wrap.defaultProps),e(_Select,t.data,t.children)}});Wrap.defaultProps={allowClear:!0,showSearch:!0,filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().includes(e.toLowerCase())}};export default Wrap;
//# sourceMappingURL=Select.js.map
