import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import{Radio}from"ant-design-vue";export default{name:"RadioButtonFormItem",props:{radioGroupProps:{type:Object,default:function(){return{}}},value:{type:[Number,String],default:""},dataSource:{type:Array,default:function(){return[]}}},render:function(r){return r(Radio.Group,{props:__assign(__assign({},this.radioGroupProps),{value:this.value}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.dataSource.map(function(t){return r(Radio.Button,{key:t.value,props:{value:t.value,disabled:t.disabled}},t.label)}))}};
//# sourceMappingURL=index.js.map