"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.reduce.js"),require("core-js/modules/es.object.to-string.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),DragSortRow_1=tslib_1.__importDefault(require("../DragSort/RowDragSort/DragSortRow")),EditableRow_1=tslib_1.__importDefault(require("../EditableCell/EditableRow")),EditableTableRow_1=tslib_1.__importDefault(require("../EditableCell/EditableTableRow"));exports.default={inject:["getContext"],mixins:[EditableRow_1.default,EditableTableRow_1.default,DragSortRow_1.default],computed:{props:function(){var e,t;return null==(t=null==(e=null==(e=null==(e=this.getContext)?void 0:e.call(this))?void 0:e.context)?void 0:e.onRow)?void 0:t.call(e,this.$parent.rowKey)}},render:function(l){var e,o=this,t=l("tr",[this.$slots.default]),r=null==(r=null==(r=this.getContext)?void 0:r.call(this))?void 0:r.context;return null==(e=null==(r=null==r?void 0:r.getTableRowComponentReducers())?void 0:r.reduce)?void 0:e.call(r,function(e,t){return e.value=o[t](l,e.value),e},{value:t}).value}};
//# sourceMappingURL=TableRow.js.map