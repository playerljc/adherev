import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.starts-with.js";import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import{Checkbox,Space}from"ant-design-vue";import MulitSelectFormItem from"../MulitSelectFormItem";export default{name:"CheckBoxSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},value:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}}},data:function(){return{inputValue:""}},methods:{$renderDropdownRender:function(e){var r=this,t=this.inputValue?this.dataSource.filter(function(t){return t.label.startsWith(r.inputValue)}):this.dataSource;return e(Checkbox.Group,{style:"padding: 10px;",attrs:{value:this.value},on:{change:function(t){r.$emit("change",t)}}},[e(Space,{attrs:{direction:"vertical"}},[t.map(function(t){return e(Checkbox,{key:t.value,attrs:{value:t.value,disabled:t.disabled}},[t.label])})])])}},render:function(t){var e=this;return t(MulitSelectFormItem,{props:__assign(__assign({},this.$props),{selectProps:__assign({dropdownRender:function(){return e.$renderDropdownRender(t)},filterOption:function(t){return e.inputValue=t,!1}},this.$props.selectProps)}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:__assign(__assign({},this.$listeners),{change:function(t){e.$emit("change",t),t&&(!Array.isArray(t)||t.length)||(e.inputValue="")}})},this.$slots.default)}};
//# sourceMappingURL=index.js.map