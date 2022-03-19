"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_ui_conditionalrender_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender"));
var omit_js_1 = (0, tslib_1.__importDefault)(require("omit.js"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var Card_1 = (0, tslib_1.__importDefault)(require("./Card"));
var CodePanel_1 = (0, tslib_1.__importStar)(require("./CodePanel"));
var PlayGroundBase_1 = (0, tslib_1.__importStar)(require("./PlayGroundBase"));
var playGroundProps = (0, tslib_1.__assign)((0, tslib_1.__assign)((0, tslib_1.__assign)({}, CodePanel_1.codePanelProps), PlayGroundBase_1.playGroundBaseProps), { codeText: (0, vue_types_1.string)().def('') });
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground',
    props: playGroundProps,
    setup: function (props, _a) {
        var slots = _a.slots;
        var others = (0, omit_js_1.default)(PlayGroundBase_1.playGroundBaseProps, ['getClipboardText', 'defaultExpand']);
        var expand = (0, vue_1.ref)(props.defaultExpand);
        var getClipboardText = function () { return Promise.resolve(props.codeText); };
        var onExpand = function (_expand) {
            expand.value = !_expand;
        };
        (0, vue_1.watch)(function () { return props.defaultExpand; }, function (newValue) { return (expand.value = newValue); });
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
                  <CodePanel_1.default lang={props.lang} codeText={props.codeText}/>
                </Card_1.default>
              </adherev_ui_conditionalrender_1.default.Show>); },
                }}
        </PlayGroundBase_1.default>);
        };
    },
});
//# sourceMappingURL=PlayGround.jsx.map