import"core-js/modules/es.array.find-index.js";import"core-js/modules/es.array.splice.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";var events={};export default{on:function(e,n){events[e]||(events[e]={handlers:[]}),events[e].handlers.push(n)},remove:function(e,n){var s;!events[e]||-1!==(s=events[e].handlers.findIndex(function(e){return e===n}))&&events[e].handlers.splice(s,1)},trigger:function(e){for(var n,s=[],r=1;r<arguments.length;r++)s[r-1]=arguments[r];return events[e]&&events[e].handlers.forEach(function(e){n=e.apply(void 0,s)}),n}};
//# sourceMappingURL=emitter.js.map