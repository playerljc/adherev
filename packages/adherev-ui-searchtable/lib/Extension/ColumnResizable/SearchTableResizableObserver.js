"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (context) {
    var observer = new MutationObserver(function (mutationsList) {
        var _a, _b;
        var list = mutationsList.filter(
        // @ts-ignore
        function (t) { var _a, _b; return t.type === 'childList' && ((_b = (_a = t.target) === null || _a === void 0 ? void 0 : _a.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'colgroup'; });
        if (list.length) {
            var columns = context.getTableColumns();
            if (list.length - 1 === columns.length) {
                // 停止监控
                (_a = observer === null || observer === void 0 ? void 0 : observer.disconnect) === null || _a === void 0 ? void 0 : _a.call(observer);
                (_b = context === null || context === void 0 ? void 0 : context.$forceUpdate) === null || _b === void 0 ? void 0 : _b.call(context);
            }
        }
    });
    observer.observe(context.$refs.tableWrapRef, {
        attributes: false,
        childList: true,
        subtree: true,
    });
    return observer;
});
//# sourceMappingURL=SearchTableResizableObserver.js.map