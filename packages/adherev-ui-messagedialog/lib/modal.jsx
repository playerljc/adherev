"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectorPrefix = void 0;
var tslib_1 = require("tslib");
var adherev_util_intl_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-intl"));
var ant_design_vue_1 = require("ant-design-vue");
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var actions_1 = (0, tslib_1.__importDefault)(require("./actions"));
var emitter_1 = (0, tslib_1.__importDefault)(require("./emitter"));
exports.selectorPrefix = 'adherev-ui-messagedialog';
var props = {
    config: (0, vue_types_1.any)(),
    closeBtn: (0, vue_types_1.bool)().def(true),
    onClose: (0, vue_types_1.func)(),
};
exports.default = (0, vue_1.defineComponent)({
    props: props,
    slots: ['title', 'footer'],
    setup: function (props, _a) {
        var slots = _a.slots;
        var onEmitterClose = function () {
            if (!!props.onClose) {
                props.onClose();
            }
        };
        var renderCloseBtn = function () {
            return (
            // @ts-ignore
            <ant_design_vue_1.Button key="close" type={!props.config.footerJSX ? 'primary' : ''} title={adherev_util_intl_1.default.tv('取消')} onClick={function () {
                    if (!!props.onClose) {
                        props.onClose();
                    }
                }}>
          {adherev_util_intl_1.default.tv('取消')}
        </ant_design_vue_1.Button>);
        };
        var renderDefault = function () { var _a; return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots); };
        var renderTitle = function () { var _a; return (_a = slots.title) === null || _a === void 0 ? void 0 : _a.call(slots); };
        var renderFooter = function () {
            var result = null;
            if (props.config.footerJSX) {
                if (props.closeBtn) {
                    result = <div>{(0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], props.config.footerJSX, true), [renderCloseBtn()], false)}</div>;
                }
                else {
                    result = <div>{props.config.footerJSX}</div>;
                }
            }
            else {
                if (props.closeBtn) {
                    result = renderCloseBtn();
                }
            }
            return result;
        };
        (0, vue_1.onMounted)(function () {
            emitter_1.default.on(actions_1.default.close, onEmitterClose);
        });
        (0, vue_1.onBeforeUnmount)(function () {
            emitter_1.default.remove(actions_1.default.close, onEmitterClose);
        });
        return function () {
            var _a = (0, vue_1.toRaw)(props.config), footer = _a.footer, centered = _a.centered, title = _a.title, other = (0, tslib_1.__rest)(_a, ["footer", "centered", "title"]);
            console.log('other', other);
            return (
            // @ts-ignore
            <ant_design_vue_1.Modal {...other} centered={centered === undefined || centered === null ? true : centered} wrapClassName={exports.selectorPrefix} onCancel={function () {
                    if (!!props.onClose) {
                        props.onClose();
                    }
                }} visible>
          {{
                    default: function () { return renderDefault(); },
                    title: function () { return renderTitle(); },
                    footer: function () { return renderFooter(); },
                }}
        </ant_design_vue_1.Modal>);
        };
    },
});
//# sourceMappingURL=modal.jsx.map