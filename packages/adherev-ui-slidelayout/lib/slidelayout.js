"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.concat.js"),require("core-js/modules/es.parse-int.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.Revolving=exports.Push=exports.Overlay=exports.createMask=exports.slider=exports.selectorPrefix=void 0;var tslib_1=require("tslib"),overlay_1=tslib_1.__importDefault(require("./overlay")),push_1=(exports.Overlay=overlay_1.default,tslib_1.__importDefault(require("./push"))),reveal_1=(exports.Push=push_1.default,tslib_1.__importDefault(require("./reveal")));function slider(e,r,t,s,o,a){a&&a(e),e.style.transform=e.style.webkitTransform="translate3d(".concat(r,",").concat(t,",").concat(s,")"),e.style.transition=e.style.webkitTransition="all ".concat(o," ease")}function createMask(e,r){var t=document.createElement("div"),t=(t.innerHTML="<div class='".concat(exports.selectorPrefix,"-mask'></div>"),t.firstElementChild);return t.style.zIndex="".concat(parseInt(e)-1),t.addEventListener("click",function(){r()}),t}exports.Revolving=reveal_1.default,exports.selectorPrefix="adherev-ui-slidelayout",exports.slider=slider,exports.createMask=createMask;
//# sourceMappingURL=slidelayout.js.map
