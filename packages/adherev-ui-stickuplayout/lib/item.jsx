"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var selectorPrefix = 'adherev-ui-stickuplayout-item';
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-stickuplayout-item',
    slots: ['title'],
    setup: function (props, _a) {
        var slots = _a.slots;
        return function () {
            var _a, _b;
            return (<div 
            // @ts-ignore
            class={selectorPrefix}>
        <div 
            // @ts-ignore
            class={"".concat(selectorPrefix, "-header")}>
          {(_a = slots === null || slots === void 0 ? void 0 : slots.title) === null || _a === void 0 ? void 0 : _a.call(slots)}
        </div>
        <div 
            // @ts-ignore
            class={"".concat(selectorPrefix, "-content")}>
          {(_b = slots === null || slots === void 0 ? void 0 : slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)}
        </div>
      </div>);
        };
    },
});
//# sourceMappingURL=item.jsx.map