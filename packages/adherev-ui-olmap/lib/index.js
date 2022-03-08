"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
// @ts-ignore
var animationmanager_1 = (0, tslib_1.__importDefault)(require("./animationmanager"));
var geolayer_1 = (0, tslib_1.__importDefault)(require("./geolayer"));
var heatmap_1 = (0, tslib_1.__importDefault)(require("./heatmap"));
var olmap_1 = (0, tslib_1.__importDefault)(require("./olmap"));
var TitleLayer = (0, tslib_1.__importStar)(require("./titlelayer"));
var util_1 = (0, tslib_1.__importDefault)(require("./util"));
var _a = adherev_util_1.default._util, withInstall = _a.withInstall, withVue = _a.withVue;
var Component = {
    AnimationManager: animationmanager_1.default,
    GeoLayer: geolayer_1.default,
    TitleLayer: TitleLayer,
    OLMap: olmap_1.default,
    HeatMap: heatmap_1.default,
    Util: util_1.default,
};
Component.isUse = function () { return true; };
Component.use = function (Vue) {
    Vue.use(Component.OLMap);
    Vue.use(Component.HeatMap);
    withVue(Vue, 'OLMap', Component);
};
Component.OLMap = withInstall(Component.OLMap);
Component.HeatMap = withInstall(Component.HeatMap);
exports.default = Component;
//# sourceMappingURL=index.js.map