"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),vue_1=tslib_1.__importDefault(require("vue")),store_1=require("./store"),index_1=tslib_1.__importDefault(require("../index")),ProRowDragSortTable_1=tslib_1.__importDefault(require("./ProRowDragSortTable")),SearchTableImplementFactory=(require("../index.less"),require("./index.less"),index_1.default.use(vue_1.default),index_1.default.SearchTableImplementFactory);new vue_1.default({el:"#app",store:(0,store_1.createStore)(),render:function(e){return e(SearchTableImplementFactory(ProRowDragSortTable_1.default))}});
//# sourceMappingURL=index-rowdragsorttable.js.map
