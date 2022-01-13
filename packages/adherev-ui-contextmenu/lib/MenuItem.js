"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js"),require("core-js/modules/es.function.name.js");var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var classnames_1=__importDefault(require("classnames")),adherev_ui_conditionalrender_1=__importDefault(require("@baifendian/adherev-ui-conditionalrender")),adherev_util_1=__importDefault(require("@baifendian/adherev-util")),SubMenu_1=__importDefault(require("./SubMenu")),selectorPrefix="adherev-ui-contextmenu-menuitem";exports.default={props:{data:{type:Object,default:function(){return{}},validator:function(e){return e instanceof Object}}},computed:{getClass:function(){var e=this.data,t=e.disabled,e=e.className;return classnames_1.default(selectorPrefix,void 0!==t&&t?"disabled":"",(e||"").split(" "))}},methods:{renderIcon:function(e){var t=this.data.icon;return e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:adherev_util_1.default.isString(t)}},[e("span",{class:classnames_1.default(selectorPrefix+"-icon",t)}),e(adherev_ui_conditionalrender_1.default,{slot:"noMatch",attrs:{conditional:adherev_util_1.default.isObject(t)}},[e("span",{class:classnames_1.default(selectorPrefix+"-icon")},[e(t)]),e(adherev_ui_conditionalrender_1.default,{slot:"noMatch",attrs:{conditional:adherev_util_1.default.isFunction(t)}},[e("span",{class:classnames_1.default(selectorPrefix+"-icon")},[adherev_util_1.default.isFunction(t)?t(e):null])])])])},renderName:function(e){var t=this.data.name;return e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:adherev_util_1.default.isString(t)}},[e("span",{class:classnames_1.default(selectorPrefix+"-name")},[t]),e(adherev_ui_conditionalrender_1.default,{slot:"noMatch",attrs:{conditional:adherev_util_1.default.isObject(t)}},[e("span",{class:classnames_1.default(selectorPrefix+"-name")},[e(t)]),e(adherev_ui_conditionalrender_1.default,{slot:"noMatch",attrs:{conditional:adherev_util_1.default.isFunction(t)}},[e("span",{class:classnames_1.default(selectorPrefix+"-name")},[adherev_util_1.default.isFunction(t)?t(e):null])])])])},renderMore:function(e){var t=this.data.children;return e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:0!==t.length}},[e("span",{class:selectorPrefix+"-more fa fa-caret-right"})])},renderSubMenu:function(e){var t=this.data,a=t.children,n=t.subMenuClassName,t=t.subMenuStyle;return e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:0!==a.length}},[e(SubMenu_1.default,{attrs:{data:a,className:n,styleName:t}})])},onClick:function(e){e.stopPropagation();var t=this.data,a=t.id,n=t.attribute,r=t.disabled,i=t.children,e=this.getContext(),t=e.config,e=e.el,t=t.handler;if(r||0<(i||[]).length)return!1;t&&(t(a,n),this.$root.$destroy(),null!==(n=null==e?void 0:e.parentElement)&&void 0!==n&&n.removeChild(e))}},inject:["getContext"],render:function(e){var t=this.data,a=t.separation,t=t.styleName;return e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!a}},[e("li",{class:this.getClass,style:t,on:{click:this.onClick}},[this.renderIcon(e),this.renderName(e),this.renderMore(e),this.renderSubMenu(e)]),e("li",{slot:"noMatch",class:selectorPrefix+"-separation"})])}};
//# sourceMappingURL=MenuItem.js.map
