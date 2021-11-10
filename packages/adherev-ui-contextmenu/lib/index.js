module.exports=function(n){var r={};function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}return i.m=n,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=4)}([function(t,e){t.exports=require("classnames")},function(t,e){t.exports=require("@baifendian/adherev-util")},function(t,e){t.exports=require("@baifendian/adherev-ui-conditionalrender")},function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";n.r(e);var r=n(3),a=n.n(r),r=n(0),i=n.n(r),r=n(2),o=n.n(r),r=n(1),s=n.n(r),u={props:{data:{type:Array,default:function(){return[]},validator:function(t){return t instanceof Array}},className:{type:String,default:""},styleName:{type:String,default:""}},inject:["getContext"],computed:{getClass:function(){var t=this.className;return i()("adherev-ui-contextmenu-submenu",(t||"").split(" "))},getStyle:function(){return this.styleName+"width:"+this.getContext().config.width+"px;z-index:199999"}},methods:{renderItems:function(e){var t=this.data;return(void 0===t?[]:t).map(function(t){return e(c,{key:t.id,attrs:{data:t}})})}},render:function(t){return t("ul",{class:this.getClass,style:this.getStyle},[this.renderItems(t)])}},l="adherev-ui-contextmenu-menuitem",c={props:{data:{type:Object,default:function(){return{}},validator:function(t){return t instanceof Object}}},computed:{getClass:function(){var t=this.data,e=t.disabled,e=void 0!==e&&e,t=t.className;return i()(l,e?"disabled":"",(t||"").split(" "))}},methods:{renderIcon:function(t){var e=this.data.icon;return t(o.a,{attrs:{conditional:s.a.isString(e)}},[t("span",{class:i()(l+"-icon",e)}),t(o.a,{slot:"noMatch",attrs:{conditional:s.a.isObject(e)}},[t("span",{class:i()(l+"-icon")},[t(e)]),t(o.a,{slot:"noMatch",attrs:{conditional:s.a.isFunction(e)}},[t("span",{class:i()(l+"-icon")},[s.a.isFunction(e)?e(t):null])])])])},renderName:function(t){var e=this.data.name;return t(o.a,{attrs:{conditional:s.a.isString(e)}},[t("span",{class:i()(l+"-name")},[e]),t(o.a,{slot:"noMatch",attrs:{conditional:s.a.isObject(e)}},[t("span",{class:i()(l+"-name")},[t(e)]),t(o.a,{slot:"noMatch",attrs:{conditional:s.a.isFunction(e)}},[t("span",{class:i()(l+"-name")},[s.a.isFunction(e)?e(t):null])])])])},renderMore:function(t){var e=this.data.children;return t(o.a,{attrs:{conditional:0!==e.length}},[t("span",{class:l+"-more fa fa-caret-right"})])},renderSubMenu:function(t){var e=this.data,n=e.children,r=e.subMenuClassName,e=e.subMenuStyle;return t(o.a,{attrs:{conditional:0!==n.length}},[t(u,{attrs:{data:n,className:r,styleName:e}})])},onClick:function(t){t.stopPropagation();var e=this.data,n=e.id,r=e.attribute,i=e.disabled,a=e.children,t=this.getContext(),e=t.config,t=t.el,e=e.handler;if(i||0<(a||[]).length)return!1;e&&(e(n,r),this.$root.$destroy(),null===(r=null==t?void 0:t.parentElement)||void 0===r||r.removeChild(t))}},inject:["getContext"],render:function(t){var e=this.data,n=e.separation,e=e.styleName;return t(o.a,{attrs:{conditional:!n}},[t("li",{class:this.getClass,style:e,on:{click:this.onClick}},[this.renderIcon(t),this.renderName(t),this.renderMore(t),this.renderSubMenu(t)]),t("li",{slot:"noMatch",class:l+"-separation"})])}},d={props:{data:{type:Array,default:function(){return[]},validator:function(t){return t instanceof Array}},className:{type:String,default:""},styleName:{type:String,default:""}},inject:["getContext"],methods:{mount:function(){var t=this.getContext().config,e=t.x,n=t.y,r=this.$refs.el,i=null==r?void 0:r.offsetWidth,a=null==r?void 0:r.offsetHeight,o=document.body.clientWidth||document.documentElement.clientWidth,t=document.body.clientHeight||document.documentElement.clientHeight;o-e<i&&(e=o-i),t-n<a&&(n=t-a),null==r||(r.style.left=e+"px"),null==r||(r.style.top=n+"px")},renderItems:function(e){var t=this.data;return(void 0===t?[]:t).map(function(t){return e(c,{key:t.id,attrs:{data:t}})})}},computed:{getStyle:function(){return this.styleName+"width:"+this.getContext().config.width+"px;z-index:199999"},getClass:function(){var t=this.className;return i()("adherev-ui-contextmenu-submenu",(t||"").split(" "))}},render:function(t){return t("ul",{class:this.getClass,style:this.getStyle,ref:"el"},[this.renderItems(t)])}},f=function(){return(f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},h={props:{data:{type:Array,default:function(){return[]},validator:function(t){return t instanceof Array}},config:{type:Object,default:function(){},validator:function(t){return t instanceof Object}},el:{type:HTMLElement}},provide:function(){return{getContext:this.getContext}},computed:{getClass:function(){return i()("adherev-ui-contextmenu")},getStyle:function(){return"z-index: 19998"}},methods:{getContext:function(){return{config:this.config,el:this.el}},mount:function(){var t;null===(t=this.$refs.menuIns)||void 0===t||t.mount()},onClick:function(t){t.stopPropagation(),this.$destroy();t=this.el;t.parentElement.removeChild(t)},onContextMenu:function(t){t.preventDefault(),this.$destroy();t=this.el;t.parentElement.removeChild(t)}},render:function(t){var e=this.data,n=this.config;return t("div",{class:this.getClass,style:this.getStyle,on:{click:this.onClick,contextMenu:this.onContextMenu}},[t(d,{attrs:{data:void 0===e?[]:e,className:n.className,styleName:n.styleName},ref:"menuIns"})])}},m={open:function(e,n){n=f({width:200,maskClosable:!0},n);var r=document.createElement("div"),t=document.createElement("div");r.appendChild(t),document.body.appendChild(r);var i=new a.a({mounted:function(){this.$refs.ref.mount()},render:function(t){return t(h,{props:{data:e,config:n,el:r},ref:"ref"})}});return i.$mount(t),{vm:i,el:r}},close:function(t){var e=t.vm,t=t.el;e.$destroy(),t.parentElement.removeChild(t)}},p=s.a._util.withVue;m.isUse=function(){return!0},m.use=function(t){p(t,"ContextMenu",m)},e.default=m}]).default;
//# sourceMappingURL=index.js.map
