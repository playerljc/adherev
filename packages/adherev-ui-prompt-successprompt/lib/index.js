"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ant_design_vue_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ant-design-vue")),adherev_util_1=__importDefault(require("@baifendian/adherev-util")),adherev_util_intl_1=__importDefault(require("@baifendian/adherev-util-intl")),successprompt_1=__importDefault(require("./successprompt")),withVue=adherev_util_1.default._util.withVue;successprompt_1.default.isUse=function(){return!0},successprompt_1.default.use=function(e){adherev_util_intl_1.default.isUse()&&adherev_util_intl_1.default.use(e),e.use(ant_design_vue_1.message),withVue(e,"SuccessPrompt",successprompt_1.default)},exports.default=successprompt_1.default;
//# sourceMappingURL=index.js.map
