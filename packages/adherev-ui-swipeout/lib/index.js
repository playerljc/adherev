"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),swipeout_1=tslib_1.__importDefault(require("./swipeout")),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(swipeout_1.default);Component.isUse=function(){return!0},Component.use=function(e){e.use(Component),withVue(e,"SwipeOut",Component)},exports.default=Component;
//# sourceMappingURL=index.js.map
