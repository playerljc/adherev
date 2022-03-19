"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var adherev_util_dict_1 = __importDefault(require("@baifendian/adherev-util-dict"));
exports.default = {
    initStatic: function () {
        adherev_util_dict_1.default.handlers.ResourceMomentFormatYear = function () { return 'YYYY'; };
        adherev_util_dict_1.default.handlers.ResourceMomentFormat10 = function () { return 'YYYY-MM-DD'; };
        adherev_util_dict_1.default.handlers.ResourceMomentFormatFull = function () { return 'YYYY-MM-DD HH:mm:ss'; };
    },
};
