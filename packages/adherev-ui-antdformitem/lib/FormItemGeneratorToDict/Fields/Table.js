"use strict";require("core-js/modules/es.symbol.js"),require("core-js/modules/es.object.get-own-property-descriptor.js"),require("core-js/modules/es.object.get-own-property-descriptors.js"),require("core-js/modules/es.object.define-properties.js");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));function ownKeys(t,e){var r,s=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,r)),s}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach(function(e){(0,_defineProperty2.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.object.keys.js"),require("core-js/modules/es.string.ends-with.js"),require("core-js/modules/es.array.find.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.map.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/esnext.map.delete-all.js"),require("core-js/modules/esnext.map.every.js"),require("core-js/modules/esnext.map.filter.js"),require("core-js/modules/esnext.map.find.js"),require("core-js/modules/esnext.map.find-key.js"),require("core-js/modules/esnext.map.includes.js"),require("core-js/modules/esnext.map.key-of.js"),require("core-js/modules/esnext.map.map-keys.js"),require("core-js/modules/esnext.map.map-values.js"),require("core-js/modules/esnext.map.merge.js"),require("core-js/modules/esnext.map.reduce.js"),require("core-js/modules/esnext.map.some.js"),require("core-js/modules/esnext.map.update.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.array.from.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),adherev_util_dict_1=tslib_1.__importDefault(require("@baifendian/adherev-util-dict")),MulitSelectFormItem_1=tslib_1.__importDefault(require("../MulitSelectFormItem/MulitSelectFormItem")),SelectFormItem_1=tslib_1.__importDefault(require("../SelectFormItem/SelectFormItem")),FormItemComponents={};exports.default=function(){var e=Object.keys(adherev_util_dict_1.default.handlers).filter(function(e){return e.endsWith("Table")}),t=Object.keys(adherev_util_dict_1.default.handlers).filter(function(e){return e.endsWith("DynamicTable")}),r=Object.keys(adherev_util_dict_1.default.handlers).filter(function(e){return e.endsWith("TablePagination")});return FormItemComponents.TableFormItem={name:"TableFormItem",props:{tableProps:{type:Object,default:function(){return[]}},rowKey:{type:String,default:"id"}},render:function(e){return e(ant_design_vue_1.Table,{props:tslib_1.__assign({pagination:!1,rowKey:this.rowKey||"id"},this.tableProps),attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}},FormItemComponents.TableSelectFormItem={name:"TableSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},tableProps:{type:Object,default:function(){return{}}},value:{type:String,default:""},dataSource:{type:Array,default:function(){return[]}},rowKey:{type:String,default:"id"},labelKey:{type:String,default:"name"}},emits:["change"],data:function(){var t=this;return{selectedRowKeys:this.value?[this.value]:[],selectedRows:this.value?this.dataSource.find(function(e){return e[t.rowKey||"id"]===t.value}):[]}},watch:{value:function(e){var t=this;this.selectedRowKeys=[e],this.selectedRows=[this.dataSource.find(function(e){return e[t.rowKey||"id"]===t.value})]}},render:function(e){var r=this,t=FormItemComponents.TableFormItem;return e(SelectFormItem_1.default,{props:{selectProps:tslib_1.__assign({dropdownRender:function(){return e(t,{attrs:{tableProps:tslib_1.__assign({rowSelection:{type:"radio",selectedRowKeys:r.selectedRowKeys,selectedRows:r.selectedRows,onChange:function(e,t){r.selectedRowKeys=e,r.selectedRows=t,r.$emit("change",e.length?e[0]:"")}},dataSource:r.dataSource},r.tableProps),rowKey:r.rowKey}})}},this.selectProps),value:this.value,dataSource:this.dataSource.map(function(e){return{label:e[r.labelKey||"name"],value:e[r.rowKey||"id"]}})},attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}},FormItemComponents.TableMulitSelectFormItem={name:"TableMulitSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},tableProps:{type:Object,default:function(){return{}}},value:{type:Array,default:[]},dataSource:{type:Array,default:function(){return[]}},rowKey:{type:String,default:"id"},labelKey:{type:String,default:"name"}},emits:["change"],data:function(){var r=this;return{selectedRowKeys:this.value||[],selectedRows:this.value?this.value.map(function(t){return r.dataSource.find(function(e){return e[r.rowKey||"id"]===t})}):[]}},watch:{value:function(e){var r=this;this.selectedRowKeys=e,this.selectedRows=this.value.map(function(t){return r.dataSource.find(function(e){return e[r.rowKey||"id"]===t})})}},render:function(e){var r=this,t=FormItemComponents.TableFormItem;return e(MulitSelectFormItem_1.default,{props:{selectProps:tslib_1.__assign({dropdownRender:function(){return e(t,{attrs:{tableProps:tslib_1.__assign({rowSelection:{type:"checkbox",selectedRowKeys:r.selectedRowKeys,selectedRows:r.selectedRows,onChange:function(e,t){r.selectedRowKeys=e,r.selectedRows=t,r.$emit("change",e.length?e:[])}},dataSource:r.dataSource},r.tableProps),rowKey:r.rowKey}})}},this.selectProps),value:this.value,dataSource:this.dataSource.map(function(e){return{label:e[r.labelKey||"name"],value:e[r.rowKey||"id"]}})},attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}},e.forEach(function(t){FormItemComponents["".concat(t,"FormItem")]={name:"".concat(t,"FormItem"),props:{cascadeParams:{type:[String,Number]},tableProps:FormItemComponents.TableFormItem.props.tableProps,rowKey:{type:String,default:"id"}},computed:{dataSource:function(){var e=adherev_util_dict_1.default.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(e){return e(FormItemComponents.TableFormItem,{props:{tableProps:tslib_1.__assign({dataSource:this.dataSource},this.tableProps),rowKey:this.rowKey},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(t,"SelectFormItem")]={name:"".concat(t,"SelectFormItem"),props:{cascadeParams:{type:[String,Number]},selectProps:FormItemComponents.TableSelectFormItem.props.selectProps,tableProps:FormItemComponents.TableSelectFormItem.props.tableProps,rowKey:{type:String,default:"id"},labelKey:{type:String,default:"name"},value:FormItemComponents.TableSelectFormItem.props.value},computed:{dataSource:function(){var e=adherev_util_dict_1.default.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(e){return e(FormItemComponents.TableSelectFormItem,{props:{selectProps:this.selectProps,tableProps:this.tableProps,rowKey:this.rowKey,labelKey:this.labelKey,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(t,"MulitSelectFormItem")]={name:"".concat(t,"MulitSelectFormItem"),props:{cascadeParams:{type:[String,Number]},selectProps:FormItemComponents.TableMulitSelectFormItem.props.selectProps,tableProps:FormItemComponents.TableMulitSelectFormItem.props.tableProps,rowKey:{type:String,default:"id"},labelKey:{type:String,default:"name"},value:FormItemComponents.TableMulitSelectFormItem.props.value},computed:{dataSource:function(){var e=adherev_util_dict_1.default.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(e){return e(FormItemComponents.TableMulitSelectFormItem,{props:{selectProps:this.selectProps,tableProps:this.tableProps,rowKey:this.rowKey,labelKey:this.labelKey,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}}}),t.forEach(function(r){FormItemComponents["".concat(r,"FormItem")]={name:"".concat(r,"FormItem"),props:{cascadeParams:{type:[String,Number]},tableProps:FormItemComponents.TableFormItem.props.tableProps,rowKey:{type:String,default:"id"}},data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=adherev_util_dict_1.default.value[r].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=adherev_util_dict_1.default.value[r].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(e){return e(FormItemComponents.TableFormItem,{props:{tableProps:tslib_1.__assign({dataSource:this.dataSource},this.tableProps),rowKey:this.rowKey},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(r,"SelectFormItem")]={name:"".concat(r,"SelectFormItem"),props:{cascadeParams:{type:[String,Number]},selectProps:FormItemComponents.TableSelectFormItem.props.selectProps,tableProps:FormItemComponents.TableSelectFormItem.props.tableProps,rowKey:{type:String,default:"id"},labelKey:{type:String,default:"name"},value:FormItemComponents.TableSelectFormItem.props.value},data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=adherev_util_dict_1.default.value[r].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=adherev_util_dict_1.default.value[r].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(e){return e(FormItemComponents.TableSelectFormItem,{props:{selectProps:this.selectProps,tableProps:this.tableProps,rowKey:this.rowKey,labelKey:this.labelKey,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(r,"MulitSelectFormItem")]={name:"".concat(r,"MulitSelectFormItem"),props:{cascadeParams:{type:[String,Number]},selectProps:FormItemComponents.TableMulitSelectFormItem.props.selectProps,tableProps:FormItemComponents.TableMulitSelectFormItem.props.tableProps,rowKey:{type:String,default:"id"},labelKey:{type:String,default:"name"},value:FormItemComponents.TableMulitSelectFormItem.props.value},data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=adherev_util_dict_1.default.value[r].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=adherev_util_dict_1.default.value[r].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(e){return e(FormItemComponents.TableMulitSelectFormItem,{props:{selectProps:this.selectProps,tableProps:this.tableProps,rowKey:this.rowKey,labelKey:this.labelKey,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}}}),r.forEach(function(e){FormItemComponents["".concat(e,"FormItem")]={name:"".concat(e,"FormItem"),props:{tableProps:FormItemComponents.TableFormItem.props.tableProps,rowKey:{type:String,default:"id"},totalKey:{type:String,default:"total"},dataKey:{type:String,default:"records"}},data:function(){return{loading:!1,data:[],pagin:{current:1,pageSize:10,total:0}}},watch:{"pagin.current":function(){this.$loadData()},"pagin.pageSize":function(){this.$loadData()}},methods:{$loadData:function(){var t=this;this.loading=!0,(0,adherev_util_dict_1.default.value[e].value)(tslib_1.__assign({},this.pagin)).then(function(e){t.pagin=tslib_1.__assign(tslib_1.__assign({},t.pagin),{total:e[t.totalKey||"total"]}),t.data=e[t.dataKey||"records"],t.loading=!1}).catch(function(){t.loading=!1})},$getPagination:function(){var r=this;return{onChange:function(e,t){r.pagin=tslib_1.__assign(tslib_1.__assign({},r.pagin),{current:e,pageSize:t})},onShowSizeChange:function(e,t){r.pagin=tslib_1.__assign(tslib_1.__assign({},r.pagin),{current:e,pageSize:t})},total:this.pagin.total,current:this.pagin.current,pageSize:this.pagin.pageSize,showQuickJumper:!0}}},mounted:function(){this.$loadData()},render:function(e){return e(ant_design_vue_1.Table,{props:tslib_1.__assign({dataSource:this.data,loading:this.loading,pagination:this.$getPagination(),rowKey:this.rowKey||"id"},this.tableProps),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(e,"SelectFormItem")]={name:"".concat(e,"SelectFormItem"),props:{selectProps:SelectFormItem_1.default.props.selectProps,tableProps:{type:Object,default:function(){return{}}},value:SelectFormItem_1.default.props.value,rowKey:{type:String,default:"id"},totalKey:{type:String,default:"total"},dataKey:{type:String,default:"records"}},emits:["change"],data:function(){var t=this;return{loading:!1,data:[],pagin:{current:1,pageSize:10,total:0},selectedRowKeys:this.value?[this.value]:[],selectedRows:this.value?this.data.find(function(e){return e[t.rowKey||"id"]===t.value}):[]}},watch:{"pagin.current":function(){this.$loadData()},"pagin.pageSize":function(){this.$loadData()},value:function(e){var t=this;this.selectedRowKeys=[e],this.selectedRows=[this.data.find(function(e){return e[t.rowKey||"id"]===t.value})]}},methods:{$loadData:function(){var t=this;this.loading=!0,(0,adherev_util_dict_1.default.value[e].value)(tslib_1.__assign({},this.pagin)).then(function(e){t.pagin=tslib_1.__assign(tslib_1.__assign({},t.pagin),{total:e[t.totalKey||"total"]}),t.data=e[t.dataKey||"records"],t.loading=!1}).catch(function(){t.loading=!1})},$getPagination:function(){var r=this;return{onChange:function(e,t){r.pagin=tslib_1.__assign(tslib_1.__assign({},r.pagin),{current:e,pageSize:t})},onShowSizeChange:function(e,t){r.pagin=tslib_1.__assign(tslib_1.__assign({},r.pagin),{current:e,pageSize:t})},total:this.pagin.total,current:this.pagin.current,pageSize:this.pagin.pageSize,showQuickJumper:!0}}},mounted:function(){this.$loadData()},render:function(e){var r=this;return e(SelectFormItem_1.default,{props:{selectProps:tslib_1.__assign({dropdownRender:function(){return e(ant_design_vue_1.Table,{attrs:{dataSource:r.data,loading:r.loading,pagination:r.$getPagination(),rowKey:r.rowKey||"id",rowSelection:{type:"radio",selectedRowKeys:r.selectedRowKeys,selectedRows:r.selectedRows,onChange:function(e,t){r.selectedRowKeys=e,r.selectedRows=t,r.$emit("change",e.length?e[0]:"")}}},props:_objectSpread({},r.tableProps)})}},this.selectProps),value:this.value,dataSource:this.data.map(function(e){return{label:e[r.labelKey||"name"],value:e[r.rowKey||"id"]}})},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(e,"MulitSelectFormItem")]={name:"".concat(e,"MulitSelectFormItem"),props:{selectProps:MulitSelectFormItem_1.default.props.selectProps,tableProps:{type:Object,default:function(){return{}}},value:MulitSelectFormItem_1.default.props.value,rowKey:{type:String,default:"id"},totalKey:{type:String,default:"total"},dataKey:{type:String,default:"records"}},emits:["change"],data:function(){var r=this;return{loading:!1,$data:new Map,pagin:{current:1,pageSize:10,total:0},selectedRowKeys:this.value||[],selectedRows:this.value?this.value.map(function(t){return r.$getDataSource().find(function(e){return e[r.rowKey||"id"]===t})}):[]}},watch:{"pagin.current":function(){this.$loadData()},"pagin.pageSize":function(){this.$loadData()},value:function(e){var r=this;this.selectedRowKeys=e,this.selectedRows=e.map(function(t){return r.data.find(function(e){return e[r.rowKey||"id"]===t})})}},methods:{$loadData:function(){var t=this;this.loading=!0,(0,adherev_util_dict_1.default.value[e].value)(tslib_1.__assign({},this.pagin)).then(function(e){t.pagin=tslib_1.__assign(tslib_1.__assign({},t.pagin),{total:e[t.totalKey||"total"]}),t.$data.$data.set(t.pagin.current,e[t.dataKey||"records"]),t.loading=!1}).catch(function(){t.loading=!1})},$getPagination:function(){var r=this;return{onChange:function(e,t){r.pagin=tslib_1.__assign(tslib_1.__assign({},r.pagin),{current:e,pageSize:t})},onShowSizeChange:function(e,t){r.pagin=tslib_1.__assign(tslib_1.__assign({},r.pagin),{current:e,pageSize:t})},total:this.pagin.total,current:this.pagin.current,pageSize:this.pagin.pageSize,showQuickJumper:!0}},$getDataSource:function(){return this.$data.$data.get(this.pagin.current)||[]},$filter:function(e,r){var t,s=this.rowKey||"id",e=e?(t=tslib_1.__spreadArray(tslib_1.__spreadArray([],this.selectedRowKeys,!0),r.map(function(e){return e[s]}),!0),tslib_1.__spreadArray(tslib_1.__spreadArray([],this.selectedRows,!0),r,!0)):(t=this.selectedRowKeys.filter(function(t){return!r.find(function(e){return e[s]===t})}),this.selectedRows.filter(function(t){return!r.find(function(e){return e[s]===t[s]})}));this.selectedRowKeys=t,this.selectedRows=e,this.$emit("change",t)}},mounted:function(){this.$loadData()},render:function(e){var s=this;return e(MulitSelectFormItem_1.default,{props:{selectProps:tslib_1.__assign({dropdownRender:function(){return e(ant_design_vue_1.Table,{attrs:{dataSource:s.$getDataSource(),pagination:s.$getPagination(),loading:s.loading,rowKey:s.rowKey||"id",rowSelection:{type:"checkbox",selectedRowKeys:s.selectedRowKeys,selectedRows:s.selectedRows,onSelect:function(e,t){s.$filter(t,[e])},onSelectAll:function(e,t,r){s.$filter(e,r)}}},props:_objectSpread({},s.tableProps)})}},this.selectProps),value:this.value,dataSource:this.$getDataSource().map(function(e){return{label:e[s.labelKey||"name"],value:e[s.rowKey||"id"]}})},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:tslib_1.__assign(tslib_1.__assign({},this.$listeners),{change:function(e){s.$emit("change",e),s.selectedRowKeys=e,s.selectedRows=e.map(function(t){return Array.from(s.$data.$data.values()).find(function(e){return e[s.rowKey||"id"]===t})})}})},this.$slots.default)}}}),FormItemComponents};
//# sourceMappingURL=Table.js.map