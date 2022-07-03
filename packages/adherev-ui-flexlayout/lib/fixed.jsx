"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var flexlayout_1 = require("./flexlayout");
var selectorPrefix = "".concat(flexlayout_1.selectorPrefix, "-fixed");
var props = {
    fit: (0, vue_types_1.bool)().def(true),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-flexlayout-fixed',
    props: props,
    setup: function (props, _a) {
        var slots = _a.slots, expose = _a.expose;
        var root = (0, vue_1.ref)(null);
        var getEl = function () { return root.value; };
        expose({
            getEl: getEl,
        });
        return function () { return (<div 
        // @ts-ignore
        ref={root} class={(0, classnames_1.default)(selectorPrefix, "".concat(props.fit ? selectorPrefix + '-fit' : ''))}>
        {slots.default ? slots.default() : null}
      </div>); };
    },
});
//# sourceMappingURL=fixed.jsx.map