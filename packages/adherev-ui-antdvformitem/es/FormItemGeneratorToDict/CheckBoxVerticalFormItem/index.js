import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import{Checkbox}from"../../AntdvFormItemNormalize";var selectorPrefix="adherev-ui-antdformitem";export default{name:"CheckBoxVerticalFormItem",props:{checkBoxGroupProps:{type:Object,default:function(){return{}}},value:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}}},render:function(r){return r(Checkbox.Group,{props:__assign({value:this.value},this.checkBoxGroupProps),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.dataSource.map(function(e){return r(Checkbox,{key:e.value,props:{value:e.value,disabled:e.disabled},class:"".concat(selectorPrefix,"-check-box-vertical")},e.label)}))}};
//# sourceMappingURL=index.js.map
