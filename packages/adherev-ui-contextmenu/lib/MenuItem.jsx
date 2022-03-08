"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_ui_conditionalrender_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender"));
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var SubMenu_1 = (0, tslib_1.__importDefault)(require("./SubMenu"));
var selectorPrefix = 'adherev-ui-contextmenu-menuitem';
var props = {
    data: (0, vue_types_1.object)().def({}),
};
exports.default = (0, vue_1.defineComponent)({
    props: props,
    setup: function (props) {
        var context = (0, vue_1.inject)('context');
        var root = (0, vue_1.inject)('root');
        var getClass = (0, vue_1.computed)(function () {
            return (0, classnames_1.default)(selectorPrefix, props.data.disabled ? 'disabled' : '', (props.data.className || '').split(/\s+/));
        });
        var renderIcon = function () {
            var _a;
            return (
            // @ts-ignore
            <adherev_ui_conditionalrender_1.default conditional={(_a = adherev_util_1.default === null || adherev_util_1.default === void 0 ? void 0 : adherev_util_1.default.isString) === null || _a === void 0 ? void 0 : _a.call(adherev_util_1.default, props.data.icon)}>
          {{
                    // @ts-ignore
                    default: function () { return <span class={(0, classnames_1.default)("".concat(selectorPrefix, "-icon"), props.data.icon)}/>; },
                    noMatch: function () {
                        var _a;
                        return (
                        // @ts-ignore
                        <adherev_ui_conditionalrender_1.default conditional={(_a = adherev_util_1.default === null || adherev_util_1.default === void 0 ? void 0 : adherev_util_1.default.isObject) === null || _a === void 0 ? void 0 : _a.call(adherev_util_1.default, props.data.icon)}>
                {{
                                default: function () { return (
                                // @ts-ignore
                                <span class={(0, classnames_1.default)("".concat(selectorPrefix, "-icon"))}>
                      {(0, vue_1.h)(props.data.icon)}
                    </span>); },
                                noMatch: function () {
                                    var _a, _b;
                                    return (
                                    // @ts-ignore
                                    <adherev_ui_conditionalrender_1.default conditional={(_a = adherev_util_1.default === null || adherev_util_1.default === void 0 ? void 0 : adherev_util_1.default.isFunction) === null || _a === void 0 ? void 0 : _a.call(adherev_util_1.default, props.data.icon)}>
                      {/*@ts-ignore*/}
                      <span class={(0, classnames_1.default)("".concat(selectorPrefix, "-icon"))}>
                        {((_b = adherev_util_1.default === null || adherev_util_1.default === void 0 ? void 0 : adherev_util_1.default.isFunction) === null || _b === void 0 ? void 0 : _b.call(adherev_util_1.default, props.data.icon))
                                            ? props.data.icon()
                                            : null}
                      </span>
                    </adherev_ui_conditionalrender_1.default>);
                                },
                            }}
              </adherev_ui_conditionalrender_1.default>);
                    },
                }}
        </adherev_ui_conditionalrender_1.default>);
        };
        var renderName = function () {
            var _a;
            return (
            // @ts-ignore
            <adherev_ui_conditionalrender_1.default conditional={(_a = adherev_util_1.default === null || adherev_util_1.default === void 0 ? void 0 : adherev_util_1.default.isString) === null || _a === void 0 ? void 0 : _a.call(adherev_util_1.default, props.data.name)}>
          {{
                    default: function () { return (
                    // @ts-ignore
                    <span class={(0, classnames_1.default)("".concat(selectorPrefix, "-name"))}>{props.data.name}</span>); },
                    noMatch: function () {
                        var _a;
                        return (
                        // @ts-ignore
                        <adherev_ui_conditionalrender_1.default conditional={(_a = adherev_util_1.default === null || adherev_util_1.default === void 0 ? void 0 : adherev_util_1.default.isObject) === null || _a === void 0 ? void 0 : _a.call(adherev_util_1.default, props.data.name)}>
                {{
                                default: function () { return (
                                // @ts-ignore
                                <span class={(0, classnames_1.default)("".concat(selectorPrefix, "-name"))}>
                      {(0, vue_1.h)(props.data.name)}
                    </span>); },
                                noMatch: function () {
                                    var _a, _b;
                                    return (
                                    // @ts-ignore
                                    <adherev_ui_conditionalrender_1.default conditional={(_a = adherev_util_1.default === null || adherev_util_1.default === void 0 ? void 0 : adherev_util_1.default.isFunction) === null || _a === void 0 ? void 0 : _a.call(adherev_util_1.default, props.data.name)}>
                      {/*@ts-ignore*/}
                      <span class={(0, classnames_1.default)("".concat(selectorPrefix, "-name"))}>
                        {((_b = adherev_util_1.default === null || adherev_util_1.default === void 0 ? void 0 : adherev_util_1.default.isFunction) === null || _b === void 0 ? void 0 : _b.call(adherev_util_1.default, props.data.name))
                                            ? props.data.name()
                                            : null}
                      </span>
                    </adherev_ui_conditionalrender_1.default>);
                                },
                            }}
              </adherev_ui_conditionalrender_1.default>);
                    },
                }}
        </adherev_ui_conditionalrender_1.default>);
        };
        var renderMore = function () {
            var _a, _b;
            return (
            // @ts-ignore
            <adherev_ui_conditionalrender_1.default conditional={((_b = (_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length) !== 0}>
        {/*@ts-ignore*/}
        <span class={"".concat(selectorPrefix, "-more fa fa-caret-right")}/>
      </adherev_ui_conditionalrender_1.default>);
        };
        var renderSubMenu = function () {
            var _a, _b, _c;
            return (
            // @ts-ignore
            <adherev_ui_conditionalrender_1.default conditional={((_b = (_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length) !== 0}>
        {/*@ts-ignore*/}
        <SubMenu_1.default data={(_c = props === null || props === void 0 ? void 0 : props.data) === null || _c === void 0 ? void 0 : _c.children} className={props.data.subMenuClassName} style={props.data.subMenuStyle}/>
      </adherev_ui_conditionalrender_1.default>);
        };
        var onClick = function (e) {
            var _a, _b;
            e.stopPropagation();
            // const { config, el } = inject('getContext') as ContextReturnType;
            var handler = context.config.handler;
            if (props.data.disabled || (props.data.children || []).length > 0)
                return false;
            if (handler) {
                handler(props.data.id, props.data.attribute);
                root.unmount();
                (_b = (_a = context.el) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(context.el);
            }
        };
        return function () { return (
        // @ts-ignore
        <adherev_ui_conditionalrender_1.default conditional={!props.data.separation}>
        {{
                default: function () { return (
                // @ts-ignore
                <li class={getClass.value} style={props.data.style} onClick={onClick}>
              {renderIcon()}
              {renderName()}
              {renderMore()}
              {renderSubMenu()}
            </li>); },
                // @ts-ignore
                noMatch: function () { return <li class={"".concat(selectorPrefix, "-separation")}/>; },
            }}
      </adherev_ui_conditionalrender_1.default>); };
    },
});
//# sourceMappingURL=MenuItem.jsx.map