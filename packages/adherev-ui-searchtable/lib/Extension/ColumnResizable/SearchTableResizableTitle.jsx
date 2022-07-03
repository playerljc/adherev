"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_1 = require("vue");
var VueDraggableResizable_1 = (0, tslib_1.__importDefault)(require("./drag/VueDraggableResizable"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var searchtable_1 = require("../../searchtable");
var types_1 = require("../../types");
var columnAlignMap = new Map([
    [types_1.columnHeaderAlign.center, types_1.columnHeaderAlign.center],
    [types_1.columnHeaderAlign.left, types_1.columnHeaderAlign.left],
    [types_1.columnHeaderAlign.right, types_1.columnHeaderAlign.right],
    ['', ''],
    [null, ''],
]);
exports.default = (function (columns) { return function (props, children) {
    var col = columns[props.colStart - 1];
    if (!col || col.key === '_number' || !col.width || !col.resize) {
        return (<th {...props} class={(0, classnames_1.default)("".concat(searchtable_1.selectorPrefix, "-resize-table-th"), columnAlignMap.get(col === null || col === void 0 ? void 0 : col.align))}>
        {/*@ts-ignore*/}
        <span class="ant-table-header-column">{children.slots.default()}</span>
      </th>);
    }
    var dragProps = {
        key: col.dataIndex || col.key,
        class: "".concat(searchtable_1.selectorPrefix, "-table-draggable-handle"),
        w: 10,
        x: 0,
        z: 1,
        axis: 'x',
        draggable: true,
        resizable: false,
        onDrag: function (x) {
            // console.log('onDragging', x, col);
            col.onHeaderCell(col, { x: x, width: Math.max(11, col.width + x) });
        },
        onclick: function (e) { return e.stopPropagation(); },
    };
    // @ts-ignore
    var drag = (0, vue_1.h)(VueDraggableResizable_1.default, (0, tslib_1.__assign)({}, dragProps));
    return (0, vue_1.h)('th', (0, tslib_1.__assign)((0, tslib_1.__assign)({}, props), { class: (0, classnames_1.default)("".concat(searchtable_1.selectorPrefix, "-resize-table-th"), columnAlignMap.get(col === null || col === void 0 ? void 0 : col.align)) }), [(0, vue_1.h)('span', { class: 'ant-table-header-column' }, children.slots.default()), drag]);
}; });
//# sourceMappingURL=SearchTableResizableTitle.jsx.map