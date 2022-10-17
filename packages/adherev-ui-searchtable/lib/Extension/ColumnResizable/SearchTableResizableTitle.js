"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.map.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/esnext.map.delete-all.js"),require("core-js/modules/esnext.map.every.js"),require("core-js/modules/esnext.map.filter.js"),require("core-js/modules/esnext.map.find.js"),require("core-js/modules/esnext.map.find-key.js"),require("core-js/modules/esnext.map.includes.js"),require("core-js/modules/esnext.map.key-of.js"),require("core-js/modules/esnext.map.map-keys.js"),require("core-js/modules/esnext.map.map-values.js"),require("core-js/modules/esnext.map.merge.js"),require("core-js/modules/esnext.map.reduce.js"),require("core-js/modules/esnext.map.some.js"),require("core-js/modules/esnext.map.update.js"),require("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),classnames_1=tslib_1.__importDefault(require("classnames")),vue_1=require("vue"),searchtable_1=require("../../searchtable"),types_1=require("../../types"),VueDraggableResizable_1=tslib_1.__importDefault(require("./drag/VueDraggableResizable")),columnAlignMap=new Map([[types_1.columnHeaderAlign.center,types_1.columnHeaderAlign.center],[types_1.columnHeaderAlign.left,types_1.columnHeaderAlign.left],[types_1.columnHeaderAlign.right,types_1.columnHeaderAlign.right],["",""],[null,""]]);exports.default=function(l){return function(e,s){var r,a=l[e.colStart-1];return a&&"_number"!==a.key&&a.width&&a.resize?(r={key:a.dataIndex||a.key,class:"".concat(searchtable_1.selectorPrefix,"-table-draggable-handle"),w:10,x:0,z:1,axis:"x",draggable:!0,resizable:!1,onDrag:function(e){a.onHeaderCell(a,{x:e,width:Math.max(11,a.width+e)})},onclick:function(e){return e.stopPropagation()}},r=(0,vue_1.h)(VueDraggableResizable_1.default,tslib_1.__assign({},r)),(0,vue_1.h)("th",tslib_1.__assign(tslib_1.__assign({},e),{class:(0,classnames_1.default)("".concat(searchtable_1.selectorPrefix,"-resize-table-th"),columnAlignMap.get(null==a?void 0:a.align))}),[(0,vue_1.h)("span",{class:"ant-table-header-column"},s.slots.default()),r])):(0,_vue.createVNode)("th",(0,_vue.mergeProps)(e,{class:(0,classnames_1.default)("".concat(searchtable_1.selectorPrefix,"-resize-table-th"),columnAlignMap.get(null==a?void 0:a.align))}),[(0,_vue.createVNode)("span",{class:"ant-table-header-column"},[s.slots.default()])])}};
//# sourceMappingURL=SearchTableResizableTitle.js.map
