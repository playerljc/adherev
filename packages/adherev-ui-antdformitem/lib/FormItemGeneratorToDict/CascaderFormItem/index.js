"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue");exports.default={name:"CascaderFormItem",props:{cascaderProps:{type:Object,default:function(){return{}}},value:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}}},render:function(e){return e(ant_design_vue_1.Cascader,{props:tslib_1.__assign(tslib_1.__assign({},this.cascaderProps),{value:this.value,options:this.dataSource}),attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}};
//# sourceMappingURL=index.js.map
