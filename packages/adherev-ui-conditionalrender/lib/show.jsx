"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var util_1 = require("./util");
var props = {
    conditional: (0, vue_types_1.bool)().def(true),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-conditionalrender-show',
    props: props,
    slots: ['default', 'noMatch'],
    setup: function (props, _a) {
        var slots = _a.slots;
        return function () {
            var _a = (0, util_1.deal)({
                conditional: props.conditional,
                rule: 'display',
                ruleVisibleValue: '',
                ruleHideValue: 'none',
                slots: slots,
            }), defaultVNodes = _a.defaultVNodes, noMatchVNodes = _a.noMatchVNodes;
            return (<>
          {defaultVNodes}
          {noMatchVNodes}
        </>);
        };
    },
});
//# sourceMappingURL=show.jsx.map