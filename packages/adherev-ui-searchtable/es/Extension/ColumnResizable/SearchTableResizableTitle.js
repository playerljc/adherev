import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.find.js";import{__assign,__rest,__spreadArray}from"tslib";import classNames from"classnames";import{selectorPrefix}from"../../SearchTable";import{columnHeaderAlign}from"../../types";var columnAlignMap=new Map([[columnHeaderAlign.center,columnHeaderAlign.center],[columnHeaderAlign.left,columnHeaderAlign.left],[columnHeaderAlign.right,columnHeaderAlign.right],["",""],[null,""]]);export default function(l){return function(e,s,r){var o,a=s.key,s=__rest(s,["key"]),t=l.find(function(e){return(e.dataIndex||e.key)===a});return t&&t.width&&t.resizable?(o={key:t.dataIndex||t.key,class:"".concat(selectorPrefix,"-table-draggable-handle"),attrs:{w:10,x:0,z:1,axis:"x",draggable:!0,resizable:!1},on:{dragging:function(e){t.onHeaderCell(t,{x:e,width:Math.max(11,t.width+e)})}}},o=e("vue-draggable-resizable",__assign({},o)),e("th",__assign(__assign({},s),{class:classNames("".concat(selectorPrefix,"-resize-table-th"),columnAlignMap.get(null==t?void 0:t.align))}),__spreadArray(__spreadArray([],r,!0),[o],!1))):e("th",__assign(__assign({},s),{class:classNames("".concat(selectorPrefix,"-resize-table-th"),columnAlignMap.get(null==t?void 0:t.align))}),r)}}
//# sourceMappingURL=SearchTableResizableTitle.js.map
