"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),stickuplayout_1=(0,tslib_1.__importDefault)(require("./stickuplayout")),item_1=(0,tslib_1.__importDefault)(require("./item")),adherev_util_1=(0,tslib_1.__importDefault)(require("@baifendian/adherev-util")),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue;withInstall(stickuplayout_1.default),withInstall(item_1.default),stickuplayout_1.default.isUse=function(){return!0},stickuplayout_1.default.use=function(t){t.use(stickuplayout_1.default),t.use(item_1.default),withVue(t,"StickupLayout",stickuplayout_1.default)},stickuplayout_1.default.Item=item_1.default,exports.default=stickuplayout_1.default;
//# sourceMappingURL=index.js.map
