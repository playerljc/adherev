import"core-js/modules/es.number.constructor.js";import{__assign}from"tslib";import{Radio}from"ant-design-vue";export default{name:"RadioHorizontalFormItem",props:{radioGroupProps:{type:Object,default:function(){return{}}},value:{type:[Number,String],default:""},dataSource:{type:Array,default:function(){return[]}}},render:function(t){return t(Radio.Group,{props:__assign(__assign({options:this.dataSource},this.radioGroupProps),{value:this.value}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}};
//# sourceMappingURL=index.js.map