"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),vue_1=tslib_1.__importDefault(require("vue")),adherev_util_dict_1=tslib_1.__importDefault(require("@baifendian/adherev-util-dict")),index_1=tslib_1.__importDefault(require("../index")),dict_test_config_1=tslib_1.__importDefault(require("./dict.test.config")),test_1=tslib_1.__importDefault(require("./test"));require("../index.less"),index_1.default.use(vue_1.default),adherev_util_dict_1.default.use(vue_1.default),adherev_util_dict_1.default.init([dict_test_config_1.default],{isFunMemo:!1}),index_1.default.FormItemGeneratorToDict.init(vue_1.default),index_1.default.AntFormItemNormalize.Input.defaultProps.maxLength=10,new vue_1.default({el:"#app",render:function(e){return e(test_1.default)}});
//# sourceMappingURL=index.js.map
