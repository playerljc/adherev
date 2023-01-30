import _Checkbox from"ant-design-vue/es/checkbox";import"core-js/modules/es.array.map.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.string.includes.js";import{__assign,__spreadArray}from"tslib";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import ListFormItem from"../ListFormItem";import MulitSelectFormItem from"../MulitSelectFormItem";var selectorPrefix="adherev-ui-antdformitem";export default{name:"ListMulitSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},listProps:{type:Object,default:function(){return{}}},value:{type:Array,default:[]},dataSource:{type:Array,default:function(){return[]}},rowKey:{type:String,default:"id"},labelKey:{type:String,default:"name"}},emits:["change"],data:function(){var r=this;return{selectedRowKeys:this.value||[],selectedRows:this.value?this.value.map(function(t){return r.dataSource.find(function(e){return e[r.rowKey||"id"]===t})}):[]}},watch:{value:function(e){var r=this;this.selectedRowKeys=e,this.selectedRows=this.value.map(function(t){return r.dataSource.find(function(e){return e[r.rowKey||"id"]===t})})}},methods:{CheckWrap:function(e,t){var r=this,s=this.rowKey||"id";return e(_Checkbox,{on:{change:function(e){e.stopPropagation(),e.target.checked?(r.selectedRowKeys=__spreadArray(__spreadArray([],r.selectedRowKeys,!0),[t[s]],!1),r.selectedRows=__spreadArray(__spreadArray([],r.selectedRows,!0),[__assign({},t)],!1)):(r.selectedRowKeys=r.selectedRowKeys.filter(function(e){return e!==t[s]}),r.selectedRows=r.selectedRows.filter(function(e){return e[s]!==t[s]})),r.$emit("change",__spreadArray([],r.selectedRowKeys,!0))}},attrs:{checked:this.selectedRowKeys.includes(t[s])}})}},render:function(o){var a=this,e=ListFormItem;return o(MulitSelectFormItem,{props:{selectProps:__assign({dropdownRender:function(){return o(e,{attrs:{listProps:__assign(__assign({dataSource:a.dataSource},a.listProps),{renderItem:function(e,t){var r,s;return o(ConditionalRender,{attrs:{conditional:!(null==(r=a.listProps)||!r.renderItem)||a.$slots.renderItem||a.$scopedSlots.renderItem}},[o("div",{slot:"noMatch",class:"".concat(selectorPrefix,"-rowselectwrap")},[o("div",{class:"".concat(selectorPrefix,"-rowselectwrap-fixed")},[a.CheckWrap(o,e)]),o("div",{class:"".concat(selectorPrefix,"-rowselectwrap-auto")},[e])]),o("div",{class:"".concat(selectorPrefix,"-rowselectwrap")},[o("div",{class:"".concat(selectorPrefix,"-rowselectwrap-fixed")},[a.CheckWrap(o,e)]),o("div",{class:"".concat(selectorPrefix,"-rowselectwrap-auto")},[(null==(s=null==(r=null==a?void 0:a.listProps)?void 0:r.renderItem)?void 0:s.call(r,e))||a.$slots.renderItem||a.$scopedSlots.renderItem(e,t)])])])}}),rowKey:a.rowKey}})}},this.selectProps),value:this.value,dataSource:this.dataSource.map(function(e){return{label:e[a.labelKey||"name"],value:e[a.rowKey||"id"]}})},attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}};
//# sourceMappingURL=index.js.map
