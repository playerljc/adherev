"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-conditionalrender-wrap',
    setup: function (props, _a) {
        var slots = _a.slots;
        return function () { var _a; return <div>{(_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)}</div>; };
    },
});
//# sourceMappingURL=wrap.jsx.map