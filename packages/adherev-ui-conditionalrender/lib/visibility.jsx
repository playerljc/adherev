"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var util_1 = require("./util");
var props = {
    conditional: (0, vue_types_1.bool)().def(true),
};
/**
 * adv-conditionalrender-visibility
 */
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-conditionalrender-visibility',
    props: props,
    slots: ['default', 'noMatch'],
    setup: function (props, _a) {
        var slots = _a.slots;
        return function () {
            var _a = (0, util_1.deal)({
                conditional: props.conditional,
                rule: 'visibility',
                ruleVisibleValue: 'visible',
                ruleHideValue: 'hidden',
                slots: slots,
            }), defaultVNodes = _a.defaultVNodes, noMatchVNodes = _a.noMatchVNodes;
            return (<>
          {defaultVNodes}
          {noMatchVNodes}
        </>);
        };
    },
});
//# sourceMappingURL=visibility.jsx.map