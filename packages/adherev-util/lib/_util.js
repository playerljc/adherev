"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var r={};for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(r[o[n]]=t[o[n]]);return r},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},lodash_merge_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.getComponentPropsOption=exports.HOC=exports.HOCFunctional=exports.Fragment=exports.extend=exports.withVue=exports.withInstall=void 0,__importDefault(require("lodash.merge"))),lodash_mergewith_1=__importDefault(require("lodash.mergewith")),adherev_util_watchmemoized_1=__importDefault(require("@baifendian/adherev-util-watchmemoized")),memoized=adherev_util_watchmemoized_1.default.memoized;exports.withInstall=function(e){return e.install=function(t){t.component(e.displayName||e.name,e)},e},exports.withVue=function(t,e,r){t.prototype.$adv=t.prototype.$adv||{},t.prototype.$adv[e]=r},exports.extend=function(t){var e=t.className,n=__rest(t,["className"]);if(!n)return{};t=n.methods;if(t&&e)for(var r=Object.keys(t).filter(function(e){return["$","_"].every(function(t){return!e.startsWith(t)})}),o=Array.isArray(e)?e:[e],s=0;s<r.length;s++)for(var i=r[s],a=0;a<o.length;a++)!function(t){var r="$"+i+o[t];n.methods[r]=n.methods[i],n.methods[i]=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this[r].apply(this,t||[])}}(a);return n},exports.Fragment={render:function(t){var e;return null==(e=null==this?void 0:this.$slots)?void 0:e.default}},exports.HOCFunctional=function(r,n,t){return{functional:!0,name:t,render:function(t,e){return t(r,lodash_merge_1.default(n?n(t,e):{},e.data),e.children)}}},exports.HOC=function(a,t,u,l){var e,r={};for(e in a.methods||{})!function(e){r[e]=function(t){return this.$refs.wrapRef[e](t)}}(e);var n={props:a.props,methods:r},n=t instanceof Function?t(n):lodash_merge_1.default(n,t||{});return __assign({render:function(t){var r=this,e=l?l.call(this,t):Object.keys(this.$slots).reduce(function(t,e){return t.concat(r.$slots[e])},[]),n={props:this.$props,attrs:this.$attrs,on:this.$listeners,scopedSlots:__assign({},this.$scopedSlots||{})},o="options"in(u||{})&&null!=(o=(u||{}).options)&&o.deep||!("options"in(u||{}))?lodash_mergewith_1.default:Object.assign,s=[n,null==(s=null==(i=null==u?void 0:u.renderWith)?void 0:i.call)?void 0:s.call(i,this,t,__assign({},n))],i=(o===lodash_mergewith_1.default&&s.push(function(t,e){if(Array.isArray(t))return e}),o.apply(window,s));return t(a,__assign(__assign({},i),{ref:"wrapRef"}),e)}},n)},exports.getComponentPropsOption=memoized.createMemoFun(function(t){return __assign({},(t.mixins||[]).reduce(function(t,e){return __assign(__assign({},e.props||{}),t)},t.props))});
//# sourceMappingURL=_util.js.map
