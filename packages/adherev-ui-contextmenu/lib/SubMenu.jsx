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
    setup: function (props) {
        var context = (0, vue_1.inject)('context');
        var getClass = (0, vue_1.computed)(function () {
            return (0, classnames_1.default)(selectorPrefix, (props.className || '').split(/\s+/));
        });
        var getStyle = (0, vue_1.computed)(function () {
            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, props.style), { width: "".concat(context.config.width, "px"), zIndex: 99999 * 2 + 1 });
        });
        var renderItems = function () {
            // @ts-ignore
            return props.data.map(function (item) { return <MenuItem_1.default key={item.id} data={item}/>; });
        };
        return function () { return (
        // @ts-ignore
        <ul class={getClass.value} style={getStyle.value}>
        {renderItems()}
      </ul>); };
    },
});
//# sourceMappingURL=SubMenu.jsx.map