"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.SectionPropTypes=void 0;var tslib_1=require("tslib"),selectPrefix="adherev-ui-playground-page-section";exports.SectionPropTypes={title:{type:[String,Object],default:""},extra:{type:Object,default:function(){return null}}};var Section={name:"adv-playground-page-section",props:tslib_1.__assign({},exports.SectionPropTypes),render:function(e){var t=this.title,r=this.extra;return e("div",{class:selectPrefix},[e("div",{class:selectPrefix+"-header"},[e("div",{class:selectPrefix+"-header-title"},[t]),e("div",{class:selectPrefix+"-header-extra"},[r])]),e("div",{class:selectPrefix+"-body"},[this.$slots.default])])}};exports.default=Section;
//# sourceMappingURL=Section.js.map
