"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_1 = require("vue");
var ant_design_vue_1 = require("ant-design-vue");
var types_1 = require("../../types");
// @ts-ignore
var setting_1 = (0, tslib_1.__importDefault)(require("./setting"));
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-searchtable-tabledensity',
    emits: ['reset', 'change'],
    inject: ['getContext'],
    methods: {
        onReset: function () {
            this.getContext().tableDensity = types_1.TableDensity.DEFAULT;
        },
        onChange: function (density) {
            this.getContext().tableDensity = density;
        },
    },
    render: function () {
        var _a, _b;
        return (
        // @ts-ignore
        <ant_design_vue_1.Popover content={
            // @ts-ignore
            <setting_1.default density={((_b = (_a = this.getContext) === null || _a === void 0 ? void 0 : _a.call(this)) === null || _b === void 0 ? void 0 : _b.tableDensity) || types_1.TableDensity.DEFAULT} onReset={this.onReset} onChange={this.onChange}/>} placement="bottomRight" trigger="click" getPopupContainer={function (el) { return el.parentElement; }}>
        <a>
          <img alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1mbHVlbnQiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjODg4ODg4IiBkPSJNOC41IDFhLjUuNSAwIDAgMSAuNS41djEzYS41LjUgMCAwIDEtMSAwdi0xM2EuNS41IDAgMCAxIC41LS41Wk03IDNIMi41YS41LjUgMCAwIDAgMCAxSDdWM1ptMCAzSDIuNWEuNS41IDAgMCAwIDAgMUg3VjZabTAgM0gyLjVhLjUuNSAwIDAgMCAwIDFIN1Y5Wm0wIDNIMi41YS41LjUgMCAwIDAgMCAxSDd2LTFabTUuNSAwSDEwVjloMi41YTEuNSAxLjUgMCAwIDEgMCAzWm0wLTVIMTBWNGgyLjVhMS41IDEuNSAwIDAgMSAwIDNaIj48L3BhdGg+PC9zdmc+"/>
        </a>
      </ant_design_vue_1.Popover>);
    },
});
//# sourceMappingURL=index.jsx.map