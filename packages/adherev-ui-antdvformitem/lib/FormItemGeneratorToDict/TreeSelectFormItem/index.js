"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_babelHelperVueJsxMergeProps=_interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props")),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),AntdvFormItemNormalize_1=require("../../AntdvFormItemNormalize");exports.default={name:"TreeSelectFormItem",props:{treeSelectProps:{type:Object,default:function(){return{}}},value:{type:String,default:function(){return""}},dataSource:{type:Array,default:function(){return[]}}},computed:{targetValue:function(){var r=this;return Array.isArray(this.value)?this.value.filter(function(e){return r.$exists(e)}):[]}},watch:{value:function(e){var r,t=this;Array.isArray(e)?(r=e.filter(function(e){return t.$exists(e)})).length!==e.length&&this.$emit("change",r):this.$emit("change",[])}},methods:{$exists:function(e){return function e(r,t){for(var i=null,s=0;s<r.length;s++){var u=r[s];if(u.value===t){i=u;break}if("children"in u&&Array.isArray(u.children)&&u.children.length&&(i=e(u.children,t)))break}return i}(this.dataSource,e)}},render:function(e){return e(AntdvFormItemNormalize_1.TreeSelect,(0,_babelHelperVueJsxMergeProps.default)([{},{props:tslib_1.__assign(tslib_1.__assign({},this.treeSelectProps),{treeData:this.dataSource,value:this.targetValue}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners}]),[this.$slots.default])}};
//# sourceMappingURL=index.js.map
