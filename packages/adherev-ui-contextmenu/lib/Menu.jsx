"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var MenuItem_1 = (0, tslib_1.__importDefault)(require("./MenuItem"));
var selectorPrefix = 'adherev-ui-contextmenu-submenu';
var props = {
    data: (0, vue_types_1.array)().def([]),
    className: (0, vue_types_1.string)().def(''),
    style: (0, vue_types_1.object)().def({}),
};
exports.default = (0, vue_1.defineComponent)({
    props: props,
    setup: function (props, _a) {
        var expose = _a.expose;
        var el = (0, vue_1.ref)(null);
        var context = (0, vue_1.inject)('context');
        var getStyle = (0, vue_1.computed)(function () {
            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, props.style), { width: "".concat(context.config.width, "px"), zIndex: 99999 * 2 + 1 });
        });
        var getClass = (0, vue_1.computed)(function () {
            return (0, classnames_1.default)(selectorPrefix, (props.className || '').split(/\s+/));
        });
        var mount = function () {
            var _a, _b, _c, _d, _e, _f;
            var x = context.config.x;
            var y = context.config.y;
            var menuWidth = (_a = el.value) === null || _a === void 0 ? void 0 : _a.offsetWidth;
            var menuHeight = (_b = el.value) === null || _b === void 0 ? void 0 : _b.offsetHeight;
            var clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
            var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
            if (clientWidth - x < menuWidth) {
                x = clientWidth - menuWidth;
            }
            if (clientHeight - y < menuHeight) {
                y = clientHeight - menuHeight;
            }
            // @ts-ignore
            (_d = (_c = el.value) === null || _c === void 0 ? void 0 : _c.style) === null || _d === void 0 ? void 0 : _d.left = "".concat(x, "px");
            // @ts-ignore
            (_f = (_e = el.value) === null || _e === void 0 ? void 0 : _e.style) === null || _f === void 0 ? void 0 : _f.top = "".concat(y, "px");
        };
        var renderItems = function () {
            // @ts-ignore
            return props.data.map(function (item) { return <MenuItem_1.default key={item.id} data={item}/>; });
        };
        expose({
            mount: mount,
        });
        return function () { return (
        // @ts-ignore
        <ul class={getClass.value} style={getStyle.value} ref={el}>
        {renderItems()}
      </ul>); };
    },
});
//# sourceMappingURL=Menu.jsx.map