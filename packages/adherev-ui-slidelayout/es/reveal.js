import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.split.js";import classNames from"classnames";import{Fragment}from"vue-fragment";import SlideLayout from"./slide";import{slider}from"./slidelayout";var selectorPrefix="adherev-ui-slidelayout-reveal",Reveal={name:"adv-slidelayout-reveal",mixins:[SlideLayout],props:{masterClassName:{type:String,default:""},className:{type:String,default:""},slaveClassName:{type:String,default:""}},watch:{zIndex:function(e){this.$refs.el.style.zIndex=e,this.$refs.rMasterEl.style.zIndex=e+1}},created:function(){var s=this;this.$data.$positionConfig={init:{left:function(){s.$refs.el.style.zIndex=s.zIndex,s.$refs.rMasterEl.style.zIndex=s.zIndex+1,s.$refs.el.style.left="0"},right:function(){s.$refs.el.style.zIndex=s.zIndex,s.$refs.rMasterEl.style.zIndex=s.zIndex+1,s.$refs.el.style.right="0"}},show:{left:function(e){s.$refs.el.style.zIndex=s.zIndex,s.$data.$maskEl.style.zIndex=s.zIndex-1,s.$refs.rMasterEl.style.zIndex=s.zIndex-2,slider(s.$refs.rMasterEl,s.$refs.el.offsetWidth+"px","0","0",s.getDuration(e)+"ms",function(){s.$emit("after-show")}),s.$data.$maskEl&&(s.$data.$maskEl.style.display="block")},right:function(e){s.$refs.el.style.zIndex=s.zIndex,s.$data.$maskEl.style.zIndex=s.zIndex-1,s.$refs.rMasterEl.style.zIndex=s.zIndex-2,slider(s.$refs.rMasterEl,"-"+s.$refs.el.offsetWidth+"px","0","0",s.getDuration(e)+"ms",function(){s.$emit("after-show")}),s.$data.$maskEl&&(s.$data.$maskEl.style.display="block")}},close:{left:function(e){s.$refs.el.style.zIndex=s.zIndex,s.$refs.rMasterEl.style.zIndex=s.zIndex+1,slider(s.$refs.rMasterEl,"0","0","0",s.getDuration(e)+"ms",function(){s.$emit("after-close")}),s.$data.$maskEl&&(s.$data.$maskEl.style.display="none")},right:function(e){s.$refs.el.style.zIndex=s.zIndex,s.$refs.rMasterEl.style.zIndex=s.zIndex+1,slider(s.$refs.rMasterEl,"0","0","0",s.getDuration(e)+"ms",function(){s.$emit("after-close")}),s.$data.$maskEl&&(s.$data.$maskEl.style.display="none")}}}},mounted:function(){this.$refs.el.style.zIndex=this.zIndex,this.$refs.rMasterEl.style.zIndex=this.zIndex+1},render:function(e){var s=this,t=s.$slots,l=s.masterClassName,r=s.slaveClassName,s=s.direction;return e(Fragment,[e("div",{class:classNames(""+selectorPrefix,s,r.split(/\s+/)),ref:"el"},[t.slide]),e("div",{class:classNames(selectorPrefix+"-master",l.split(/\s+/)),ref:"rMasterEl"},[t.master])])}};export default Reveal;
//# sourceMappingURL=reveal.js.map