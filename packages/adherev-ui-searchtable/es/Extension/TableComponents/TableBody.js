import"core-js/modules/es.array.reduce.js";import"core-js/modules/es.object.to-string.js";import RowDragSortBody from"../DragSort/RowDragSort/DragSortBody";export default{inject:["getContext"],mixins:[RowDragSortBody],computed:{props:function(){var o,t;return null==(t=null==(o=null==(o=null==(o=this.getContext)?void 0:o.call(this))?void 0:o.context)?void 0:o.onBody)?void 0:t.call(o)}},render:function(e){var o,l=this,t=e("tbody",[this.$slots.default]),r=null==(r=null==(r=this.getContext)?void 0:r.call(this))?void 0:r.context;return null==(o=null==(r=null==r?void 0:r.getTableBodyComponentReducers())?void 0:r.reduce)?void 0:o.call(r,function(o,t){return o.value=l[t](e,o.value),o},{value:t}).value}};
//# sourceMappingURL=TableBody.js.map
