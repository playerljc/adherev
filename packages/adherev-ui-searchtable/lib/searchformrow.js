"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js");var __spreadArrays=function(){for(var e=0,r=0,s=arguments.length;r<s;r++)e+=arguments[r].length;for(var t=Array(e),a=0,r=0;r<s;r++)for(var l=arguments[r],o=0,u=l.length;o<u;o++,a++)t[a]=l[o];return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var vue_1=__importDefault(require("vue")),classnames_1=__importDefault(require("classnames")),selectorPrefix="adherev-ui-searchform-row";exports.default=vue_1.default.extend({name:"adv-searchtable-searchform-row",props:{className:{type:String,default:""}},render:function(e){var r=this.$slots,s=this.className;return e("tr",{class:classnames_1.default.apply(void 0,__spreadArrays([selectorPrefix],(s||"").split(/\s+/)))},[r.default])}});
//# sourceMappingURL=searchformrow.js.map
