"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue");exports.default={name:"TransferFormItem",props:{transferProps:{type:Object,default:function(){return{}}},dataSource:{type:Array,default:function(){return[]}},value:{type:Array,default:function(){return[]}}},render:function(e){return e(ant_design_vue_1.Transfer,{props:tslib_1.__assign({dataSource:this.dataSource.map(function(e){return{key:"".concat(e.value),title:e.label,description:e.label,disabled:"disabled"in e&&e.disabled}}),render:function(e){return e.title},targetKeys:this.value},this.transferProps),attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}};
//# sourceMappingURL=index.js.map
