"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var selectorPrefix = 'adherev-ui-searchform';
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-searchtable-searchform',
    setup: function (props, _a) {
        var slots = _a.slots;
        return function () {
            var _a;
            return (<table 
            // @ts-ignore
            class={selectorPrefix}>
        <tbody>{(_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)}</tbody>
      </table>);
        };
    },
});
//# sourceMappingURL=searchform.jsx.map