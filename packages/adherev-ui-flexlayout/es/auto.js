import classNames from"classnames";import{selectorPrefix as parentSelectorPrefix}from"./flexlayout";var selectorPrefix=parentSelectorPrefix+"-auto",Auto={name:"adv-flexlayout-auto",props:{autoFixed:{type:Boolean,default:!0},fit:{type:Boolean,default:!0}},methods:{getEl:function(){return this.$refs.ref}},render:function(e){var t=this,r=t.$slots,o=t.autoFixed,t=t.fit;return e("div",{ref:"ref",class:classNames(selectorPrefix,o?selectorPrefix+"-autoFixed":"",t?selectorPrefix+"-fit":"")},[r.default])}};export default Auto;
//# sourceMappingURL=auto.js.map