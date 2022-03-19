"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionProps = void 0;
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var selectPrefix = 'adherev-ui-playground-page-section';
exports.sectionProps = {
    title: (0, vue_types_1.oneOfType)([vue_types_1.string, (0, vue_types_1.object)()]),
    extra: (0, vue_types_1.object)(),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-page-section',
    props: exports.sectionProps,
    setup: function (props, _a) {
        var slots = _a.slots;
        return function () {
            var _a;
            return (
            // @ts-ignore
            <div class={selectPrefix}>
        <div 
            // @ts-ignore
            class={"".concat(selectPrefix, "-header")}>
          <div 
            // @ts-ignore
            class={"".concat(selectPrefix, "-header-title")}>
            {props.title}
          </div>
          <div 
            // @ts-ignore
            class={"".concat(selectPrefix, "-header-extra")}>
            {props.extra}
          </div>
        </div>
        <div 
            // @ts-ignore
            class={"".concat(selectPrefix, "-body")}>
          {(_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)}
        </div>
      </div>);
        };
    },
});
//# sourceMappingURL=Section.jsx.map