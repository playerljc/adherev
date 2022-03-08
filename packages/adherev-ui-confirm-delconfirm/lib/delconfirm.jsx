"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.open = void 0;
var tslib_1 = require("tslib");
// @ts-ignore
var adherev_ui_messagedialog_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-messagedialog"));
var adherev_util_intl_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-intl"));
var adherev_util_resource_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-resource"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var selectorPrefix = 'adherev-ui-delconfirm';
function open(success, zIndex) {
    adherev_ui_messagedialog_1.default.Confirm({
        title: adherev_util_intl_1.default.tv('提示'),
        text: "".concat(adherev_util_intl_1.default.tv('确定删除吗'), "?"),
        zIndex: zIndex,
        onSuccess: function () {
            return new Promise(function (resolve, reject) {
                if (success) {
                    success()
                        .then(function () {
                        resolve();
                    })
                        .catch(function () {
                        reject();
                    });
                }
                else {
                    resolve();
                }
            });
        },
    });
}
exports.open = open;
var props = {
    zIndex: (0, vue_types_1.number)().def(adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value),
    success: (0, vue_types_1.func)(),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-delconfirm',
    props: props,
    setup: function (props, _a) {
        var slots = _a.slots;
        var onClick = function () {
            return open(props.success, props.zIndex || adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value);
        };
        return function () { return (
        // @ts-ignore
        <div class={selectorPrefix} onClick={onClick}>
        {slots.default ? slots.default() : null}
      </div>); };
    },
});
//# sourceMappingURL=delconfirm.jsx.map