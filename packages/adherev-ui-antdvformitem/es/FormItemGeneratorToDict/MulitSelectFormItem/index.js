import _mergeJSXProps from"@vue/babel-helper-vue-jsx-merge-props";import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import{Select as AntdvSelect}from"ant-design-vue";import{MultipleSelect}from"../../AntdvFormItemNormalize";var Option=AntdvSelect.Option;export default{name:"MulitSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},value:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}}},render:function(t){return t(MultipleSelect,_mergeJSXProps([{},{props:__assign(__assign({},this.selectProps),{value:this.value}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners}]),[this.dataSource.map(function(e){return t(Option,{key:e.value,attrs:{value:e.value}},[e.label])})])}};
//# sourceMappingURL=index.js.map
