import{selectorPrefix as _selectorPrefix}from"./flexlayout";var selectorPrefix=_selectorPrefix+"-scrolllayout",ScrollLayout={name:"adv-flexlayout-scroll",props:{scrollY:{type:Boolean,default:!0}},provide:function(){return{getEl:this.getEl}},methods:{getEl:function(){return this.$refs.wrapRef}},render:function(e){return e("div",{ref:"wrapRef",class:selectorPrefix,style:"overflow-y: "+(this.scrollY?"auto":"hidden")},[this.$slots.default])}};export default ScrollLayout;
//# sourceMappingURL=scrollLayout.js.map
