import"core-js/modules/es.number.constructor.js";import Resource from"@baifendian/adherev-util-resource";var selectorPrefix="adherev-ui-backtopanimation",BackTopAnimation={name:"adv-backtopanimation",props:{zIndex:{type:[String,Number],default:Resource.Dict.value.ResourceNormalMaxZIndex.value},duration:{type:Number,default:300}},emits:["target","trigger","scrollTop"],data:function(){return{$maskEl:null,$scrollEl:null,$key:!1}},mounted:function(){this.initScrollEvent(),this.renderMask()},beforeDestroy:function(){var e=this.$data;if(e.$maskEl)try{e.$maskEl.parentElement.removeChild(e.$maskEl)}catch(e){}},methods:{trigger:function(){var n;this.$data.$key||(n=this).$emit("trigger",function(){var r=n.$data,e=n.duration,l=(r.$key=!0,r.$maskEl.style.display="block",r.$scrollEl.scrollTop),o=r.$scrollEl.scrollHeight/(e/(screen.updateInterval||16.7)+(e%(screen.updateInterval||16.7)!=0?1:0));window.requestAnimationFrame(function e(){function t(){r.$maskEl.style.display="none",r.$key=!1}r.$scrollEl.scrollTop<0?0<l+o?l=0:l+=o:l-o<0?l=0:l-=o,r.$scrollEl.scrollTop=l,n.$emit("scrollTop",l),r.$scrollEl.scrollTop<0?0<=l?t():window.requestAnimationFrame(e):l<=0?t():window.requestAnimationFrame(e)})})},initScrollEvent:function(){var l=this;this.$emit("target",function(e){var t=l.$data,r=l.$refs;t.$scrollEl=e,t.$scrollEl.addEventListener("scroll",function(){0!==t.$scrollEl.scrollTop?window.requestAnimationFrame(function(){r.ref.style.display="block"}):window.requestAnimationFrame(function(){r.ref.style.display="none"})},!1)})},renderMask:function(){var e=this.$data;e.$maskEl=document.body.querySelector("."+selectorPrefix+"-mask"),e.$maskEl||(e.$maskEl=document.createElement("div"),e.$maskEl.className=selectorPrefix+"-mask",document.body.appendChild(e.$maskEl))}},render:function(e){var t=this;return e("div",{class:selectorPrefix,ref:"ref",on:{click:function(){t.trigger()}}})}};export default BackTopAnimation;
//# sourceMappingURL=backtopanimation.js.map
