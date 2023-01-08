"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.sort.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),MulitSelectFormItem_1=tslib_1.__importDefault(require("../MulitSelectFormItem/MulitSelectFormItem")),selectorPrefix="adherev-ui-antdformitem";exports.default={name:"CheckAllMulitSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},value:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}}},emits:["checkAllChange","change"],data:function(){return{checked:!1}},watch:{value:function(e){this.checked=JSON.stringify(JSON.parse(JSON.stringify(e||[])).sort())===JSON.stringify((this.dataSource||[]).map(function(e){return e.value}).sort())},dataSource:function(e){this.checked=JSON.stringify(JSON.parse(JSON.stringify(this.value||[])).sort())===JSON.stringify((e||[]).map(function(e){return e.value}).sort())}},methods:{$onCheckAllChange:function(e){this.checked=e.target.checked,this.$emit("checkAllChange",e.target.checked)},$onChange:function(e){this.checked=e.length===(this.dataSource||[]).map(function(e){return e.value}).length,this.$emit("change",e)},$dropdownRender:function(e,t){return e("div",{class:"".concat(selectorPrefix,"-wrap")},[e("div",{class:"".concat(selectorPrefix,"-checkallwrap")},[e(ant_design_vue_1.Checkbox,{attrs:{checked:this.checked},on:{change:this.$onCheckAllChange}},[adherev_util_intl_1.default.tv("全选")])]),e(ant_design_vue_1.Divider,{style:"margin: 5px 0"}),t])}},render:function(t){var r=this;return t(MulitSelectFormItem_1.default,{props:tslib_1.__assign(tslib_1.__assign({},this.$props),{selectProps:tslib_1.__assign({dropdownRender:function(e){return r.$dropdownRender(t,e)}},this.$props.selectProps)}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:tslib_1.__assign(tslib_1.__assign({},this.$listeners),{change:this.$onChange})},this.$slots.default)}};
//# sourceMappingURL=CheckAllMulitSelectFormItem.js.map
