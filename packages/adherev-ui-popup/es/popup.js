import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.find-index.js";import"core-js/modules/es.array.splice.js";import{__assign}from"tslib";import{v1}from"uuid";import Vue from"vue";var maskEl,globalConfig,selectorPrefix="adherev-ui-popup",prePopup=null,popups=[],el=null,Popup=function(){function o(o){this.id="",this.config=null,this.isShow=!1,this.el=null,this.popupEl=null,this.popupInnerEl=null,this.isShow=!1,this.el=PopupFactory.getEl(),this.id=v1(),this.config=o,this.onInnerElTransitionend=this.onInnerElTransitionend.bind(this),this.render()}return o.prototype.createMask=function(){var o=this.config.zIndex;(maskEl=document.createElement("div")).className="".concat(selectorPrefix,"-mask"),maskEl.style.zIndex=String((o||11e3)-1500),null!=(o=null==this?void 0:this.el)&&o.appendChild(maskEl)},o.prototype.render=function(){var o=this.config,t=o.children,o=o.zIndex,e=(this.popupEl=document.createElement("div"),this.popupEl.addEventListener("transitionend",this.onInnerElTransitionend),this.popupEl.className=selectorPrefix,this.popupEl.style.zIndex=String(o||11e3),this.popupInnerEl=document.createElement("div"),this.popupEl.appendChild(this.popupInnerEl),this);this.vm=new Vue(__assign(__assign({},globalConfig||{}),{mounted:function(){var o;null!=(o=null==e?void 0:e.el)&&o.appendChild(e.popupEl),e.trigger("onCreate")},render:function(o){return o(t)}})),this.vm.$mount(this.popupInnerEl)},o.prototype.trigger=function(o){if(this.config[o])return this.config[o]()},o.prototype.show=function(){var o=this;return maskEl||this.createMask(),maskEl.style.display="block",this.popupEl.style.display="block",this.isShow=!0,this.trigger("onBeforeShow"),setTimeout(function(){maskEl.classList.add("modal-in"),o.popupEl.classList.add("modal-in")},100),!0},o.prototype.showClosePrePopup=function(){var o=this;return maskEl||this.createMask(),prePopup&&prePopup.close(),maskEl.style.display="block",this.popupEl.style.display="block",this.isShow=!0,this.trigger("onBeforeShow"),setTimeout(function(){maskEl.classList.add("modal-in"),o.popupEl.classList.add("modal-in")},100),!0},o.prototype.close=function(){var t=this,o=(maskEl||this.createMask(),this.isShow=!1,this.trigger("onBeforeClose"));return o?o.then(function(){var o;null!=(o=t.popupEl)&&o.classList.remove("modal-in"),maskEl.classList.remove("modal-in")}):(null!=(o=this.popupEl)&&o.classList.remove("modal-in"),maskEl.classList.remove("modal-in")),!0},o.prototype.destroy=function(){var o;return this.vm.$destroy(),null!=(o=null==(o=this.popupEl)?void 0:o.parentNode)&&o.removeChild(this.popupEl),this.popupEl=null,this.trigger("onDestroy"),!0},o.prototype.isDestroy=function(){return!this.popupEl},o.prototype.getId=function(){return this.id},o.prototype.onInnerElTransitionend=function(){this.isShow?(prePopup=this).trigger("onAfterShow"):(prePopup=null,this.popupEl.style.display="none",maskEl.style.display="none",this.trigger("onAfterClose"))},o}(),PopupFactory={setConfig:function(o){globalConfig=o},create:function(o){o=new Popup(o);return popups.push(o),o},show:function(o){return!!o&&!(o.isDestroy()||o===prePopup||prePopup&&o.getId()===prePopup.getId())&&o.show()},showClosePrePopup:function(o){return!!o&&!(o.isDestroy()||o===prePopup||prePopup&&o.getId()===prePopup.getId())&&(prePopup&&prePopup.close(),o.show())},close:function(o){return!!o&&!o.isDestroy()&&o.close()},closeAll:function(){var t=this,e=[];return popups.forEach(function(o){o=t.close(o);e.push(o)}),e.every(function(o){return o})},destroy:function(t){var o,e;return!!t&&!t.isDestroy()&&((o=t.destroy())&&-1!==(e=popups.findIndex(function(o){return o===t}))&&popups.splice(e,1),o)},getEl:function(){return el||document.body},setEl:function(o){el=o}};export default PopupFactory;export{Popup};
//# sourceMappingURL=popup.js.map
