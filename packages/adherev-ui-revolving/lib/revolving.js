"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js");var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var classnames_1=__importDefault(require("classnames")),swiper_1=__importDefault(require("swiper")),selectorPrefix="adherev-ui-revolving";exports.default={name:"adv-revolving",props:{className:{type:String,default:""},classNameWrapper:{type:String,default:""},wrapperStyle:{type:String,default:""},speed:{type:Number,default:1e3},delay:{type:Number,default:1e3},direction:{type:String,default:"top",validator:function(e){return-1!==["top","right","bottom","left"].indexOf(e)}},loop:{type:Boolean,default:!0},stopOnLastSlide:{type:Boolean,default:!1},listeners:{type:Object,default:function(){}}},data:function(){return{$swiper:null}},computed:{getClass:function(){var e=this.className;return classnames_1.default(selectorPrefix,"swiper-container",e.split(" "))},getWrapperClass:function(){var e=this.classNameWrapper;return classnames_1.default(selectorPrefix+"-wrapper","swiper-wrapper",e.split(" "))},getWrapperStyle:function(){return this.styleWrapper}},mounted:function(){this.initial()},updated:function(){this.initial()},methods:{initial:function(){var e=this,t=e.$refs.el,r=e.$data,s=e.speed,i=e.delay,a=e.loop,o=e.direction,n=e.stopOnLastSlide,e=e.listeners;r.$swiper&&r.$swiper.destory(),r.$swiper=new swiper_1.default(t,{allowTouchMove:!1,direction:this.getDirection(o),loop:a,speed:s,autoplay:{delay:i,stopOnLastSlide:n,reverseDirection:"right"===o||"bottom"===o},on:e})},getDirection:function(e){return"left"===e||"right"===e?"horizontal":"vertical"},start:function(){this.$data.$swiper.autoplay.start()},stop:function(){this.$data.$swiper.autoplay.stop()},isRunning:function(){return this.$data.$swiper.autoplay.running}},render:function(e){var t=this.$slots;return e("div",{class:this.getClass,ref:"el"},[e("div",{class:this.getWrapperClass,style:this.getWrapperStyle,ref:"wrapperEl"},[t.default])])}};
//# sourceMappingURL=revolving.js.map