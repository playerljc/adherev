"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-ignore
var adherev_ui_space_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-space"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var Props_1 = (0, tslib_1.__importDefault)(require("../Props"));
var Section_1 = (0, tslib_1.__importStar)(require("./Section"));
var propsSectionProps = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, Section_1.sectionProps), { config: (0, vue_types_1.array)().def([]) });
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-page-props-section',
    props: propsSectionProps,
    setup: function (props) {
        return function () { return (
        // @ts-ignore
        <Section_1.default title={props.title} extra={props.extra}>
        <adherev_ui_space_1.default.Group direction="vertical">
          {(props.config || []).map(function (c, index) { return (
            // @ts-ignore
            <Props_1.default key={index + 1} {...c}/>); })}
        </adherev_ui_space_1.default.Group>
      </Section_1.default>); };
    },
});
//# sourceMappingURL=PropsSection.jsx.map