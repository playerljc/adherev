"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var conditionalrender_1 = (0, tslib_1.__importDefault)(require("./conditionalrender"));
var show_1 = (0, tslib_1.__importDefault)(require("./show"));
var visibility_1 = (0, tslib_1.__importDefault)(require("./visibility"));
var wrap_1 = (0, tslib_1.__importDefault)(require("./wrap"));
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
var _a = adherev_util_1.default._util, withInstall = _a.withInstall, withVue = _a.withVue;
var Component = withInstall(conditionalrender_1.default);
withInstall(show_1.default);
withInstall(visibility_1.default);
withInstall(wrap_1.default);
Component.isUse = function () { return true; };
Component.use = function (Vue) {
    Vue.use(Component);
    Vue.use(show_1.default);
    Vue.use(visibility_1.default);
    Vue.use(wrap_1.default);
    withVue(Vue, 'ConditionalRender', conditionalrender_1.default);
    withVue(Vue, 'ConditionalRenderShow', show_1.default);
    withVue(Vue, 'ConditionalRenderVisibility', visibility_1.default);
    withVue(Vue, 'ConditionalRenderWrap', wrap_1.default);
};
Component.Show = show_1.default;
Component.Visibility = visibility_1.default;
Component.Wrap = wrap_1.default;
/**
 * conditionalRender
 * @description - 使用方法的ConditionalRender
 * @param conditional
 * @param match
 * @param noMatch
 */
Component.conditionalRender = function (_a) {
    var conditional = _a.conditional, match = _a.match, noMatch = _a.noMatch;
    return conditional ? match : noMatch || null;
};
/**
 * conditionalArr
 * @description - 含有PermissionConditional的React.Element的数组
 * @param arr
 * @return Array
 */
Component.conditionalArr = function (arr) {
    return arr.filter(function (t) {
        var _a, _b;
        if ('props' in t && 'conditional' in t.props) {
            if (!t.props.conditional) {
                if (t.props.noMatch && ((_b = (_a = t.props).noMatch) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null)
                    return true;
                return false;
            }
        }
        return true;
    });
};
exports.default = Component;
//# sourceMappingURL=index.js.map