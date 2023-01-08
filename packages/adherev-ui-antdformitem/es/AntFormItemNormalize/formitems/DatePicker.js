import{DatePicker}from"ant-design-vue";import{assignAttrs,extend}from"../util";var Wrap=extend(DatePicker,{functional:!0,inject:["getEl"],render:function(e,r){return assignAttrs(DatePicker,r,Wrap.defaultProps),e(DatePicker,r.data,r.children)}});Wrap.defaultProps={allowClear:!0};export default Wrap;
//# sourceMappingURL=DatePicker.js.map
