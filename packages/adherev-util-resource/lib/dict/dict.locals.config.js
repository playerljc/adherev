"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var adherev_util_dict_1 = __importDefault(require("@baifendian/adherev-util-dict"));
var zh_CN_1 = __importDefault(require("ant-design-vue/es/locale/zh_CN"));
var en_US_1 = __importDefault(require("ant-design-vue/es/locale/en_US"));
var pt_PT_1 = __importDefault(require("ant-design-vue/es/locale/pt_PT"));
require("moment/locale/zh-cn");
require("moment/locale/en-ca");
require("moment/locale/pt");
exports.default = {
    initStatic: function () {
        // 国际化
        adherev_util_dict_1.default.handlers.Locals = function () { return ({
            zh_CN: 'zh_CN',
            pt_PT: 'pt_PT',
            en_US: 'en_US',
        }); };
        // antd的国际化资源
        adherev_util_dict_1.default.handlers.LocalsAntd = function () { return ({
            zh_CN: zh_CN_1.default,
            pt_PT: pt_PT_1.default,
            en_US: en_US_1.default,
        }); };
        // moment国际化
        adherev_util_dict_1.default.handlers.LocalsMoment = function () { return ({
            zh_CN: function () {
                moment_1.default.locale('zh-cn');
            },
            en_US: function () {
                moment_1.default.locale('en-ca');
            },
            pt_PT: function () {
                moment_1.default.locale('pt');
            },
        }); };
    },
    initRemote: function () { },
};
