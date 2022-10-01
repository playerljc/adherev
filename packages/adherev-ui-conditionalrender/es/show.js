import{Fragment}from"vue-fragment";import{deal}from"./util";export default{name:"adv-conditionalrender-show",props:{conditional:{type:Boolean,default:!0}},render:function(e){var o=this.conditional,t=this.$slots;return deal({conditional:o,rule:"display",ruleVisibleValue:"",ruleHideValue:"none",slots:t}),e(Fragment,[t.default,t.noMatch])}};
//# sourceMappingURL=show.js.map
