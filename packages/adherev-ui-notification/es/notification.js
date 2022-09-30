import{createVNode as _createVNode,Fragment as _Fragment}from"vue";import"core-js/modules/es.object.assign.js";import"core-js/modules/es.array.join.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import{v1}from"uuid";import{createApp,h}from"vue";import Util from"@baifendian/adherev-util";var selectorPrefix="adherev-ui-notification",Notification=function(){function t(t,e){this.config={style:"material",type:"top"},this.notifications={},this.key=!1,this.container=t,this.config=Object.assign(this.config,e),this.createInnerContainer(),this.init(),this.initEvents()}return t.prototype.createInnerContainer=function(){var t,e=this.container.querySelector(".".concat(selectorPrefix));e&&null!==(t=null==e?void 0:e.parentElement)&&void 0!==t&&t.removeChild(e),this.innerContainer=document.createElement("div"),this.innerContainer.className=selectorPrefix,this.notificationContainer=document.createElement("ul"),this.innerContainer.appendChild(this.notificationContainer),this.container.appendChild(this.innerContainer)},t.prototype.init=function(){var t=this.config;this.innerContainer&&(this.innerContainer.classList.remove([selectorPrefix].concat(["top"===t.type?"bottom":"top",t.style]).join("-")),this.innerContainer.classList.add([selectorPrefix].concat([t.type,t.style]).join("-")))},t.prototype.initEvents=function(){var i=this;this.notificationContainer&&this.notificationContainer.addEventListener("click",function(t){var e;!t.target.classList.contains("closeBtn")||(e=null===(e=Util.getTopDom)||void 0===e?void 0:e.call(Util,t.target,"".concat(selectorPrefix,"-item")))&&i.closeNotification.call(i,null===(t=null==e?void 0:e.dataset)||void 0===t?void 0:t.id)})},t.prototype.closeNotification=function(t){var i,n=this;n.key||(n.key=!0,i=n.notifications[t],n.trigger("onCloseBefore",i),i.addEventListener("transitionend",function t(){var e;i.removeEventListener("transitionend",t),null!==(e=null==n?void 0:n.notificationContainer)&&void 0!==e&&e.removeChild(i),n.key=!1,n.trigger("onCloseAfter",i)}),i.style.overflow="hidden",i.querySelector(".info").style.opacity="0",i.style.height="0")},t.prototype.buildCustom=function(c){var a=this;return new Promise(function(t){var e=c.closed,i=c.children,n=v1(),o=document.createElement("li"),r=(o.className="".concat(selectorPrefix,"-item"),o.dataset.id=n,a);createApp({mounted:function(){t(r.build(n,o))},render:function(){var t;return _createVNode(_Fragment,null,[_createVNode("div",{class:"info"},[null!==(t=Util.isObject)&&void 0!==t&&t.call(Util,i)?h(i):null!==(t=Util.isFunction)&&void 0!==t&&t.call(Util,i)?i():i||""]),e?_createVNode("span",{class:"closeBtn"},null):null])}}).mount(o)})},t.prototype.buildStandard=function(f){var v=this;return new Promise(function(t){var e=f.headerLabel,i=void 0===e?"":e,e=f.headerIcon,n=void 0===e?"":e,e=f.title,o=void 0===e?"":e,e=f.text,r=void 0===e?"":e,e=f.icon,c=void 0===e?"":e,e=f.closed,d=void 0===e||e,e=f.datetime,a=void 0===e?"":e,l=v1(),s=document.createElement("li"),u=(s.className="".concat(selectorPrefix,"-item"),s.dataset.id=l,v);createApp({mounted:function(){t(u.build(l,s))},render:function(){var t;return _createVNode(_Fragment,null,[_createVNode("div",{class:"info"},[_createVNode("div",{class:"".concat(selectorPrefix,"-standard-header")},[_createVNode("div",{class:"".concat(selectorPrefix,"-standard-header-icon")},[n?_createVNode("img",{src:n,alt:""},null):null]),_createVNode("div",{class:"".concat(selectorPrefix,"-standard-header-label")},[null!==(t=Util.isObject)&&void 0!==t&&t.call(Util,i)?h(i):null!==(t=Util.isFunction)&&void 0!==t&&t.call(Util,i)?i():i||""])]),_createVNode("div",{class:"".concat(selectorPrefix,"-standard-content")},[_createVNode("div",{class:"".concat(selectorPrefix,"-standard-content-media-l")},[c?_createVNode("img",{src:c,alt:""},null):null]),_createVNode("div",{class:"".concat(selectorPrefix,"-standard-content-row")},[_createVNode("div",{class:"".concat(selectorPrefix,"-standard-content-row-title")},[null!==(t=Util.isObject)&&void 0!==t&&t.call(Util,o)?h(o):null!==(t=Util.isFunction)&&void 0!==t&&t.call(Util,o)?o():o||""]),_createVNode("div",{class:"".concat(selectorPrefix,"-standard-content-row-text")},[null!==(t=Util.isObject)&&void 0!==t&&t.call(Util,r)?h(r):null!==(t=Util.isFunction)&&void 0!==t&&t.call(Util,r)?r():r||""])]),_createVNode("div",{class:"".concat(selectorPrefix,"-standard-content-media-r")},[null!==(t=Util.isObject)&&void 0!==t&&t.call(Util,a)?h(a):null!==(t=Util.isFunction)&&void 0!==t&&t.call(Util,a)?a():a||""])])]),d?_createVNode("span",{class:"closeBtn"},null):null])}}).mount(s)})},t.prototype.build=function(t,e){var i,n=this,o=(this.notifications[t]=e,null!==(i=null==this?void 0:this.notificationContainer)&&void 0!==i&&i.appendChild(e),n.trigger("onCreate",e),e.style.height="auto",e.clientHeight);return"material"===n.config.style?o<40&&(o=40):"ios"===n.config.style&&o<70&&(o=70),e.style.height="0",setTimeout(function(){e.style.height="".concat(o,"px"),e.querySelector(".info").style.opacity="1",n.trigger("onShow",e)},100),t},t.prototype.trigger=function(t,e){this.config[t]&&this.config[t](e)},t.prototype.show=function(t){return this.buildCustom(t)},t.prototype.showStandard=function(t){return this.buildStandard(t)},t.prototype.close=function(t){this.closeNotification(t)},t}(),NotificationFactory={build:function(t,e){return new Notification(t,e)}};export default NotificationFactory;export{Notification};
//# sourceMappingURL=notification.js.map
