"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_ui_flexlayout_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-flexlayout")),splitlayout_1=tslib_1.__importDefault(require("./splitlayout")),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(splitlayout_1.default);Component.isUse=function(){return!0},Component.use=function(e){adherev_ui_flexlayout_1.default.use(e),e.use(Component),withVue(e,"SplitLayout",Component)},exports.default=Component;
//# sourceMappingURL=index.js.map
