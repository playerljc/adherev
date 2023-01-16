import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.set.js";import"core-js/modules/esnext.set.add-all.js";import"core-js/modules/esnext.set.delete-all.js";import"core-js/modules/esnext.set.difference.js";import"core-js/modules/esnext.set.every.js";import"core-js/modules/esnext.set.filter.js";import"core-js/modules/esnext.set.find.js";import"core-js/modules/esnext.set.intersection.js";import"core-js/modules/esnext.set.is-disjoint-from.js";import"core-js/modules/esnext.set.is-subset-of.js";import"core-js/modules/esnext.set.is-superset-of.js";import"core-js/modules/esnext.set.join.js";import"core-js/modules/esnext.set.map.js";import"core-js/modules/esnext.set.reduce.js";import"core-js/modules/esnext.set.some.js";import"core-js/modules/esnext.set.symmetric-difference.js";import"core-js/modules/esnext.set.union.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.reduce.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.parse-int.js";import"core-js/modules/es.array.last-index-of.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.array.map.js";import{__assign,__spreadArray}from"tslib";import Util from"@baifendian/adherev-util";import SearchEditableCellTable from"./SearchEditableCellTable";var extend=Util._util.extend;export default function(e){return extend({className:"SearchEditableTable",mixins:[SearchEditableCellTable(e)],data:function(){var r=this;return{$rowConfigReducers:[function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.rowEditableReducer.apply(r,e)}],isTableEditor:!1}},methods:{onTableRowComponentReducers:function(e){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})?Array.from(new Set(__spreadArray(__spreadArray([],this.$data.$tableRowComponentReducers,!0),["useEditableTableRow"],!1))):this.$data.$tableRowComponentReducers},onTableCellComponentReducers:function(e){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})?Array.from(new Set(__spreadArray(__spreadArray([],this.$data.$tableCellComponentReducers,!0),["useEditableTableCell"],!1))):this.$data.$tableCellComponentReducers},rowEditableReducer:function(e){var t=e.rowConfig,r=e.rowIndex,s=e.columns,e=e.record;return this.onEditorRow&&(t.$editable=this.onEditorRow({rowIndex:r,record:e,columns:s})),t},onEditorRow:function(e){return{editable:!0}},onEditorCell:function(e){e.record;e=e.editorConfig;e&&(e.useTrigger=!1,this.isTableEditor)&&(e.defaultStatus="edit")},setFieldValues:function(){var e,t=this.getFormIns();null!=(e=null==t?void 0:t.setFieldsValue)&&e.call(t,this.$arrayToValues(this.getData()))},$arrayToValues:function(e){var n=this,t=this.getTableColumns();return(e||[]).reduce(function(s,o,i){return t.forEach(function(e){var t,r=e.dataIndex,e=e.$editable;r in o&&e&&"type"in e&&(t="".concat(r,"_").concat(i),s[t]=n.valueToFormItemValue({type:e.type,record:o,dataIndex:r}))}),s},{})},$valuesToArray:function(o){return Object.keys(o).reduce(function(e,t){var r=parseInt(t.substring(t.lastIndexOf("_")+1)),s=t.substring(0,t.lastIndexOf("_"));return e[r]||(e[r]={}),e[r][s]=o[t],e},[])},fetchData:function(){var t=this;return this.$fetchDataSearchTableImpl().then(function(e){return t.isTableEditor=!1,e})},updateEditorData:function(s){var o=this;return new Promise(function(e){var t=o.getData(),r=o.$valuesToArray(s);o.receiveDataMutation(t.map(function(e,t){return __assign(__assign({},e),r[t])})),o.$nextTick(function(){return e()})})}}})}
//# sourceMappingURL=SearchEditableTable.js.map
