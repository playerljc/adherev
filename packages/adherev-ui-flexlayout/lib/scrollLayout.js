"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var flexlayout_1=require("./flexlayout"),selectorPrefix=flexlayout_1.selectorPrefix+"-scrolllayout",ScrollLayout={name:"adv-flexlayout-scroll",props:{scrollY:{type:Boolean,default:!0}},provide:function(){return{getEl:this.getEl}},methods:{getEl:function(){return this.$refs.wrapRef}},render:function(e){return e("div",{ref:"wrapRef",class:selectorPrefix,style:"overflow-y: "+(this.scrollY?"auto":"hidden")},[this.$slots.default])}};exports.default=ScrollLayout;
//# sourceMappingURL=scrollLayout.js.map
