"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var selectorPrefix = 'adherev-ui-playground-simple-tabs';
var tabProps = {
    defaultActiveKey: (0, vue_types_1.string)().def(''),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-simple-tabs',
    props: tabProps,
    emits: ['change'],
    setup: function (props, _a) {
        var slots = _a.slots, emit = _a.emit;
        var activeKey = (0, vue_1.ref)(props.defaultActiveKey);
        var getActiveKey = function () { return activeKey.value; };
        var renderHead = function () {
            var _a, _b, _c;
            if (!slots.default)
                return [];
            if (Array.isArray((_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))) {
                if ((_b = slots === null || slots === void 0 ? void 0 : slots.default) === null || _b === void 0 ? void 0 : _b.call(slots).length) {
                    if (Array.isArray((_c = slots === null || slots === void 0 ? void 0 : slots.default) === null || _c === void 0 ? void 0 : _c.call(slots)[0].children)) {
                        return slots.default()[0].children.map(function (vNode) {
                            return renderHeadItem(vNode);
                        });
                    }
                }
            }
            return [];
        };
        var renderHeadItem = function (node) {
            var _a = node.props, index = _a.index, title = _a.title;
            return (<li key={index} 
            // @ts-ignore
            class={activeKey.value === index ? 'active' : ''} onClick={function () {
                    activeKey.value = index;
                    (0, vue_1.nextTick)(function () {
                        emit('change', index);
                    });
                }}>
          {title}
        </li>);
        };
        (0, vue_1.watch)(function () { return props.defaultActiveKey; }, function (newValue) { return (activeKey.value = newValue); });
        (0, vue_1.provide)('getActiveKey', getActiveKey);
        return function () {
            var _a;
            return (<div 
            // @ts-ignore
            class={selectorPrefix}>
        <ul 
            // @ts-ignore
            class={"".concat(selectorPrefix, "-head")}>
          {renderHead()}
        </ul>
        <div 
            // @ts-ignore
            class={"".concat(selectorPrefix, "-body")}>
          {(_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)}
        </div>
      </div>);
        };
    },
});
//# sourceMappingURL=index.jsx.map