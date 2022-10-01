import{Fragment}from"vue-fragment";import{deal}from"./util";export default{name:"adv-conditionalrender-visibility",props:{conditional:{type:Boolean,default:!0}},render:function(i){var e=this.conditional,t=this.$slots;return deal({conditional:e,rule:"visibility",ruleVisibleValue:"visible",ruleHideValue:"hidden",slots:t}),i(Fragment,[t.default,t.noMatch])}};
//# sourceMappingURL=visibility.js.map
