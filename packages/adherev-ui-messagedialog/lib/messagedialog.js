"use strict";require("core-js/modules/es.object.to-string.js");var _vue=require("vue");function _isSlot(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,_vue.isVNode)(e)}require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectorPrefix=void 0;var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),vue_1=require("vue"),adherev_util_1=(0,tslib_1.__importDefault)(require("@baifendian/adherev-util")),adherev_util_intl_1=(0,tslib_1.__importDefault)(require("@baifendian/adherev-util-intl")),adherev_util_resource_1=(0,tslib_1.__importDefault)(require("@baifendian/adherev-util-resource")),ant_design_vue_2=(0,tslib_1.__importDefault)(require("@form-create/ant-design-vue")),modal_1=(0,tslib_1.__importDefault)(require("./modal")),DEFAULT_LOCAL=(exports.selectorPrefix="adherev-ui-messagedialog","zh_CN"),LOCAL=adherev_util_resource_1.default.Dict.value.LocalsAntd.value,globalConfig=null;function renderByIcon(e){var t,l=e.icon,e=e.text;return(0,_vue.createVNode)("div",{class:"".concat(exports.selectorPrefix,"-renderByIcon")},[(0,_vue.createVNode)("div",{class:"".concat(exports.selectorPrefix,"-renderByIcon-fixed")},[null!==(t=null===adherev_util_1.default||void 0===adherev_util_1.default?void 0:adherev_util_1.default.isFunction)&&void 0!==t&&t.call(adherev_util_1.default,l)?l():l]),(0,_vue.createVNode)("div",{class:"".concat(exports.selectorPrefix,"-renderByIcon-auto")},[null!==(t=null===adherev_util_1.default||void 0===adherev_util_1.default?void 0:adherev_util_1.default.isFunction)&&void 0!==t&&t.call(adherev_util_1.default,e)?e():e])])}var MessageDialogFactory={Confirm:function(e){var t=e.title,l=e.text,i=void 0===l?null:l,l=e.width,u=e.zIndex,n=e.local,r=e.icon,o=void 0===r?null:r,a=e.onSuccess,_=this.Modal({config:{title:t,centered:!0,width:(void 0===l?300:l)||300,closable:!1,zIndex:void 0===u?1e3:u,footer:function(){var e;return[(0,_vue.createVNode)(ant_design_vue_1.Button,{key:"submit",type:"primary",title:adherev_util_intl_1.default.tv("确定"),onClick:function(){a?a().then(function(){_()}):_()}},_isSlot(e=adherev_util_intl_1.default.tv("确定"))?e:{default:function(){return[e]}})]}},local:n,children:o?function(){return renderByIcon({icon:o,text:i})}:function(){var e;return null!==(e=null===adherev_util_1.default||void 0===adherev_util_1.default?void 0:adherev_util_1.default.isFunction)&&void 0!==e&&e.call(adherev_util_1.default,i)?i():i}}).close},Prompt:function(e){var t=e.title,l=e.config,i=e.width,i=void 0===i?300:i,u=e.zIndex,u=void 0===u?1e3:u,n=e.local,r=e.onSuccess,e=(l.option&&(l.option.submitBtn=!1,l.option.resetBtn=!1),this.Modal({config:{title:t,centered:!0,width:i||300,closable:!1,zIndex:u,footer:function(){var e;return[(0,_vue.createVNode)(ant_design_vue_1.Button,{key:"submit",type:"primary",title:adherev_util_intl_1.default.tv("确定"),onClick:function(){var t;r?(t=o.value.fApi).validate(function(e){e&&r(t.getValue(l.rule[0].field)).then(function(){a()})}):a()}},_isSlot(e=adherev_util_intl_1.default.tv("确定"))?e:{default:function(){return[e]}})]}},local:n,children:{template:'\n          <form-create\n            v-model:api="fApi"\n            :rule="rule"\n            :option="option"\n          ></form-create>\n        ',data:function(){return{fApi:{},rule:l.rule||[{type:"input",field:"prompt",title:"输入框",info:"",_fc_drag_tag:"input",hidden:!1,display:!0,value:"",wrap:{labelCol:{span:4},wrapperCol:{span:20}}}],option:l.option||{form:{labelPosition:"right",size:"mini",labelWidth:"125px",hideRequiredAsterisk:!1,showMessage:!0,inlineMessage:!1,submitBtn:!1,resetBtn:!1}}}}}})),o=e.rootRef,a=e.close},InputPrompt:function(e){var t=e.config,e=(0,tslib_1.__rest)(e,["config"]);t.rule[0].type="input",t.rule[0]._fc_drag_tag="input",t.rule[0].field="prompt",MessageDialogFactory.Prompt((0,tslib_1.__assign)((0,tslib_1.__assign)({},e),{config:(0,tslib_1.__assign)({},t)}))},TextAreaPrompt:function(e){var t=e.config,e=(0,tslib_1.__rest)(e,["config"]);t.rule[0].type="input",t.rule[0]._fc_drag_tag="input",t.rule[0].field="prompt",t.rule[0].props={type:"textarea"},MessageDialogFactory.Prompt((0,tslib_1.__assign)((0,tslib_1.__assign)({},e),{config:(0,tslib_1.__assign)({},t)}))},PassWordPrompt:function(e){var t=e.config,e=(0,tslib_1.__rest)(e,["config"]);t.rule[0].type="input",t.rule[0]._fc_drag_tag="input",t.rule[0].field="prompt",t.rule[0].props={type:"password"},MessageDialogFactory.Prompt((0,tslib_1.__assign)((0,tslib_1.__assign)({},e),{config:(0,tslib_1.__assign)({},t)}))},NumberPrompt:function(e){var t=e.config,e=(0,tslib_1.__rest)(e,["config"]);t.rule[0].type="input",t.rule[0]._fc_drag_tag="input",t.rule[0].field="prompt",t.rule[0].props={type:"number"},MessageDialogFactory.Prompt((0,tslib_1.__assign)((0,tslib_1.__assign)({},e),{config:(0,tslib_1.__assign)({},t)}))},Alert:function(e){var t=e.title,l=e.text,i=void 0===l?null:l,l=e.width,u=e.zIndex,n=e.local,r=e.icon;this.Modal({config:{title:t,centered:!0,width:(void 0===l?300:l)||300,closable:!1,zIndex:void 0===u?1e3:u},local:n,children:r?function(){return renderByIcon({icon:r,text:i})}:function(){var e;return null!==(e=null===adherev_util_1.default||void 0===adherev_util_1.default?void 0:adherev_util_1.default.isFunction)&&void 0!==e&&e.call(adherev_util_1.default,i)?i():i}})},Modal:function(e){var t=e.config,l=void 0===t?{}:t,t=e.children,d=void 0===t?Function:t,t=e.defaultCloneBtn,s=void 0===t||t,t=e.local,i=void 0===t?DEFAULT_LOCAL:t;function u(){var t;try{null!=_&&_.unmount()}catch(e){null!==(t=null==a?void 0:a.parentElement)&&void 0!==t&&t.removeChild(a)}}var n,r=l.title,e=(0,tslib_1.__rest)(l,["title"]),o=(0,tslib_1.__assign)({maskClosable:!1},e),a=(null!==(t=adherev_util_1.default.isString)&&void 0!==t&&t.call(adherev_util_1.default,r)&&(o.title=r),document.createElement("div")),e=(0,adherev_util_intl_1.default)({I18nOptions:{messages:(globalConfig||{}).messages,locale:i||DEFAULT_LOCAL,globalInjection:!0,legacy:!1},prefix:"local"}),_=(0,vue_1.createApp)({setup:function(){return n=(0,vue_1.ref)(),function(){var e=function(e){var t;if(null===(t=adherev_util_1.default.isEmpty)||void 0===t||!t.call(adherev_util_1.default,e.footer)){if(null!==(t=adherev_util_1.default.isFunction)&&void 0!==t&&t.call(adherev_util_1.default,e.footer))return e.footer();if(null!==(t=adherev_util_1.default.isObject)&&void 0!==t&&t.call(adherev_util_1.default,e.footer))return(0,vue_1.h)(e.footer)}return null}(l);return e&&(o.footerJSX=e),(0,_vue.createVNode)(ant_design_vue_1.ConfigProvider,{locale:LOCAL[i||DEFAULT_LOCAL]},{default:function(){return[(0,_vue.createVNode)(modal_1.default,{config:o,closeBtn:s,onClose:function(){u()}},{default:function(){var e,t=d,l=n;if(null===(e=null===adherev_util_1.default||void 0===adherev_util_1.default?void 0:adherev_util_1.default.isEmpty)||void 0===e||!e.call(adherev_util_1.default,t)){if(null!==(e=null===adherev_util_1.default||void 0===adherev_util_1.default?void 0:adherev_util_1.default.isFunction)&&void 0!==e&&e.call(adherev_util_1.default,t))return t();if(null!==(e=null===adherev_util_1.default||void 0===adherev_util_1.default?void 0:adherev_util_1.default.isObject)&&void 0!==e&&e.call(adherev_util_1.default,t))return(0,vue_1.h)(t,{ref:l})}return null},title:function(){var e,t=r;if(null===(e=adherev_util_1.default.isEmpty)||void 0===e||!e.call(adherev_util_1.default,t)){if(null!==(e=adherev_util_1.default.isFunction)&&void 0!==e&&e.call(adherev_util_1.default,t))return t();if(null!==(e=adherev_util_1.default.isObject)&&void 0!==e&&e.call(adherev_util_1.default,t))return(0,vue_1.h)("div",{},[(0,vue_1.h)(t)])}return t}})]}})}}});return _.use(ant_design_vue_1.ConfigProvider).use(ant_design_vue_1.Button).use(ant_design_vue_1.Form).use(ant_design_vue_1.Row).use(ant_design_vue_1.Col).use(ant_design_vue_1.Slider).use(ant_design_vue_1.Col).use(ant_design_vue_1.Input).use(e).use(ant_design_vue_2.default),adherev_util_intl_1.default.use(_),null!==(t=null==globalConfig?void 0:globalConfig.beforeMount)&&void 0!==t&&t.call(globalConfig,_),_.mount(a),document.body.appendChild(a),{el:a,vm:_,rootRef:n,close:u}},close:function(t){var l=t.app,t=t.el;try{null!=l&&l.unmount()}catch(e){null!==(l=null==t?void 0:t.parentElement)&&void 0!==l&&l.removeChild(t)}},setConfig:function(e){globalConfig=e}};exports.default=MessageDialogFactory;
//# sourceMappingURL=messagedialog.js.map
