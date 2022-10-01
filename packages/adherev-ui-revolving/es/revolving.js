import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.split.js";import classNames from"classnames";import Swiper from"swiper";var selectorPrefix="adherev-ui-revolving";export default{name:"adv-revolving",props:{classNameWrapper:{type:String,default:""},wrapperStyle:{type:String,default:""},speed:{type:Number,default:1e3},delay:{type:Number,default:1e3},direction:{type:String,default:"top",validator:function(e){return-1!==["top","right","bottom","left"].indexOf(e)}},loop:{type:Boolean,default:!0},stopOnLastSlide:{type:Boolean,default:!1},listeners:{type:Object,default:function(){}}},data:function(){return{$swiper:null}},computed:{getClass:function(){return classNames(selectorPrefix,"swiper-container")},getWrapperClass:function(){var e=this.classNameWrapper;return classNames(selectorPrefix+"-wrapper","swiper-wrapper",e.split(/\s+/))},getWrapperStyle:function(){return this.styleWrapper}},mounted:function(){this.initial()},updated:function(){this.initial()},methods:{initial:function(){var e=this,t=e.$refs.el,r=e.$data,s=e.speed,i=e.delay,o=e.loop,a=e.direction,n=e.stopOnLastSlide,e=e.listeners;r.$swiper&&("destory"in r.$swiper&&r.$swiper.destory instanceof Function&&r.$swiper.destory(),r.$swiper=null),r.$swiper=new Swiper(t,{allowTouchMove:!1,direction:this.getDirection(a),loop:o,speed:s,autoplay:{delay:i,stopOnLastSlide:n,reverseDirection:"right"===a||"bottom"===a},on:e})},getDirection:function(e){return"left"===e||"right"===e?"horizontal":"vertical"},start:function(){this.$data.$swiper.autoplay.start()},stop:function(){this.$data.$swiper.autoplay.stop()},isRunning:function(){return this.$data.$swiper.autoplay.running}},render:function(e){var t=this.$slots;return e("div",{class:this.getClass,ref:"el"},[e("div",{class:this.getWrapperClass,style:this.getWrapperStyle,ref:"wrapperEl"},[t.default])])}};
//# sourceMappingURL=revolving.js.map
