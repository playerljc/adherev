module.exports=function(r){var n={};function l(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}return l.m=r,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l(l.s=2)}([function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("@baifendian/adherev-util-intl")},function(e,t,r){"use strict";r.r(t);var n,l,o=r(0),s=r.n(o),o=r(1),i=r.n(o),a="adherev-ui-scrollload",c="empty",d="error",o={name:"adv-scrollload",props:{className:{type:String,default:""},loadClassName:{type:String,default:""},emptyClassName:{type:String,default:""},errorClassName:{type:String,default:""},distance:{type:Number,default:50}},data:function(){return{$lock:!1}},mounted:function(){this.initEvents()},methods:{initEvents:function(){var e=this.$refs;e.el.addEventListener("scroll",this.onScroll),e.emptyEl.addEventListener("click",this.onEmptyClick),e.errorEl.addEventListener("click",this.onErrorClick)},onScroll:function(){var e=this,t=e.$refs,r=t.el,n=t.loadEl,l=t.errorEl,o=t.emptyEl,s=e.$data,t=e.distance,e=r.scrollHeight-r.offsetHeight,r=r.scrollTop;console.log("11111111111111",r,e,t,Math.abs(r-e)<=t),Math.abs(r-e)<=t&&(s.$lock||(s.$lock=!0,n.style.display="flex",this.$emit("scroll-bottom",function(e){n.style.display="none",e===c?o.style.display="block":e===d&&(l.style.display="block"),s.$lock=!1})))},onEmptyClick:function(){this.$emit("empty-click")},onErrorClick:function(){this.$emit("error-click")},renderLoading:function(e){var t=this.$slots,r=this.loadClassName;return t.loading?e("div",{attrs:{className:s()(a+"-load",r.split(" "))},ref:"loadEl"},[t.loading]):e("div",{class:s()(a+"-load","standard",r.split(" ")),ref:"loadEl"},[i.a.tv("数据加载中")])},renderEmpty:function(e){var t=this.$slots,r=this.emptyClassName;return t.empty?e("div",{class:s()(a+"-empty",r.split(" ")),ref:"emptyEl"},[t.empty]):e("div",{class:s()(a+"-empty",r.split(" ")),ref:"emptyEl"},["~",i.a.tv("没有更多")])},renderError:function(e){var t=this.$slots,r=this.errorClassName;return t.error?e("div",{class:s()(a+"-error",r.split(" ")),ref:"errorEl"},[t.error]):e("div",{class:s()(a+"-error",r.split(" ")),ref:"errorEl"},[i.a.tv("出现错误")])},hideAll:function(){var e=this.$refs,t=e.loadEl,r=e.errorEl,e=e.emptyEl;t.style.display="none",r.style.display="none",e.style.display="none"}},render:function(e){var t=this.$slots,r=this.className;return e("div",{class:s()(a,r.split(" ")),ref:"el"},[t.default,this.renderLoading(e),this.renderEmpty(e),this.renderError(e)])}},u=((l=n=o).install=function(e){e.component(l.displayName||l.name,n)},n);u.isUse=function(){return!0},u.use=function(e){return e.use(u)},o.ERROR=d,o.EMPTY=c,o.NORMAL="normal",t.default=u}]).default;
//# sourceMappingURL=index.js.map
