"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),ant_design_vue_2=tslib_1.__importDefault(require("@form-create/ant-design-vue")),messagedialog_1=tslib_1.__importDefault(require("./messagedialog")),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),withVue=adherev_util_1.default._util.withVue;messagedialog_1.default.isUse=function(){return!0},messagedialog_1.default.use=function(e){e.use(ant_design_vue_1.ConfigProvider),e.use(ant_design_vue_1.Button),e.use(ant_design_vue_2.default),withVue(e,"MessageDialog",messagedialog_1.default)},exports.default=messagedialog_1.default;
//# sourceMappingURL=index.js.map
