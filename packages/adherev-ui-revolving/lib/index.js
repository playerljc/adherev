module.exports=function(r){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=r,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=2)}([function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("swiper")},function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),n=r(1),u=r.n(n),a="adherev-ui-revolving",o={name:"adv-revolving",props:{className:{type:String,default:""},classNameWrapper:{type:String,default:""},wrapperStyle:{type:String,default:""},speed:{type:Number,default:1e3},delay:{type:Number,default:1e3},direction:{type:String,default:"top",validator:function(e){return-1!==["top","right","bottom","left"].indexOf(e)}},loop:{type:Boolean,default:!0},stopOnLastSlide:{type:Boolean,default:!1},listeners:{type:Object,default:function(){}}},data:function(){return{_swiper:null}},computed:{getClass:function(){var e=this.className;return i()(a,"swiper-container",e.split(" "))},getWrapperClass:function(){var e=this.classNameWrapper;return i()(a+"-wrapper","swiper-wrapper",e.split(" "))},getWrapperStyle:function(){return this.styleWrapper}},mounted:function(){this.initial()},updated:function(){this.initial()},methods:{initial:function(){var e=this,t=e.$refs.el,r=e.$data,n=e.speed,i=e.delay,a=e.loop,o=e.direction,s=e.stopOnLastSlide,e=e.listeners;r._swiper&&r._swiper.destory(),r._swiper=new u.a(t,{allowTouchMove:!1,direction:this.getDirection(o),loop:a,speed:n,autoplay:{delay:i,stopOnLastSlide:s,reverseDirection:"right"===o||"bottom"===o},on:e})},getDirection:function(e){return"left"===e||"right"===e?"horizontal":"vertical"},start:function(){this.$data._swiper.autoplay.start()},stop:function(){this.$data._swiper.autoplay.stop()},isRunning:function(){return this.$data._swiper.autoplay.running}},render:function(e){var t=this.$slots;return e("div",{class:this.getClass,ref:"el"},[e("div",{class:this.getWrapperClass,style:this.getWrapperStyle,ref:"wrapperEl"},[t.default])])}},s={name:"adv-revolving-item",props:{className:{type:String,default:""}},computed:{getClassName:function(){var e=this.className;return i()("adherev-ui-revolving-item","swiper-slide",e.split(" "))}},render:function(e){return e("div",{class:this.getClassName},[this.$slots.default])}},n=function(t){var r=t;return r.install=function(e){e.component(r.displayName||r.name,t)},t};n(o),n(s),o.isUse=function(){return!0},o.Item=s,o.use=function(e){e.use(o),e.use(s)},t.default=o}]).default;
//# sourceMappingURL=index.js.map
