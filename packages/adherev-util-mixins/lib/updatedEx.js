"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/es.string.starts-with.js");var _default={created:function(){var r=this.$data,t=this.$props,e=("$preProps"in r||(r.$preProps={}),this);for(s in r)!function(s){s.startsWith("$")||s.startsWith("_")||e.$watch(s,function(t,e){r.$preProps[s]=e})}(s);var s,i=this;for(s in t)!function(s){s.startsWith("$")||s.startsWith("_")||i.$watch(s,function(t,e){r.$preProps[s]=e})}(s)},updated:function(){var t=this.$options,e=this.$data;"updatedEx"in t&&t.updatedEx instanceof Function&&t.updatedEx.call(this,e.$preProps)}};exports.default=_default;
//# sourceMappingURL=updatedEx.js.map
