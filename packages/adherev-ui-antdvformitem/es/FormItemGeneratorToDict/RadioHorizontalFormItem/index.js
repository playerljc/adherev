import{__assign}from"tslib";import{defineComponent,h}from"vue";import{array,number,object,oneOfType,string}from"vue-types";import{Radio}from"../../AntdvFormItemNormalize";export default defineComponent({name:"RadioHorizontalFormItem",props:{radioGroupProps:object().def({}),value:oneOfType([string(),number()]).def(""),dataSource:array().def([])},emits:["change"],render:function(){var e=this;return h(Radio.Group,__assign(__assign(__assign({value:this.value,options:this.dataSource},this.radioGroupProps),this.$attrs),{onChange:function(o){return e.$emit("change",o)}}),this.$slots)}});
//# sourceMappingURL=index.js.map
