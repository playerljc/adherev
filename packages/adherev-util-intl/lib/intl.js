"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extend = exports.getLocal = void 0;
var vue_i18n_1 = __importDefault(require("vue-i18n"));
var en_US_1 = __importDefault(require("./locales/en_US"));
var zh_CN_1 = __importDefault(require("./locales/zh_CN"));
var pt_PT_1 = __importDefault(require("./locales/pt_PT"));
// 组件的国际化文件
var finallyLocales = {
    en_US: en_US_1.default,
    zh_CN: zh_CN_1.default,
    pt_PT: pt_PT_1.default,
};
var intlMap = {};
var mainLocales = {};
var i18n = null;
/**
 * initIntlMap - 初始化以中文为key,intl.get()为值的Map
 * @param zh_CN
 */
function initIntlMap(zh_CN) {
    var propertys = Object.getOwnPropertyNames(zh_CN);
    propertys.forEach(function (p) {
        // 中文key 国际化值为值
        intlMap[zh_CN[p]] = p;
    });
}
/**
 * getLocal
 * @param prefix
 * @param data
 * @return object
 */
function getLocal(prefix, data) {
    if (prefix === void 0) { prefix = 'local'; }
    var result = __spreadArrays(Array.from(new Set(data)));
    var local = {};
    for (var i = 0; i < result.length; i++) {
        local["" + prefix + (i + 1)] = result[i];
    }
    return local;
}
exports.getLocal = getLocal;
/**
 * extend
 * @param Vue
 */
function extend(Vue) {
    if (!Vue.prototype.hasOwnProperty('$i18n')) {
        // $FlowFixMe
        Object.defineProperty(Vue.prototype, '$i18n', {
            get: function () {
                return this._i18n;
            },
        });
    }
    Vue.prototype.$tv = function (zh) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        var i18n = this.$i18n;
        var key = intlMap[zh];
        return i18n.t.apply(i18n, __spreadArrays([key, i18n.locale, i18n._getMessages(), this], values));
    };
    Vue.prototype.$tcv = function (zh, choice) {
        var values = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            values[_i - 2] = arguments[_i];
        }
        var i18n = this.$i18n;
        var key = intlMap[zh];
        return i18n._tc.apply(i18n, __spreadArrays([key, i18n.locale, i18n._getMessages(), this, choice], values));
    };
    Vue.prototype.$tev = function (zh, locale) {
        var i18n = this.$i18n;
        var key = intlMap[zh];
        return i18n._te(key, i18n.locale, i18n._getMessages(), locale);
    };
}
exports.extend = extend;
/**
 * I18nFactory
 * @param config
 * @constructor
 */
var I18nFactory = function (config) {
    var I18nOptions = config.I18nOptions, _a = config.prefix, prefix = _a === void 0 ? 'local' : _a;
    var _b = I18nOptions.messages, locales = _b === void 0 ? {} : _b;
    var finallyLocalesKeys = Object.keys(finallyLocales);
    var localesKeys = Object.keys(locales || {});
    var masterLocales;
    var slaveLocales;
    if (finallyLocalesKeys.length > localesKeys.length) {
        masterLocales = finallyLocales;
        slaveLocales = locales || {};
    }
    else if (finallyLocalesKeys.length <= localesKeys.length) {
        masterLocales = locales || {};
        slaveLocales = finallyLocales;
    }
    // 整合用户的locales
    for (var p in masterLocales) {
        mainLocales[p] = getLocal(prefix, 
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Array.from(new Set(__spreadArrays(masterLocales[p], (slaveLocales[p] || [])))));
    }
    // 反转资源文件
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    initIntlMap(mainLocales.zh_CN);
    // i18n实例
    i18n = new vue_i18n_1.default(__assign(__assign({}, I18nOptions), { messages: mainLocales }));
    return i18n;
};
/**
 * tv
 * @param zh
 * @param values
 */
I18nFactory.tv = I18nFactory.v = function (zh) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var key = intlMap[zh];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return i18n === null || i18n === void 0 ? void 0 : i18n.t.apply(i18n, __spreadArrays([key], (values || [])));
};
/**
 * tcv
 * @param zh
 * @param values
 */
I18nFactory.tcv = function (zh) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var key = intlMap[zh];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return i18n === null || i18n === void 0 ? void 0 : i18n.tc.apply(i18n, __spreadArrays([key], (values || [])));
};
/**
 * tev
 * @param zh
 * @param values
 */
I18nFactory.tev = function (zh) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var key = intlMap[zh];
    return i18n === null || i18n === void 0 ? void 0 : i18n.te.apply(i18n, __spreadArrays([key], values));
};
/**
 * vue-i18n Factory
 * @param config
 */
exports.default = I18nFactory;
