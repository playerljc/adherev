import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";import{__assign}from"tslib";import Util from"@baifendian/adherev-util";import TreeMulitSelectFormItem from"../TreeMulitSelectFormItem";var getComponentPropsOption=Util._util.getComponentPropsOption;export default{name:"TreeSelectLeafMulitFormItem",props:getComponentPropsOption(TreeMulitSelectFormItem),computed:{targetDataSource:function(){var t=JSON.parse(JSON.stringify(this.dataSource));return function e(t){(t||[]).forEach(function(t){"leaf"in t&&t.leaf?t.disabled=!1:t.disabled=!0,e(t.children)})}(t),t}},render:function(t){return t(TreeMulitSelectFormItem,{props:__assign(__assign({},this.$props),{dataSource:this.targetDataSource}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}};
//# sourceMappingURL=index.js.map
