import{__assign}from"tslib";import Vue from"vue";var CodePanelPropTypes={lang:{type:String,default:"vue"}};export default{name:"adv-playground-code-panel",props:__assign({},CodePanelPropTypes),render:function(e){var o=this.lang,r=this.$slots;return e(Vue.component("highlight-code"),{attrs:{lang:o}},[r.default])}};export{CodePanelPropTypes};
//# sourceMappingURL=CodePanel.js.map
