import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import{Radio,Space}from"../../AntdvFormItemNormalize";import SelectFormItem from"../SelectFormItem";export default{name:"RadioSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},value:{type:[Number,String],default:""},dataSource:{type:Array,default:function(){return[]}}},data:function(){return{inputValue:""}},methods:{$renderDropdownRender:function(t){var r=this,e=this.inputValue?this.dataSource.filter(function(e){return-1!==e.label.indexOf(r.inputValue)}):this.dataSource;return t(Radio.Group,{style:"padding: 10px;",attrs:{value:this.value},on:{change:function(e){return r.$emit("change",e.target.value)}}},[t(Space,{attrs:{direction:"vertical"}},[e.map(function(e){return t(Radio,{key:e.value,attrs:{value:e.value,disabled:e.disabled}},[e.label])})])])}},render:function(e){var t=this;return e(SelectFormItem,{props:__assign(__assign({},this.$props),{selectProps:__assign({dropdownRender:function(){return t.$renderDropdownRender(e)},filterOption:function(){return!1}},this.$props.selectProps)}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:__assign(__assign({},this.$listeners),{search:function(e){t.inputValue=e},change:function(e){console.log("change",e),t.$emit("change",e),e||(t.inputValue="")}})},this.$slots.default)}};
//# sourceMappingURL=index.js.map
