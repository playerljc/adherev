"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.array.concat.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js");var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var classnames_1=__importDefault(require("classnames")),selectorPrefix="adherev-ui-sliderscale";exports.default={name:"adv-sliderscale",props:{className:{type:String,default:""},min:{type:[Number,String],default:0},max:{type:[Number,String],default:100},step:{type:[Number,String],default:1},value:{type:[Number,String],default:0},interval:{type:[Number,String],default:5}},data:function(){return{$preValue:null}},methods:{touchEvent:function(e){var s=this.$refs,t=this.$data.$preValue,e=e.target.value;null!==(s=null==s?void 0:s.rangeEl)&&void 0!==s&&(s.value=e),t!==e&&(this.$data.$preValue=e,this.$emit("change",e))},renderScale:function(e){for(var s=this,t=s.min,r=s.max,l=s.interval,a=[],i=t;i<r&&r-1!==t;i++){var c=null,c=(i+1)%l==0?e("div",{key:i,class:selectorPrefix+"-scale-item "+selectorPrefix+"-scale-item-point"},[e("span",{class:selectorPrefix+"-scale-item-value"},[i+1])]):i===t?e("div",{key:i,class:selectorPrefix+"-scale-item"},[e("span",{class:selectorPrefix+"-scale-item-value"},[t])]):(i+1)%l!=0&&i===r-1?e("div",{key:i,class:selectorPrefix+"-scale-item"},[e("span",{class:selectorPrefix+"-scale-item-value"},[i+1])]):e("div",{key:i,class:selectorPrefix+"-scale-item"});a.push(c)}s=[];return t===r?s.push(e("div",{key:0,class:selectorPrefix+"-scale-item"},[e("span",{class:selectorPrefix+"-scale-item-value"},["0"]),e("span",{class:selectorPrefix+"-scale-item-value",style:"right: 0; left: auto;"},["$",r])])):r-1===t&&s.push(e("div",{key:t,class:selectorPrefix+"-scale-item"},[e("span",{class:selectorPrefix+"-scale-item-value"},[t]),e("span",{class:selectorPrefix+"-scale-item-value",style:"right: 0; left: auto;"},[r])])),s.concat(a)},onMousemove:function(e){this.touchEvent(e)},onTouchmove:function(e){this.touchEvent(e)}},mounted:function(){var e;null!==(e=this.$refs.rangeEl)&&void 0!==e&&(e.value=this.value)},watch:{value:function(e){var s;null!==(s=this.$refs.rangeEl)&&void 0!==s&&(s.value=e)}},render:function(e){var s=this,t=s.className,r=s.min,l=s.max,s=s.step;return e("div",{class:classnames_1.default(selectorPrefix,t.split(" ")),ref:"el"},[e("div",{class:selectorPrefix+"-scale"},[this.renderScale(e)]),e("input",{ref:"rangeEl",class:selectorPrefix+"-range",attrs:{type:"range",min:r,max:l,step:s},on:{mousemove:this.onMousemove,touchMove:this.onTouchmove}})])}};
//# sourceMappingURL=sliderscale.js.map