"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),ant_design_vue_1=require("ant-design-vue"),vue_1=require("vue"),store_1=tslib_1.__importDefault(require("./store")),adherev_ui_antdvformitem_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-antdvformitem")),adherev_ui_configprovider_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-configprovider")),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),adherev_util_dict_1=tslib_1.__importDefault(require("@baifendian/adherev-util-dict")),adherev_util_resource_1=tslib_1.__importDefault(require("@baifendian/adherev-util-resource")),index_1=tslib_1.__importDefault(require("../index")),ProRowDragSortEditableTable_1=tslib_1.__importDefault(require("./ProRowDragSortEditableTable")),dict_test_config_1=tslib_1.__importDefault(require("./dict.test.config")),SearchTableImplementFactory=(require("ant-design-vue/dist/antd.less"),require("../index.less"),require("./index.less"),adherev_util_dict_1.default.init([dict_test_config_1.default],{isFunMemo:!1}),index_1.default.SearchTableImplementFactory),lang=adherev_util_1.default.getLang(),app=(0,vue_1.createApp)({data:function(){return{hasIntlInit:!1}},render:function(){var e=this,t=this;return(0,_vue.createVNode)(ant_design_vue_1.ConfigProvider,{locale:adherev_util_resource_1.default.Dict.value.LocalsAntd.value[lang]},{default:function(){return[(0,_vue.createVNode)(adherev_ui_configprovider_1.default,{intl:{lang:lang,locales:{en_US:{},zh_CN:{},pt_PT:{}}},onIntlInit:function(){t.hasIntlInit=!0}},{default:function(){return[e.hasIntlInit?(0,vue_1.h)(SearchTableImplementFactory(ProRowDragSortEditableTable_1.default)):null]}})]}})}});adherev_ui_antdvformitem_1.default.FormItemGeneratorToDict.init(app),app.use(store_1.default).use(adherev_ui_configprovider_1.default).use(adherev_util_dict_1.default).use(adherev_ui_antdvformitem_1.default).use(index_1.default).mount("#app");
//# sourceMappingURL=index-rowdragsorteditabletable.js.map
