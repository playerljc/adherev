"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),slide_1=tslib_1.__importDefault(require("./slide")),slidelayout_1=require("./slidelayout"),selectorPrefix="adherev-ui-slidelayout-overlay",Overlay={name:"adv-slidelayout-overlay",mixins:[slide_1.default],watch:{zIndex:function(e){this.$refs.el.style.zIndex=e}},created:function(){var l=this;this.$data.$positionConfig={init:{left:function(){slidelayout_1.slider(l.$refs.el,"-100%","0","0","0")},right:function(){var e;slidelayout_1.slider(l.$refs.el,(null===(e=null===(e=l.$refs.el)||void 0===e?void 0:e.parentElement)||void 0===e?void 0:e.offsetWidth)+"px","0","0","0")},top:function(){slidelayout_1.slider(l.$refs.el,"0","-100%","0","0")},bottom:function(){var e;slidelayout_1.slider(l.$refs.el,"0",(null===(e=null===(e=l.$refs.el)||void 0===e?void 0:e.parentElement)||void 0===e?void 0:e.offsetHeight)+"px","0","0")}},show:{left:function(e){slidelayout_1.slider(l.$refs.el,"0","0","0",l.getDuration(e)+"ms",function(){l.$emit("after-show")}),l.$data.$maskEl&&(l.$data.$maskEl.style.display="block")},right:function(e){var t;slidelayout_1.slider(l.$refs.el,(null===(t=null===(t=l.$refs.el)||void 0===t?void 0:t.parentElement)||void 0===t?void 0:t.offsetWidth)-l.$refs.el.offsetWidth+"px","0","0",l.getDuration(e)+"ms",function(){l.$emit("after-show")}),l.$data.$maskEl&&(l.$data.$maskEl.style.display="block")},top:function(e){slidelayout_1.slider(l.$refs.el,"0","0","0",l.getDuration(e)+"ms",function(){l.$emit("after-show")}),l.$data.$maskEl&&(l.$data.$maskEl.style.display="block")},bottom:function(e){var t;slidelayout_1.slider(l.$refs.el,"0",(null===(t=null===(t=l.$refs.el)||void 0===t?void 0:t.parentElement)||void 0===t?void 0:t.offsetHeight)-l.$refs.el.offsetHeight+"px","0",l.getDuration(e)+"ms",function(){l.$emit("after-show")}),l.$data.$maskEl&&(l.$data.$maskEl.style.display="block")}},close:{left:function(e){slidelayout_1.slider(l.$refs.el,"-100%","0","0",l.getDuration(e)+"ms",function(){l.$emit("after-close")}),l.$data.$maskEl&&(l.$data.$maskEl.style.display="none")},right:function(e){var t;slidelayout_1.slider(l.$refs.el,(null===(t=null===(t=l.$refs.el)||void 0===t?void 0:t.parentElement)||void 0===t?void 0:t.offsetWidth)+"px","0","0",l.getDuration(e)+"ms",function(){l.$emit("after-close")}),l.$data.$maskEl&&(l.$data.$maskEl.style.display="none")},top:function(e){var t;slidelayout_1.slider(l.$refs.el,"0","-"+(null===(t=null===(t=l.$refs.el)||void 0===t?void 0:t.parentElement)||void 0===t?void 0:t.offsetHeight)+"px","0",l.getDuration(e)+"ms",function(){l.$emit("after-close")}),l.$data.$maskEl&&(l.$data.$maskEl.style.display="none")},bottom:function(e){var t;slidelayout_1.slider(l.$refs.el,"0",(null===(t=null===(t=l.$refs.el)||void 0===t?void 0:t.parentElement)||void 0===t?void 0:t.offsetHeight)+"px","0",l.getDuration(e)+"ms",function(){l.$emit("after-close")}),l.$data.$maskEl&&(l.$data.$maskEl.style.display="none")}}}},mounted:function(){this.$refs.el.style.zIndex=this.zIndex},render:function(e){var t=this.$slots,l=this.direction;return e("div",{class:classnames_1.default(selectorPrefix,l),ref:"el"},[t.default])}};exports.default=Overlay;
//# sourceMappingURL=overlay.js.map
