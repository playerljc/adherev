import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.split.js";import classNames from"classnames";import SlideLayout from"./slide";import{slider}from"./slidelayout";var selectorPrefix="adherev-ui-slidelayout-push",Push={name:"adv-slidelayout-push",mixins:[SlideLayout],props:{masterClassName:{type:String,default:""},className:{type:String,default:""},slaveClassName:{type:String,default:""}},watch:{zIndex:function(e){this.$refs.pMasterEl.style.zIndex=e-1,this.$refs.el.style.zIndex=e,this.$refs.pSlaveEl.zIndex=e-2}},created:function(){var s=this;this.$data.$positionConfig={init:{left:function(){s.$refs.el.style.left="0",s.$refs.pSlaveEl.style.left=s.$refs.el.offsetWidth+"px",slider(s.$refs.pMasterEl,"-"+s.$refs.el.offsetWidth+"px","0","0","0")},right:function(){s.$refs.el.style.right="0",s.$refs.pSlaveEl.style.right=s.$refs.el.offsetWidth+"px",slider(s.$refs.pMasterEl,s.$refs.el.offsetWidth+"px","0","0","0")}},show:{left:function(e){slider(s.$refs.pMasterEl,"0","0","0",s.getDuration(e)+"ms",function(){s.$emit("after-show")}),s.$data.$maskEl&&(s.$data.$maskEl.style.display="block")},right:function(e){slider(s.$refs.pMasterEl,"0","0","0",s.getDuration(e)+"ms",function(){s.$emit("after-show")}),s.$data.$maskEl&&(s.$data.$maskEl.style.display="block")}},close:{left:function(e){slider(s.$refs.pMasterEl,"-"+s.$refs.el.offsetWidth+"px","0","0",s.getDuration(e)+"ms",function(){s.$emit("after-close")}),s.$data.$maskEl&&(s.$data.$maskEl.style.display="none")},right:function(e){slider(s.$refs.pMasterEl,s.$refs.el.offsetWidth+"px","0","0",s.getDuration(e)+"ms",function(){s.$emit("after-close")}),s.$data.$maskEl&&(s.$data.$maskEl.style.display="none")}}}},mounted:function(){var e=this.zIndex;this.$refs.pMasterEl.style.zIndex=e-1,this.$refs.el.style.zIndex=e,this.$refs.pSlaveEl.zIndex=e-2},render:function(e){var s=this,t=s.$slots,l=s.masterClassName,a=s.className,r=s.slaveClassName,s=s.direction;return e("div",{class:classNames(selectorPrefix+"-master",l.split(/\s+/)),ref:"pMasterEl"},[e("div",{class:classNames(selectorPrefix,s,a.split(/\s+/)),ref:"el"},[t.slide]),e("div",{class:classNames(selectorPrefix+"-slave",r.split(/\s+/)),ref:"pSlaveEl"},[t.master])])}};export default Push;
//# sourceMappingURL=push.js.map
