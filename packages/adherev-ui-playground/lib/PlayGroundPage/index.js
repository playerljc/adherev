"use strict";require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.function.name.js"),require("core-js/modules/es.array.flat.js"),require("core-js/modules/es.array.unscopables.flat.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var n in r=arguments[o])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,o,t){void 0===t&&(t=o),Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[o]}})}:function(e,r,o,t){e[t=void 0===t?o:t]=r[o]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var o in e)"default"!==o&&Object.hasOwnProperty.call(e,o)&&__createBinding(r,e,o);return __setModuleDefault(r,e),r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PlayGroundPagePropTypes=void 0;var adherev_ui_space_1=__importDefault(require("@baifendian/adherev-ui-space")),AnchorNavigation_1=__importStar(require("../AnchorNavigation")),selectPrefix="adhere-ui-playground-page";exports.PlayGroundPagePropTypes=__assign({},AnchorNavigation_1.AnchorNavigationPropTypes),exports.default={name:"adv-playground-page",props:__assign({},exports.PlayGroundPagePropTypes),computed:{getAnchors:function(){console.log("this.$slots.default",this.$slots.default);var e=null===(e=this.$slots.default.filter(function(r){return["CodeBoxSection","adv-playground-page-code-box-section"].some(function(e){return-1!==r.tag.indexOf(e)})}).map(function(e){return null===(e=null===(e=null===(e=null==e?void 0:e.componentOptions)||void 0===e?void 0:e.propsData)||void 0===e?void 0:e.config)||void 0===e?void 0:e.map(function(e){return{name:e.name,anchor:e.id}})}))||void 0===e?void 0:e.flat();return console.log("anchors",e),e}},render:function(e){return e("div",{class:selectPrefix},[e(AnchorNavigation_1.default,{attrs:{anchors:this.getAnchors,defaultActiveAnchor:this.defaultActiveAnchor,anchorPosition:this.anchorPosition,scrollEl:this.scrollEl}},[e(adherev_ui_space_1.default.Group,{attrs:{direction:"vertical"}},[this.$slots.default])])])}};
//# sourceMappingURL=index.js.map
