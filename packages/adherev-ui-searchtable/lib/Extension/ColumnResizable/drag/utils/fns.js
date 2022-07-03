"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictToBounds = exports.computeHeight = exports.computeWidth = exports.getSize = exports.snapToGrid = exports.isFunction = void 0;
function isFunction(func) {
    return (typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]');
}
exports.isFunction = isFunction;
function snapToGrid(grid, pendingX, pendingY, scale) {
    if (scale === void 0) { scale = 1; }
    var _a = typeof scale === 'number' ? [scale, scale] : scale, scaleX = _a[0], scaleY = _a[1];
    var x = Math.round((pendingX / scaleX) / grid[0]) * grid[0];
    var y = Math.round((pendingY / scaleY) / grid[1]) * grid[1];
    return [x, y];
}
exports.snapToGrid = snapToGrid;
function getSize(el) {
    var rect = el.getBoundingClientRect();
    return [
        parseInt(rect.width),
        parseInt(rect.height)
    ];
}
exports.getSize = getSize;
function computeWidth(parentWidth, left, right) {
    return parentWidth - left - right;
}
exports.computeWidth = computeWidth;
function computeHeight(parentHeight, top, bottom) {
    return parentHeight - top - bottom;
}
exports.computeHeight = computeHeight;
function restrictToBounds(value, min, max) {
    if (min !== null && value < min) {
        return min;
    }
    if (max !== null && max < value) {
        return max;
    }
    return value;
}
exports.restrictToBounds = restrictToBounds;
//# sourceMappingURL=fns.js.map