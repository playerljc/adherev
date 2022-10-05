import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.array.index-of.js";import{createMask}from"./slidelayout";var Slide={props:{width:{type:[String,Number],default:"80%"},height:{type:[String,Number],default:"40%"},mask:{type:Boolean,default:!0},zIndex:{type:Number,default:9999},time:{type:Number,default:300},direction:{type:String,default:"left",validator:function(t){return-1!==["left","right","top","bottom"].indexOf(t)}},defaultCollapse:{type:Boolean,default:!1}},data:function(){return{$positionConfig:{},$maskEl:null,collapse:this.defaultCollapse}},watch:{defaultCollapse:function(t,e){var i;t!==e&&(this.collapse=t,e=(i=this).$data.$positionConfig,t=i.direction,(i.collapse?e.show:e.close)[t]())}},mounted:function(){var t=this,e=this,i=e.$refs.el,o=e.zIndex;e.mask&&(this.$data.$maskEl=createMask(o,function(){t.close()}),null!==(o=null==i?void 0:i.parentElement)&&void 0!==o&&o.insertBefore(this.$data.$maskEl,i)),this.initial()},beforeDestroy:function(){var t=this.$data.$maskEl;t&&t.parentElement.removeChild(t)},methods:{getDuration:function(t){return null!=t?t:this.time},initial:function(){var t=this,e=t.$refs.el,i=t.$data.$positionConfig,o=t.direction,l=t.width,s=t.height,t=t.collapse;"left"===o||"right"===o?(e.style.height="100%",e.style.width=l||.9*(null===(l=null==e?void 0:e.parentElement)||void 0===l?void 0:l.offsetWidth)+"px"):(e.style.width="100%",e.style.height=s||.3*(null===(e=null==e?void 0:e.parentElement)||void 0===e?void 0:e.offsetHeight)+"px"),i.init[o](),t&&i.show[o](0)},show:function(){this.$emit("before-show");var t=this.$data.$positionConfig,e=this.direction;this.collapse=!0,t.show[e]()},close:function(){this.$emit("before-close");var t=this.$data.$positionConfig,e=this.direction;this.collapse=!1,t.close[e]()}}};export default Slide;
//# sourceMappingURL=slide.js.map