"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_babelHelperVueJsxMergeProps=_interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props")),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.array.find.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),ant_design_vue_1=require("ant-design-vue"),AntdvFormItemNormalize_1=require("../../AntdvFormItemNormalize"),Option=ant_design_vue_1.Select.Option;exports.default={name:"MulitSelectFormItem",emits:["change"],props:{selectProps:{type:Object,default:function(){return{}}},value:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}}},computed:{targetValue:function(){var t=this;return Array.isArray(this.value)?this.value.filter(function(r){var e;return null==(e=t.dataSource)?void 0:e.find(function(e){return e.value===r})}):[]}},watch:{value:function(e){var r,t=this;Array.isArray(e)?(r=e.filter(function(r){var e;return null==(e=t.dataSource)?void 0:e.find(function(e){return e.value===r})})).length!==e.length&&this.$emit("change",r):this.$emit("change",[])}},render:function(r){return r(AntdvFormItemNormalize_1.MultipleSelect,(0,_babelHelperVueJsxMergeProps.default)([{},{props:tslib_1.__assign(tslib_1.__assign({},this.selectProps),{value:this.targetValue}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners}]),[this.dataSource.map(function(e){return r(Option,{key:e.value,attrs:{value:e.value}},[e.label])})])}};
//# sourceMappingURL=index.js.map
