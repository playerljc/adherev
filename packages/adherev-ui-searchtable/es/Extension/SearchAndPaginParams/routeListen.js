import"core-js/modules/es.array.last-index-of.js";import"core-js/modules/es.array.slice.js";import"core-js/modules/es.string.starts-with.js";import{TableImplementSearchAndvPaginParamsMemo}from"../../ProSearchTable";var historyStack=[];function clearSearAndPaginParamsByPathname(e){e=TableImplementSearchAndvPaginParamsMemo.findIndexByPath(e);-1!==e&&TableImplementSearchAndvPaginParamsMemo.deleteByIndex(e)}function deal(e){var a,t=historyStack.lastIndexOf(e);(-1===t?(clearSearAndPaginParamsByPathname(e),historyStack):(1===(a=historyStack.slice(t+1)).length&&a[0].startsWith(e)||clearSearAndPaginParamsByPathname(e),historyStack=historyStack.slice(0,t))).push(e)}var popstateHandler,popstate=function(e){deal(window.location.pathname),e.on(routeListen)};function routeListen(e){var a=e.location,e=(e.action,e.context),a=a.pathname;e.remove(routeListen),popstateHandler&&window.removeEventListener("popstate",popstateHandler),popstateHandler=popstate.bind(this,e),window.addEventListener("popstate",popstateHandler),deal(a)}export default routeListen;
//# sourceMappingURL=routeListen.js.map
