"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collapseProps = void 0;
var tslib_1 = require("tslib");
var adherev_ui_conditionalrender_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var selectorPrefix = 'adherev-ui-playground-collapse';
exports.collapseProps = {
    headerClassName: (0, vue_types_1.string)().def(''),
    headerStyle: (0, vue_types_1.object)().def({}),
    bodyClassName: (0, vue_types_1.string)().def(''),
    bodyStyle: (0, vue_types_1.object)().def({}),
    title: (0, vue_types_1.oneOfType)([(0, vue_types_1.string)(), (0, vue_types_1.object)()]),
    extra: (0, vue_types_1.oneOfType)([(0, vue_types_1.string)(), (0, vue_types_1.object)()]),
    defaultCollapse: (0, vue_types_1.bool)().def(false),
    border: (0, vue_types_1.bool)().def(false),
    scrollY: (0, vue_types_1.bool)().def(false),
    fixedHeaderScrollBody: (0, vue_types_1.bool)().def(false),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-collapse',
    props: exports.collapseProps,
    setup: function (props, _a) {
        var slots = _a.slots;
        var collapse = (0, vue_1.ref)(props.defaultCollapse);
        (0, vue_1.watch)(function () { return props.defaultCollapse; }, function (newVal, preValue) {
            if (newVal !== preValue) {
                collapse.value = newVal;
            }
        });
        var onClickHeader = function () {
            collapse.value = !collapse.value;
        };
        return function () { return (<div 
        // @ts-ignore
        class={(0, classnames_1.default)(selectorPrefix, props.scrollY ? "".concat(selectorPrefix, "-scroll-y") : '', props.fixedHeaderScrollBody ? "".concat(selectorPrefix, "-fixed-header-scroll-body") : '')}>
        <div 
        // @ts-ignore
        class={(0, classnames_1.default)("".concat(selectorPrefix, "-header"), props.border ? "".concat(selectorPrefix, "-header-border") : '', (props.headerClassName || '').split(/\s+/))} style={props.headerStyle} onClick={onClickHeader}>
          <div 
        // @ts-ignore
        class={"".concat(selectorPrefix, "-header-collapse")}>
            <div 
        // @ts-ignore
        class={(0, classnames_1.default)("".concat(selectorPrefix, "-header-collapse-icon"), collapse.value ? '' : "".concat(selectorPrefix, "-header-collapse-icon-close"))}/>
            {/*@ts-ignore*/}
            <adherev_ui_conditionalrender_1.default conditional={!!props.title}>
              <div 
        // @ts-ignore
        class={"".concat(selectorPrefix, "-header-title")}>
                {props.title}
              </div>
            </adherev_ui_conditionalrender_1.default>
          </div>

          {/*@ts-ignore*/}
          <adherev_ui_conditionalrender_1.default conditional={!!props.extra}>
            <div 
        // @ts-ignore
        class={"".concat(selectorPrefix, "-header-extra")}>
              {props.extra}
            </div>
          </adherev_ui_conditionalrender_1.default>
        </div>

        {/*@ts-ignore*/}
        <adherev_ui_conditionalrender_1.default conditional={!collapse.value}>
          <div 
        // @ts-ignore
        class={(0, classnames_1.default)("".concat(selectorPrefix, "-body"), props.border ? "".concat(selectorPrefix, "-body-border") : '', (props.bodyClassName || '').split(/\s+/), !!props.title || !!props.extra ? "".concat(selectorPrefix, "-body-exists-header") : '')} style={props.bodyStyle}>
            {slots.default ? slots.default() : null}
          </div>
        </adherev_ui_conditionalrender_1.default>
      </div>); };
    },
});
//# sourceMappingURL=Collapse.jsx.map