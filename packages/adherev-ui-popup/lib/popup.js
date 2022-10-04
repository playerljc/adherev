"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.array.find-index.js"),require("core-js/modules/es.array.splice.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.Popup=void 0;var maskEl,tslib_1=require("tslib"),uuid_1=require("uuid"),vue_1=tslib_1.__importDefault(require("vue")),selectorPrefix="adherev-ui-popup",prePopup=null,popups=[],el=null,Popup=function(){function e(e){this.id="",this.config=null,this.isShow=!1,this.el=null,this.popupEl=null,this.popupInnerEl=null,this.isShow=!1,this.el=PopupFactory.getEl(),this.id=uuid_1.v1(),this.config=e,this.onInnerElTransitionend=this.onInnerElTransitionend.bind(this),this.render()}return e.prototype.createMask=function(){var e=this.config.zIndex;(maskEl=document.createElement("div")).className=selectorPrefix+"-mask",maskEl.style.zIndex=String((e||11e3)-1500),null!==(e=null==this?void 0:this.el)&&void 0!==e&&e.appendChild(maskEl)},e.prototype.render=function(){var e=this.config,t=e.children,e=e.zIndex;this.popupEl=document.createElement("div"),this.popupEl.addEventListener("transitionend",this.onInnerElTransitionend),this.popupEl.className=selectorPrefix,this.popupEl.style.zIndex=String(e||11e3),this.popupInnerEl=document.createElement("div"),this.popupEl.appendChild(this.popupInnerEl);var o=this;this.vm=new vue_1.default({mounted:function(){var e;null!==(e=null==o?void 0:o.el)&&void 0!==e&&e.appendChild(o.popupEl),o.trigger("onCreate")},render:function(e){return e(t)}}),this.vm.$mount(this.popupInnerEl)},e.prototype.trigger=function(e){if(this.config[e])return this.config[e]()},e.prototype.show=function(){var e=this;return maskEl||this.createMask(),maskEl.style.display="block",this.popupEl.style.display="block",this.isShow=!0,this.trigger("onBeforeShow"),setTimeout(function(){maskEl.classList.add("modal-in"),e.popupEl.classList.add("modal-in")},100),!0},e.prototype.showClosePrePopup=function(){var e=this;return maskEl||this.createMask(),prePopup&&prePopup.close(),maskEl.style.display="block",this.popupEl.style.display="block",this.isShow=!0,this.trigger("onBeforeShow"),setTimeout(function(){maskEl.classList.add("modal-in"),e.popupEl.classList.add("modal-in")},100),!0},e.prototype.close=function(){var t=this;maskEl||this.createMask(),this.isShow=!1;var e=this.trigger("onBeforeClose");return e?e.then(function(){var e;null!==(e=t.popupEl)&&void 0!==e&&e.classList.remove("modal-in"),maskEl.classList.remove("modal-in")}):(null!==(e=this.popupEl)&&void 0!==e&&e.classList.remove("modal-in"),maskEl.classList.remove("modal-in")),!0},e.prototype.destroy=function(){var e;return this.vm.$destroy(),null!==(e=null===(e=this.popupEl)||void 0===e?void 0:e.parentNode)&&void 0!==e&&e.removeChild(this.popupEl),this.popupEl=null,this.trigger("onDestroy"),!0},e.prototype.isDestroy=function(){return!this.popupEl},e.prototype.getId=function(){return this.id},e.prototype.onInnerElTransitionend=function(){this.isShow?(prePopup=this).trigger("onAfterShow"):(prePopup=null,this.popupEl.style.display="none",this.trigger("onAfterClose"))},e}();exports.Popup=Popup;var PopupFactory={create:function(e){e=new Popup(e);return popups.push(e),e},show:function(e){return!!e&&(!e.isDestroy()&&(e!==prePopup&&((!prePopup||e.getId()!==prePopup.getId())&&e.show())))},showClosePrePopup:function(e){return!!e&&(!e.isDestroy()&&(e!==prePopup&&((!prePopup||e.getId()!==prePopup.getId())&&(prePopup&&prePopup.close(),e.show()))))},close:function(e){return!!e&&(!e.isDestroy()&&e.close())},closeAll:function(){var t=this,o=[];return popups.forEach(function(e){e=t.close(e);o.push(e)}),o.every(function(e){return e})},destroy:function(t){if(!t)return!1;if(t.isDestroy())return!1;var e,o=t.destroy();return!o||-1!==(e=popups.findIndex(function(e){return e===t}))&&popups.splice(e,1),o},getEl:function(){return el||document.body},setEl:function(e){el=e}};exports.default=PopupFactory;
//# sourceMappingURL=popup.js.map
