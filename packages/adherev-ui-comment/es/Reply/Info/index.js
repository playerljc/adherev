import"core-js/modules/es.object.keys.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.object.get-own-property-descriptor.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.define-properties.js";import"core-js/modules/es.object.define-property.js";import _defineProperty from"@babel/runtime/helpers/defineProperty";function ownKeys(r,e){var o,t=Object.keys(r);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(r),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,o)),t}function _objectSpread(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(o),!0).forEach(function(e){_defineProperty(r,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}import{__assign}from"tslib";import{selectorPrefix}from"../../Comment";import Node from"../../Components/Node";var ReplyInfo={name:selectorPrefix+"-reply-info",props:__assign({},Node.props),computed:{props:function(){var e,r={};for(e in this.$props)r[e]=this[e];return r}},render:function(e){return e(Node,{props:_objectSpread({},__assign(__assign({},this.props),{isReply:!0}))})}};export default ReplyInfo;
//# sourceMappingURL=index.js.map
