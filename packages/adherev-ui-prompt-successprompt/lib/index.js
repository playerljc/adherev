"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ant_design_vue_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ant-design-vue")),adherev_util_1=__importDefault(require("@baifendian/adherev-util")),adherev_util_intl_1=__importDefault(require("@baifendian/adherev-util-intl")),successprompt_1=require("./successprompt"),withVue=adherev_util_1.default._util.withVue,SuccessPrompt={openSuccessDialog:successprompt_1.openSuccessDialog,openSuccessMessage:successprompt_1.openSuccessMessage,isUse:function(){return!0},use:function(e){adherev_util_intl_1.default.isUse()&&adherev_util_intl_1.default.use(e),e.use(ant_design_vue_1.message),e.use(ant_design_vue_1.Modal),withVue(e,"SuccessPrompt",SuccessPrompt)}};exports.default=SuccessPrompt;
//# sourceMappingURL=index.js.map
