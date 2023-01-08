"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),vue_fragment_1=require("vue-fragment"),slide_1=tslib_1.__importDefault(require("./slide")),slidelayout_1=require("./slidelayout"),selectorPrefix="adherev-ui-slidelayout-reveal",Reveal={name:"adv-slidelayout-reveal",mixins:[slide_1.default],props:{masterClassName:{type:String,default:""},className:{type:String,default:""},slaveClassName:{type:String,default:""},renderSlide:{type:Object,default:function(){return null}},renderMaster:{type:Object,default:function(){return null}}},slots:["slide","master"],emits:["after-show","after-close"],watch:{zIndex:function(e){this.$refs.el.style.zIndex=e,this.$refs.rMasterEl.style.zIndex=e+1}},created:function(){var t=this;this.$data.$positionConfig={init:{left:function(){t.$refs.el.style.zIndex=t.zIndex,t.$refs.rMasterEl.style.zIndex=t.zIndex+1,t.$refs.el.style.left="0"},right:function(){t.$refs.el.style.zIndex=t.zIndex,t.$refs.rMasterEl.style.zIndex=t.zIndex+1,t.$refs.el.style.right="0"}},show:{left:function(e){t.$refs.el.style.zIndex=t.zIndex,t.$data.$maskEl.style.zIndex=t.zIndex-1,t.$refs.rMasterEl.style.zIndex=t.zIndex-2,(0,slidelayout_1.slider)(t.$refs.rMasterEl,"".concat(t.$refs.el.offsetWidth,"px"),"0","0","".concat(t.getDuration(e),"ms"),function(){t.$emit("after-show")}),t.$data.$maskEl&&(t.$data.$maskEl.style.display="block")},right:function(e){t.$refs.el.style.zIndex=t.zIndex,t.$data.$maskEl.style.zIndex=t.zIndex-1,t.$refs.rMasterEl.style.zIndex=t.zIndex-2,(0,slidelayout_1.slider)(t.$refs.rMasterEl,"-".concat(t.$refs.el.offsetWidth,"px"),"0","0","".concat(t.getDuration(e),"ms"),function(){t.$emit("after-show")}),t.$data.$maskEl&&(t.$data.$maskEl.style.display="block")}},close:{left:function(e){t.$refs.el.style.zIndex=t.zIndex,t.$refs.rMasterEl.style.zIndex=t.zIndex+1,(0,slidelayout_1.slider)(t.$refs.rMasterEl,"0","0","0","".concat(t.getDuration(e),"ms"),function(){t.$emit("after-close")}),t.$data.$maskEl&&(t.$data.$maskEl.style.display="none")},right:function(e){t.$refs.el.style.zIndex=t.zIndex,t.$refs.rMasterEl.style.zIndex=t.zIndex+1,(0,slidelayout_1.slider)(t.$refs.rMasterEl,"0","0","0","".concat(t.getDuration(e),"ms"),function(){t.$emit("after-close")}),t.$data.$maskEl&&(t.$data.$maskEl.style.display="none")}}}},mounted:function(){this.$refs.el.style.zIndex=this.zIndex,this.$refs.rMasterEl.style.zIndex=this.zIndex+1},render:function(e){var t=this,s=t.$slots,l=t.masterClassName,r=t.slaveClassName,t=t.direction;return e(vue_fragment_1.Fragment,[e("div",{class:(0,classnames_1.default)("".concat(selectorPrefix),t,r||""),ref:"el"},[s.slide||this.renderSlide]),e("div",{class:(0,classnames_1.default)("".concat(selectorPrefix,"-master"),l||""),ref:"rMasterEl"},[s.master||this.renderMaster])])}};exports.default=Reveal;
//# sourceMappingURL=reveal.js.map
