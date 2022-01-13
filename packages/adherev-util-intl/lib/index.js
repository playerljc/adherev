"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_i18n_1 = __importDefault(require("vue-i18n"));
var intl_1 = __importStar(require("./intl"));
intl_1.default.install = function (Vue) {
    // 扩展Vue对象
    intl_1.extend(Vue);
};
intl_1.default.use = function (Vue) {
    Vue.use(vue_i18n_1.default);
    Vue.use(intl_1.default);
};
intl_1.default.isUse = function () { return true; };
intl_1.default.getLocal = intl_1.getLocal;
exports.default = intl_1.default;
