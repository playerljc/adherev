"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),vue_draggable_resizable_1=tslib_1.__importDefault(require("vue-draggable-resizable")),searchform_1=tslib_1.__importDefault(require("./searchform")),searchformrow_1=tslib_1.__importDefault(require("./searchformrow")),searchformlabel_1=tslib_1.__importDefault(require("./searchformlabel")),searchformvalue_1=tslib_1.__importDefault(require("./searchformvalue")),ColumnSetting_1=tslib_1.__importDefault(require("./Extension/ColumnSetting")),TableDensitySetting_1=tslib_1.__importDefault(require("./Extension/TableDensitySetting")),searchtable_1=tslib_1.__importStar(require("./searchtable")),searchtableimplement_1=tslib_1.__importDefault(require("./searchtableimplement")),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue;searchtable_1.default.isUse=function(){return!0},searchtable_1.default.use=function(e){e.use(searchtable_1.default.SearchForm),e.use(searchtable_1.default.SearchFormRow),e.use(searchtable_1.default.SearchFormLabel),e.use(searchtable_1.default.SearchFormValue),e.use(searchtable_1.default.ColumnSetting),e.use(searchtable_1.default.TableDensitySetting),e.use(ant_design_vue_1.Table),e.use(ant_design_vue_1.Button),e.use(ant_design_vue_1.Popover),e.use(ant_design_vue_1.Checkbox),e.component("vue-draggable-resizable",vue_draggable_resizable_1.default),withVue(e,"SearchTable",searchtable_1.default)},searchtable_1.default.SearchForm=withInstall(searchform_1.default),searchtable_1.default.SearchFormRow=withInstall(searchformrow_1.default),searchtable_1.default.SearchFormLabel=withInstall(searchformlabel_1.default),searchtable_1.default.SearchFormValue=withInstall(searchformvalue_1.default),searchtable_1.default.ColumnSetting=withInstall(ColumnSetting_1.default),searchtable_1.default.TableDensitySetting=withInstall(TableDensitySetting_1.default),searchtable_1.default.SearchTableImplement=searchtableimplement_1.default,searchtable_1.default.NUMBER_GENERATOR_RULE_ALONE=searchtable_1.NUMBER_GENERATOR_RULE_ALONE,searchtable_1.default.NUMBER_GENERATOR_RULE_CONTINUITY=searchtable_1.NUMBER_GENERATOR_RULE_CONTINUITY,searchtable_1.default.ROW_SELECTION_NORMAL_MODE=searchtable_1.ROW_SELECTION_NORMAL_MODE,searchtable_1.default.ROW_SELECTION_CONTINUOUS_MODE=searchtable_1.ROW_SELECTION_CONTINUOUS_MODE,exports.default=searchtable_1.default;
//# sourceMappingURL=index.js.map
