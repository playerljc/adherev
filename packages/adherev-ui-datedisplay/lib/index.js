"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.object.keys.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),datedisplay_1=tslib_1.__importDefault(require("./datedisplay")),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue;datedisplay_1.default.isUse=function(){return!0},datedisplay_1.default.use=function(t){Object.keys(datedisplay_1.default).forEach(function(e){"dayjs"!==e&&(e=withInstall(datedisplay_1.default[e]),t.use(e))}),withVue(t,"DateDisplay",datedisplay_1.default)},exports.default=datedisplay_1.default;
//# sourceMappingURL=index.js.map