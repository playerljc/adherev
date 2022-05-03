import{mergeProps as _mergeProps,createVNode as _createVNode}from"vue";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import{__assign}from"tslib";import{h}from"vue";import vueDraggableResizable from"./drag/VueDraggableResizable";import classNames from"classnames";import{selectorPrefix}from"../../searchtable";import{columnHeaderAlign}from"../../types";var columnAlignMap=new Map([[columnHeaderAlign.center,columnHeaderAlign.center],[columnHeaderAlign.left,columnHeaderAlign.left],[columnHeaderAlign.right,columnHeaderAlign.right],["",""],[null,""]]);export default function(a){return function(e,s){var r=a[e.colStart-1];if(!r||"_number"===r.key||!r.width||!r.resize)return _createVNode("th",_mergeProps(e,{class:classNames("".concat(selectorPrefix,"-resize-table-th"),columnAlignMap.get(null==r?void 0:r.align))}),[_createVNode("span",{class:"ant-table-header-column"},[s.slots.default()])]);var o={key:r.dataIndex||r.key,class:"".concat(selectorPrefix,"-table-draggable-handle"),w:10,x:0,z:1,axis:"x",draggable:!0,resizable:!1,onDrag:function(e){r.onHeaderCell(r,{x:e,width:Math.max(11,r.width+e)})},onclick:function(e){return e.stopPropagation()}},o=h(vueDraggableResizable,__assign({},o));return h("th",__assign(__assign({},e),{class:classNames("".concat(selectorPrefix,"-resize-table-th"),columnAlignMap.get(null==r?void 0:r.align))}),[h("span",{class:"ant-table-header-column"},s.slots.default()),o])}}
//# sourceMappingURL=SearchTableResizableTitle.js.map
