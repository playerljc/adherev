"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),AntdvFormItemNormalize_1=require("../../AntdvFormItemNormalize"),MulitSelectFormItem_1=tslib_1.__importDefault(require("../MulitSelectFormItem"));exports.default={name:"CheckBoxCheckAllSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},value:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}}},data:function(){return{inputValue:"",checkAll:this.value.length===this.dataSource.length}},watch:{value:function(e){this.checkAll=e.length===this.dataSource.length},dataSource:function(e){this.checkAll=this.value.length===e.length}},methods:{$renderDropdownRender:function(t){var r=this,e=this.inputValue?this.dataSource.filter(function(e){return-1!==e.label.indexOf(r.inputValue)}):this.dataSource;return t("div",[t("div",{style:"padding-left: 10px;padding-top:10px;"},[t(AntdvFormItemNormalize_1.Checkbox,{attrs:{checked:this.checkAll},on:{change:function(e){e.target.checked?(r.$emit("change",r.dataSource.map(function(e){return e.value})),r.checkAll=!0):(r.$emit("change",[]),r.checkAll=!1)}}},["全选"])]),t("div",[t(AntdvFormItemNormalize_1.Checkbox.Group,{style:"padding: 10px;",attrs:{value:this.value},on:{change:function(e){r.$emit("change",e),r.checkAll=e.length===(r.dataSource||[]).length}}},[t(AntdvFormItemNormalize_1.Space,{attrs:{direction:"vertical"}},[e.map(function(e){return t(AntdvFormItemNormalize_1.Checkbox,{key:e.value,attrs:{value:e.value,disabled:e.disabled}},[e.label])})])])])])}},render:function(e){var t=this;return e(MulitSelectFormItem_1.default,{props:tslib_1.__assign(tslib_1.__assign({},this.$props),{selectProps:tslib_1.__assign({dropdownRender:function(){return t.$renderDropdownRender(e)},filterOption:function(){return!1}},this.$props.selectProps)}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:tslib_1.__assign(tslib_1.__assign({},this.$listeners),{search:function(e){t.inputValue=e},change:function(e){t.$emit("change",e),t.checkAll=e.length===(t.dataSource||[]).length},blur:function(){t.inputValue="",t.$emit("blur")}})},this.$slots.default)}};
//# sourceMappingURL=index.js.map
