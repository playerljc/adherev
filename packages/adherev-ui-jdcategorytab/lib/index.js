"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),item_1=tslib_1.__importDefault(require("./item")),jdcategorytab_1=tslib_1.__importDefault(require("./jdcategorytab")),withVue=adherev_util_1.default._util.withVue;jdcategorytab_1.default.Item=item_1.default,jdcategorytab_1.default.install=function(e){return e.component(item_1.default.name,item_1.default),e.component(jdcategorytab_1.default.name,jdcategorytab_1.default),withVue(e,"JdCategoryTab",jdcategorytab_1.default),e},exports.default=jdcategorytab_1.default;
//# sourceMappingURL=index.js.map
