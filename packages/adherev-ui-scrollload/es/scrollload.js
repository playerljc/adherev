import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.split.js";import classNames from"classnames";import Intl from"@baifendian/adherev-util-intl";var selectorPrefix="adherev-ui-scrollload",EMPTY="empty",ERROR="error",NORMAL="normal",ScrollLoad={name:"adv-scrollload",props:{loadClassName:{type:String,default:""},emptyClassName:{type:String,default:""},errorClassName:{type:String,default:""},distance:{type:Number,default:50},getScrollContainer:{type:Function,default:function(){return null}}},data:function(){return{$lock:!1}},mounted:function(){this.initEvents()},beforeMount:function(){this.removeEvents()},computed:{scrollContainer:function(){return this.getScrollContainer?this.getScrollContainer():this.$refs.el},wrapStyle:function(){return this.style+";overflow-y: "+(this.getScrollContainer()===this.$refs.el?"auto":"initial")}},methods:{initEvents:function(){var e=this.$refs;this.scrollContainer.addEventListener("scroll",this.onScroll),e.emptyEl.addEventListener("click",this.onEmptyClick),e.errorEl.addEventListener("click",this.onErrorClick)},beforeMount:function(){var e=this.$refs;this.scrollContainer.removeEventListener("scroll",this.onScroll),e.emptyEl.removeEventListener("click",this.onEmptyClick),e.errorEl.removeEventListener("click",this.onErrorClick)},onScroll:function(){var e=this,r=e.$refs,t=r.loadEl,s=r.errorEl,l=r.emptyEl,o=e.$data,i=e.distance,r=this.scrollContainer,e=r.scrollHeight-r.offsetHeight,r=r.scrollTop;Math.abs(r-e)<=i&&(o.$lock||(o.$lock=!0,t.style.display="flex",this.$emit("scroll-bottom",function(e){t.style.display="none",e===EMPTY?l.style.display="block":e===ERROR&&(s.style.display="block"),o.$lock=!1})))},onEmptyClick:function(){this.$emit("empty-click")},onErrorClick:function(){this.$emit("error-click")},renderLoading:function(e){var r=this.$slots,t=this.loadClassName;return r.loading?e("div",{class:classNames(selectorPrefix+"-load",t.split(/\s+/)),ref:"loadEl"},[r.loading]):e("div",{class:classNames(selectorPrefix+"-load","standard",t.split(/\s+/)),ref:"loadEl"},[Intl.tv("数据加载中")])},renderEmpty:function(e){var r=this.$slots,t=this.emptyClassName;return r.empty?e("div",{class:classNames(selectorPrefix+"-empty",t.split(/\s+/)),ref:"emptyEl"},[r.empty]):e("div",{class:classNames(selectorPrefix+"-empty",t.split(/\s+/)),ref:"emptyEl"},["~",Intl.tv("没有更多")])},renderError:function(e){var r=this.$slots,t=this.errorClassName;return r.error?e("div",{class:classNames(selectorPrefix+"-error",t.split(/\s+/)),ref:"errorEl"},[r.error]):e("div",{class:classNames(selectorPrefix+"-error",t.split(/\s+/)),ref:"errorEl"},[Intl.tv("出现错误")])},hideAll:function(){var e=this.$refs,r=e.loadEl,t=e.errorEl,e=e.emptyEl;r.style.display="none",t.style.display="none",e.style.display="none"}},render:function(e){var r=this.$slots;return e("div",{class:selectorPrefix,style:this.wrapStyle,ref:"el"},[r.default,this.renderLoading(e),this.renderEmpty(e),this.renderError(e)])}};export default ScrollLoad;export{EMPTY,ERROR,NORMAL};
//# sourceMappingURL=scrollload.js.map
