"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.find.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.array.includes.js"),require("core-js/modules/es.string.includes.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),adherev_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-conditionalrender")),ListFormItem_1=tslib_1.__importDefault(require("../ListFormItem")),SelectFormItem_1=tslib_1.__importDefault(require("../SelectFormItem")),selectorPrefix="adherev-ui-antdformitem";exports.default={name:"ListSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},listProps:{type:Object,default:function(){return{}}},value:{type:String,default:""},dataSource:{type:Array,default:function(){return[]}},rowKey:{type:String,default:"id"},labelKey:{type:String,default:"name"}},emits:["change"],data:function(){var t=this;return{selectedRowKeys:this.value?[this.value]:[],selectedRows:this.value?this.dataSource.find(function(e){return e[t.rowKey||"id"]===t.value}):[]}},watch:{value:function(e){var t=this;this.selectedRowKeys=[e],this.selectedRows=[this.dataSource.find(function(e){return e[t.rowKey||"id"]===t.value})]}},methods:{RadioWrap:function(e,t){var r=this,s=this.rowKey||"id";return e(ant_design_vue_1.Radio,{on:{change:function(e){e.stopPropagation(),e.target.checked&&(r.selectedRowKeys=[t[s]],r.selectedRows=[tslib_1.__assign({},t)],r.$emit("change",t[s]))}},attrs:{checked:this.selectedRowKeys.includes(t[s])}})}},render:function(i){var o=this,e=ListFormItem_1.default;return i(SelectFormItem_1.default,{props:{selectProps:tslib_1.__assign({dropdownRender:function(){return i(e,{attrs:{listProps:tslib_1.__assign(tslib_1.__assign({dataSource:o.dataSource},o.listProps),{renderItem:function(e,t){var r,s;return i(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!(null==(r=o.listProps)||!r.renderItem)||o.$slots.renderItem||o.$scopedSlots.renderItem}},[i("div",{slot:"noMatch",class:"".concat(selectorPrefix,"-rowselectwrap")},[i("div",{class:"".concat(selectorPrefix,"-rowselectwrap-fixed")},[o.RadioWrap(i,e)]),i("div",{class:"".concat(selectorPrefix,"-rowselectwrap-auto")},[e])]),i("div",{class:"".concat(selectorPrefix,"-rowselectwrap")},[i("div",{class:"".concat(selectorPrefix,"-rowselectwrap-fixed")},[o.RadioWrap(i,e)]),i("div",{class:"".concat(selectorPrefix,"-rowselectwrap-auto")},[(null==(s=null==(r=null==o?void 0:o.listProps)?void 0:r.renderItem)?void 0:s.call(r,e))||o.$slots.renderItem||o.$scopedSlots.renderItem(e,t)])])])}}),rowKey:o.rowKey}})}},this.selectProps),value:this.value,dataSource:this.dataSource.map(function(e){return{label:e[o.labelKey||"name"],value:e[o.rowKey||"id"]}})},attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}};
//# sourceMappingURL=index.js.map
