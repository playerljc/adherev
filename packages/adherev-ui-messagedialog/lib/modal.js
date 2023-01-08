"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_babelHelperVueJsxMergeProps=_interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props")),tslib_1=(require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectorPrefix=void 0,require("tslib")),ant_design_vue_1=require("ant-design-vue"),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),Fragment=adherev_util_1.default._util.Fragment,ModalConfig=(exports.selectorPrefix="adherev-ui-messagedialog",{props:{config:{type:Object},closeBtn:{type:Boolean,required:!1,default:!0}},slots:["title","footer"],methods:{renderCloseBtn:function(e){var t=this.config,r=this.$listeners.close;return e(ant_design_vue_1.Button,{key:"close",attrs:{type:t.footerJSX?"":"primary",title:adherev_util_intl_1.default.tv("取消")},on:{click:function(){r&&r()}}},[adherev_util_intl_1.default.tv("取消")])},renderDefault:function(e){var t=this.$slots;return t.default||null},renderTitle:function(e){var t=this.$slots;return t.title?e(Fragment,{slot:"title"},[t.title]):null},renderFooter:function(e){var t=this.config,r=this.closeBtn,i=null;return t.footerJSX?i=e(Fragment,{slot:"footer"},r?[e("div",[tslib_1.__spreadArray(tslib_1.__spreadArray([],t.footerJSX,!0),[this.renderCloseBtn(e)],!1)])]:[e("div",[t.footerJSX])]):r&&(i=e(Fragment,{slot:"footer"},[this.renderCloseBtn(e)])),i}},render:function(e){var t=this.config,r=this.$listeners.close,i=(t.footer,t.centered),i=void 0===i||i,t=tslib_1.__rest(t,["footer","centered"]);return e(ant_design_vue_1.Modal,(0,_babelHelperVueJsxMergeProps.default)([{},{props:t},{attrs:{centered:i,wrapClassName:exports.selectorPrefix,visible:!0},on:{cancel:function(){r&&r()}}}]),[this.renderDefault(e),this.renderTitle(e),this.renderFooter(e)])}});exports.default=ModalConfig;
//# sourceMappingURL=modal.js.map
