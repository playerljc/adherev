"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codePanelProps = void 0;
var tslib_1 = require("tslib");
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var vue_plugin_1 = (0, tslib_1.__importDefault)(require("@highlightjs/vue-plugin"));
exports.codePanelProps = {
    lang: (0, vue_types_1.string)().def('vue'),
    codeText: (0, vue_types_1.string)().def(''),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-code-panel',
    props: exports.codePanelProps,
    setup: function (props, _a) {
        var slots = _a.slots;
        return function () {
            var VueHighlightJS = vue_plugin_1.default.component;
            return (
            // @ts-ignore
            <VueHighlightJS language={props.lang} code={props.codeText}/>);
        };
    },
});
//# sourceMappingURL=CodePanel.jsx.map