"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var vue_fragment_1=require("vue-fragment"),util_1=require("./util");exports.default={name:"adv-conditionalrender-visibility",props:{conditional:{type:Boolean,default:!0}},render:function(e){var i=this.conditional,t=this.$slots;return(0,util_1.deal)({conditional:i,rule:"visibility",ruleVisibleValue:"visible",ruleHideValue:"hidden",slots:t}),e(vue_fragment_1.Fragment,[t.default,t.noMatch])}};
//# sourceMappingURL=visibility.js.map
