"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.array.find-index.js"),require("core-js/modules/es.array.splice.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.Popup=void 0;var maskEl,globalConfig,tslib_1=require("tslib"),uuid_1=require("uuid"),vue_1=tslib_1.__importDefault(require("vue")),selectorPrefix="adherev-ui-popup",prePopup=null,popups=[],el=null,Popup=function(){function e(e){this.id="",this.config=null,this.isShow=!1,this.el=null,this.popupEl=null,this.popupInnerEl=null,this.isShow=!1,this.el=PopupFactory.getEl(),this.id=(0,uuid_1.v1)(),this.config=e,this.onInnerElTransitionend=this.onInnerElTransitionend.bind(this),this.render()}return e.prototype.createMask=function(){var e=this.config.zIndex;(maskEl=document.createElement("div")).className="".concat(selectorPrefix,"-mask"),maskEl.style.zIndex=String((e||11e3)-1500),null!=(e=null==this?void 0:this.el)&&e.appendChild(maskEl)},e.prototype.render=function(){var e=this.config,t=e.children,e=e.zIndex,o=(this.popupEl=document.createElement("div"),this.popupEl.addEventListener("transitionend",this.onInnerElTransitionend),this.popupEl.className=selectorPrefix,this.popupEl.style.zIndex=String(e||11e3),this.popupInnerEl=document.createElement("div"),this.popupEl.appendChild(this.popupInnerEl),this);this.vm=new vue_1.default(tslib_1.__assign(tslib_1.__assign({},globalConfig||{}),{mounted:function(){var e;null!=(e=null==o?void 0:o.el)&&e.appendChild(o.popupEl),o.trigger("onCreate")},render:function(e){return e(t)}})),this.vm.$mount(this.popupInnerEl)},e.prototype.trigger=function(e){if(this.config[e])return this.config[e]()},e.prototype.show=function(){var e=this;return maskEl||this.createMask(),maskEl.style.display="block",this.popupEl.style.display="block",this.isShow=!0,this.trigger("onBeforeShow"),setTimeout(function(){maskEl.classList.add("modal-in"),e.popupEl.classList.add("modal-in")},100),!0},e.prototype.showClosePrePopup=function(){var e=this;return maskEl||this.createMask(),prePopup&&prePopup.close(),maskEl.style.display="block",this.popupEl.style.display="block",this.isShow=!0,this.trigger("onBeforeShow"),setTimeout(function(){maskEl.classList.add("modal-in"),e.popupEl.classList.add("modal-in")},100),!0},e.prototype.close=function(){var t=this,e=(maskEl||this.createMask(),this.isShow=!1,this.trigger("onBeforeClose"));return e?e.then(function(){var e;null!=(e=t.popupEl)&&e.classList.remove("modal-in"),maskEl.classList.remove("modal-in")}):(null!=(e=this.popupEl)&&e.classList.remove("modal-in"),maskEl.classList.remove("modal-in")),!0},e.prototype.destroy=function(){var e;return this.vm.$destroy(),null!=(e=null==(e=this.popupEl)?void 0:e.parentNode)&&e.removeChild(this.popupEl),this.popupEl=null,this.trigger("onDestroy"),!0},e.prototype.isDestroy=function(){return!this.popupEl},e.prototype.getId=function(){return this.id},e.prototype.onInnerElTransitionend=function(){this.isShow?(prePopup=this).trigger("onAfterShow"):(prePopup=null,this.popupEl.style.display="none",maskEl.style.display="none",this.trigger("onAfterClose"))},e}(),PopupFactory=(exports.Popup=Popup,{setConfig:function(e){globalConfig=e},create:function(e){e=new Popup(e);return popups.push(e),e},show:function(e){return!!e&&!(e.isDestroy()||e===prePopup||prePopup&&e.getId()===prePopup.getId())&&e.show()},showClosePrePopup:function(e){return!!e&&!(e.isDestroy()||e===prePopup||prePopup&&e.getId()===prePopup.getId())&&(prePopup&&prePopup.close(),e.show())},close:function(e){return!!e&&!e.isDestroy()&&e.close()},closeAll:function(){var t=this,o=[];return popups.forEach(function(e){e=t.close(e);o.push(e)}),o.every(function(e){return e})},destroy:function(t){var e,o;return!!t&&!t.isDestroy()&&((e=t.destroy())&&-1!==(o=popups.findIndex(function(e){return e===t}))&&popups.splice(o,1),e)},getEl:function(){return el||document.body},setEl:function(e){el=e}});exports.default=PopupFactory;
//# sourceMappingURL=popup.js.map
