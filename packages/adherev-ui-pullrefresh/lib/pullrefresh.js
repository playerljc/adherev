"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),classnames_1=tslib_1.__importDefault(require("classnames")),moment_1=tslib_1.__importDefault(require("moment")),vue_1=require("vue"),vue_types_1=require("vue-types"),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),adherev_util_resource_1=tslib_1.__importDefault(require("@baifendian/adherev-util-resource")),selectorPrefix="adherev-ui-pullrefresh",defaultImg="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHN0eWxlPSJ3aWR0aDozMDhweDtoZWlnaHQ6MzA4cHg7IiB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lvaIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VjZjBmMSIgZD0iTTc5Ny43NjQ0MiAzMjYuNTU4NDFjLTguODg0MTk5LTE1LjU2MzMyNy0yNTIuODgwMS0yODYuODE5MDE5LTI2OC4zNzk1MTItMzEzLjU2NzQ4OS0xMC4xMzA1NDQtMTcuNDQ4ODIzLTM0LjI1ODQ5NS0xNy4xOTMxNjItNDQuMzg5MDM4IDBDNDczLjY1MDkzOSAzMi4yNjEzMjQgMjMwLjk5NzI1NSAzMDQuNjM1NTMgMjE4LjM3NDAyMyAzMjcuNDIxMjY0Yy05LjIzNTczMiAxNi41NTQwMTEgMC45NTg3MjcgMzguMzgxMDE5IDIxLjk1NDgzNyAzOC4zODEwMTlsMTE5LjkwNDczMSAwIDAgMjU2LjQ5MTMwMyAwIDM2Ljc4MzE0MSAyOTEuODM2MzU0IDAgMC0yOTMuMzA2NDAyIDEyMy41Nzk4NDkgMEM3OTQuNjk2NDk1IDM2NS43NzAzMjUgODA4Ljk0OTU2MiAzNDYuMTE2NDMxIDc5Ny43NjQ0MiAzMjYuNTU4NDF6IiAvPg0KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMSIgZmlsbD0iI2VjZjBmMSIgZD0iTTM2MC4yMDE2MzMgNjg5LjY5MjA2MWwyOTIuMzE1NzE4IDAgMCA5MC45MTkyMzItMjkyLjMxNTcxOCAwIDAtOTAuOTE5MjMyWiIgLz4NCjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzIiIGZpbGw9IiNlY2YwZjEiIGQ9Ik0zNjAuMjAxNjMzIDg0MC45MTUxOTFsMjkyLjMxNTcxOCAwIDAgNjAuNTkxNTE2LTI5Mi4zMTU3MTggMCAwLTYwLjU5MTUxNloiIC8+DQo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWNmMGYxIiBkPSJNMzYwLjIwMTYzMyA5OTIuMzkzOTgybDI5MC40MzAyMjIgMCAwIDMwLjI5NTc1OC0yOTAuNDMwMjIyIDAgMC0zMC4yOTU3NThaIiAvPg0KDQo8L3N2Zz4NCg==",pullRefreshProps={scrollClassName:(0,vue_types_1.string)().def(""),pullHeight:(0,vue_types_1.number)().def(200),isShowUpdateTime:(0,vue_types_1.bool)().def(!0),updateTime:(0,vue_types_1.number)().def((0,moment_1.default)().valueOf()),updateTimeFormat:(0,vue_types_1.string)().def(adherev_util_resource_1.default.Dict.value.ResourceMomentFormat18.value()),loadingAnimation:(0,vue_types_1.string)().def("la-ball-circus la-dark"),renderIcon:(0,vue_types_1.object)(),renderCanLabel:(0,vue_types_1.object)(),renderLabel:(0,vue_types_1.object)(),renderLoadingAnimation:(0,vue_types_1.object)()};exports.default=(0,vue_1.defineComponent)({name:"adv-pullrefresh",props:pullRefreshProps,slots:["icon","canLabel","label","loadingAnimation"],emits:["pull-start","pull-can-refresh","pull-bottom","pull-rebound","pull-refresh"],setup:function(l,e){function t(){null!=m&&m.removeEventListener("mousemove",h),null!=m&&m.removeEventListener("mouseup",L),null!=m&&m.removeEventListener("touchmove",h),null!=m&&m.removeEventListener("touchend",L)}function n(e){0===(null==e?void 0:e.target.scrollTop)?(M=!0,null!=m&&m.addEventListener("touchstart",D),null!=m&&m.addEventListener("mousedown",D)):M&&(M=!1,null!=m&&m.removeEventListener("touchstart",D),null!=m&&m.removeEventListener("mousedown",D))}var r=e.slots,i=e.emit,e=e.expose,a=(0,vue_1.ref)(),u=(0,vue_1.ref)(),o=(0,vue_1.ref)(),c=(0,vue_1.ref)(),s=(0,vue_1.ref)(),d=(0,vue_1.ref)((new Date).getTime()),v=!1,M=!0,g=null,m=null,f=0,N=!1,_=200,p=null,I=0,y=null,T=null,j=(0,vue_1.computed)(function(){return(0,classnames_1.default)("".concat(selectorPrefix,"-scroll"),l.scrollClassName||"")}),D=function(e){b("pull-start"),f=(e.changedTouches?e.changedTouches[0]:e).pageY,null!=m&&m.addEventListener("touchmove",h),null!=m&&m.addEventListener("mousemove",h),null!=m&&m.addEventListener("touchend",L),null!=m&&m.addEventListener("mouseup",L)},h=function(e){var t,l;m&&(m.style.overflow="hidden",t=(e.changedTouches?e.changedTouches[0]:e).pageY-f,l=Math.abs(t),0<t?(e.preventDefault(),N=!0,l<_?(x(m,"".concat(l,"px"),0),x(p,"calc(-100% + ".concat(l,"px)"),0),I+80<=l?(z(y,0,150),v=!0,b("pull-can-refresh")):(z(y,180,150),v=!1),p.style.display="flex"):(x(m,"".concat(_,"px"),0),x(p,"calc(-100% + ".concat(_,"px)"),0),z(y,0,150),v=!0,b("pull-bottom"))):N?(e.preventDefault(),x(m,"0px",0),x(p,"calc(-100% + 0px)",0),z(y,180,0)):A())},L=function(e){var e=(e.changedTouches?e.changedTouches[0]:e).pageY-f,t=Math.abs(e);(0<e?!(t<_)||I+80<=t?E:(b("pull-rebound"),w):A)()},x=function(e,t,l){e.style.transition=e.style.webkitTransition="transform ".concat(l=void 0===l?0:l,"ms ease"),e.style.transform=e.style.webkitTransform="translate3d(0,".concat(t,",0)")},z=function(e,t,l){e.style.transition=e.style.webkitTransition="transform ".concat(l=void 0===l?0:l,"ms linear"),e.style.transform=e.style.webkitTransform="rotate(".concat(t,"deg)")},b=function(e,t){i(e,t)},A=function(){t(),M=!(N=!1),p.style.display="flex",u.value.style.display="none",T.style.display="flex",z(y,180,0),m.style.overflowY="auto",g.style.display="none"},E=function(){g.style.display="block",t(),null!=m&&m.addEventListener("transitionend",function e(){T.style.display="none",u.value.style.display="block",b("pull-refresh",w),null!=m&&m.removeEventListener("transitionend",e),d.value=(0,moment_1.default)().valueOf()}),x(m,"".concat(I,"px"),500),x(p,"calc(-100% + ".concat(I,"px)"),500),z(y,180,300)},w=function(){A(),null!=m&&m.addEventListener("transitionend",function e(){null!=m&&m.removeEventListener("transitionend",e),T.style.display="flex"}),x(m,"0px",200),x(p,"calc(-100% + 0px)",200)};return(0,vue_1.onMounted)(function(){p=s.value,y=a.value,m=o.value,T=c.value,_=l.pullHeight<=0?200:l.pullHeight>(null==m?void 0:m.clientHeight)?null==m?void 0:m.clientHeight:l.pullHeight,I=p.clientHeight,null!=m&&m.addEventListener("touchstart",D),null!=m&&m.addEventListener("mousedown",D),null!=m&&m.addEventListener("scroll",n)}),e({resetUpdateTime:function(t){return new Promise(function(e){d.value=t||(0,moment_1.default)().valueOf(),e(null)})},getUpdateTime:function(){return d.value}}),(g=document.querySelector(".".concat(selectorPrefix,"-mask")))||((g=document.createElement("div")).className="".concat(selectorPrefix,"-mask"),document.body.appendChild(g)),function(){var e,t;return(0,_vue.createVNode)("div",{class:selectorPrefix},[(0,_vue.createVNode)("div",{class:j.value,ref:o},[null==(t=null==r?void 0:r.default)?void 0:t.call(r)]),(0,_vue.createVNode)("div",{class:"".concat(selectorPrefix,"-trigger"),ref:s},[(0,_vue.createVNode)("div",{class:"".concat(selectorPrefix,"-trigger-inner"),ref:c},[r.icon?(0,_vue.createVNode)("div",{class:"".concat(selectorPrefix,"-trigger-icon")},[(0,_vue.createVNode)("div",{class:"".concat(selectorPrefix,"-trigger-icon-inner"),ref:a},[null==(t=null==r?void 0:r.icon)?void 0:t.call(r)])]):l.renderIcon?(0,_vue.createVNode)("div",{class:"".concat(selectorPrefix,"-trigger-icon")},[(0,_vue.createVNode)("div",{class:"".concat(selectorPrefix,"-trigger-icon-inner"),ref:a},[l.renderIcon])]):(0,_vue.createVNode)("div",{class:"".concat(selectorPrefix,"-trigger-icon")},[(0,_vue.createVNode)("img",{class:"".concat(selectorPrefix,"-trigger-icon-inner"),src:defaultImg,alt:"",ref:a},null)]),(0,_vue.createVNode)("p",{class:"".concat(selectorPrefix,"-trigger-label")},[v?(null==(e=null==r?void 0:r.canLabel)?void 0:e.call(r))||l.renderCanLabel||(0,_vue.createVNode)("span",null,[adherev_util_intl_1.default.tv("松开刷新")]):(null==(e=null==r?void 0:r.label)?void 0:e.call(r))||l.renderLabel||(0,_vue.createVNode)("span",null,[adherev_util_intl_1.default.tv("下拉刷新")])]),l.isShowUpdateTime?(0,_vue.createVNode)("p",{class:"".concat(selectorPrefix,"-trigger-update")},[adherev_util_intl_1.default.tv("更新时间"),(0,_vue.createTextVNode)("："),(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-trigger-update-label")},[(0,moment_1.default)(d.value).format(l.updateTimeFormat)])]):null]),l.loadingAnimation?(0,_vue.createVNode)("div",{class:(0,classnames_1.default)("".concat(selectorPrefix,"-trigger-refresh"),l.loadingAnimation||""),ref:u},[(0,_vue.createVNode)("div",null,null),(0,_vue.createVNode)("div",null,null),(0,_vue.createVNode)("div",null,null),(0,_vue.createVNode)("div",null,null),(0,_vue.createVNode)("div",null,null)]):(0,_vue.createVNode)("div",{class:"".concat(selectorPrefix,"-trigger-refresh"),ref:u},[(null==(t=null==r?void 0:r.loadingAnimation)?void 0:t.call(r))||l.renderLoadingAnimation])])])}}});
//# sourceMappingURL=pullrefresh.js.map
