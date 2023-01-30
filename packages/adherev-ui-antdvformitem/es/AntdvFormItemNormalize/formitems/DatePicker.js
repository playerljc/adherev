import _DatePicker from"ant-design-vue/es/date-picker";import{assignAttrs,extend}from"../util";var Wrap=extend(_DatePicker,{functional:!0,inject:["getEl"],render:function(e,r){return assignAttrs(_DatePicker,r,Wrap.defaultProps),e(_DatePicker,r.data,r.children)}});Wrap.defaultProps={allowClear:!0};export default Wrap;
//# sourceMappingURL=DatePicker.js.map
