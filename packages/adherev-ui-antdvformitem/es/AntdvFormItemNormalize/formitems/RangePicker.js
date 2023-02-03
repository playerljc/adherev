import _DatePicker from"ant-design-vue/es/date-picker";import{HOC,assignAttrs}from"../util";var RangePicker=_DatePicker.RangePicker,Wrap=HOC(RangePicker,{functional:!0,inject:["getEl"],render:function(e,r){return assignAttrs(RangePicker,r,Wrap.defaultProps),e(RangePicker,r.data,r.children)}});Wrap.defaultProps={allowClear:!0};export default Wrap;
//# sourceMappingURL=RangePicker.js.map
