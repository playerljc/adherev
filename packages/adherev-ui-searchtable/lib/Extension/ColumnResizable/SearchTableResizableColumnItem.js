"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.parse-int.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib");function handleResize(e,t){var l=e.context,i=e.key,e=e.columnsWidth,o=t.x,n=t.y,s=t.width,t=t.height;e.set(i,{x:o,y:n,width:s,height:t}),l.$forceUpdate()}exports.default=function(e){var n=e.columnsWidth,s=e.context,t=e.index,e=e.column,l=null==(l=null==(i=null==s?void 0:s.$refs.tableWrapRef)?void 0:i.querySelectorAll)?void 0:l.call(i,".ant-table-body > table > colgroup > col"),i=0;s.getRowSelection()&&(i+=1),s.isShowNumber()&&(i+=1);t=(t=l&&l.length>i?null==(i=null==(l=null==l?void 0:l[i+t])?void 0:l.style)?void 0:i.width:null)&&parseInt(t),l=n.get(e.key),i=l?l.width:e.width||t;return tslib_1.__assign(tslib_1.__assign({},e),{width:i,onHeaderCell:function(e,t){var l=t.x,i=t.y,o=t.width,t=t.height;handleResize({context:s,key:e.key,columnsWidth:n},{x:l,y:i,width:o,height:t})}})};
//# sourceMappingURL=SearchTableResizableColumnItem.js.map
