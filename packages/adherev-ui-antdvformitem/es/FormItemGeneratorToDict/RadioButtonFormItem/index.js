import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import{defineComponent,h}from"vue";import{array,number,object,oneOfType,string}from"vue-types";import{Radio}from"../../AntdvFormItemNormalize";export default defineComponent({name:"RadioButtonFormItem",props:{radioGroupProps:object().def({}),value:oneOfType([string(),number()]).def(""),dataSource:array().def([])},emits:["change"],render:function(){var r=this;return h(Radio.Group,__assign(__assign(__assign({value:this.value},this.radioGroupProps),this.$attrs),{onChange:function(e){return r.$emit("change",e)}}),this.dataSource.map(function(e){return h(Radio.Button,{key:e.value,value:e.value,disabled:e.disabled},e.label)}))}});
//# sourceMappingURL=index.js.map
