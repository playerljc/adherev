"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),fixed_1=tslib_1.__importDefault(require("./fixed")),auto_1=tslib_1.__importDefault(require("./auto")),flexlayout_1=tslib_1.__importStar(require("./flexlayout")),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(flexlayout_1.default);Component.isUse=function(){return!0},Component.use=function(e){e.use(Component),e.use(Component.Fixed),e.use(Component.Auto),withVue(e,"FlexLayout",Component)},Component.Fixed=withInstall(fixed_1.default),Component.Auto=withInstall(auto_1.default),Component.selectorPrefix=flexlayout_1.selectorPrefix,exports.default=Component;
//# sourceMappingURL=index.js.map
