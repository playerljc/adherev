import{__assign}from"tslib";import{List}from"ant-design-vue";export default{name:"ListFormItem",props:{listProps:{type:Object,default:function(){return{}}},rowKey:{type:String,default:"id"}},render:function(t){return t(List,{props:__assign({pagination:!1,rowKey:this.rowKey||"id"},this.listProps),attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}};
//# sourceMappingURL=index.js.map
