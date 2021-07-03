/*! For license information please see AdherevStickupLayout.bundle.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AdherevStickupLayout=t():e.AdherevStickupLayout=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="Xz12")}({"0vyi":function(e,t,n){},OTpg:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)){if(i.length){var l=r.apply(null,i);l&&e.push(l)}}else if("object"===o)if(i.toString===Object.prototype.toString)for(var s in i)n.call(i,s)&&i[s]&&e.push(s);else e.push(i.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},Xz12:function(e,t,n){"use strict";n.r(t);n("0vyi");var i=n("OTpg"),r=n.n(i),o="adherev-ui-stickuplayout",l={name:"adv-stickuplayout",props:{className:{type:String,default:""},fixedClassName:{type:String,default:""},fixedStyle:{type:String,default:""},innerClassName:{type:String,default:""},innerStyle:{type:String,default:""}},data:function(){return{}},mounted:function(){this.initial()},updated:function(){this.initial()},beforeDestroy:function(){var e=this.$data.$maskEl;e&&e.parentElement.removeChild(e)},methods:{initial:function(){var e=this.$refs,t=this.$data;t.$key=!1,t.$index=[],t.$headerEls=e.el.querySelectorAll("."+o+"-item-header"),this.createIndex(),this.position(),e.innerEl.removeEventListener("scroll",this.onScroll),e.innerEl.addEventListener("scroll",this.onScroll)},createIndex:function(){var e=this.$refs,t=this.$data,n=0;t.$index=[],t.$preScrollObj=null;for(var i=0,r=t.$headerEls.length;i<r;i++){var o=t.$headerEls[i],l=n,s=void 0;if(s=i!==r-1?t.$headerEls[i+1].offsetTop-o.offsetHeight:e.innerEl.scrollHeight,t.$index.push({start:l,end:s,dom:o,index:i}),(n=s)>e.innerEl.scrollHeight-e.innerEl.offsetHeight)break}},position:function(){for(var e,t,n=this.$refs,i=this.$data,r=n.innerEl.scrollTop,o=0,l=i.$index.length-1;o<=l&&o<=i.$index.length-1&&l<=i.$index.length-1;){e=l+o>>1;var s=i.$index[e];if(r>=s.start&&r<s.end){t=s;break}r<s.start?l=e-1:o=e+1}if(t){if(i.$preScrollObj&&i.$preScrollObj.index===t.index)return!1;i.$preScrollObj=t,n.fixedEl.innerHTML=t.dom.outerHTML,this.$emit("change",t.index)}},onScroll:function(){this.position()},scrollAnimationTo:function(e,t){void 0===e&&(e=0),void 0===t&&(t=300);var n=this.$refs,i=this.$data;if(!i.$key){this.initMask(),i.$key=!0,i.$maskEl.style.display="block";var r=n.innerEl.scrollTop,o=r,l=n.innerEl.scrollHeight/(t/(screen.updateInterval||16.7)+(t%(screen.updateInterval||16.7)!=0?1:0));window.requestAnimationFrame((function t(){function s(){i.$key=!1,i.$maskEl.style.display="none"}r<e?o+l>e?o=e:o+=l:o-l<e?o=e:o-=l,n.innerEl.scrollTop=o,r<e?o>=e?s():window.requestAnimationFrame(t):o<=e?s():window.requestAnimationFrame(t)}))}},scrollTo:function(e,t){void 0===t&&(t=300);var n=this.$refs,i=this.$data.$headerEls,r=e.start+i[e.index].offsetHeight;0===t?n.innerEl.scrollTop=r:this.scrollAnimationTo(r,t)},initMask:function(){this.$data.$maskEl||(this.$data.$maskEl=document.createElement("div"),this.$data.$maskEl.className=o+"-mask",window.document.body.appendChild(this.$data.$maskEl))},refresh:function(){this.initial()},scrollToByIndex:function(e,t){void 0===t&&(t=300);for(var n,i=this.$data.$index,r=0;r<i.length;r++)if(i[r].index===e){n=i[r];break}if(!n)return!1;this.scrollTo(n,t)},scrollToByHeaderEl:function(e,t){void 0===t&&(t=300);for(var n,i=this.$data.$index,r=0;r<i.length;r++)if(i[r].dom===e){n=i[r],r;break}if(!n)return!1;this.scrollTo(n,t)}},render:function(e){var t=this,n=t.$slots,i=t.className,l=t.fixedClassName,s=t.fixedStyle,a=t.innerClassName,d=t.innerStyle;return e("div",{class:r()(o,i.split(" ")),ref:"el"},[e("div",{class:r()(o+"-fixed",l.split(" ")),style:s,ref:"fixedEl"}),e("div",{class:r()(o+"-inner",a.split(" ")),style:d,ref:"innerEl"},[n.default])])}},s="adherev-ui-stickuplayout-item",a={name:"adv-stickuplayout-item",props:{className:{type:String,default:""}},render:function(e){var t=this.$slots,n=this.className;return e("div",{class:r()(s,n.split(" "))},[e("div",{class:s+"-header"},[t.title]),e("div",{class:s+"-content"},[t.default])])}},d=function(e){var t=e;return t.install=function(n){n.component(t.displayName||t.name,e)},e};d(l),d(a),l.isUse=function(){return!0},l.use=function(e){e.use(l),e.use(a)},l.Item=a;t.default=l}}).default}));