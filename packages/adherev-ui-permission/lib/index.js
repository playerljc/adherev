module.exports=function(n){var t={};function o(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=n,o.c=t,o.d=function(e,r,n){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)o.d(n,t,function(e){return r[e]}.bind(null,t));return n},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="/",o(o.s=0)}([function(e,r,n){"use strict";n.r(r);function o(){return JSON.parse(JSON.stringify(s))}function i(r,e){return!((r=(r=void 0===r?o():r)||o())&&Array.isArray(r)&&e)||(Array.isArray(e)?e.every(function(e){return-1!==r.indexOf(e)}):-1!==r.indexOf(e))}var t,u,s=[],l=((u=t={name:"adv-permission",props:{allPermission:{type:Array,require:!0,default:[]},permissions:{type:[String,Array],require:!0}},render:function(e){var r=this,n=r.allPermission,t=void 0===n?o():n,n=r.permissions,r=r.$slots;return console.log("allPermission",t),console.log("permissions",n),i(t,n)?r.default:r.noMatch||null}}).install=function(e){e.component(u.displayName||u.name,t)},t);r.default={Permission:l,setPermission:function(e){s=e},checkPermission:i,getPermission:o,isUse:function(){return!0},use:function(e){return e.use(l)}}}]).default;
//# sourceMappingURL=index.js.map
