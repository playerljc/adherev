module.exports=function(t){var n={};function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(r,e){if(1&e&&(r=i(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)i.d(t,n,function(e){return r[e]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/",i(i.s=1)}([function(e,r,t){"use strict";function c(){return(c=Object.assign||function(e){for(var r,t=1;t<arguments.length;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)}var l=["attrs","props","domProps"],f=["class","style","directives"],p=["on","nativeOn"];e.exports=function(e){return e.reduce(function(e,r){for(var t in r)if(e[t])if(-1!==l.indexOf(t))e[t]=c({},e[t],r[t]);else if(-1!==f.indexOf(t)){var n=e[t]instanceof Array?e[t]:[e[t]],i=r[t]instanceof Array?r[t]:[r[t]];e[t]=n.concat(i)}else if(-1!==p.indexOf(t))for(var o in r[t]){var a,u;e[t][o]?(a=e[t][o]instanceof Array?e[t][o]:[e[t][o]],u=r[t][o]instanceof Array?r[t][o]:[r[t][o]],e[t][o]=a.concat(u)):e[t][o]=r[t][o]}else if("hook"==t)for(var s in r[t])e[t][s]=e[t][s]?function(e,r){return function(){e&&e.apply(this,arguments),r&&r.apply(this,arguments)}}(e[t][s],r[t][s]):r[t][s];else e[t]=r[t];else e[t]=r[t];return e},{})}},function(e,r,t){"use strict";t.r(r);var n=t(0),s=t.n(n),c=function(){return(c=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e}).apply(this,arguments)},l="adherev-ui-space",f={name:"adv-space",props:{direction:{type:String,require:!0,default:"vertical",validator:function(e){return-1!==["vertical","horizontal"].indexOf(e)}},size:{type:[Number,String],require:!0,default:20},className:{type:String,require:!1,default:""}},methods:{getStyle:function(){var e=this.direction,r=this.size;return"horizontal"===e?{display:"inline-block",height:"100%",margin:"0 "+r+"px"}:{width:"100%",margin:r+"px 0"}}},render:function(e){var r=this.className;return e("div",{attrs:{className:l+" "+r},style:this.getStyle()})}},t={name:"adv-space-group",props:{direction:{type:String,require:!0,default:"vertical",validator:function(e){return-1!==["vertical","horizontal"].indexOf(e)}},size:{type:[Number,String],require:!0,default:20},className:{type:String,require:!1,default:""}},render:function(e){var r=this.$slots,t=this.direction,n=this.size,i=this.className;console.log("adv-space-group",r,t,n,i);var o=[];if(r.default){for(var a,u=0;u<r.default.length;u++)0!==u&&(a={props:c({direction:t,size:n,className:i})},o.push(e(f,s()([{},a,{key:u}])))),o.push(r.default[u]);console.log("adv-space-group-vnodes",o)}return e("div",{class:l+"-group "+t},[o])}},n=function(r){var t=r;return t.install=function(e){e.component(t.displayName||t.name,r)},r},i=n(f);i.isUse=function(){return!0},i.use=function(e){e.use(i),e.use(i.Group)},i.Group=n(t),r.default=i}]).default;
//# sourceMappingURL=index.js.map
