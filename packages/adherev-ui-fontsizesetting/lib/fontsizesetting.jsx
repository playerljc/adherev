"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_util_intl_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-intl"));
var ant_design_vue_1 = require("ant-design-vue");
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var selectorPrefix = 'adherev-ui-fontsizesetting';
var props = {
    min: (0, vue_types_1.number)(),
    max: (0, vue_types_1.number)(),
    step: (0, vue_types_1.number)(),
    defaultValue: (0, vue_types_1.number)().def(14),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-fontsizesetting',
    emits: ['change'],
    props: props,
    setup: function (props, _a) {
        var emit = _a.emit;
        var value = (0, vue_1.ref)(props.defaultValue);
        var onChange = function (v) {
            value.value = v;
            (0, vue_1.nextTick)(function () {
                emit('change', v);
            });
        };
        (0, vue_1.watch)(function () { return props.defaultValue; }, function (newValue) {
            value.value = newValue;
        });
        return function () { return (
        // @ts-ignore
        <div class={selectorPrefix} ref="el">
        <div 
        // @ts-ignore
        class={"".concat(selectorPrefix, "-rangeWrap")}>
          <div 
        // @ts-ignore
        class={"".concat(selectorPrefix, "-separatedtool")}>
            <div 
        // @ts-ignore
        class={"".concat(selectorPrefix, "-separated")}>
              <span>{adherev_util_intl_1.default.tv('小')}</span>
            </div>
            <div 
        // @ts-ignore
        class={"".concat(selectorPrefix, "-separated")}>
              <span>{adherev_util_intl_1.default.tv('中')}</span>
            </div>
            <div 
        // @ts-ignore
        class={"".concat(selectorPrefix, "-separated")}>
              <span>{adherev_util_intl_1.default.tv('大')}</span>
            </div>
            <div 
        // @ts-ignore
        class={"".concat(selectorPrefix, "-separated")}>
              <span>{adherev_util_intl_1.default.tv('特大')}</span>
            </div>
          </div>

          {/*@ts-ignore*/}
          <ant_design_vue_1.Slider min={props.min} max={props.max} step={props.step} value={value.value} onChange={onChange}/>
        </div>
      </div>); };
    },
});
//# sourceMappingURL=fontsizesetting.jsx.map