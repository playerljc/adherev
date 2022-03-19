"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var adherev_util_dict_1 = __importDefault(require("@baifendian/adherev-util-dict"));
var adherev_util_intl_1 = __importDefault(require("@baifendian/adherev-util-intl"));
exports.default = {
    initStatic: function () {
        // 最大层级
        adherev_util_dict_1.default.handlers.ResourceNormalMaxZIndex = function () { return 19999; };
        // 分页数量
        adherev_util_dict_1.default.handlers.ResourceNormalPageSize = function () { return 10; };
        // 罗马文数字和阿拉伯数字的对应
        adherev_util_dict_1.default.handlers.ResourceNormalRomanNumeralsMap = function () {
            return new Map([
                [1, 'Ⅰ'],
                [2, 'Ⅱ'],
                [3, 'Ⅲ'],
                [4, 'Ⅳ'],
                [5, 'Ⅴ'],
                [6, 'Ⅵ'],
                [7, 'Ⅶ'],
                [8, 'Ⅷ'],
                [9, 'Ⅸ'],
                [10, 'Ⅹ'],
            ]);
        };
        // 是/否Options
        adherev_util_dict_1.default.handlers.ResourceNormalWhether = function () { return [
            {
                label: adherev_util_intl_1.default.tv('全部'),
                value: '',
            },
            {
                label: adherev_util_intl_1.default.tv('是'),
                value: '1',
            },
            {
                label: adherev_util_intl_1.default.tv('否'),
                value: '0',
            },
        ]; };
        // 是/否
        adherev_util_dict_1.default.handlers.ResourceNormalWhetherMap = function () {
            return new Map([
                [
                    '',
                    {
                        label: adherev_util_intl_1.default.tv('全部'),
                        value: '',
                    },
                ],
                [
                    '1',
                    {
                        label: adherev_util_intl_1.default.tv('是'),
                        value: '1',
                    },
                ],
                [
                    '0',
                    {
                        label: adherev_util_intl_1.default.tv('否'),
                        value: '0',
                    },
                ],
            ]);
        };
        // 有无Options
        adherev_util_dict_1.default.handlers.ResourceNormalIsThere = function () { return [
            {
                label: adherev_util_intl_1.default.tv('全部'),
                value: '',
            },
            {
                label: adherev_util_intl_1.default.tv('有'),
                value: '1',
            },
            {
                label: adherev_util_intl_1.default.tv('无'),
                value: '0',
            },
        ]; };
        // 有无
        adherev_util_dict_1.default.handlers.ResourceNormalIsThereMap = function () {
            return new Map([
                [
                    '',
                    {
                        label: adherev_util_intl_1.default.tv('全部'),
                        value: '',
                    },
                ],
                [
                    '1',
                    {
                        label: adherev_util_intl_1.default.tv('有'),
                        value: '1',
                    },
                ],
                [
                    '0',
                    {
                        label: adherev_util_intl_1.default.tv('无'),
                        value: '0',
                    },
                ],
            ]);
        };
        // 男女Options
        adherev_util_dict_1.default.handlers.ResourceNormalSex = function () { return [
            {
                label: adherev_util_intl_1.default.tv('全部'),
                value: '',
            },
            {
                label: adherev_util_intl_1.default.tv('男'),
                value: '1',
            },
            {
                label: adherev_util_intl_1.default.tv('女'),
                value: '0',
            },
        ]; };
        // 男女
        adherev_util_dict_1.default.handlers.ResourceNormalSexMap = function () {
            return new Map([
                [
                    '',
                    {
                        label: adherev_util_intl_1.default.tv('全部'),
                        value: '',
                    },
                ],
                [
                    '1',
                    {
                        label: adherev_util_intl_1.default.tv('男'),
                        value: '1',
                    },
                ],
                [
                    '0',
                    {
                        label: adherev_util_intl_1.default.tv('女'),
                        value: '0',
                    },
                ],
            ]);
        };
    },
};
