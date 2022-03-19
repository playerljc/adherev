"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var adherev_util_1 = __importDefault(require("@baifendian/adherev-util"));
var adherev_util_dict_1 = __importDefault(require("@baifendian/adherev-util-dict"));
/**
 * initBasicDict
 * Resource提供的字典命名规范 Resource${业务分组}${实际业务名称}
 */
function initBasicDict() {
    // @ts-ignore
    var requireComponent = require.context('./dict', false, /.*\.(js)$/);
    requireComponent.keys().forEach(function (path) {
        var _a, _b, _c;
        var dict = requireComponent(path).default;
        if (dict && ((_a = adherev_util_1.default.isObject) === null || _a === void 0 ? void 0 : _a.call(adherev_util_1.default, dict))) {
            if ('initStatic' in dict && ((_b = adherev_util_1.default.isFunction) === null || _b === void 0 ? void 0 : _b.call(adherev_util_1.default, dict.initStatic))) {
                dict.initStatic();
            }
            if ('initRemote' in dict && ((_c = adherev_util_1.default.isFunction) === null || _c === void 0 ? void 0 : _c.call(adherev_util_1.default, dict.initRemote))) {
                dict.initRemote();
            }
        }
    });
}
// 初始化一些基本的字典配置
initBasicDict();
exports.default = {
    Dict: adherev_util_dict_1.default,
};
