module.exports=function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=3)}([function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("@baifendian/adherev-util-resource")},function(e,t){e.exports=require("@baifendian/adherev-util")},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),l=n(1),i="adherev-ui-backtopanimation",r={name:"adv-backtopanimation",props:{className:{type:String,default:""},zIndex:{type:[String,Number],default:n.n(l).a.Dict.value.ResourceNormalMaxZIndex.value},duration:{type:Number,default:300},onTarget:{type:Function,default:function(){return window}},onTrigger:{type:Function},onScrollTop:{type:Function}},data:function(){return{$maskEl:null,$scrollEl:null,$key:!1}},mounted:function(){this.initScrollEvent(),this.renderMask()},beforeDestroy:function(){var e=this.$data;e.$maskEl&&e.$maskEl.parentElement.removeChild(e.$maskEl)},methods:{trigger:function(){var l;this.$data.$key||(l=this).$emit("trigger",function(){var n=l.$data,e=l.duration;n.$key=!0,n.$maskEl.style.display="block";var r=n.$scrollEl.scrollTop,o=n.$scrollEl.scrollHeight/(e/(screen.updateInterval||16.7)+(e%(screen.updateInterval||16.7)!=0?1:0));window.requestAnimationFrame(function e(){function t(){n.$maskEl.style.display="none",n.$key=!1}n.$scrollEl.scrollTop<0?0<r+o?r=0:r+=o:r-o<0?r=0:r-=o,n.$scrollEl.scrollTop=r,l.$emit("scrollTop",r),n.$scrollEl.scrollTop<0?0<=r?t():window.requestAnimationFrame(e):r<=0?t():window.requestAnimationFrame(e)})})},initScrollEvent:function(){var r=this;this.$emit("target",function(e){var t=r.$data,n=r.$refs;t.$scrollEl=e,t.$scrollEl.addEventListener("scroll",function(){0!==t.$scrollEl.scrollTop?window.requestAnimationFrame(function(){n.ref.style.display="block"}):window.requestAnimationFrame(function(){n.ref.style.display="none"})},!1)})},renderMask:function(){var e=this.$data;e.$maskEl=document.body.querySelector("."+i+"-mask"),e.$maskEl||(e.$maskEl=document.createElement("div"),e.$maskEl.className=i+"-mask",document.body.appendChild(e.$maskEl))}},render:function(e){var t=this,n=this.className;return e("div",{class:o()(i,n.split(" ")),ref:"ref",on:{click:function(){t.trigger()}}})}},l=n(2),n=n.n(l).a._util,l=n.withInstall,a=n.withVue,u=l(r);u.isUse=function(){return!0},u.use=function(e){e.use(u),a(e,"BackTopAnimation",u)},t.default=u}]).default;
//# sourceMappingURL=index.js.map
