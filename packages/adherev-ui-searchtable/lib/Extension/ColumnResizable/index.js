"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.map.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/esnext.map.delete-all.js"),require("core-js/modules/esnext.map.every.js"),require("core-js/modules/esnext.map.filter.js"),require("core-js/modules/esnext.map.find.js"),require("core-js/modules/esnext.map.find-key.js"),require("core-js/modules/esnext.map.includes.js"),require("core-js/modules/esnext.map.key-of.js"),require("core-js/modules/esnext.map.map-keys.js"),require("core-js/modules/esnext.map.map-values.js"),require("core-js/modules/esnext.map.merge.js"),require("core-js/modules/esnext.map.reduce.js"),require("core-js/modules/esnext.map.some.js"),require("core-js/modules/esnext.map.update.js"),require("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.SearchTableResizableObserver=exports.SearchTableResizableTitle=void 0;var tslib_1=require("tslib"),SearchTableResizableTitle_1=(0,tslib_1.__importDefault)(require("./SearchTableResizableTitle")),SearchTableResizableObserver_1=(exports.SearchTableResizableTitle=SearchTableResizableTitle_1.default,(0,tslib_1.__importDefault)(require("./SearchTableResizableObserver"))),SearchTableResizableColumnItem_1=(exports.SearchTableResizableObserver=SearchTableResizableObserver_1.default,(0,tslib_1.__importDefault)(require("./SearchTableResizableColumnItem"))),ColumnResizable=function(){function e(){this.columnsWidth=new Map}return e.prototype.searchTableResizableColumnItem=function(e,r,s){return(0,SearchTableResizableColumnItem_1.default)({columnsWidth:this.columnsWidth,context:e,index:r,column:s})},e}();exports.default=ColumnResizable;
//# sourceMappingURL=index.js.map
