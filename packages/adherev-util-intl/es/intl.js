var __spreadArray=this&&this.__spreadArray||function(r,t,l){if(l||2===arguments.length)for(var e,n=0,a=t.length;n<a;n++)!e&&n in t||((e=e||Array.prototype.slice.call(t,0,n))[n]=t[n]);return r.concat(e||Array.prototype.slice.call(t))};import Intl from"@baifendian/adhere-util-intl";import en_US from"./locales/en_US";import pt_PT from"./locales/pt_PT";import zh_CN from"./locales/zh_CN";function extend(r){r.config.globalProperties.$tv=function(r,t){return IntlV.v(r,t)},r.config.globalProperties.$tvHtml=function(r,t){return IntlV.vHtml(r,t)}}var IntlV=Intl,init=IntlV.init;IntlV.init=function(){for(var r,t=[],l=0;l<arguments.length;l++)t[l]=arguments[l];var e=t;return e.length?"locales"in e[0]&&"object"==typeof e[0]?e[0].locales={en_US:__spreadArray([],Array.from(new Set(__spreadArray(__spreadArray([],en_US||[],!0),(null==(r=null==(r=e[0])?void 0:r.locales)?void 0:r.en_US)||[],!0))),!0),zh_CN:__spreadArray([],Array.from(new Set(__spreadArray(__spreadArray([],zh_CN||[],!0),(null==(r=null==(r=e[0])?void 0:r.locales)?void 0:r.zh_CN)||[],!0))),!0),pt_PT:__spreadArray([],Array.from(new Set(__spreadArray(__spreadArray([],pt_PT||[],!0),(null==(r=null==(r=e[0])?void 0:r.locales)?void 0:r.pt_PT)||[],!0))),!0)}:e[0].locales={en_US:en_US,zh_CN:zh_CN,pt_PT:pt_PT}:e=[{prefix:"local",currentLocale:"zh_CN",locales:{en_US:en_US,zh_CN:zh_CN,pt_PT:pt_PT}},!1],init.apply(this,e)},IntlV.tv=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return IntlV.v.apply(this,r)},IntlV.tvHtml=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return IntlV.vHtml.apply(this,r)};export default IntlV;export{extend};
//# sourceMappingURL=intl.js.map
