"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},moment_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("moment"))),adherev_util_dict_1=__importDefault(require("@baifendian/adherev-util-dict")),zh_CN_1=__importDefault(require("ant-design-vue/es/locale/zh_CN")),en_US_1=__importDefault(require("ant-design-vue/es/locale/en_US")),pt_PT_1=__importDefault(require("ant-design-vue/es/locale/pt_PT"));require("moment/locale/zh-cn"),require("moment/locale/en-ca"),require("moment/locale/pt"),exports.default={initStatic:function(){adherev_util_dict_1.default.handlers.Locals=function(){return{zh_CN:"zh_CN",pt_PT:"pt_PT",en_US:"en_US"}},adherev_util_dict_1.default.handlers.LocalsAntd=function(){return{zh_CN:zh_CN_1.default,pt_PT:pt_PT_1.default,en_US:en_US_1.default}},adherev_util_dict_1.default.handlers.LocalsMoment=function(){return{zh_CN:function(){moment_1.default.locale("zh-cn")},en_US:function(){moment_1.default.locale("en-ca")},pt_PT:function(){moment_1.default.locale("pt")}}}},initRemote:function(){}};
//# sourceMappingURL=dict.locals.config.js.map
