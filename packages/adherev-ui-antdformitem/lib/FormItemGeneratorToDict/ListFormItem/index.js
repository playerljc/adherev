"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue");exports.default={name:"ListFormItem",props:{listProps:{type:Object,default:function(){return{}}},rowKey:{type:String,default:"id"}},render:function(e){return e(ant_design_vue_1.List,{props:tslib_1.__assign({pagination:!1,rowKey:this.rowKey||"id"},this.listProps),attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}};
//# sourceMappingURL=index.js.map
