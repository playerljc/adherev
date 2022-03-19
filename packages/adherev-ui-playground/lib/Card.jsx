"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardProps = void 0;
var tslib_1 = require("tslib");
var adherev_ui_conditionalrender_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var selectorPrefix = 'adherev-ui-playground-card';
exports.cardProps = {
    headerClassName: (0, vue_types_1.string)().def(''),
    headerStyle: (0, vue_types_1.object)().def({}),
    bodyClassName: (0, vue_types_1.string)().def(''),
    bodyStyle: (0, vue_types_1.object)().def({}),
    actionClassName: (0, vue_types_1.string)().def(''),
    actionStyle: (0, vue_types_1.object)().def({}),
    title: (0, vue_types_1.oneOfType)([vue_types_1.string, (0, vue_types_1.object)()]),
    extra: (0, vue_types_1.object)(),
    actions: (0, vue_types_1.array)().def([]),
    description: (0, vue_types_1.object)(),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-card',
    props: exports.cardProps,
    setup: function (props, _a) {
        var slots = _a.slots;
        return function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return (<div 
            // @ts-ignore
            class={selectorPrefix}>
        {/*@ts-ignore*/}
        <adherev_ui_conditionalrender_1.default conditional={!!props.title || !!props.extra}>
          <div 
            // @ts-ignore
            class={(0, classnames_1.default)("".concat(selectorPrefix, "-header"), (props.headerClassName || '').split(/\s+/))} style={props.headerStyle}>
            {/*@ts-ignore*/}
            <adherev_ui_conditionalrender_1.default conditional={!!props.title}>
              <div 
            // @ts-ignore
            class={"".concat(selectorPrefix, "-header-title")}>
                {props.title}
              </div>
            </adherev_ui_conditionalrender_1.default>

            {/*@ts-ignore*/}
            <adherev_ui_conditionalrender_1.default conditional={!!props.extra}>
              <div 
            // @ts-ignore
            class={"".concat(selectorPrefix, "-header-extra")}>
                {props.extra}
              </div>
            </adherev_ui_conditionalrender_1.default>
          </div>
        </adherev_ui_conditionalrender_1.default>

        {/*@ts-ignore*/}
        <adherev_ui_conditionalrender_1.default conditional={!!slots.default}>
          <div 
            // @ts-ignore
            class={(0, classnames_1.default)("".concat(selectorPrefix, "-body"), (props.bodyClassName || '').split(/\s+/))} style={props.bodyStyle}>
            {(_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)}
          </div>
        </adherev_ui_conditionalrender_1.default>

        {/*@ts-ignore*/}
        <adherev_ui_conditionalrender_1.default conditional={!!((_b = props.description) === null || _b === void 0 ? void 0 : _b.title) || !!((_c = props.description) === null || _c === void 0 ? void 0 : _c.info)}>
          <div 
            // @ts-ignore
            class={"".concat(selectorPrefix, "-description")}>
            {/*@ts-ignore*/}
            <adherev_ui_conditionalrender_1.default conditional={!!((_d = props.description) === null || _d === void 0 ? void 0 : _d.title)}>
              <div 
            // @ts-ignore
            class={"".concat(selectorPrefix, "-description-title")}>
                {(_e = props.description) === null || _e === void 0 ? void 0 : _e.title}
              </div>
            </adherev_ui_conditionalrender_1.default>

            {/*@ts-ignore*/}
            <adherev_ui_conditionalrender_1.default conditional={!!((_f = props.description) === null || _f === void 0 ? void 0 : _f.info)}>
              {(_g = props.description) === null || _g === void 0 ? void 0 : _g.info}
            </adherev_ui_conditionalrender_1.default>
          </div>
        </adherev_ui_conditionalrender_1.default>

        {/*@ts-ignore**/}
        <adherev_ui_conditionalrender_1.default conditional={!!(props.actions && props.actions.length)}>
          <ul 
            // @ts-ignore
            class={(0, classnames_1.default)("".concat(selectorPrefix, "-action"), (props.actionClassName || '').split(/\s+/))} style={props.actionStyle}>
            {(_h = props.actions) === null || _h === void 0 ? void 0 : _h.map(function (action, index) {
                    var _a;
                    return (<li key={"".concat(index + 1)} 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-action-item")}>
                {(_a = slots[action]) === null || _a === void 0 ? void 0 : _a.call(slots)}
              </li>);
                })}
          </ul>
        </adherev_ui_conditionalrender_1.default>
      </div>);
        };
    },
});
//# sourceMappingURL=Card.jsx.map