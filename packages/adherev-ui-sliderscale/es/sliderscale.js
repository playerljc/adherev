import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.array.concat.js";var selectorPrefix="adherev-ui-sliderscale",SliderScale={name:"adv-sliderscale",props:{min:{type:[Number,String],default:0},max:{type:[Number,String],default:100},step:{type:[Number,String],default:1},value:{type:[Number,String],default:0},interval:{type:[Number,String],default:5}},data:function(){return{$preValue:null}},methods:{touchEvent:function(e){var s=this.$refs,t=this.$data.$preValue,e=e.target.value;t!==((null==s?void 0:s.rangeEl).value=e)&&(this.$data.$preValue=e,this.$emit("change",e))},renderScale:function(e){for(var s=this,t=s.min,a=s.max,l=s.interval,r=[],i=t;i<a&&a-1!==t;i++){var c=null,c=(i+1)%l==0?e("div",{key:i,class:selectorPrefix+"-scale-item "+selectorPrefix+"-scale-item-point"},[e("span",{class:selectorPrefix+"-scale-item-value"},[i+1])]):i===t?e("div",{key:i,class:selectorPrefix+"-scale-item"},[e("span",{class:selectorPrefix+"-scale-item-value"},[t])]):(i+1)%l!=0&&i===a-1?e("div",{key:i,class:selectorPrefix+"-scale-item"},[e("span",{class:selectorPrefix+"-scale-item-value"},[i+1])]):e("div",{key:i,class:selectorPrefix+"-scale-item"});r.push(c)}s=[];return t===a?s.push(e("div",{key:0,class:selectorPrefix+"-scale-item"},[e("span",{class:selectorPrefix+"-scale-item-value"},["0"]),e("span",{class:selectorPrefix+"-scale-item-value",style:"right: 0; left: auto;"},["$",a])])):a-1===t&&s.push(e("div",{key:t,class:selectorPrefix+"-scale-item"},[e("span",{class:selectorPrefix+"-scale-item-value"},[t]),e("span",{class:selectorPrefix+"-scale-item-value",style:"right: 0; left: auto;"},[a])])),s.concat(r)},onMousemove:function(e){this.touchEvent(e)},onTouchmove:function(e){this.touchEvent(e)}},mounted:function(){this.$refs.rangeEl.value=this.value},watch:{value:function(e){this.$refs.rangeEl.value=e}},render:function(e){var s=this,t=s.min,a=s.max,s=s.step;return e("div",{class:selectorPrefix,ref:"el"},[e("div",{class:selectorPrefix+"-scale"},[this.renderScale(e)]),e("input",{ref:"rangeEl",class:selectorPrefix+"-range",attrs:{type:"range",min:t,max:a,step:s},on:{mousemove:this.onMousemove,touchmove:this.onTouchmove}})])}};export default SliderScale;
//# sourceMappingURL=sliderscale.js.map
