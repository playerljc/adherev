var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t}).apply(this,arguments)},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,r=0,n=arguments.length;r<n;r++)t+=arguments[r].length;for(var e=Array(t),a=0,r=0;r<n;r++)for(var i=arguments[r],o=0,l=i.length;o<l;o++,a++)e[a]=i[o];return e};import VueI18n from"vue-i18n";var finallyLocales={en_US:require("./locales/en_US").default,zh_CN:require("./locales/zh_CN").default,pt_PT:require("./locales/pt_PT").default},intlMap={},i18n=null;function initIntlMap(r){Object.getOwnPropertyNames(r).forEach(function(t){intlMap[r[t]]=t})}function getLocal(t){for(var r=__spreadArrays(Array.from(new Set(t))),n={},e=0;e<r.length;e++)n["local"+(e+1)]=r[e];return n}function extend(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$tv=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var e=this.$i18n,a=intlMap[t];return e.t.apply(e,__spreadArrays([a,e.locale,e._getMessages(),this],r))},t.prototype.$tcv=function(t,r){for(var n=[],e=2;e<arguments.length;e++)n[e-2]=arguments[e];var a=this.$i18n,i=intlMap[t];return a._tc.apply(a,__spreadArrays([i,a.locale,a._getMessages(),this,r],n))},t.prototype.$tev=function(t,r){var n=this.$i18n,t=intlMap[t];return n._te(t,n.locale,n._getMessages(),r)}}var I18nFactory=function(t){var r,n=(t=void 0===t?{}:t).messages,e=void 0===n?{}:n;for(r in e||{})r in finallyLocales&&(finallyLocales[r]=Object.assign(finallyLocales[r],(e||{})[r]));return initIntlMap(finallyLocales.zh_CN),i18n=new VueI18n(__assign(__assign({},t),{messages:finallyLocales}))};I18nFactory.tv=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var e=intlMap[t];return i18n.t.apply(i18n,__spreadArrays([e],r))},I18nFactory.tcv=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var e=intlMap[t];return i18n.tc.apply(i18n,__spreadArrays([e],r))},I18nFactory.tev=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var e=intlMap[t];return i18n.te.apply(i18n,__spreadArrays([e],r))};export default I18nFactory;export{getLocal,extend};
//# sourceMappingURL=intl.js.map
