"use strict";require("core-js/modules/es.object.define-property.js");var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var prePopup,maskEl,vue_1=__importDefault(require("vue")),uuid_1=require("uuid"),selectorPrefix="adherev-ui-popup",el=null,Popup=function(){function e(e){this.id="",this.config=null,this.isShow=!1,this.el=null,this.popupEl=null,this.popupInnerEl=null,this.isShow=!1,this.el=PopupFactory.getEl(),this.id=uuid_1.v1(),this.config=e,this.onMaskElTransitionend=this.onMaskElTransitionend.bind(this),this.onInnerElTransitionend=this.onInnerElTransitionend.bind(this),this.render()}return e.prototype.createMask=function(){var e=this.config.zIndex;(maskEl=document.createElement("div")).className=selectorPrefix+"-mask",maskEl.style.zIndex=String((e||11e3)-1500),this.el.appendChild(maskEl),maskEl.addEventListener("transitionend",this.onMaskElTransitionend)},e.prototype.render=function(){var e=this.config,t=e.children,e=e.zIndex;this.popupEl=document.createElement("div"),this.popupEl.addEventListener("transitionend",this.onInnerElTransitionend),this.popupEl.className=selectorPrefix,this.popupEl.style.zIndex=String(e||11e3),this.popupInnerEl=document.createElement("div"),this.popupEl.appendChild(this.popupInnerEl);var o=this;this.vm=new vue_1.default({mounted:function(){o.el.appendChild(o.popupEl),o.trigger("onCreate")},render:function(e){return e(t)}}),this.vm.$mount(this.popupInnerEl)},e.prototype.trigger=function(e){if(this.config[e])return this.config[e]()},e.prototype.show=function(){var e=this;return maskEl||this.createMask(),prePopup&&prePopup.close(),maskEl.style.display="block",this.popupEl.style.display="block",this.isShow=!0,this.trigger("onBeforeShow"),setTimeout(function(){maskEl.classList.add("modal-in"),e.popupEl.classList.add("modal-in")},100),!0},e.prototype.close=function(){var e=this;maskEl||this.createMask(),this.isShow=!1;var t=this.trigger("onBeforeClose");return t?t.then(function(){e.popupEl.classList.remove("modal-in"),maskEl.classList.remove("modal-in")}):(this.popupEl.classList.remove("modal-in"),maskEl.classList.remove("modal-in")),!0},e.prototype.destroy=function(){return this.vm.$destroy(),this.popupEl.parentNode.removeChild(this.popupEl),this.popupEl=null,this.trigger("onDestroy"),!0},e.prototype.isDestroy=function(){return!this.popupEl},e.prototype.getId=function(){return this.id},e.prototype.onInnerElTransitionend=function(){this.isShow?(prePopup=this).trigger("onAfterShow"):(prePopup=null,this.popupEl.style.display="none",this.trigger("onAfterClose"))},e.prototype.onMaskElTransitionend=function(){this.isShow||(maskEl.style.display="none")},e}(),PopupFactory={create:function(e){return new Popup(e)},show:function(e){return!!e&&(!e.isDestroy()&&(e!==prePopup&&((!prePopup||e.getId()!==prePopup.getId())&&e.show())))},close:function(e){return!!e&&(!e.isDestroy()&&e.close())},closeAll:function(){return!!prePopup&&this.close(prePopup)},destroy:function(e){return!!e&&(!e.isDestroy()&&e.destroy())},getEl:function(){return el||document.body},setEl:function(e){el=e}};exports.default=PopupFactory;
//# sourceMappingURL=popup.js.map
