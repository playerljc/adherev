"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var stickuplayout_1 = (0, tslib_1.__importDefault)(require("./stickuplayout"));
var item_1 = (0, tslib_1.__importDefault)(require("./item"));
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
var _a = adherev_util_1.default._util, withInstall = _a.withInstall, withVue = _a.withVue;
withInstall(stickuplayout_1.default);
withInstall(item_1.default);
stickuplayout_1.default.isUse = function () { return true; };
stickuplayout_1.default.use = function (Vue) {
    Vue.use(stickuplayout_1.default);
    Vue.use(item_1.default);
    withVue(Vue, 'StickupLayout', stickuplayout_1.default);
};
stickuplayout_1.default.Item = item_1.default;
exports.default = stickuplayout_1.default;
//# sourceMappingURL=index.js.map