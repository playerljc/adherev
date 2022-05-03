"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),vue_1=require("vue"),ant_design_vue_1=require("ant-design-vue"),types_1=require("../../types"),setting_1=(0,tslib_1.__importDefault)(require("./setting"));exports.default=(0,vue_1.defineComponent)({name:"adv-searchtable-tabledensity",emits:["reset","change"],inject:["getContext"],methods:{onReset:function(){this.getContext().tableDensity=types_1.TableDensity.DEFAULT},onChange:function(e){this.getContext().tableDensity=e}},render:function(){var e;return(0,_vue.createVNode)(ant_design_vue_1.Popover,{content:(0,_vue.createVNode)(setting_1.default,{density:(null===(e=null===(e=this.getContext)||void 0===e?void 0:e.call(this))||void 0===e?void 0:e.tableDensity)||types_1.TableDensity.DEFAULT,onReset:this.onReset,onChange:this.onChange},null),placement:"bottomRight",trigger:"click",getPopupContainer:function(e){return e.parentElement}},{default:function(){return[(0,_vue.createVNode)("a",null,[(0,_vue.createVNode)("img",{alt:"",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1mbHVlbnQiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjODg4ODg4IiBkPSJNOC41IDFhLjUuNSAwIDAgMSAuNS41djEzYS41LjUgMCAwIDEtMSAwdi0xM2EuNS41IDAgMCAxIC41LS41Wk03IDNIMi41YS41LjUgMCAwIDAgMCAxSDdWM1ptMCAzSDIuNWEuNS41IDAgMCAwIDAgMUg3VjZabTAgM0gyLjVhLjUuNSAwIDAgMCAwIDFIN1Y5Wm0wIDNIMi41YS41LjUgMCAwIDAgMCAxSDd2LTFabTUuNSAwSDEwVjloMi41YTEuNSAxLjUgMCAwIDEgMCAzWm0wLTVIMTBWNGgyLjVhMS41IDEuNSAwIDAgMSAwIDNaIj48L3BhdGg+PC9zdmc+"},null)])]}})}});
//# sourceMappingURL=index.js.map
