"use strict";require("core-js/modules/es.object.to-string.js");var _vue=require("vue");function _isSlot(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,_vue.isVNode)(e)}require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),vue_1=require("vue"),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),AntdvFormItemNormalize_1=require("../../AntdvFormItemNormalize"),CheckBoxHorizontalFormItem_1=tslib_1.__importDefault(require("../CheckBoxHorizontalFormItem"));exports.default=(0,vue_1.defineComponent)({name:"CheckBoxCheckAllHorizontalFormItem",props:tslib_1.__assign({},CheckBoxHorizontalFormItem_1.default.props),emits:["change"],data:function(){return{checkAll:(this.value||[]).length===this.dataSource.length}},watch:{value:function(e){this.checkAll=(e||[]).length===this.dataSource.length},dataSource:function(e){this.checkAll=(this.value||[]).length===e.length}},render:function(){var e,t=this,r=this,o=CheckBoxHorizontalFormItem_1.default;return(0,_vue.createVNode)("div",null,[(0,_vue.createVNode)("div",{style:"margin-bottom: 10px;"},[(0,_vue.createVNode)(AntdvFormItemNormalize_1.Checkbox,{checked:this.checkAll,onChange:function(e){r.$emit("change",e.target.checked?r.dataSource.map(function(e){return e.value}):[])}},_isSlot(e=adherev_util_intl_1.default.tv("全选"))?e:{default:function(){return[e]}})]),(0,_vue.createVNode)("div",null,[(0,_vue.createVNode)(o,tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({},this.$props),this.$attrs),{onChange:function(e){return r.$emit("change",e)}}),{default:function(){return[t.$slots]}})])])}});
//# sourceMappingURL=index.js.map
