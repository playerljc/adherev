import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import{defineComponent,h}from"vue";import{array,object}from"vue-types";import{Transfer}from"../../AntdvFormItemNormalize";export default defineComponent({name:"TransferFormItem",props:{transferProps:object().def({}),dataSource:array().def([]),value:array().def([])},emits:["change"],render:function(){var r=this;return h(Transfer,__assign(__assign(__assign({dataSource:this.dataSource.map(function(e){return{key:"".concat(e.value),title:e.label,description:e.label,disabled:"disabled"in e&&e.disabled}}),render:function(e){return e.title},targetKeys:this.value},this.transferProps),this.$attrs),{onChange:function(e){return r.$emit("change",e)}}),this.$slots)}});
//# sourceMappingURL=index.js.map
