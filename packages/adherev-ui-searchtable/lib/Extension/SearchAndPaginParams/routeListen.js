"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.last-index-of.js"),require("core-js/modules/es.array.slice.js"),require("core-js/modules/es.string.starts-with.js"),Object.defineProperty(exports,"__esModule",{value:!0});var ProSearchTable_1=require("../../ProSearchTable"),historyStack=[];function clearSearAndPaginParamsByPathname(e){e=ProSearchTable_1.TableImplementSearchAndvPaginParamsMemo.findIndexByPath(e);-1!==e&&ProSearchTable_1.TableImplementSearchAndvPaginParamsMemo.deleteByIndex(e)}exports.default=function(e){var a,r=e.location,e=(e.action,r.pathname),r=historyStack.lastIndexOf(e);(-1===r?(clearSearAndPaginParamsByPathname(e),historyStack):(1===(a=historyStack.slice(r+1)).length&&a[0].startsWith(e)||clearSearAndPaginParamsByPathname(e),historyStack=historyStack.slice(0,r))).push(e)};
//# sourceMappingURL=routeListen.js.map
