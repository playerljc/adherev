"use strict";require("core-js/modules/es.object.define-property.js");var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var slidelayout_1=require("./slidelayout"),adherev_util_1=__importDefault(require("@baifendian/adherev-util")),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue;withInstall(slidelayout_1.Push),withInstall(slidelayout_1.Overlay),withInstall(slidelayout_1.Revolving),exports.default={isUse:function(){return!0},use:function(e){e.use(slidelayout_1.Push),e.use(slidelayout_1.Overlay),e.use(slidelayout_1.Revolving),withVue(e,"SlideLayout",{Push:slidelayout_1.Push,Overlay:slidelayout_1.Overlay,Revolving:slidelayout_1.Revolving})}};
//# sourceMappingURL=index.js.map
