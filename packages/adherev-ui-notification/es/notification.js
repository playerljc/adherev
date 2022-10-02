import"core-js/modules/es.object.assign.js";import"core-js/modules/es.array.join.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import{v1}from"uuid";import Vue from"vue";import{Fragment}from"vue-fragment";import Util from"@baifendian/adherev-util";var selectorPrefix="adherev-ui-notification",Notification=function(){function t(t,i){this.config={style:"material",type:"top"},this.notifications={},this.key=!1,this.container=t,this.config=Object.assign(this.config,i),this.createInnerContainer(),this.init(),this.initEvents()}return t.prototype.createInnerContainer=function(){var t,i=this.container.querySelector("."+selectorPrefix);i&&null!==(t=null==i?void 0:i.parentElement)&&void 0!==t&&t.removeChild(i),this.innerContainer=document.createElement("div"),this.innerContainer.className=selectorPrefix,this.notificationContainer=document.createElement("ul"),this.innerContainer.appendChild(this.notificationContainer),this.container.appendChild(this.innerContainer)},t.prototype.init=function(){var t,i=this.config;null!==(t=null==this?void 0:this.innerContainer)&&void 0!==t&&t.classList.remove([selectorPrefix].concat(["top"===i.type?"bottom":"top",i.style]).join("-")),null!==(t=null==this?void 0:this.innerContainer)&&void 0!==t&&t.classList.add([selectorPrefix].concat([i.type,i.style]).join("-"))},t.prototype.initEvents=function(){var t,n=this;null!==(t=null==this?void 0:this.notificationContainer)&&void 0!==t&&t.addEventListener("click",function(t){var i,e;null!==(e=null===(i=null===(e=t.target)||void 0===e?void 0:e.classList)||void 0===i?void 0:i.contains)&&void 0!==e&&e.call(i,"closeBtn")&&(t=Util.getTopDom(t.target,selectorPrefix+"-item"),n.closeNotification.call(n,t.dataset.id))})},t.prototype.closeNotification=function(t){var e,n=this;n.key||(n.key=!0,e=n.notifications[t],n.trigger("onCloseBefore",e),e.addEventListener("transitionend",function t(){var i;e.removeEventListener("transitionend",t),null!==(i=null==n?void 0:n.notificationContainer)&&void 0!==i&&i.removeChild(e),n.key=!1,n.trigger("onCloseAfter",e)}),e.style.overflow="hidden",e.querySelector(".info").style.opacity="0",e.style.height="0")},t.prototype.buildCustom=function(a){var l=this;return new Promise(function(t){var i=a.closed,e=a.children,n=v1(),o=document.createElement("li");o.className=selectorPrefix+"-item",o.dataset.id=n;var r=document.createElement("div");o.appendChild(r);var s=l;new Vue({mounted:function(){t(s.build(n,o))},render:function(t){return t(Fragment,[t("div",{class:"info"},[Util.isObject(e)?t(e):Util.isFunction(e)?e(t):e||""]),i?t("span",{class:"closeBtn"}):null])}}).$mount(r)})},t.prototype.buildStandard=function(f){var v=this;return new Promise(function(t){var i=f.headerLabel,e=void 0===i?"":i,i=f.headerIcon,n=void 0===i?"":i,i=f.title,o=void 0===i?"":i,i=f.text,r=void 0===i?"":i,i=f.icon,s=void 0===i?"":i,i=f.closed,a=void 0===i||i,i=f.datetime,l=void 0===i?"":i,c=v1(),d=document.createElement("li");d.className=selectorPrefix+"-item",d.dataset.id=c;i=document.createElement("div");d.appendChild(i);var u=v;new Vue({mounted:function(){t(u.build(c,d))},render:function(t){return t(Fragment,[t("div",{class:"info"},[t("div",{class:selectorPrefix+"-standard-header"},[t("div",{class:selectorPrefix+"-standard-header-icon"},[n?t("img",{attrs:{src:n,alt:""}}):null]),t("div",{class:selectorPrefix+"-standard-header-label"},[Util.isObject(e)?t(e):Util.isFunction(e)?e(t):e||""])]),t("div",{class:selectorPrefix+"-standard-content"},[t("div",{class:selectorPrefix+"-standard-content-media-l"},[s?t("img",{attrs:{src:s,alt:""}}):null]),t("div",{class:selectorPrefix+"-standard-content-row"},[t("div",{class:selectorPrefix+"-standard-content-row-title"},[Util.isObject(o)?t(o):Util.isFunction(o)?o(t):o||""]),t("div",{class:selectorPrefix+"-standard-content-row-text"},[Util.isObject(r)?t(r):Util.isFunction(r)?r(t):r||""])]),t("div",{class:selectorPrefix+"-standard-content-media-r"},[Util.isObject(l)?t(l):Util.isFunction(l)?l(t):l||""])])]),a?t("span",{class:"closeBtn"}):null])}}).$mount(i)})},t.prototype.build=function(t,i){var e,n=this;this.notifications[t]=i,null!==(e=null==this?void 0:this.notificationContainer)&&void 0!==e&&e.appendChild(i),n.trigger("onCreate",i),i.style.height="auto";var o=i.clientHeight;return"material"===n.config.style?o<40&&(o=40):"ios"===n.config.style&&o<70&&(o=70),i.style.height="0",setTimeout(function(){i.style.height=o+"px",i.querySelector(".info").style.opacity="1",n.trigger("onShow",i)},100),t},t.prototype.trigger=function(t,i){this.config[t]&&this.config[t](i)},t.prototype.show=function(t){return this.buildCustom(t)},t.prototype.showStandard=function(t){return this.buildStandard(t)},t.prototype.close=function(t){this.closeNotification(t)},t}(),NotificationFactory={build:function(t,i){return new Notification(t,i)}};export default NotificationFactory;
//# sourceMappingURL=notification.js.map
