"use strict";require("core-js/modules/es.object.define-property.js");var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var revolving_1=__importDefault(require("./revolving")),item_1=__importDefault(require("./item")),adherev_util_1=__importDefault(require("@baifendian/adherev-util")),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue;withInstall(revolving_1.default),withInstall(item_1.default),revolving_1.default.Item=item_1.default,revolving_1.default.isUse=function(){return!0},revolving_1.default.use=function(e){e.use(revolving_1.default),e.use(item_1.default),withVue(e,"Revolving",revolving_1.default)},exports.default=revolving_1.default;
//# sourceMappingURL=index.js.map
