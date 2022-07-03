"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * handleResize
 * @description 表头列拖动的时候
 * @param context
 * @param column
 * @param columnsWidth
 * @param x
 * @param y
 * @param width
 * @param height
 * @protected
 */
function handleResize(_a, _b) {
    var context = _a.context, key = _a.key, columnsWidth = _a.columnsWidth;
    var x = _b.x, y = _b.y, width = _b.width, height = _b.height;
    columnsWidth.set(key, { x: x, y: y, width: width, height: height });
    context.$forceUpdate();
}
// @ts-ignore
exports.default = (function (_a) {
    var _b, _c, _d, _e;
    var columnsWidth = _a.columnsWidth, context = _a.context, index = _a.index, column = _a.column;
    // 如果设置了列可拖动
    var colEls = (_c = (_b = context === null || context === void 0 ? void 0 : context.$refs.tableWrapRef) === null || _b === void 0 ? void 0 : _b.querySelectorAll) === null || _c === void 0 ? void 0 : _c.call(_b, '.ant-table-body > table > colgroup > col');
    var spanCount = 0;
    if (context.getRowSelection()) {
        spanCount = spanCount + 1;
    }
    if (context.isShowNumber()) {
        spanCount = spanCount + 1;
    }
    var computedWidth = colEls && colEls.length > spanCount ? (_e = (_d = colEls === null || colEls === void 0 ? void 0 : colEls[spanCount + index]) === null || _d === void 0 ? void 0 : _d.style) === null || _e === void 0 ? void 0 : _e.width : null;
    if (computedWidth) {
        computedWidth = parseInt(computedWidth);
    }
    var columnSizeItem = columnsWidth.get(column.key);
    var width = columnSizeItem ? columnSizeItem.width : column.width ? column.width : computedWidth;
    return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, column), { width: width, 
        // 加入onHeaderCell
        onHeaderCell: function (_column, _a) {
            var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
            handleResize({ context: context, key: _column.key, columnsWidth: columnsWidth }, { x: x, y: y, width: width, height: height });
        } });
});
//# sourceMappingURL=SearchTableResizableColumnItem.js.map