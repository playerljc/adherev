import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import{Checkbox}from"ant-design-vue";export default{name:"CheckBoxCustomFormItem",slots:["option"],props:{checkBoxGroupProps:{type:Object,default:function(){return{}}},value:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}}},render:function(e){var o=this;return e(Checkbox.Group,{props:__assign(__assign({},this.checkBoxGroupProps),{value:this.value}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.dataSource.map(function(t){return o.$scopedSlots.option({data:t,item:e(Checkbox,{key:t.value,props:{value:t.value,disabled:t.disabled}},t.label)})}))}};
//# sourceMappingURL=index.js.map
