import{createVNode as _createVNode}from"vue";import"core-js/modules/es.array.find.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import{defineComponent,h}from"vue";import{array,object,string}from"vue-types";import SelectFormItem from"../SelectFormItem";import TableFormItem from"../TableFormItem";export default defineComponent({name:"TableSelectFormItem",props:{selectProps:object().def({}),tableProps:object().def({}),value:string().def(""),dataSource:array().def([]),rowKey:string().def("id"),labelKey:string().def("name")},emits:["change"],data:function(){var t=this;return{inputValue:"",selectedRowKeys:this.value?[this.value]:[],selectedRows:this.value?this.dataSource.find(function(e){return e[t.rowKey||"id"]===t.value}):[]}},watch:{value:function(e){var t=this;this.selectedRowKeys=[e],this.selectedRows=[this.dataSource.find(function(e){return e[t.rowKey||"id"]===t.value})]}},methods:{$renderDropdownRender:function(){var r=this,e=this.inputValue?this.dataSource.filter(function(e){var t;return-1!==(null==(t=null==(e=e[r.labelKey||"name"])?void 0:e.indexOf)?void 0:t.call(e,r.inputValue))}):this.dataSource;return _createVNode(TableFormItem,{tableProps:__assign({rowSelection:{type:"radio",selectedRowKeys:this.selectedRowKeys,selectedRows:this.selectedRows,onChange:function(e,t){r.selectedRowKeys=e,r.selectedRows=t,r.$emit("change",e.length?e[0]:"")}},dataSource:e},this.tableProps),rowKey:this.rowKey},null)}},render:function(){var t=this;return h(SelectFormItem,__assign(__assign({selectProps:__assign({dropdownRender:function(){return t.$renderDropdownRender()},filterOption:function(){return!1}},this.selectProps),value:this.value,dataSource:this.dataSource.map(function(e){return{label:e[t.labelKey||"name"],value:e[t.rowKey||"id"]}})},this.$attrs),{onSearch:function(e){t.inputValue=e},onChange:function(e){t.$emit("change",e),e&&(!Array.isArray(e)||e.length)||(t.inputValue="")}}),this.$slots)}});
//# sourceMappingURL=index.js.map
