"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),types_1=require("../../types"),setting_1=tslib_1.__importDefault(require("./setting"));exports.default={name:"adv-searchtable-tabledensity",inject:["getContext"],methods:{onReset:function(){this.getContext().tableDensity=types_1.TableDensity.DEFAULT},onChange:function(e){this.getContext().tableDensity=e}},render:function(e){var t;return e(ant_design_vue_1.Popover,{attrs:{content:e(setting_1.default,{attrs:{density:(null===(t=null===(t=this.getContext)||void 0===t?void 0:t.call(this))||void 0===t?void 0:t.tableDensity)||types_1.TableDensity.DEFAULT},on:{reset:this.onReset,change:this.onChange}}),placement:"bottomRight",trigger:"click",getPopupContainer:function(e){return e.parentElement}}},[e("a",[e("img",{attrs:{alt:"",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1mbHVlbnQiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjODg4ODg4IiBkPSJNOC41IDFhLjUuNSAwIDAgMSAuNS41djEzYS41LjUgMCAwIDEtMSAwdi0xM2EuNS41IDAgMCAxIC41LS41Wk03IDNIMi41YS41LjUgMCAwIDAgMCAxSDdWM1ptMCAzSDIuNWEuNS41IDAgMCAwIDAgMUg3VjZabTAgM0gyLjVhLjUuNSAwIDAgMCAwIDFIN1Y5Wm0wIDNIMi41YS41LjUgMCAwIDAgMCAxSDd2LTFabTUuNSAwSDEwVjloMi41YTEuNSAxLjUgMCAwIDEgMCAzWm0wLTVIMTBWNGgyLjVhMS41IDEuNSAwIDAgMSAwIDNaIj48L3BhdGg+PC9zdmc+"}})])])}};
//# sourceMappingURL=index.js.map
