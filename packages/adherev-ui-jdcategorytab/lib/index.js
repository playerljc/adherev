"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),item_1=tslib_1.__importDefault(require("./item")),jdcategorytab_1=tslib_1.__importDefault(require("./jdcategorytab")),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue;withInstall(jdcategorytab_1.default),withInstall(item_1.default),jdcategorytab_1.default.Item=item_1.default,jdcategorytab_1.default.isUse=function(){return!0},jdcategorytab_1.default.use=function(t){t.use(jdcategorytab_1.default),t.use(item_1.default),withVue(t,"JdCategoryTab",jdcategorytab_1.default)},exports.default=jdcategorytab_1.default;
//# sourceMappingURL=index.js.map
