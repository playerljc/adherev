"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue");exports.default={name:"RadioButtonFormItem",props:{radioGroupProps:{type:Object,default:function(){return{}}},value:{type:[Number,String],default:""},dataSource:{type:Array,default:function(){return[]}}},render:function(r){return r(ant_design_vue_1.Radio.Group,{props:tslib_1.__assign(tslib_1.__assign({},this.radioGroupProps),{value:this.value}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.dataSource.map(function(e){return r(ant_design_vue_1.Radio.Button,{key:e.value,props:{value:e.value,disabled:e.disabled}},e.label)}))}};
//# sourceMappingURL=index.js.map