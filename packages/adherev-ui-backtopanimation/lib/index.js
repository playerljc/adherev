module.exports=function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=2)}([function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("@baifendian/adherev-util-resource")},function(e,t,n){"use strict";n.r(t);var r,o,i=n(0),a=n.n(i),i=n(1),l="adherev-ui-backtopanimation",i={name:"adv-backtopanimation",props:{className:{type:String,default:""},zIndex:{type:[String,Number],default:n.n(i).a.Dict.value.ResourceNormalMaxZIndex.value},duration:{type:Number,default:300},onTarget:{type:Function,default:function(){return window}},onTrigger:{type:Function},onScrollTop:{type:Function}},data:function(){return{_maskEl:null,_scrollEl:null,_key:!1}},mounted:function(){this.initScrollEvent(),this.renderMask()},beforeDestroy:function(){var e=this.$data;e._maskEl&&e._maskEl.parentElement.removeChild(e._maskEl)},methods:{trigger:function(){var a;this.$data._key||(a=this).$emit("trigger",function(){var n=a.$data,e=a.duration;n._key=!0,n._maskEl.style.display="block";var r=n._scrollEl.scrollTop,o=r,i=n._scrollEl.scrollHeight/(e/(screen.updateInterval||16.7)+(e%(screen.updateInterval||16.7)!=0?1:0));window.requestAnimationFrame(function e(){function t(){n._maskEl.style.display="none",n._key=!1}r<0?0<o+i?o=0:o+=i:o-i<0?o=0:o-=i,n._scrollEl.scrollTop=o,a.$emit("scrollTop",o),r<0?0<=o?t():window.requestAnimationFrame(e):o<=0?t():window.requestAnimationFrame(e)})})},initScrollEvent:function(){var r=this;this.$emit("target",function(e){var t=r.$data,n=r.$refs;t._scrollEl=e,t._scrollEl.addEventListener("scroll",function(){0!==t._scrollEl.scrollTop?window.requestAnimationFrame(function(){n.ref.style.display="block"}):window.requestAnimationFrame(function(){n.ref.style.display="none"})},!1)})},renderMask:function(){var e=this.$data;e._maskEl=document.body.querySelector("."+l+"-mask"),e._maskEl||(e._maskEl=document.createElement("div"),e._maskEl.className=l+"-mask",document.body.appendChild(e._maskEl))}},render:function(e){var t=this,n=this.className;return e("div",{class:a()(l,n.split(" ")),ref:"ref",on:{click:function(){t.trigger()}}})}},u=((o=r=i).install=function(e){e.component(o.displayName||o.name,r)},r);u.isUse=function(){return!0},u.use=function(e){return e.use(u)},t.default=u}]).default;
//# sourceMappingURL=index.js.map
