"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),lodash_debounce_1=tslib_1.__importDefault(require("lodash.debounce")),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),adherev_util_resource_1=tslib_1.__importDefault(require("@baifendian/adherev-util-resource")),ConfigProvider={name:"adv-configprovider",props:{intl:{type:Object,default:function(){return{}}}},emits:["intlInit","propsChange"],data:function(){return{isIntlInit:!1,$propsChangeHandler:null}},provide:function(){return{}},watch:{"intl.lang":function(){this.$init()},"intl.locales":function(){this.$init()},"intl.prefix":function(){this.$init()},"intl.mainLanguage":function(){this.$init()}},created:function(){var t=this;this.$data.$propsChangeHandler=(0,lodash_debounce_1.default)(function(){t.$emit("propsChange")},200)},methods:{$init:function(){var t=this;adherev_util_intl_1.default.init({prefix:this.intl.prefix||"local",currentLocale:this.intl.lang,locales:this.intl.locales||{},mainLanguage:this.intl.mainLanguage||"zh_CN"},adherev_util_intl_1.default.isInit()).then(function(){adherev_util_resource_1.default.Dict.value.LocalsMoment.value[t.intl.lang](),t.isIntlInit?(t.$forceUpdate(),t.$nextTick(t.$data.$propsChangeHandler)):(t.isIntlInit=!0,t.$nextTick(function(){this.$emit("intlInit")}))})}},mounted:function(){this.$init()},render:function(t){var i;return this.isIntlInit?null==(i=null==this?void 0:this.$slots)?void 0:i.default:null}};exports.default=ConfigProvider;
//# sourceMappingURL=configprovider.js.map
