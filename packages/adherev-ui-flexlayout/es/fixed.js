import classNames from"classnames";import{selectorPrefix as parentSelectorPrefix}from"./flexlayout";var selectorPrefix=parentSelectorPrefix+"-fixed",Fixed={name:"adv-flexlayout-fixed",props:{fit:{type:Boolean,default:!0}},methods:{getEl:function(){return this.$refs.ref}},render:function(e){var r=this.$slots,t=this.fit;return e("div",{ref:"ref",class:classNames(selectorPrefix,t?selectorPrefix+"-fit":"")},[r.default])}};export default Fixed;
//# sourceMappingURL=fixed.js.map
