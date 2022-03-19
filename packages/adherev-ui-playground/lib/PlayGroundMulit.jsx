"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_ui_conditionalrender_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender"));
var adherev_ui_contextmenu_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-contextmenu"));
var omit_js_1 = (0, tslib_1.__importDefault)(require("omit.js"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var Card_1 = (0, tslib_1.__importDefault)(require("./Card"));
var CodePanel_1 = (0, tslib_1.__importDefault)(require("./CodePanel"));
var CodeTabPanel_1 = (0, tslib_1.__importDefault)(require("./CodeTabPanel"));
var PlayGroundBase_1 = (0, tslib_1.__importStar)(require("./PlayGroundBase"));
var selectPrefix = 'adherev-ui-playground-mulit';
var codeType;
(function (codeType) {
    codeType["CodePanel"] = "CodePanel";
    codeType["CodeTabPanel"] = "CodeTabPanel";
})(codeType || (codeType = {}));
var playGroundMulitProps = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, PlayGroundBase_1.playGroundBaseProps), { defaultConfig: (0, vue_types_1.array)().def([]) });
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-mulit',
    props: playGroundMulitProps,
    setup: function (props, _a) {
        var slots = _a.slots;
        var others = (0, omit_js_1.default)(PlayGroundBase_1.playGroundBaseProps, ['getClipboardText', 'defaultExpand']);
        var expand = (0, vue_1.ref)(props.defaultExpand);
        var config = (0, vue_1.ref)(props.defaultConfig);
        var configMap = new Map([
            [
                codeType.CodePanel,
                {
                    render: function (config) { return (
                    // @ts-ignore
                    <CodePanel_1.default {...config}/>); },
                    getCodeText: function (config) { return config.codeText; },
                },
            ],
            [
                codeType.CodeTabPanel,
                {
                    render: function (_config, index) { return (
                    // @ts-ignore
                    <CodeTabPanel_1.default {..._config} onChange={function (key) {
                            // @ts-ignore
                            config.value[index].active = key;
                        }}/>); },
                    getCodeText: function (config) { var _a; return (_a = config.config.find(function (c) { return c.key === config.active; })) === null || _a === void 0 ? void 0 : _a.codeText; },
                },
            ],
        ]);
        var renderCodePanelView = function (config, index) {
            var _a;
            return (<div key={"".concat(index)} 
            // @ts-ignore
            class={"".concat(selectPrefix, "-codeviewwrap")}>
          <div 
            // @ts-ignore
            class={"".concat(selectPrefix, "-codeviewwrap-title")}>
            {config.title}
          </div>
          <div 
            // @ts-ignore
            class={"".concat(selectPrefix, "-codeviewwrap-inner")}>
            {(_a = configMap
                    .get(config.type || codeType.CodePanel)) === null || _a === void 0 ? void 0 : _a.render((0, omit_js_1.default)(config, ['title', 'type']), index)}
          </div>
        </div>);
        };
        var getClipboardText = function (e) {
            return new Promise(function (resolve) {
                adherev_ui_contextmenu_1.default.open(config.value.map(function (c, index) { return ({
                    name: c.title,
                    id: "".concat(index),
                    separation: false,
                    attribute: {
                        config: c,
                    },
                    children: [],
                }); }), 
                // @ts-ignore
                {
                    width: 200,
                    x: e.clientX,
                    y: e.clientY,
                    maskClosable: true,
                    handler: function (id, attribute) {
                        var _a;
                        resolve((_a = configMap === null || configMap === void 0 ? void 0 : configMap.get(attribute.config.type || codeType.CodePanel)) === null || _a === void 0 ? void 0 : _a.getCodeText(attribute.config));
                    },
                });
            });
        };
        var onExpand = function (_expand) {
            expand.value = !_expand;
        };
        (0, vue_1.watch)(function () { return props.defaultExpand; }, function (newValue) {
            expand.value = newValue;
        });
        (0, vue_1.watch)(function () { return props.defaultConfig; }, function (newValue) {
            config.value = newValue;
        });
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
                <Card_1.default>{(config.value || []).map(function (c, index) { return renderCodePanelView(c, index); })}</Card_1.default>
              </adherev_ui_conditionalrender_1.default.Show>); },
                }}
        </PlayGroundBase_1.default>);
        };
    },
});
//# sourceMappingURL=PlayGroundMulit.jsx.map