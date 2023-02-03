import _TimePicker from"ant-design-vue/es/time-picker";import{HOC,assignAttrs}from"../util";var Wrap=HOC(_TimePicker,{functional:!0,inject:["getEl"],render:function(r,e){return assignAttrs(_TimePicker,e,Wrap.defaultProps),r(_TimePicker,e.data,e.children)}});Wrap.defaultProps={allowClear:!0};export default Wrap;
//# sourceMappingURL=TimePicker.js.map
