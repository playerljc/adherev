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
    var requireComponent = require.context('./dict', false, /.*\.(js)$/);
    requireComponent.keys().forEach(function (path) {
        var dict = requireComponent(path).default;
        if (dict && adherev_util_1.default.isObject(dict)) {
            if ('initStatic' in dict && adherev_util_1.default.isFunction(dict.initStatic)) {
                dict.initStatic();
            }
            if ('initRemote' in dict && adherev_util_1.default.isFunction(dict.initRemote)) {
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
