"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playGroundBaseProps = void 0;
var tslib_1 = require("tslib");
var adherev_util_intl_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-intl"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var copy_to_clipboard_1 = (0, tslib_1.__importDefault)(require("copy-to-clipboard"));
var Card_1 = (0, tslib_1.__importDefault)(require("./Card"));
var constant_1 = (0, tslib_1.__importDefault)(require("./constant"));
var Message_1 = (0, tslib_1.__importDefault)(require("./Message"));
var selectPrefix = 'adherev-ui-playground';
exports.playGroundBaseProps = {
    // id: string().def(''),
    cardProps: (0, vue_types_1.object)().def(),
    isActive: (0, vue_types_1.bool)().def(false),
    defaultExpand: (0, vue_types_1.bool)().def(false),
    getClipboardText: (0, vue_types_1.func)(),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-base',
    props: exports.playGroundBaseProps,
    emits: ['expand'],
    slots: ['codeView', 'copy', 'expand'],
    setup: function (props, _a) {
        var slots = _a.slots, emit = _a.emit;
        var expandIcon = (0, vue_1.computed)(function () {
            return props.defaultExpand ? constant_1.default.DownSquareOutlined : constant_1.default.UpSquareOutlined;
        });
        var expandAlt = (0, vue_1.computed)(function () { return (props.defaultExpand ? adherev_util_intl_1.default.v('收起') : adherev_util_intl_1.default.v('展开')); });
        var onCopy = function (e) {
            var _a, _b;
            (_b = (_a = props.getClipboardText) === null || _a === void 0 ? void 0 : _a.call(props, e)) === null || _b === void 0 ? void 0 : _b.then(function (text) {
                (0, copy_to_clipboard_1.default)(text);
                Message_1.default.success(adherev_util_intl_1.default.v('复制成功'));
            });
        };
        return function () {
            var _a;
            return (<div 
            // @ts-ignore
            className={(0, classnames_1.default)(selectPrefix, props.isActive ? "".concat(selectPrefix, "-active") : '')}>
          {/*@ts-ignore*/}
          <Card_1.default actions={['copy', 'expand']} {...(props.cardProps || {})}>
            {{
                    default: function () { var _a; return (_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots); },
                    copy: function () { return (<img 
                    // @ts-ignore
                    className={"".concat(selectPrefix, "-action-btn")} src={constant_1.default.CopyOutlined} 
                    // @ts-ignore
                    alt={adherev_util_intl_1.default.v('复制')} 
                    // @ts-ignore
                    onClick={onCopy}/>); },
                    expand: function () { return (<img 
                    // @ts-ignore
                    className={"".concat(selectPrefix, "-action-btn")} src={expandIcon.value} 
                    // @ts-ignore
                    alt={expandAlt.value} onClick={function () {
                            emit('expand', props.defaultExpand);
                        }}/>); },
                }}
          </Card_1.default>

          {(_a = slots === null || slots === void 0 ? void 0 : slots.codeView) === null || _a === void 0 ? void 0 : _a.call(slots)}
        </div>);
        };
    },
});
//# sourceMappingURL=PlayGroundBase.jsx.map