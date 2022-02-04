"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js");var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.NORMAL=exports.ERROR=exports.EMPTY=void 0;var classnames_1=__importDefault(require("classnames")),adherev_util_intl_1=__importDefault(require("@baifendian/adherev-util-intl")),selectorPrefix="adherev-ui-scrollload";exports.EMPTY="empty",exports.ERROR="error",exports.NORMAL="normal",exports.default={name:"adv-scrollload",props:{className:{type:String,default:""},loadClassName:{type:String,default:""},emptyClassName:{type:String,default:""},errorClassName:{type:String,default:""},distance:{type:Number,default:50}},data:function(){return{$lock:!1}},mounted:function(){this.initEvents()},methods:{initEvents:function(){var e=this.$refs;e.el.addEventListener("scroll",this.onScroll),e.emptyEl.addEventListener("click",this.onEmptyClick),e.errorEl.addEventListener("click",this.onErrorClick)},onScroll:function(){var e=this,r=e.$refs,s=r.el,t=r.loadEl,l=r.errorEl,i=r.emptyEl,a=e.$data,r=e.distance,e=s.scrollHeight-s.offsetHeight,s=s.scrollTop;Math.abs(s-e)<=r&&(a.$lock||(a.$lock=!0,t.style.display="flex",this.$emit("scroll-bottom",function(e){t.style.display="none",e===exports.EMPTY?i.style.display="block":e===exports.ERROR&&(l.style.display="block"),a.$lock=!1})))},onEmptyClick:function(){this.$emit("empty-click")},onErrorClick:function(){this.$emit("error-click")},renderLoading:function(e){var r=this.$slots,s=this.loadClassName;return r.loading?e("div",{class:classnames_1.default(selectorPrefix+"-load",s.split(/\s+/)),ref:"loadEl"},[r.loading]):e("div",{class:classnames_1.default(selectorPrefix+"-load","standard",s.split(/\s+/)),ref:"loadEl"},[adherev_util_intl_1.default.tv("数据加载中")])},renderEmpty:function(e){var r=this.$slots,s=this.emptyClassName;return r.empty?e("div",{class:classnames_1.default(selectorPrefix+"-empty",s.split(/\s+/)),ref:"emptyEl"},[r.empty]):e("div",{class:classnames_1.default(selectorPrefix+"-empty",s.split(/\s+/)),ref:"emptyEl"},["~",adherev_util_intl_1.default.tv("没有更多")])},renderError:function(e){var r=this.$slots,s=this.errorClassName;return r.error?e("div",{class:classnames_1.default(selectorPrefix+"-error",s.split(/\s+/)),ref:"errorEl"},[r.error]):e("div",{class:classnames_1.default(selectorPrefix+"-error",s.split(/\s+/)),ref:"errorEl"},[adherev_util_intl_1.default.tv("出现错误")])},hideAll:function(){var e=this.$refs,r=e.loadEl,s=e.errorEl,e=e.emptyEl;r.style.display="none",s.style.display="none",e.style.display="none"}},render:function(e){var r=this.$slots,s=this.className;return e("div",{class:classnames_1.default(selectorPrefix,s.split(/\s+/)),ref:"el"},[r.default,this.renderLoading(e),this.renderEmpty(e),this.renderError(e)])}};
//# sourceMappingURL=scrollload.js.map
