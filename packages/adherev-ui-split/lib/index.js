module.exports=function(r){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=r,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=1)}([function(e,t,r){"use strict";function l(){return(l=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}var f=["attrs","props","domProps"],c=["class","style","directives"],p=["on","nativeOn"];e.exports=function(e){return e.reduce(function(e,t){for(var r in t)if(e[r])if(-1!==f.indexOf(r))e[r]=l({},e[r],t[r]);else if(-1!==c.indexOf(r)){var n=e[r]instanceof Array?e[r]:[e[r]],i=t[r]instanceof Array?t[r]:[t[r]];e[r]=n.concat(i)}else if(-1!==p.indexOf(r))for(var o in t[r]){var a,u;e[r][o]?(a=e[r][o]instanceof Array?e[r][o]:[e[r][o]],u=t[r][o]instanceof Array?t[r][o]:[t[r][o]],e[r][o]=a.concat(u)):e[r][o]=t[r][o]}else if("hook"==r)for(var s in t[r])e[r][s]=e[r][s]?function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}}(e[r][s],t[r][s]):t[r][s];else e[r]=t[r];else e[r]=t[r];return e},{})}},function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},f="adherev-ui-split",c={name:"adv-split",props:{direction:{type:String,require:!0,default:"vertical",validator:function(e){return-1!==["vertical","horizontal"].indexOf(e)}},size:{type:[String,Number],default:20},className:{type:String,default:""}},methods:{getStyle:function(){var e=this.direction,t=this.size;return"horizontal"===e?{display:"inline-block",width:"1px",height:"100%",margin:"0 "+t+"px"}:{width:"100%",height:"1px",margin:t+"px 0"}}},render:function(e){var t=this.className;return e("div",{class:f+" "+t,style:this.getStyle()})}},r={name:"adv-split-group",props:{direction:{type:String,require:!0,default:"vertical",validator:function(e){return-1!==["vertical","horizontal"].indexOf(e)}},size:{type:[Number,String],require:!1,default:20},className:{type:String,require:!1,default:""}},render:function(e){var t,r=this.$slots,n=this.direction,i=this.size,o=this.className,a=[];if(r.default)for(var u=0;u<r.default.length;u++)0!==u&&(t={props:l({direction:n,size:i,className:o})},a.push(e(c,s()([{},t,{key:u}])))),a.push(r.default[u]);return e("div",{class:f+"-group "+n},[a])}},n=function(t){var r=t;return r.install=function(e){e.component(r.displayName||r.name,t)},t},i=n(c);i.isUse=function(){return!0},i.use=function(e){e.use(i),e.use(i.Group)},i.Group=n(r),t.default=i}]).default;
//# sourceMappingURL=index.js.map
