"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js");var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var classnames_1=__importDefault(require("classnames")),selectorPrefix="adherev-ui-stickuplayout";exports.default={name:"adv-stickuplayout",props:{className:{type:String,default:""},fixedClassName:{type:String,default:""},fixedStyle:{type:String,default:""},innerClassName:{type:String,default:""},innerStyle:{type:String,default:""}},data:function(){return{}},mounted:function(){this.initial()},updated:function(){this.initial()},beforeDestroy:function(){var e=this.$data.$maskEl;e&&e.parentElement.removeChild(e)},methods:{initial:function(){var e=this.$refs,t=this.$data;t.$key=!1,t.$index=[],t.$headerEls=e.el.querySelectorAll("."+selectorPrefix+"-item-header"),this.createIndex(),this.position(),e.innerEl.removeEventListener("scroll",this.onScroll),e.innerEl.addEventListener("scroll",this.onScroll)},createIndex:function(){var e=this.$refs,t=this.$data,i=0;t.$index=[],t.$preScrollObj=null;for(var n=0,s=t.$headerEls.length;n<s;n++){var r=t.$headerEls[n],l=i,a=void 0,a=n!==s-1?t.$headerEls[n+1].offsetTop-r.offsetHeight:e.innerEl.scrollHeight;if(t.$index.push({start:l,end:a,dom:r,index:n}),(i=a)>e.innerEl.scrollHeight-e.innerEl.offsetHeight)break}},position:function(){for(var e,t=this.$refs,i=this.$data,n=t.innerEl.scrollTop,s=0,r=i.$index.length-1;s<=r&&s<=i.$index.length-1&&r<=i.$index.length-1;){var l,a=i.$index[l=r+s>>1];if(n>=a.start&&n<a.end){e=a;break}n<a.start?r=l-1:s=1+l}if(e){if(i.$preScrollObj&&i.$preScrollObj.index===e.index)return!1;i.$preScrollObj=e,t.fixedEl.innerHTML=e.dom.outerHTML,this.$emit("change",e.index)}},onScroll:function(){this.position()},scrollAnimationTo:function(i,e){void 0===i&&(i=0),void 0===e&&(e=300);var n,s,r,l=this.$refs,a=this.$data;a.$key||(this.initMask(),a.$key=!0,a.$maskEl.style.display="block",n=l.innerEl.scrollTop,s=n,r=l.innerEl.scrollHeight/(e/(screen.updateInterval||16.7)+(e%(screen.updateInterval||16.7)!=0?1:0)),window.requestAnimationFrame(function e(){function t(){a.$key=!1,a.$maskEl.style.display="none"}n<i?i<s+r?s=i:s+=r:s-r<i?s=i:s-=r,l.innerEl.scrollTop=s,n<i?i<=s?t():"undefined"!=typeof window&&window.requestAnimationFrame(e):s<=i?t():"undefined"!=typeof window&&window.requestAnimationFrame(e)}))},scrollTo:function(e,t){var i=this.$refs,n=this.$data.$headerEls,e=e.start+n[e.index].offsetHeight;0===(t=void 0===t?300:t)?i.innerEl.scrollTop=e:this.scrollAnimationTo(e,t)},initMask:function(){this.$data.$maskEl||(this.$data.$maskEl=document.createElement("div"),this.$data.$maskEl.className=selectorPrefix+"-mask",window.document.body.appendChild(this.$data.$maskEl))},refresh:function(){this.initial()},scrollToByIndex:function(e,t){void 0===t&&(t=300);for(var i,n=this.$data.$index,s=0;s<n.length;s++)if(n[s].index===e){i=n[s];break}if(!i)return!1;this.scrollTo(i,t)},scrollToByHeaderEl:function(e,t){void 0===t&&(t=300);for(var i,n=this.$data.$index,s=0;s<n.length;s++)if(n[s].dom===e){i=n[s],0;break}if(!i)return!1;this.scrollTo(i,t)}},render:function(e){var t=this,i=t.$slots,n=t.className,s=t.fixedClassName,r=t.fixedStyle,l=t.innerClassName,t=t.innerStyle;return e("div",{class:classnames_1.default(selectorPrefix,n.split(/\s+/)),ref:"el"},[e("div",{class:classnames_1.default(selectorPrefix+"-fixed",s.split(/\s+/)),style:r,ref:"fixedEl"}),e("div",{class:classnames_1.default(selectorPrefix+"-inner",l.split(/\s+/)),style:t,ref:"innerEl"},[i.default])])}};
//# sourceMappingURL=stickuplayout.js.map
