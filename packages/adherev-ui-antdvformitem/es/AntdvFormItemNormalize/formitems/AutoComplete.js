import _AutoComplete from"ant-design-vue/es/auto-complete";import{assignAttrs,extend}from"../util";var Wrap=extend(_AutoComplete,{functional:!0,inject:["getEl"],render:function(t,e){return assignAttrs(_AutoComplete,e,Wrap.defaultProps),t(_AutoComplete,e.data,e.children)}});Wrap.defaultProps={allowClear:!0};export default Wrap;
//# sourceMappingURL=AutoComplete.js.map
