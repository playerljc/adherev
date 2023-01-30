import _Radio from"ant-design-vue/es/radio";import"core-js/modules/es.array.find.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.string.includes.js";import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import ListFormItem from"../ListFormItem";import SelectFormItem from"../SelectFormItem";var selectorPrefix="adherev-ui-antdformitem";export default{name:"ListSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},listProps:{type:Object,default:function(){return{}}},value:{type:String,default:""},dataSource:{type:Array,default:function(){return[]}},rowKey:{type:String,default:"id"},labelKey:{type:String,default:"name"}},emits:["change"],data:function(){var t=this;return{selectedRowKeys:this.value?[this.value]:[],selectedRows:this.value?this.dataSource.find(function(e){return e[t.rowKey||"id"]===t.value}):[]}},watch:{value:function(e){var t=this;this.selectedRowKeys=[e],this.selectedRows=[this.dataSource.find(function(e){return e[t.rowKey||"id"]===t.value})]}},methods:{RadioWrap:function(e,t){var r=this,s=this.rowKey||"id";return e(_Radio,{on:{change:function(e){e.stopPropagation(),e.target.checked&&(r.selectedRowKeys=[t[s]],r.selectedRows=[__assign({},t)],r.$emit("change",t[s]))}},attrs:{checked:this.selectedRowKeys.includes(t[s])}})}},render:function(o){var i=this,e=ListFormItem;return o(SelectFormItem,{props:{selectProps:__assign({dropdownRender:function(){return o(e,{attrs:{listProps:__assign(__assign({dataSource:i.dataSource},i.listProps),{renderItem:function(e,t){var r,s;return o(ConditionalRender,{attrs:{conditional:!(null==(r=i.listProps)||!r.renderItem)||i.$slots.renderItem||i.$scopedSlots.renderItem}},[o("div",{slot:"noMatch",class:"".concat(selectorPrefix,"-rowselectwrap")},[o("div",{class:"".concat(selectorPrefix,"-rowselectwrap-fixed")},[i.RadioWrap(o,e)]),o("div",{class:"".concat(selectorPrefix,"-rowselectwrap-auto")},[e])]),o("div",{class:"".concat(selectorPrefix,"-rowselectwrap")},[o("div",{class:"".concat(selectorPrefix,"-rowselectwrap-fixed")},[i.RadioWrap(o,e)]),o("div",{class:"".concat(selectorPrefix,"-rowselectwrap-auto")},[(null==(s=null==(r=null==i?void 0:i.listProps)?void 0:r.renderItem)?void 0:s.call(r,e))||i.$slots.renderItem||i.$scopedSlots.renderItem(e,t)])])])}}),rowKey:i.rowKey}})}},this.selectProps),value:this.value,dataSource:this.dataSource.map(function(e){return{label:e[i.labelKey||"name"],value:e[i.rowKey||"id"]}})},attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}};
//# sourceMappingURL=index.js.map
