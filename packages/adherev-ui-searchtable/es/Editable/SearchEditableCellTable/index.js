import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.set.js";import"core-js/modules/esnext.set.add-all.js";import"core-js/modules/esnext.set.delete-all.js";import"core-js/modules/esnext.set.difference.js";import"core-js/modules/esnext.set.every.js";import"core-js/modules/esnext.set.filter.js";import"core-js/modules/esnext.set.find.js";import"core-js/modules/esnext.set.intersection.js";import"core-js/modules/esnext.set.is-disjoint-from.js";import"core-js/modules/esnext.set.is-subset-of.js";import"core-js/modules/esnext.set.is-superset-of.js";import"core-js/modules/esnext.set.join.js";import"core-js/modules/esnext.set.map.js";import"core-js/modules/esnext.set.reduce.js";import"core-js/modules/esnext.set.some.js";import"core-js/modules/esnext.set.symmetric-difference.js";import"core-js/modules/esnext.set.union.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.array.find.js";import{__assign,__spreadArray}from"tslib";import{Form}from"ant-design-vue";import moment from"moment";import Util from"@baifendian/adherev-util";import{selectorPrefix}from"../../SearchTable";import SearchTableImplement from"../../SearchTableImplement";var extend=Util._util.extend;export default function(e){return extend({className:"SearchEditableCellTable",mixins:[SearchTableImplement(e)],provide:function(){return{getFormIns:this.getFormIns,getActiveValue:this.getActiveValue,setActiveValue:this.setActiveValue}},data:function(){var r=this;return{$cellConfigReducers:[function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.cellEditableReducer.apply(r,e)}],$valueToFormItemValueMap:new Map([["rangePicker",function(e){var t=e.record,e=e.dataIndex,t=null==t?void 0:t[e];return Array.isArray(t)&&2===t.length?[moment(t[0]),moment(t[1])]:[moment(),moment()]}],["datePicker",function(e){var t=e.record,e=e.dataIndex,t=null==t?void 0:t[e];return moment(t)}],["timePicker",function(e){var t=e.record,e=e.dataIndex,t=null==t?void 0:t[e];return moment(t)}]]),form:this.$form.createForm(this,{name:"SearchEditableCellTableForm"}),activeValue:""}},methods:{onTableRowComponentReducers:function(e){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})?Array.from(new Set(__spreadArray(__spreadArray([],this.$data.$tableRowComponentReducers,!0),["useEditableRow"],!1))):this.$data.$tableRowComponentReducers},onTableCellComponentReducers:function(e){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})?Array.from(new Set(__spreadArray(__spreadArray([],this.$data.$tableCellComponentReducers,!0),["useEditableCell"],!1))):this.$data.$tableCellComponentReducers},onEditorRow:function(e){return{editable:!1}},onEditorCell:function(e){},cellEditableReducer:function(e){var t,r=e.rowIndex,o=e.column,e=e.record;return"$editable"in o&&null!=(t=o.$editable)&&t.editable&&this.onEditorCell&&this.onEditorCell({rowIndex:r,editorConfig:o.$editable,record:__assign({},e)}),o},valueToFormItemValue:function(e){var t=e.type,r=e.record,e=e.dataIndex,t=this.$data.$valueToFormItemValueMap.get(t);return t?null==t?void 0:t({record:r,dataIndex:e}):null==r?void 0:r[e]},updateEditorCellDate:function(e){var s=this,n=e.record,i=e.dataIndex,a=(e.rowIndex,e.value);return new Promise(function(e){var t,r,o;n[i]!==a&&(t=s.getData(),r=s.getRowKey(),o=t.find(function(e){return e[r]===n[r]}))?(o[i]=a,s.receiveDataMutation(t),s.$nextTick(function(){return e()})):e()})},updateEditorCellDateData:function(e){var s=this,n=e.record,i=e.dataIndex,a=e.value;return new Promise(function(e){var t,r,o;n[i]!==(null==a?void 0:a.valueOf())&&(t=s.getData(),r=s.getRowKey(),o=t.find(function(e){return e[r]===n[r]}))?(o[i]=null==a?void 0:a.valueOf(),s.receiveDataMutation(t),s.$nextTick(function(){return e()})):e()})},renderSearchTable:function(e){var t=this.$renderSearchTableSearchTable(e);return e(Form,{class:"".concat(selectorPrefix,"-form"),attrs:{form:this.form}},[t])},setActiveValue:function(e){this.activeValue=e},getActiveValue:function(){return this.activeValue},getFormIns:function(){return this.form}}})}
//# sourceMappingURL=index.js.map