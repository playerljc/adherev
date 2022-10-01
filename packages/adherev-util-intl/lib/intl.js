"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,a=0,i=e.length;a<i;a++)!n&&a in e||((n=n||Array.prototype.slice.call(e,0,a))[a]=e[a]);return t.concat(n||Array.prototype.slice.call(e))},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.extend=exports.getLocal=void 0;var vue_i18n_1=__importDefault(require("vue-i18n")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),en_US_1=__importDefault(require("./locales/en_US")),pt_PT_1=__importDefault(require("./locales/pt_PT")),zh_CN_1=__importDefault(require("./locales/zh_CN")),finallyLocales={en_US:en_US_1.default,zh_CN:zh_CN_1.default,pt_PT:pt_PT_1.default},intlMap={},mainLocales={},i18n=null;function initIntlMap(e){Object.getOwnPropertyNames(e).forEach(function(t){intlMap[e[t]]=t})}function getLocal(t,e){void 0===t&&(t="local");for(var r=__spreadArray([],Array.from(new Set(e)),!0),n={},a=0;a<r.length;a++)n["".concat(t).concat(a+1)]=r[a];return n}function extend(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$tv=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=this.$i18n,t=intlMap[t];return n.t.apply(n,__spreadArray([t,n.locale,n._getMessages(),this],e,!1))},t.prototype.$tcv=function(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=this.$i18n,t=intlMap[t];return a._tc.apply(a,__spreadArray([t,a.locale,a._getMessages(),this,e],r,!1))},t.prototype.$tev=function(t,e){var r=this.$i18n,t=intlMap[t];return r._te(t,r.locale,r._getMessages(),e)}}exports.getLocal=getLocal,exports.extend=extend;var I18nFactory=function(t){var e,r,n,a=t.I18nOptions,i=t.prefix,l=void 0===i?"local":i,o=a.messages,_=void 0===o?{}:o,t=a.locale,i=Object.keys(finallyLocales),o=Object.keys(_||{});for(n in i.length>o.length?(e=finallyLocales,r=_||{}):i.length<=o.length&&(e=_||{},r=finallyLocales),e)mainLocales[n]=getLocal(l,Array.from(new Set(__spreadArray(__spreadArray([],e[n],!0),r[n]||[],!0))));return initIntlMap(mainLocales.zh_CN),i18n=new vue_i18n_1.default(__assign(__assign({},a),{messages:mainLocales})),adhere_util_intl_1.default.init({currentLocale:t,locales:_}),i18n};I18nFactory.tv=I18nFactory.v=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];t=intlMap[t];return null==i18n?void 0:i18n.t.apply(i18n,__spreadArray([t],e||[],!0))},I18nFactory.tcv=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];t=intlMap[t];return null==i18n?void 0:i18n.tc.apply(i18n,__spreadArray([t],e||[],!0))},I18nFactory.tev=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];t=intlMap[t];return null==i18n?void 0:i18n.te.apply(i18n,__spreadArray([t],e,!0))},exports.default=I18nFactory;
//# sourceMappingURL=intl.js.map
