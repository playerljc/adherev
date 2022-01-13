"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var adherev_util_dict_1 = __importDefault(require("@baifendian/adherev-util-dict"));
var adherev_util_intl_1 = __importDefault(require("@baifendian/adherev-util-intl"));
exports.default = {
    initStatic: function () {
        adherev_util_dict_1.default.handlers.FormInputNumberRule = function () { return ({
            type: 'number',
            message: adherev_util_intl_1.default.tv('输入的值在1~200之间'),
            min: 1,
            max: 200,
        }); };
        adherev_util_dict_1.default.handlers.FormWhitespaceRule = function () { return ({
            message: adherev_util_intl_1.default.v('输入的内容前后不能有空格'),
            whitespace: true,
        }); };
        adherev_util_dict_1.default.handlers.FormInputStringRule = function () { return ({
            type: 'string',
            message: adherev_util_intl_1.default.tv('输入的内容在100个字符之内'),
            min: 1,
            max: 100,
        }); };
        adherev_util_dict_1.default.handlers.FormPopupContainer = function () { return function (el) { return el.parentElement; }; };
    },
};
