import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.regexp.to-string.js";import classNames from"classnames";import Swiper from"swiper";var selectorPrefix="adherev-ui-swipeout",SwiperOut={name:"adv-swipeout",props:{className:{type:String,default:""},beforeClassName:{type:String,default:""},beforeStyle:{type:String,default:""},afterClassName:{type:String,default:""},afterStyle:{type:String,default:""},contentClassName:{type:String,default:""},contentStyle:{type:String,default:""},beforeShow:{type:Boolean,default:!1},afterShow:{type:Boolean,default:!1},direction:{type:String,default:"horizontal"},duration:{type:Number,default:0},renderBefore:{type:Object,default:function(){return null}},renderAfter:{type:Object,default:function(){return null}}},emits:["init","slide-change-transition-start","slide-change-transition-end"],slots:["before","after"],data:function(){return{$swiper:null,$map:new Map([[[!0,!0].toString(),1],[[!1,!1].toString(),1],[[!0,!1].toString(),0],[[!1,!0].toString(),2]])}},watch:{direction:function(e,t){e!==t&&this.$data.$swiper.changeDirection(e)},beforeShow:function(e,t){e!==t&&this.slide({beforeShow:e,afterShow:this.afterShow,duration:this.duration})},afterShow:function(e,t){e!==t&&this.slide({beforeShow:this.beforeShow,afterShow:e,duration:this.duration})}},computed:{getContainerClassName:function(){var e=this.className;return classNames(selectorPrefix,"swiper-container",e||"")},getWrapperClassName:function(){return"swiper-wrapper"},getBeforeClassName:function(){var e=this.beforeClassName;return classNames("swiper-slide",selectorPrefix+"-before",e||"")},getContentClassName:function(){var e=this.contentClassName;return classNames("swiper-slide",selectorPrefix+"-content",e||"")},getAfterClassName:function(){var e=this.afterClassName;return classNames("swiper-slide",selectorPrefix+"-after",e||"")}},methods:{createSwiper:function(){var e=this,t=this,s=t.$refs,r=t.$data,i=t.direction;r.$swiper&&r.$swiper.destroy();var o=this.beforeShow,t=this.afterShow;r.$swiper=new Swiper(s.ref,{init:!1,initialSlide:r.$map.get([o,t].toString()),direction:i,slidesPerView:"auto",centeredSlides:!1,spaceBetween:0}),r.$swiper.on("init",function(){e.$emit("init")}),r.$swiper.on("slideChangeTransitionStart",function(){e.$emit("slide-change-transition-start",r.$swiper.activeIndex)}),r.$swiper.on("slideChangeTransitionEnd",function(){e.$emit("slide-change-transition-end",r.$swiper.activeIndex)}),r.$swiper.init()},slide:function(e){var t=e.beforeShow,s=e.afterShow,r=e.duration,i=this.$data,e=i.$swiper,i=i.$map;e.slideTo(i.get([t,s].toString()),r)}},mounted:function(){this.createSwiper()},render:function(e){var t=this,s=t.$slots,r=t.contentStyle,i=t.beforeStyle,t=t.afterStyle;return e("div",{class:this.getContainerClassName,ref:"ref"},[e("div",{class:this.getWrapperClassName},[e("div",{class:this.getBeforeClassName,style:i},[s.before||this.renderBefore]),e("div",{class:this.getContentClassName,style:r},[s.default]),e("div",{class:this.getAfterClassName,style:t},[s.after||this.renderAfter])])])}};export default SwiperOut;
//# sourceMappingURL=swipeout.js.map
