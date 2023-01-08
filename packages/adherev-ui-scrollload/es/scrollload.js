import"core-js/modules/es.number.constructor.js";import classNames from"classnames";import Intl from"@baifendian/adherev-util-intl";var selectorPrefix="adherev-ui-scrollload",EMPTY="empty",ERROR="error",NORMAL="normal",ScrollLoad={name:"adv-scrollload",props:{loadClassName:{type:String,default:""},emptyClassName:{type:String,default:""},errorClassName:{type:String,default:""},distance:{type:Number,default:50},getScrollContainer:{type:Function,default:function(){return null}},renderLoading:{type:Object,default:function(){return null}},renderEmpty:{type:Object,default:function(){return null}},renderError:{type:Object,default:function(){return null}}},slots:["loading","empty","error"],emits:["scrollBottom","emptyClick","errorClick"],data:function(){return{$lock:!1}},mounted:function(){this.initEvents()},beforeDestroy:function(){this.removeEvents()},computed:{scrollContainer:function(){return this.getScrollContainer&&this.getScrollContainer()||this.$refs.el},wrapStyle:function(){return"overflow-y: ".concat(this.getScrollContainer()===this.$refs.el?"auto":"initial")}},methods:{$renderLoading:function(e){var r=this.$slots,t=this.loadClassName;return r.loading||this.renderLoading?e("div",{class:classNames("".concat(selectorPrefix,"-load"),t||""),ref:"loadEl"},[r.loading||this.renderLoading]):e("div",{class:classNames("".concat(selectorPrefix,"-load"),"standard",t||""),ref:"loadEl"},[Intl.tv("数据加载中")])},$renderEmpty:function(e){var r=this.$slots,t=this.emptyClassName;return r.empty||this.renderEmpty?e("div",{class:classNames("".concat(selectorPrefix,"-empty"),t||""),ref:"emptyEl"},[r.empty||this.renderEmpty]):e("div",{class:classNames("".concat(selectorPrefix,"-empty"),t||""),ref:"emptyEl"},["~",Intl.tv("没有更多")])},$renderError:function(e){var r=this.$slots,t=this.errorClassName;return r.error||this.renderError?e("div",{class:classNames("".concat(selectorPrefix,"-error"),t||""),ref:"errorEl"},[r.error||this.renderError]):e("div",{class:classNames("".concat(selectorPrefix,"-error"),t||""),ref:"errorEl"},[Intl.tv("出现错误")])},initEvents:function(){var e=this.$refs;this.scrollContainer.addEventListener("scroll",this.onScroll),e.emptyEl.addEventListener("click",this.onEmptyClick),e.errorEl.addEventListener("click",this.onErrorClick)},removeEvents:function(){var e=this.$refs;this.scrollContainer.removeEventListener("scroll",this.onScroll),e.emptyEl.removeEventListener("click",this.onEmptyClick),e.errorEl.removeEventListener("click",this.onErrorClick)},onScroll:function(){var e=this,r=e.$refs,t=r.loadEl,l=r.errorEl,o=r.emptyEl,s=e.$data,r=e.distance,e=this.scrollContainer,n=e.scrollHeight-e.offsetHeight,e=e.scrollTop;Math.abs(e-n)<=r&&(s.$lock||(s.$lock=!0,t.style.display="flex",this.$emit("scrollBottom",function(e){t.style.display="none",e===EMPTY?o.style.display="block":e===ERROR&&(l.style.display="block"),s.$lock=!1})))},onEmptyClick:function(){this.$emit("emptyClick")},onErrorClick:function(){this.$emit("errorClick")},hideAll:function(){var e=this.$refs,r=e.loadEl,t=e.errorEl,e=e.emptyEl;r.style.display="none",t.style.display="none",e.style.display="none"}},render:function(e){var r=this.$slots;return e("div",{class:selectorPrefix,style:this.wrapStyle,ref:"el"},[r.default,this.$renderLoading(e),this.$renderEmpty(e),this.$renderError(e)])}};export default ScrollLoad;export{EMPTY,ERROR,NORMAL};
//# sourceMappingURL=scrollload.js.map
