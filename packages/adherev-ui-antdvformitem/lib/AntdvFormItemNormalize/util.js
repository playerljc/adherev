"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.keys.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.object.assign.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.HOC=exports.assignAttrs=void 0;var tslib_1=require("tslib"),vue_1=require("vue");function assignAttrs(e,s,t){s=tslib_1.__assign(tslib_1.__assign({},s),e);return"getPopupContainer"in s&&void 0!==s.getPopupContainer||(s.getPopupContainer=function(e){return t||(null==e?void 0:e.parentElement)||document.body}),s}function HOC(r,o){var s={};return Object.keys(r).filter(function(e){return/^[A-Z]/.test(e)}).forEach(function(e){return s[e]=r[e]}),Object.assign(function(e,s){var t;return(0,vue_1.h)(r,tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({},e),s.attrs),(null==(t=null==o?void 0:o.props)?void 0:t.call(o,e,(0,vue_1.inject)("getEl")))||{}),(null==(t=null==o?void 0:o.attrs)?void 0:t.call(o,s.attrs))||{}),(null==(e=null==o?void 0:o.slots)?void 0:e.call(o,s.slots))||s.slots)},s)}exports.assignAttrs=assignAttrs,exports.HOC=HOC;
//# sourceMappingURL=util.js.map
