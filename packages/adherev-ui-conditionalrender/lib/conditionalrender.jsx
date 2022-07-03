"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var props = {
    conditional: (0, vue_types_1.bool)().def(true),
};
/**
 * ConditionalRender
 */
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-conditionalrender',
    props: props,
    slots: ['default', 'noMatch'],
    setup: function (props, _a) {
        var slots = _a.slots;
        return function () {
            return props.conditional
                ? slots.default
                    ? slots.default()
                    : null
                : slots.noMatch
                    ? slots.noMatch()
                    : null;
        };
    },
});
//# sourceMappingURL=conditionalrender.jsx.map