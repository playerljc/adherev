import{__assign}from"tslib";var selectPrefix="adherev-ui-playground-page-section",SectionPropTypes={title:{type:[String,Object],default:""},extra:{type:Object,default:function(){return null}}},Section={name:"adv-playground-page-section",props:__assign({},SectionPropTypes),render:function(e){var t=this.title,i=this.extra;return e("div",{class:selectPrefix},[e("div",{class:"".concat(selectPrefix,"-header")},[e("div",{class:"".concat(selectPrefix,"-header-title")},[t]),e("div",{class:"".concat(selectPrefix,"-header-extra")},[i])]),e("div",{class:"".concat(selectPrefix,"-body")},[this.$slots.default])])}};export default Section;export{SectionPropTypes};
//# sourceMappingURL=Section.js.map
