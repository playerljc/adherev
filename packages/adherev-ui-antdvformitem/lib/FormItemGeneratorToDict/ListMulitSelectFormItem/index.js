"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.array.find.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.array.includes.js"),require("core-js/modules/es.string.includes.js"),require("core-js/modules/es.array.index-of.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-conditionalrender")),AntdvFormItemNormalize_1=require("../../AntdvFormItemNormalize"),ListFormItem_1=tslib_1.__importDefault(require("../ListFormItem")),MulitSelectFormItem_1=tslib_1.__importDefault(require("../MulitSelectFormItem")),selectorPrefix="adherev-ui-antdformitem";exports.default={name:"ListMulitSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},listProps:{type:Object,default:function(){return{}}},value:{type:Array,default:[]},dataSource:{type:Array,default:function(){return[]}},rowKey:{type:String,default:"id"},labelKey:{type:String,default:"name"}},emits:["change"],data:function(){var r=this;return{inputValue:"",selectedRowKeys:this.value||[],selectedRows:this.value?this.value.map(function(t){return r.dataSource.find(function(e){return e[r.rowKey||"id"]===t})}):[]}},watch:{value:function(e){var r=this;this.selectedRowKeys=e,this.selectedRows=this.value.map(function(t){return r.dataSource.find(function(e){return e[r.rowKey||"id"]===t})})}},methods:{CheckWrap:function(e,t){var r=this,s=this.rowKey||"id";return e(AntdvFormItemNormalize_1.Checkbox,{on:{change:function(e){e.stopPropagation(),e.target.checked?(r.selectedRowKeys=tslib_1.__spreadArray(tslib_1.__spreadArray([],r.selectedRowKeys,!0),[t[s]],!1),r.selectedRows=tslib_1.__spreadArray(tslib_1.__spreadArray([],r.selectedRows,!0),[tslib_1.__assign({},t)],!1)):(r.selectedRowKeys=r.selectedRowKeys.filter(function(e){return e!==t[s]}),r.selectedRows=r.selectedRows.filter(function(e){return e[s]!==t[s]})),r.$emit("change",tslib_1.__spreadArray([],r.selectedRowKeys,!0))}},attrs:{checked:this.selectedRowKeys.includes(t[s])}})},$renderDropdownRender:function(i){var o=this,e=this.inputValue?this.dataSource.filter(function(e){var t;return-1!==(null==(t=null==(e=e[o.labelKey||"name"])?void 0:e.indexOf)?void 0:t.call(e,o.inputValue))}):this.dataSource;return i(ListFormItem_1.default,{attrs:{listProps:tslib_1.__assign(tslib_1.__assign({dataSource:e},this.listProps),{renderItem:function(e,t){var r,s;return i(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!(null==(r=o.listProps)||!r.renderItem)||o.$slots.renderItem||o.$scopedSlots.renderItem}},[i("div",{slot:"noMatch",class:"".concat(selectorPrefix,"-rowselectwrap")},[i("div",{class:"".concat(selectorPrefix,"-rowselectwrap-fixed")},[o.CheckWrap(i,e)]),i("div",{class:"".concat(selectorPrefix,"-rowselectwrap-auto")},[e])]),i("div",{class:"".concat(selectorPrefix,"-rowselectwrap")},[i("div",{class:"".concat(selectorPrefix,"-rowselectwrap-fixed")},[o.CheckWrap(i,e)]),i("div",{class:"".concat(selectorPrefix,"-rowselectwrap-auto")},[(null==(s=null==(r=null==o?void 0:o.listProps)?void 0:r.renderItem)?void 0:s.call(r,e))||o.$slots.renderItem||o.$scopedSlots.renderItem(e,t)])])])}}),rowKey:this.rowKey}})}},render:function(e){var t=this;return e(MulitSelectFormItem_1.default,{props:{selectProps:tslib_1.__assign({dropdownRender:function(){return t.$renderDropdownRender(e)},filterOption:function(){return!1}},this.selectProps),value:this.value,dataSource:this.dataSource.map(function(e){return{label:e[t.labelKey||"name"],value:e[t.rowKey||"id"]}})},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:tslib_1.__assign(tslib_1.__assign({},this.$listeners),{search:function(e){t.inputValue=e},change:function(e){t.$emit("change",e),e&&(!Array.isArray(e)||e.length)||(t.inputValue="")}})},this.$slots.default)}};
//# sourceMappingURL=index.js.map
