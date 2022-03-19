"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_ui_conditionalrender_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender"));
var omit_js_1 = (0, tslib_1.__importDefault)(require("omit.js"));
var vue_1 = require("vue");
var Card_1 = (0, tslib_1.__importDefault)(require("./Card"));
var CodeTabPanel_1 = (0, tslib_1.__importStar)(require("./CodeTabPanel"));
var PlayGroundBase_1 = (0, tslib_1.__importStar)(require("./PlayGroundBase"));
var playGroundTabProps = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, PlayGroundBase_1.playGroundBaseProps), CodeTabPanel_1.codeTabPanelProps);
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-tab',
    props: playGroundTabProps,
    setup: function (props, _a) {
        var slots = _a.slots;
        var others = (0, omit_js_1.default)(PlayGroundBase_1.playGroundBaseProps, ['getClipboardText', 'defaultExpand']);
        var expand = (0, vue_1.ref)(props.defaultExpand);
        var activeKey = (0, vue_1.ref)(props.active);
        var getClipboardText = function () {
            var _a;
            return Promise.resolve((_a = props.config.find(function (c) { return c.key === activeKey.value; })) === null || _a === void 0 ? void 0 : _a.codeText);
        };
        var onExpand = function (_expand) {
            expand.value = !_expand;
        };
        (0, vue_1.watch)(function () { return props.defaultExpand; }, function (newValue) { return (expand.value = newValue); });
        (0, vue_1.watch)(function () { return props.active; }, function (newValue) { return (activeKey.value = newValue); });
        return function () {
            var _playGroundBaseProps = {};
            for (var p in others) {
                _playGroundBaseProps[p] = props[p];
            }
            return (
            // @ts-ignore
            <PlayGroundBase_1.default {..._playGroundBaseProps} defaultExpand={expand.value} getClipboardText={getClipboardText} onExpand={onExpand}>
          {{
                    default: function () { var _a; return (_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots); },
                    codeView: function () { return (<adherev_ui_conditionalrender_1.default.Show conditional={expand.value}>
                {/*@ts-ignore*/}
                <Card_1.default>
                  {/*@ts-ignore**/}
                  <CodeTabPanel_1.default config={props.config} active={activeKey.value} onChange={function (key) {
                            activeKey.value = key;
                        }}/>
                </Card_1.default>
              </adherev_ui_conditionalrender_1.default.Show>); },
                }}
        </PlayGroundBase_1.default>);
        };
    },
});
//# sourceMappingURL=PlayGroundTab.jsx.map