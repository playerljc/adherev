"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),sortablejs_1=tslib_1.__importDefault(require("sortablejs")),vue_1=require("vue"),SearchTable_1=require("../../../SearchTable");exports.default=function(e){function r(e){var l;null!=(e=null==(l=null==(l=null==o?void 0:o.moveRow)?void 0:l.call(o,e.oldDraggableIndex,e.newDraggableIndex))?void 0:l.then)&&e.call(l,function(){})}var l=(0,vue_1.inject)("getContext"),o=null==(l=null==l?void 0:l())?void 0:l.context,a=null==(l=null==(l=o.onBody)?void 0:l.call(o))?void 0:l.bodyConfig,n=(0,vue_1.ref)();return(0,vue_1.onMounted)(function(){var e,l;n.value&&sortablejs_1.default.create(n.value,{onEnd:r,draggable:!(null==(l=null==(e=null==a?void 0:a.$bodyDragSort)?void 0:e.canDrag)||!l.call(e))&&".".concat(SearchTable_1.selectorPrefix,"-row-drag-sort-draggable-item")})}),function(e){var l;return(0,vue_1.cloneVNode)(e,{ref:n,class:(0,classnames_1.default)(null==(l=null==e?void 0:e.props)?void 0:l.class,"".concat(SearchTable_1.selectorPrefix,"-search-row-drag-sort-table"),null==(l=null==e?void 0:e.props)?void 0:l.class)})}};
//# sourceMappingURL=DragSortBody.js.map
