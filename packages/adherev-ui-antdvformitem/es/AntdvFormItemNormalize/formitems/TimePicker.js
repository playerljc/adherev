import _TimePicker from"ant-design-vue/es/time-picker";import{assignAttrs,extend}from"../util";var Wrap=extend(_TimePicker,{functional:!0,inject:["getEl"],render:function(e,r){return assignAttrs(_TimePicker,r,Wrap.defaultProps),e(_TimePicker,r.data,r.children)}});Wrap.defaultProps={allowClear:!0};export default Wrap;
//# sourceMappingURL=TimePicker.js.map
