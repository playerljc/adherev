"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),vue_1=require("vue"),vue_types_1=require("vue-types"),adherev_ui_hooks_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-hooks")),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),adherev_util_mixins_1=tslib_1.__importDefault(require("@baifendian/adherev-util-mixins")),adherev_util_resource_1=tslib_1.__importDefault(require("@baifendian/adherev-util-resource")),props={intl:(0,vue_types_1.object)().def(function(){return{lang:"zh_CN",locales:{},prefix:"local",mainLanguage:"zh_CN"}})},forceUpdate=adherev_util_mixins_1.default.forceUpdate,useForceUpdate=adherev_ui_hooks_1.default.useForceUpdate,ConfigProvider=(0,vue_1.defineComponent)({name:"adv-configprovider",mixins:[forceUpdate],props:props,setup:function(e,i){function t(){return adherev_util_intl_1.default.init({prefix:e.intl.prefix||"local",currentLocale:e.intl.lang,locales:e.intl.locales||{},mainLanguage:e.intl.mainLanguage||"zh_CN"},adherev_util_intl_1.default.isInit()).then(function(){adherev_util_resource_1.default.Dict.value.LocalsMoment.value[e.intl.lang](),n.value?u():n.value=!0})}var r=i.slots,n=(0,vue_1.ref)(!1),u=useForceUpdate();return(0,vue_1.watch)([function(){return e.intl.lang},function(){return e.intl.locales},function(){return e.intl.prefix},function(){return e.intl.mainLanguage}],t),(0,vue_1.onMounted)(t),function(){var e;return n.value?null==(e=null==r?void 0:r.default)?void 0:e.call(r):null}}});exports.default=ConfigProvider;
//# sourceMappingURL=configprovider.js.map
