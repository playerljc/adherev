import{createVNode as _createVNode,mergeProps as _mergeProps}from"vue";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.string.ends-with.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.from.js";import{__assign,__spreadArray}from"tslib";import{defineComponent,h}from"vue";import{number,oneOfType,string}from"vue-types";import Dict from"@baifendian/adherev-util-dict";import{Table}from"../../AntdvFormItemNormalize";import MulitSelectFormItem from"../MulitSelectFormItem";import SelectFormItem from"../SelectFormItem";import TableFormItem from"../TableFormItem";import TableMulitSelectFormItem from"../TableMulitSelectFormItem";import TableSelectFormItem from"../TableSelectFormItem";var FormItemComponents={};export default function(){var e=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("Table")}),t=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("DynamicTable")}),a=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("TablePagination")});return e.forEach(function(t){FormItemComponents["".concat(t,"FormItem")]=defineComponent({name:"".concat(t,"FormItem"),props:{cascadeParams:oneOfType([string(),number()]).def(""),tableProps:TableFormItem.props.tableProps,rowKey:string().def("id")},emits:["change"],computed:{dataSource:function(){var e=Dict.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(){var t=this;return h(TableFormItem,__assign(__assign({tableProps:__assign({dataSource:this.dataSource},this.tableProps),rowKey:this.rowKey},this.$attrs),{onChange:function(e){return t.$emit("change",e)}}),this.$slots)}}),FormItemComponents["".concat(t,"SelectFormItem")]=defineComponent({name:"".concat(t,"SelectFormItem"),props:{cascadeParams:oneOfType([string(),number()]).def(""),selectProps:TableSelectFormItem.props.selectProps,tableProps:TableSelectFormItem.props.tableProps,rowKey:string().def("id"),labelKey:string().def("name"),value:TableSelectFormItem.props.value},emits:["change"],computed:{dataSource:function(){var e=Dict.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(){var t=this;return h(TableSelectFormItem,__assign(__assign({selectProps:this.selectProps,tableProps:this.tableProps,rowKey:this.rowKey,labelKey:this.labelKey,value:this.value,dataSource:this.dataSource},this.$attrs),{onChange:function(e){return t.$emit("change",e)}}),this.$slots)}}),FormItemComponents["".concat(t,"MulitSelectFormItem")]=defineComponent({name:"".concat(t,"MulitSelectFormItem"),props:{cascadeParams:oneOfType([string(),number()]).def(""),selectProps:TableMulitSelectFormItem.props.selectProps,tableProps:TableMulitSelectFormItem.props.tableProps,rowKey:string().def("id"),labelKey:string().def("name"),value:TableMulitSelectFormItem.props.value},emits:["change"],computed:{dataSource:function(){var e=Dict.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(){var t=this;return h(TableMulitSelectFormItem,__assign(__assign({selectProps:this.selectProps,tableProps:this.tableProps,rowKey:this.rowKey,labelKey:this.labelKey,value:this.value,dataSource:this.dataSource},this.$attrs),{onChange:function(e){return t.$emit("change",e)}}),this.$slots)}})}),t.forEach(function(a){FormItemComponents["".concat(a,"FormItem")]=defineComponent({name:"".concat(a,"FormItem"),props:{cascadeParams:oneOfType([string(),number()]).def(""),tableProps:TableFormItem.props.tableProps,rowKey:string().def("id")},emits:["change"],data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=Dict.value[a].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=Dict.value[a].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(){var t=this;return h(TableFormItem,__assign(__assign({tableProps:__assign({dataSource:this.dataSource},this.tableProps),rowKey:this.rowKey},this.$attrs),{onChange:function(e){return t.$emit("change",e)}}),this.$slots)}}),FormItemComponents["".concat(a,"SelectFormItem")]=defineComponent({name:"".concat(a,"SelectFormItem"),props:{cascadeParams:oneOfType([string(),number()]).def(""),selectProps:TableSelectFormItem.props.selectProps,tableProps:TableSelectFormItem.props.tableProps,rowKey:string().def("id"),labelKey:string().def("name"),value:TableSelectFormItem.props.value},emits:["change"],data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=Dict.value[a].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=Dict.value[a].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(){var t=this;return h(TableSelectFormItem,__assign(__assign({selectProps:this.selectProps,tableProps:this.tableProps,rowKey:this.rowKey,labelKey:this.labelKey,value:this.value,dataSource:this.dataSource},this.$attrs),{onChange:function(e){return t.$emit("change",e)}}),this.$slots)}}),FormItemComponents["".concat(a,"MulitSelectFormItem")]=defineComponent({name:"".concat(a,"MulitSelectFormItem"),props:{cascadeParams:oneOfType([string(),number()]).def(""),selectProps:TableMulitSelectFormItem.props.selectProps,tableProps:TableMulitSelectFormItem.props.tableProps,rowKey:string().def("id"),labelKey:string().def("name"),value:TableMulitSelectFormItem.props.value},emits:["change"],data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=Dict.value[a].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=Dict.value[a].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(){var t=this;return h(TableMulitSelectFormItem,__assign(__assign({selectProps:this.selectProps,tableProps:this.tableProps,rowKey:this.rowKey,labelKey:this.labelKey,value:this.value,dataSource:this.dataSource},this.$attrs),{onChange:function(e){return t.$emit("change",e)}}),this.$slots)}})}),a.forEach(function(e){FormItemComponents["".concat(e,"FormItem")]=defineComponent({name:"".concat(e,"FormItem"),props:{tableProps:TableFormItem.props.tableProps,rowKey:string().def("id"),totalKey:string().def("total"),dataKey:string().def("records")},emits:["change"],data:function(){return{loading:!1,data:[],pagin:{current:1,pageSize:10,total:0}}},watch:{"pagin.current":function(){this.$loadData()},"pagin.pageSize":function(){this.$loadData()}},methods:{$loadData:function(){var t=this;this.loading=!0,(0,Dict.value[e].value)(__assign({},this.pagin)).then(function(e){t.pagin=__assign(__assign({},t.pagin),{total:e[t.totalKey||"total"]}),t.data=e[t.dataKey||"records"],t.loading=!1}).catch(function(){t.loading=!1})},$getPagination:function(){var a=this;return{onChange:function(e,t){a.pagin=__assign(__assign({},a.pagin),{current:e,pageSize:t})},onShowSizeChange:function(e,t){a.pagin=__assign(__assign({},a.pagin),{current:e,pageSize:t})},total:this.pagin.total,current:this.pagin.current,pageSize:this.pagin.pageSize,showQuickJumper:!0}}},mounted:function(){this.$loadData()},render:function(){var t=this;return h(Table,__assign(__assign(__assign({dataSource:this.data,loading:this.loading,pagination:this.$getPagination(),rowKey:this.rowKey||"id"},this.tableProps),this.$attrs),{onChange:function(e){return t.$emit("change",e)}}),this.$slots)}}),FormItemComponents["".concat(e,"SelectFormItem")]=defineComponent({name:"".concat(e,"SelectFormItem"),props:{selectProps:SelectFormItem.props.selectProps,tableProps:{type:Object,default:function(){return{}}},value:SelectFormItem.props.value,rowKey:string().def("id"),totalKey:string().def("total"),dataKey:string().def("records")},emits:["change"],data:function(){var t=this;return{inputValue:"",loading:!1,data:[],pagin:{current:1,pageSize:10,total:0},selectedRowKeys:this.value?[this.value]:[],selectedRows:this.value?this.data.find(function(e){return e[t.rowKey||"id"]===t.value}):[]}},watch:{"pagin.current":function(){this.$loadData()},"pagin.pageSize":function(){this.$loadData()},value:function(e){var t=this;this.selectedRowKeys=[e],this.selectedRows=[this.data.find(function(e){return e[t.rowKey||"id"]===t.value})]}},methods:{$loadData:function(){var t=this;this.loading=!0,(0,Dict.value[e].value)(__assign({},this.pagin)).then(function(e){t.pagin=__assign(__assign({},t.pagin),{total:e[t.totalKey||"total"]}),t.data=e[t.dataKey||"records"],t.loading=!1}).catch(function(){t.loading=!1})},$getPagination:function(){var a=this;return{onChange:function(e,t){a.pagin=__assign(__assign({},a.pagin),{current:e,pageSize:t})},onShowSizeChange:function(e,t){a.pagin=__assign(__assign({},a.pagin),{current:e,pageSize:t})},total:this.pagin.total,current:this.pagin.current,pageSize:this.pagin.pageSize,showQuickJumper:!0}},$renderDropdownRender:function(){var a=this,e=this.inputValue?this.data.filter(function(e){var t;return-1!==(null==(t=null==(e=e[a.labelKey||"name"])?void 0:e.indexOf)?void 0:t.call(e,a.inputValue))}):this.data;return _createVNode(Table,_mergeProps({dataSource:e,loading:this.loading,pagination:this.$getPagination(),rowKey:this.rowKey||"id",rowSelection:{type:"radio",selectedRowKeys:this.selectedRowKeys,selectedRows:this.selectedRows,onChange:function(e,t){a.selectedRowKeys=e,a.selectedRows=t,a.$emit("change",e.length?e[0]:"")}}},this.tableProps),null)}},mounted:function(){this.$loadData()},render:function(){var t=this;return h(SelectFormItem,__assign(__assign({selectProps:__assign({dropdownRender:function(){return t.$renderDropdownRender()},filterOption:function(){return!1}},this.selectProps),value:this.value,dataSource:this.data.map(function(e){return{label:e[t.labelKey||"name"],value:e[t.rowKey||"id"]}})},this.$attrs),{onSearch:function(e){t.inputValue=e},onChange:function(e){return t.$emit("change",e)}}),this.$slots)}}),FormItemComponents["".concat(e,"MulitSelectFormItem")]=defineComponent({name:"".concat(e,"MulitSelectFormItem"),props:{selectProps:MulitSelectFormItem.props.selectProps,tableProps:{type:Object,default:function(){return{}}},value:MulitSelectFormItem.props.value,rowKey:string().def("id"),totalKey:string().def("total"),dataKey:string().def("records")},emits:["change"],data:function(){var a=this;return{inputValue:"",loading:!1,$data:new Map,pagin:{current:1,pageSize:10,total:0},selectedRowKeys:this.value||[],selectedRows:this.value?this.value.map(function(t){return a.$getDataSource().find(function(e){return e[a.rowKey||"id"]===t})}):[]}},watch:{"pagin.current":function(){this.$loadData()},"pagin.pageSize":function(){this.$loadData()},value:function(e){var a=this;this.selectedRowKeys=e,this.selectedRows=e?e.map(function(t){return a.$getDataSource().find(function(e){return e[a.rowKey||"id"]===t})}):[]}},methods:{$loadData:function(){var t=this;this.loading=!0,(0,Dict.value[e].value)(__assign({},this.pagin)).then(function(e){t.pagin=__assign(__assign({},t.pagin),{total:e[t.totalKey||"total"]}),t.$data.$data.set(t.pagin.current,e[t.dataKey||"records"]),t.loading=!1}).catch(function(){t.loading=!1})},$getPagination:function(){var a=this;return{onChange:function(e,t){a.pagin=__assign(__assign({},a.pagin),{current:e,pageSize:t})},onShowSizeChange:function(e,t){a.pagin=__assign(__assign({},a.pagin),{current:e,pageSize:t})},total:this.pagin.total,current:this.pagin.current,pageSize:this.pagin.pageSize,showQuickJumper:!0}},$getDataSource:function(){return this.$data.$data.get(this.pagin.current)||[]},$filter:function(e,a){var t,n=this.rowKey||"id",e=e?(t=__spreadArray(__spreadArray([],this.selectedRowKeys,!0),a.map(function(e){return e[n]}),!0),__spreadArray(__spreadArray([],this.selectedRows,!0),a,!0)):(t=this.selectedRowKeys.filter(function(t){return!a.find(function(e){return e[n]===t})}),this.selectedRows.filter(function(t){return!a.find(function(e){return e[n]===t[n]})}));this.selectedRowKeys=t,this.selectedRows=e,this.$emit("change",t)},$renderDropdownRender:function(){var n=this,e=this.$getDataSource(),e=this.inputValue?e.filter(function(e){var t;return-1!==(null==(t=null==(e=e[n.labelKey||"name"])?void 0:e.indexOf)?void 0:t.call(e,n.inputValue))}):e;return _createVNode(Table,_mergeProps({dataSource:e,pagination:this.$getPagination(),loading:this.loading,rowKey:this.rowKey||"id",rowSelection:{type:"checkbox",selectedRowKeys:this.selectedRowKeys,selectedRows:this.selectedRows,onSelect:function(e,t){n.$filter(t,[e])},onSelectAll:function(e,t,a){n.$filter(e,a)}}},this.tableProps),null)}},mounted:function(){this.$loadData()},render:function(){var a=this;return h(MulitSelectFormItem,__assign({selectProps:__assign({dropdownRender:function(){return a.$renderDropdownRender()},filterOption:function(){return!1}},this.selectProps),value:this.value,dataSource:this.$getDataSource().map(function(e){return{label:e[a.labelKey||"name"],value:e[a.rowKey||"id"]}}),onSearch:function(e){a.inputValue=e},onChange:function(e){a.$emit("change",e),a.selectedRowKeys=e,a.selectedRows=e.map(function(t){return Array.from(a.$data.$data.values()).find(function(e){return e[a.rowKey||"id"]===t})})}},this.$attrs),this.$slots)}})}),FormItemComponents}
//# sourceMappingURL=Table.js.map
