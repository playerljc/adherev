"use strict";require("core-js/modules/es.object.keys.js"),require("core-js/modules/es.symbol.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.object.get-own-property-descriptor.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.object.get-own-property-descriptors.js"),require("core-js/modules/es.object.define-properties.js");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));function ownKeys(r,e){var o,t=Object.keys(r);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(r),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,o)),t}function _objectSpread(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(o),!0).forEach(function(e){(0,_defineProperty2.default)(r,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),vuedraggable_1=tslib_1.__importDefault(require("vuedraggable")),SearchTable_1=require("../../../SearchTable");exports.default={methods:{onUseDragSortRowBodyEnd:function(e){var r;null!=(r=null==(r=this.getContext)?void 0:r.call(this))&&r.context.moveRow(e.oldDraggableIndex,e.newDraggableIndex).then(function(){})},useDragSortRowBody:function(e,r){var o=this.props.bodyConfig;return e(vuedraggable_1.default,{props:_objectSpread({},(null==(e=null==o?void 0:o.$bodyDragSort)?void 0:e.draggableProps)||{}),attrs:{tag:"tbody",draggable:!(null==(o=null==(e=null==o?void 0:o.$bodyDragSort)?void 0:e.canDrag)||!o.call(e))&&".".concat(SearchTable_1.selectorPrefix,"-row-drag-sort-draggable-item")},class:(0,classnames_1.default)("".concat(SearchTable_1.selectorPrefix,"-search-row-drag-sort-table"),null==(o=r.data)?void 0:o.class),on:{end:this.onUseDragSortRowBodyEnd}},[r.children])}}};
//# sourceMappingURL=DragSortBody.js.map