"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchTableResizableObserver = exports.SearchTableResizableTitle = void 0;
var tslib_1 = require("tslib");
var SearchTableResizableTitle_1 = (0, tslib_1.__importDefault)(require("./SearchTableResizableTitle"));
exports.SearchTableResizableTitle = SearchTableResizableTitle_1.default;
var SearchTableResizableObserver_1 = (0, tslib_1.__importDefault)(require("./SearchTableResizableObserver"));
exports.SearchTableResizableObserver = SearchTableResizableObserver_1.default;
var SearchTableResizableColumnItem_1 = (0, tslib_1.__importDefault)(require("./SearchTableResizableColumnItem"));
var ColumnResizable = /** @class */ (function () {
    function ColumnResizable() {
        // 列的宽度
        this.columnsWidth = new Map();
    }
    ColumnResizable.prototype.searchTableResizableColumnItem = function (context, index, column) {
        return (0, SearchTableResizableColumnItem_1.default)({
            columnsWidth: this.columnsWidth,
            context: context,
            index: index,
            column: column,
        });
    };
    return ColumnResizable;
}());
exports.default = ColumnResizable;
//# sourceMappingURL=index.js.map