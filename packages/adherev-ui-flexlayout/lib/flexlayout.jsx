"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectorPrefix = void 0;
var tslib_1 = require("tslib");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
exports.selectorPrefix = 'adherev-ui-flexlayout';
var props = {
    direction: (0, vue_types_1.oneOf)(['vertical', 'horizontal']).def('vertical'),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-flexlayout',
    props: props,
    setup: function (props, _a) {
        // const getDirection = () => props.direction;
        // provide('getDirection', getDirection);
        var slots = _a.slots;
        (0, vue_1.provide)('direction', props.direction);
        return function () { return (
        // @ts-ignore
        <div class={(0, classnames_1.default)(exports.selectorPrefix, "".concat(exports.selectorPrefix, "-").concat(props.direction))}>
        {slots.default ? slots.default() : null}
      </div>); };
    },
});
//# sourceMappingURL=flexlayout.jsx.map