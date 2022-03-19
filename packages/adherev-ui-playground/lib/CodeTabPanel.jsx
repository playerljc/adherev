"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeTabPanelProps = void 0;
var tslib_1 = require("tslib");
var adherev_ui_conditionalrender_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var CodePanel_1 = (0, tslib_1.__importDefault)(require("./CodePanel"));
var SimpleTabs_1 = (0, tslib_1.__importDefault)(require("./SimpleTabs"));
var TabPanel_1 = (0, tslib_1.__importDefault)(require("./SimpleTabs/TabPanel"));
var selectPrefix = 'adherev-ui-playground-code-tab-panel';
exports.codeTabPanelProps = {
    active: (0, vue_types_1.string)().def(''),
    config: (0, vue_types_1.array)().def([]),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-code-tab-panel',
    emits: ['change'],
    props: exports.codeTabPanelProps,
    setup: function (props, _a) {
        var emit = _a.emit;
        var active = (0, vue_1.ref)(props.active);
        (0, vue_1.watch)(function () { return props.active; }, function (newValue) { return (active.value = newValue); });
        return function () { return (<div 
        // @ts-ignore
        class={selectPrefix}>
        {/*@ts-ignore*/}
        <SimpleTabs_1.default defaultActiveKey={active.value} onChange={function (key) {
                active.value = key;
                emit('change', key);
            }}>
          {props.config.map(function (_a) {
                var key = _a.key, title = _a.title, codePanelConfig = (0, tslib_1.__rest)(_a, ["key", "title"]);
                return (
                // @ts-ignore
                <TabPanel_1.default title={title} key={key} index={key}>
              {/*@ts-ignore*/}
              <adherev_ui_conditionalrender_1.default conditional={active.value === key}>
                {/*@ts-ignore**/}
                <CodePanel_1.default {...codePanelConfig}/>
              </adherev_ui_conditionalrender_1.default>
            </TabPanel_1.default>);
            })}
        </SimpleTabs_1.default>
      </div>); };
    },
});
//# sourceMappingURL=CodeTabPanel.jsx.map