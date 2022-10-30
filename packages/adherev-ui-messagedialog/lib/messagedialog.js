"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectorPrefix=void 0;var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),vue_1=tslib_1.__importDefault(require("vue")),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),adherev_util_resource_1=tslib_1.__importDefault(require("@baifendian/adherev-util-resource")),modal_1=tslib_1.__importDefault(require("./modal"));exports.selectorPrefix="adherev-ui-messagedialog";var globalConfig,DEFAULT_LOCAL="zh_CN",LOCAL=adherev_util_resource_1.default.Dict.value.LocalsAntd.value,Fragment=adherev_util_1.default._util.Fragment;function renderByIcon(e){var t=e.h,i=e.icon,e=e.text;return t("div",{class:exports.selectorPrefix+"-renderByIcon"},[t("div",{class:exports.selectorPrefix+"-renderByIcon-fixed"},[adherev_util_1.default.isFunction(i)?i(t):t(Fragment,[i])]),t("div",{class:exports.selectorPrefix+"-renderByIcon-auto"},[adherev_util_1.default.isFunction(e)?e(t):t(Fragment,[e])])])}var MessageDialogFactory={setConfig:function(e){globalConfig=e},Confirm:function(e){var t=e.title,i=e.text,r=void 0===i?null:i,n=e.width,l=e.zIndex,o=e.local,i=e.icon,a=void 0===i?null:i,u=e.onSuccess,s=this.Modal({config:{title:t,centered:!0,width:(void 0===n?300:n)||300,closable:!1,zIndex:void 0===l?1e3:l,footer:function(e){return[e(ant_design_vue_1.Button,{key:"submit",attrs:{type:"primary",title:adherev_util_intl_1.default.tv("确定")},on:{click:function(){u?u().then(function(){s()}):s()}}},[adherev_util_intl_1.default.tv("确定")])]}},local:o,children:a?function(e){return renderByIcon({h:e,icon:a,text:r})}:function(e){return adherev_util_1.default.isFunction(r)?r(e):e(Fragment,[r])}}).close},Prompt:function(e){var t=e.title,i=e.config,r=e.width,n=void 0===r?300:r,l=e.zIndex,r=void 0===l?1e3:l,l=e.local,o=e.onSuccess;i.option&&(i.option.submitBtn=!1,i.option.resetBtn=!1);var l=this.Modal({config:{title:t,centered:!0,width:n||300,closable:!1,zIndex:r,footer:function(e){return[e(ant_design_vue_1.Button,{key:"submit",attrs:{type:"primary",title:adherev_util_intl_1.default.tv("确定")},on:{click:function(){var t;o?(t=u.$refs.rootRef.fApi).validate(function(e){e&&o(t.getValue(i.rule[0].field)).then(function(){a()})}):a()}}},[adherev_util_intl_1.default.tv("确定")])]}},local:l,children:{template:'\n          <form-create\n            v-model="fApi"\n            :rule="rule"\n            :option="option"\n          ></form-create>\n        ',data:function(){return{fApi:{},rule:i.rule||[{type:"input",field:"prompt",title:adherev_util_intl_1.default.v("输入框"),info:"",_fc_drag_tag:"input",hidden:!1,display:!0,value:"",wrap:{labelCol:{span:4},wrapperCol:{span:20}}}],option:i.option||{form:{labelPosition:"right",size:"mini",labelWidth:"125px",hideRequiredAsterisk:!1,showMessage:!0,inlineMessage:!1,submitBtn:!1,resetBtn:!1}}}}}}),a=l.close,u=l.vm},InputPrompt:function(e){var t=e.config,e=tslib_1.__rest(e,["config"]);t.rule[0].type="input",t.rule[0]._fc_drag_tag="input",t.rule[0].field="prompt",MessageDialogFactory.Prompt(tslib_1.__assign(tslib_1.__assign({},e),{config:tslib_1.__assign({},t)}))},TextAreaPrompt:function(e){var t=e.config,e=tslib_1.__rest(e,["config"]);t.rule[0].type="input",t.rule[0]._fc_drag_tag="input",t.rule[0].field="prompt",t.rule[0].props={type:"textarea"},MessageDialogFactory.Prompt(tslib_1.__assign(tslib_1.__assign({},e),{config:tslib_1.__assign({},t)}))},PassWordPrompt:function(e){var t=e.config,e=tslib_1.__rest(e,["config"]);t.rule[0].type="input",t.rule[0]._fc_drag_tag="input",t.rule[0].field="prompt",t.rule[0].props={type:"password"},MessageDialogFactory.Prompt(tslib_1.__assign(tslib_1.__assign({},e),{config:tslib_1.__assign({},t)}))},NumberPrompt:function(e){var t=e.config,e=tslib_1.__rest(e,["config"]);t.rule[0].type="input",t.rule[0]._fc_drag_tag="input",t.rule[0].field="prompt",t.rule[0].props={type:"number"},MessageDialogFactory.Prompt(tslib_1.__assign(tslib_1.__assign({},e),{config:tslib_1.__assign({},t)}))},Alert:function(e){var t=e.title,i=e.text,r=void 0===i?null:i,n=e.width,l=e.zIndex,i=e.local,o=e.icon;this.Modal({config:{title:t,centered:!0,width:(void 0===n?300:n)||300,closable:!1,zIndex:void 0===l?1e3:l},local:i,children:o?function(e){return renderByIcon({h:e,icon:o,text:r})}:function(e){return adherev_util_1.default.isFunction(r)?r(e):e(Fragment,[r])}})},Modal:function(e){var t=e.config,i=void 0===t?{}:t,t=e.children,r=void 0===t?Function:t,t=e.defaultCloseBtn,n=void 0===t||t,e=e.local,l=void 0===e?DEFAULT_LOCAL:e;function o(){var e;_.$destroy(),null!==(e=null==s?void 0:s.parentElement)&&void 0!==e&&e.removeChild(s)}var a=i.title,e=tslib_1.__rest(i,["title"]),u=tslib_1.__assign({maskClosable:!1},e);adherev_util_1.default.isString(a)&&(u.title=a);var s=document.createElement("div"),_=new vue_1.default(tslib_1.__assign(tslib_1.__assign({},globalConfig||{}),{render:function(e){var t=function(e){var t=e.config,e=e.h;if(!adherev_util_1.default.isEmpty(t.footer)){if(adherev_util_1.default.isFunction(t.footer))return t.footer(e);if(adherev_util_1.default.isObject(t.footer))return e(t.footer)}return null}({config:i,h:e});return t&&(u.footerJSX=t),e(ant_design_vue_1.ConfigProvider,{attrs:{locale:LOCAL[l||DEFAULT_LOCAL]}},[e(modal_1.default,{attrs:{config:u,closeBtn:n},on:{close:function(){o()}}},[function(e){var t=e.h,e=e.children;if(!adherev_util_1.default.isEmpty(e)){if(adherev_util_1.default.isFunction(e))return e(t);if(adherev_util_1.default.isObject(e))return t(e,{ref:"rootRef"})}return null}({h:e,children:r}),function(e){var t=e.title,e=e.h;if(!adherev_util_1.default.isEmpty(t)){if(adherev_util_1.default.isFunction(t))return e(Fragment,{slot:"title"},[t(e)]);if(adherev_util_1.default.isObject(t))return e("div",{slot:"title"},[e(t)])}return null}({title:a,h:e})])])}})).$mount(s);return document.body.appendChild(s),{el:s,vm:_,close:o}},close:function(e){var t=e._vm,e=e.el;t.$destroy(),null!==(t=null==e?void 0:e.parentElement)&&void 0!==t&&t.removeChild(e)}};exports.default=MessageDialogFactory;
//# sourceMappingURL=messagedialog.js.map
