import{__assign}from"tslib";import{Table}from"../../AntdvFormItemNormalize";export default{name:"TableFormItem",props:{tableProps:{type:Object,default:function(){return[]}},rowKey:{type:String,default:"id"}},render:function(t){return t(Table,{props:__assign({pagination:!1,rowKey:this.rowKey||"id"},this.tableProps),attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}};
//# sourceMappingURL=index.js.map
