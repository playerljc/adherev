import _DatePicker from"ant-design-vue/es/date-picker";import{HOC,assignAttrs}from"../util";var Wrap=HOC(_DatePicker,{functional:!0,inject:["getEl"],render:function(r,e){return assignAttrs(_DatePicker,e,Wrap.defaultProps),r(_DatePicker,e.data,e.children)}});Wrap.defaultProps={allowClear:!0};export default Wrap;
//# sourceMappingURL=DatePicker.js.map
