"use strict";require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.define-property.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var s in r=arguments[t])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e}).apply(this,arguments)},__importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.CodePanelPropTypes=void 0;var vue_1=__importDefault(require("vue"));exports.CodePanelPropTypes={lang:{type:String,default:"vue"}},exports.default={name:"adv-playground-code-panel",props:__assign({},exports.CodePanelPropTypes),render:function(e){var r=this.lang,t=this.$slots;return e(vue_1.default.component("highlight-code"),{attrs:{lang:r}},[t.default])}};
//# sourceMappingURL=CodePanel.js.map