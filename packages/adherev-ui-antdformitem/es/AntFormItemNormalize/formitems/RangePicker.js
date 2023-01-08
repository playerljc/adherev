import{DatePicker}from"ant-design-vue";import{assignAttrs,extend}from"../util";var RangePicker=DatePicker.RangePicker,Wrap=extend(RangePicker,{functional:!0,inject:["getEl"],render:function(e,r){return assignAttrs(RangePicker,r,Wrap.defaultProps),e(RangePicker,r.data,r.children)}});Wrap.defaultProps={allowClear:!0};export default Wrap;
//# sourceMappingURL=RangePicker.js.map
