"use strict";require("core-js/modules/es.object.define-property.js");var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var adherev_util_1=__importDefault(require("@baifendian/adherev-util")),pullrefresh_1=__importDefault(require("./pullrefresh")),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(pullrefresh_1.default);Component.isUse=function(){return!0},Component.use=function(e){e.use(Component),withVue(e,"PullRefresh",Component)},exports.default=Component;
//# sourceMappingURL=index.js.map
