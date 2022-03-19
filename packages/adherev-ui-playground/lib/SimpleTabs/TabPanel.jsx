"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabPanelProps = void 0;
var tslib_1 = require("tslib");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var selectorPrefix = 'adherev-ui-playground-simple-tabs-panel';
exports.tabPanelProps = {
    title: (0, vue_types_1.string)().def(''),
    index: (0, vue_types_1.string)().def(''),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-simple-tabs-tab-panel',
    props: exports.tabPanelProps,
    setup: function (props, _a) {
        var slots = _a.slots;
        return function () {
            var _a;
            var activeKey = (0, vue_1.inject)('getActiveKey')();
            return (<div 
            // @ts-ignore
            class={(0, classnames_1.default)(selectorPrefix, activeKey === props.index ? "active" : '')}>
          {(_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)}
        </div>);
        };
    },
});
//# sourceMappingURL=TabPanel.jsx.map