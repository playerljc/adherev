"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),AntdvFormItemNormalize_1=require("../../AntdvFormItemNormalize");exports.default={name:"CheckBoxHorizontalFormItem",props:{checkBoxGroupProps:{type:Object,default:function(){return{}}},value:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}}},render:function(e){return e(AntdvFormItemNormalize_1.Checkbox.Group,{props:tslib_1.__assign(tslib_1.__assign({options:this.dataSource},this.checkBoxGroupProps),{value:this.value}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}};
//# sourceMappingURL=index.js.map
