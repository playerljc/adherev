import{TimePicker}from"ant-design-vue";import{assignAttrs,extend}from"../util";var Wrap=extend(TimePicker,{functional:!0,inject:["getEl"],render:function(e,r){return assignAttrs(TimePicker,r,Wrap.defaultProps),e(TimePicker,r.data,r.children)}});Wrap.defaultProps={allowClear:!0};export default Wrap;
//# sourceMappingURL=TimePicker.js.map
