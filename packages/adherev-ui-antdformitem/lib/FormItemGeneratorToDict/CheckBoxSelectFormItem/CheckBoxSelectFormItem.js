"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.string.starts-with.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),MulitSelectFormItem_1=tslib_1.__importDefault(require("../MulitSelectFormItem/MulitSelectFormItem"));exports.default={name:"CheckBoxSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},value:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}}},data:function(){return{inputValue:""}},methods:{$renderDropdownRender:function(t){var r=this,e=this.inputValue?this.dataSource.filter(function(e){return e.label.startsWith(r.inputValue)}):this.dataSource;return t(ant_design_vue_1.Checkbox.Group,{style:"padding: 10px;",attrs:{value:this.value},on:{change:function(e){r.$emit("change",e)}}},[t(ant_design_vue_1.Space,{attrs:{direction:"vertical"}},[e.map(function(e){return t(ant_design_vue_1.Checkbox,{key:e.value,attrs:{value:e.value,disabled:e.disabled}},[e.label])})])])}},render:function(e){var t=this;return e(MulitSelectFormItem_1.default,{props:tslib_1.__assign(tslib_1.__assign({},this.$props),{selectProps:tslib_1.__assign({dropdownRender:function(){return t.$renderDropdownRender(e)},filterOption:function(e){return t.inputValue=e,!1}},this.$props.selectProps)}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:tslib_1.__assign(tslib_1.__assign({},this.$listeners),{change:function(e){t.$emit("change",e),e&&(!Array.isArray(e)||e.length)||(t.inputValue="")}})},this.$slots.default)}};
//# sourceMappingURL=CheckBoxSelectFormItem.js.map
