import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.starts-with.js";import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import{Checkbox,Space}from"ant-design-vue";import Intl from"@baifendian/adherev-util-intl";import MulitSelectFormItem from"../MulitSelectFormItem";export default{name:"CheckBoxCheckAllSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},value:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}}},data:function(){return{inputValue:"",checkAll:this.value.length===this.dataSource.length}},watch:{value:function(e){this.checkAll=e.length===this.dataSource.length},dataSource:function(e){this.checkAll=this.value.length===e.length}},methods:{$renderDropdownRender:function(t){var r=this,e=this.inputValue?this.dataSource.filter(function(e){return e.label.startsWith(r.inputValue)}):this.dataSource;return t("div",[t("div",{style:{paddingLeft:10}},[t(Checkbox,{attrs:{checked:this.checkAll},on:{change:function(e){e.target.checked?(r.$emit("change",r.dataSource.map(function(e){return e.value})),r.checkAll=!0):(r.$emit("change",[]),r.checkAll=!1)}}},[Intl.tv("全选")])]),t("div",[t(Checkbox.Group,{style:"padding: 10px;",attrs:{value:this.value},on:{change:function(e){r.$emit("change",e),r.checkAll=e.length===(r.dataSource||[]).length}}},[t(Space,{attrs:{direction:"vertical"}},[e.map(function(e){return t(Checkbox,{key:e.value,attrs:{value:e.value,disabled:e.disabled}},[e.label])})])])])])}},render:function(e){var t=this;return e(MulitSelectFormItem,{props:__assign(__assign({},this.$props),{selectProps:__assign({dropdownRender:function(){return t.$renderDropdownRender(e)}},this.$props.selectProps)}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:__assign(__assign({},this.$listeners),{change:function(e){t.$emit("change",e),t.checkAll=e.length===(t.dataSource||[]).length},blur:function(){t.inputValue="",t.$emit("blur")}})},this.$slots.default)}};
//# sourceMappingURL=index.js.map
