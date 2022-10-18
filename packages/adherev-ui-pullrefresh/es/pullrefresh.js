import{createTextVNode as _createTextVNode,createVNode as _createVNode}from"vue";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import classNames from"classnames";import moment from"moment";import{computed,defineComponent,onMounted,ref}from"vue";import{bool,number,object,string}from"vue-types";import Intl from"@baifendian/adherev-util-intl";import Resource from"@baifendian/adherev-util-resource";var selectorPrefix="adherev-ui-pullrefresh",defaultImg="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHN0eWxlPSJ3aWR0aDozMDhweDtoZWlnaHQ6MzA4cHg7IiB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lvaIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VjZjBmMSIgZD0iTTc5Ny43NjQ0MiAzMjYuNTU4NDFjLTguODg0MTk5LTE1LjU2MzMyNy0yNTIuODgwMS0yODYuODE5MDE5LTI2OC4zNzk1MTItMzEzLjU2NzQ4OS0xMC4xMzA1NDQtMTcuNDQ4ODIzLTM0LjI1ODQ5NS0xNy4xOTMxNjItNDQuMzg5MDM4IDBDNDczLjY1MDkzOSAzMi4yNjEzMjQgMjMwLjk5NzI1NSAzMDQuNjM1NTMgMjE4LjM3NDAyMyAzMjcuNDIxMjY0Yy05LjIzNTczMiAxNi41NTQwMTEgMC45NTg3MjcgMzguMzgxMDE5IDIxLjk1NDgzNyAzOC4zODEwMTlsMTE5LjkwNDczMSAwIDAgMjU2LjQ5MTMwMyAwIDM2Ljc4MzE0MSAyOTEuODM2MzU0IDAgMC0yOTMuMzA2NDAyIDEyMy41Nzk4NDkgMEM3OTQuNjk2NDk1IDM2NS43NzAzMjUgODA4Ljk0OTU2MiAzNDYuMTE2NDMxIDc5Ny43NjQ0MiAzMjYuNTU4NDF6IiAvPg0KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMSIgZmlsbD0iI2VjZjBmMSIgZD0iTTM2MC4yMDE2MzMgNjg5LjY5MjA2MWwyOTIuMzE1NzE4IDAgMCA5MC45MTkyMzItMjkyLjMxNTcxOCAwIDAtOTAuOTE5MjMyWiIgLz4NCjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzIiIGZpbGw9IiNlY2YwZjEiIGQ9Ik0zNjAuMjAxNjMzIDg0MC45MTUxOTFsMjkyLjMxNTcxOCAwIDAgNjAuNTkxNTE2LTI5Mi4zMTU3MTggMCAwLTYwLjU5MTUxNloiIC8+DQo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWNmMGYxIiBkPSJNMzYwLjIwMTYzMyA5OTIuMzkzOTgybDI5MC40MzAyMjIgMCAwIDMwLjI5NTc1OC0yOTAuNDMwMjIyIDAgMC0zMC4yOTU3NThaIiAvPg0KDQo8L3N2Zz4NCg==",pullRefreshProps={scrollClassName:string().def(""),pullHeight:number().def(200),isShowUpdateTime:bool().def(!0),updateTime:number().def(moment().valueOf()),updateTimeFormat:string().def(Resource.Dict.value.ResourceMomentFormat18.value()),loadingAnimation:string().def("la-ball-circus la-dark"),renderIcon:object(),renderCanLabel:object(),renderLabel:object(),renderLoadingAnimation:object()};export default defineComponent({name:"adv-pullrefresh",props:pullRefreshProps,slots:["icon","canLabel","label","loadingAnimation"],emits:["pull-start","pull-can-refresh","pull-bottom","pull-rebound","pull-refresh"],setup:function(l,e){function t(e){0===(null==e?void 0:e.target.scrollTop)?(g=!0,null!=v&&v.addEventListener("touchstart",h),null!=v&&v.addEventListener("mousedown",h)):g&&(g=!1,null!=v&&v.removeEventListener("touchstart",h),null!=v&&v.removeEventListener("mousedown",h))}function n(){N.style.display="block",x(),null!=v&&v.addEventListener("transitionend",function e(){L.style.display="none",c.value.style.display="block",w("pull-refresh",o),null!=v&&v.removeEventListener("transitionend",e),m.value=moment().valueOf()}),b(v,"".concat(y,"px"),500),b(T,"calc(-100% + ".concat(y,"px)"),500),E(j,180,300)}function o(){C(),null!=v&&v.addEventListener("transitionend",function e(){null!=v&&v.removeEventListener("transitionend",e),L.style.display="flex"}),b(v,"0px",200),b(T,"calc(-100% + 0px)",200)}var r=e.slots,a=e.emit,e=e.expose,i=ref(),c=ref(),s=ref(),u=ref(),d=ref(),m=ref((new Date).getTime()),M=!1,g=!0,N=null,v=null,f=0,I=!1,p=200,T=null,y=0,j=null,L=null,D=computed(function(){return classNames("".concat(selectorPrefix,"-scroll"),l.scrollClassName||"")}),x=function(){null!=v&&v.removeEventListener("mousemove",z),null!=v&&v.removeEventListener("mouseup",A),null!=v&&v.removeEventListener("touchmove",z),null!=v&&v.removeEventListener("touchend",A)},h=function(e){w("pull-start"),f=(e.changedTouches?e.changedTouches[0]:e).pageY,null!=v&&v.addEventListener("touchmove",z),null!=v&&v.addEventListener("mousemove",z),null!=v&&v.addEventListener("touchend",A),null!=v&&v.addEventListener("mouseup",A)},z=function(e){var t,l;v&&(v.style.overflow="hidden",t=(e.changedTouches?e.changedTouches[0]:e).pageY-f,l=Math.abs(t),0<t?(e.preventDefault(),I=!0,l<p?(b(v,"".concat(l,"px"),0),b(T,"calc(-100% + ".concat(l,"px)"),0),y+80<=l?(E(j,0,150),M=!0,w("pull-can-refresh")):(E(j,180,150),M=!1),T.style.display="flex"):(b(v,"".concat(p,"px"),0),b(T,"calc(-100% + ".concat(p,"px)"),0),E(j,0,150),M=!0,w("pull-bottom"))):I?(e.preventDefault(),b(v,"0px",0),b(T,"calc(-100% + 0px)",0),E(j,180,0)):C())},A=function(e){var e=(e.changedTouches?e.changedTouches[0]:e).pageY-f,t=Math.abs(e);(0<e?!(t<p)||y+80<=t?n:(w("pull-rebound"),o):C)()},b=function(e,t,l){e.style.transition=e.style.webkitTransition="transform ".concat(l=void 0===l?0:l,"ms ease"),e.style.transform=e.style.webkitTransform="translate3d(0,".concat(t,",0)")},E=function(e,t,l){e.style.transition=e.style.webkitTransition="transform ".concat(l=void 0===l?0:l,"ms linear"),e.style.transform=e.style.webkitTransform="rotate(".concat(t,"deg)")},w=function(e,t){a(e,t)},C=function(){x(),g=!(I=!1),T.style.display="flex",c.value.style.display="none",L.style.display="flex",E(j,180,0),v.style.overflowY="auto",N.style.display="none"};return onMounted(function(){T=d.value,j=i.value,v=s.value,L=u.value,p=l.pullHeight<=0?200:l.pullHeight>(null==v?void 0:v.clientHeight)?null==v?void 0:v.clientHeight:l.pullHeight,y=T.clientHeight,null!=v&&v.addEventListener("touchstart",h),null!=v&&v.addEventListener("mousedown",h),null!=v&&v.addEventListener("scroll",t)}),e({resetUpdateTime:function(t){return new Promise(function(e){m.value=t||moment().valueOf(),e(null)})},getUpdateTime:function(){return m.value},refresh:n}),(N=document.querySelector(".".concat(selectorPrefix,"-mask")))||((N=document.createElement("div")).className="".concat(selectorPrefix,"-mask"),document.body.appendChild(N)),function(){var e,t;return _createVNode("div",{class:selectorPrefix},[_createVNode("div",{class:D.value,ref:s},[null==(t=null==r?void 0:r.default)?void 0:t.call(r)]),_createVNode("div",{class:"".concat(selectorPrefix,"-trigger"),ref:d},[_createVNode("div",{class:"".concat(selectorPrefix,"-trigger-inner"),ref:u},[r.icon?_createVNode("div",{class:"".concat(selectorPrefix,"-trigger-icon")},[_createVNode("div",{class:"".concat(selectorPrefix,"-trigger-icon-inner"),ref:i},[null==(t=null==r?void 0:r.icon)?void 0:t.call(r)])]):l.renderIcon?_createVNode("div",{class:"".concat(selectorPrefix,"-trigger-icon")},[_createVNode("div",{class:"".concat(selectorPrefix,"-trigger-icon-inner"),ref:i},[l.renderIcon])]):_createVNode("div",{class:"".concat(selectorPrefix,"-trigger-icon")},[_createVNode("img",{class:"".concat(selectorPrefix,"-trigger-icon-inner"),src:defaultImg,alt:"",ref:i},null)]),_createVNode("p",{class:"".concat(selectorPrefix,"-trigger-label")},[M?(null==(e=null==r?void 0:r.canLabel)?void 0:e.call(r))||l.renderCanLabel||_createVNode("span",null,[Intl.tv("松开刷新")]):(null==(e=null==r?void 0:r.label)?void 0:e.call(r))||l.renderLabel||_createVNode("span",null,[Intl.tv("下拉刷新")])]),l.isShowUpdateTime?_createVNode("p",{class:"".concat(selectorPrefix,"-trigger-update")},[Intl.tv("更新时间"),_createTextVNode("："),_createVNode("span",{class:"".concat(selectorPrefix,"-trigger-update-label")},[moment(m.value).format(l.updateTimeFormat)])]):null]),l.loadingAnimation?_createVNode("div",{class:classNames("".concat(selectorPrefix,"-trigger-refresh"),l.loadingAnimation||""),ref:c},[_createVNode("div",null,null),_createVNode("div",null,null),_createVNode("div",null,null),_createVNode("div",null,null),_createVNode("div",null,null)]):_createVNode("div",{class:"".concat(selectorPrefix,"-trigger-refresh"),ref:c},[(null==(t=null==r?void 0:r.loadingAnimation)?void 0:t.call(r))||l.renderLoadingAnimation])])])}}});
//# sourceMappingURL=pullrefresh.js.map
