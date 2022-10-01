import"core-js/modules/es.number.constructor.js";import{Slider}from"ant-design-vue";var selectorPrefix="adherev-ui-fontsizesetting";export default{name:"adv-fontsizesetting",props:{min:{type:Number},max:{type:Number},step:{type:Number},defaultValue:{type:Number,default:14}},data:function(){return{value:this.defaultValue}},watch:{defaultValue:function(e){this.value=e}},methods:{onChange:function(e){this.value=e,this.$nextTick(function(){this.$emit("change",e)})}},render:function(e){return e("div",{class:selectorPrefix,ref:"el"},[e("div",{class:selectorPrefix+"-rangeWrap"},[e("div",{class:selectorPrefix+"-separatedtool"},[e("div",{class:selectorPrefix+"-separated"},[e("span",[this.$tv("小")])]),e("div",{class:selectorPrefix+"-separated"},[e("span",[this.$tv("中")])]),e("div",{class:selectorPrefix+"-separated"},[e("span",[this.$tv("大")])]),e("div",{class:selectorPrefix+"-separated"},[e("span",[this.$tv("特大")])])]),e(Slider,{attrs:{min:this.min,max:this.max,step:this.step,value:this.value},on:{change:this.onChange}})])])}};
//# sourceMappingURL=fontsizesetting.js.map
