import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import classNames from"classnames";import moment from"moment";import Intl from"@baifendian/adherev-util-intl";import Resource from"@baifendian/adherev-util-resource";var selectorPrefix="adherev-ui-pullrefresh",defaultImg="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHN0eWxlPSJ3aWR0aDozMDhweDtoZWlnaHQ6MzA4cHg7IiB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lvaIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VjZjBmMSIgZD0iTTc5Ny43NjQ0MiAzMjYuNTU4NDFjLTguODg0MTk5LTE1LjU2MzMyNy0yNTIuODgwMS0yODYuODE5MDE5LTI2OC4zNzk1MTItMzEzLjU2NzQ4OS0xMC4xMzA1NDQtMTcuNDQ4ODIzLTM0LjI1ODQ5NS0xNy4xOTMxNjItNDQuMzg5MDM4IDBDNDczLjY1MDkzOSAzMi4yNjEzMjQgMjMwLjk5NzI1NSAzMDQuNjM1NTMgMjE4LjM3NDAyMyAzMjcuNDIxMjY0Yy05LjIzNTczMiAxNi41NTQwMTEgMC45NTg3MjcgMzguMzgxMDE5IDIxLjk1NDgzNyAzOC4zODEwMTlsMTE5LjkwNDczMSAwIDAgMjU2LjQ5MTMwMyAwIDM2Ljc4MzE0MSAyOTEuODM2MzU0IDAgMC0yOTMuMzA2NDAyIDEyMy41Nzk4NDkgMEM3OTQuNjk2NDk1IDM2NS43NzAzMjUgODA4Ljk0OTU2MiAzNDYuMTE2NDMxIDc5Ny43NjQ0MiAzMjYuNTU4NDF6IiAvPg0KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMSIgZmlsbD0iI2VjZjBmMSIgZD0iTTM2MC4yMDE2MzMgNjg5LjY5MjA2MWwyOTIuMzE1NzE4IDAgMCA5MC45MTkyMzItMjkyLjMxNTcxOCAwIDAtOTAuOTE5MjMyWiIgLz4NCjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzIiIGZpbGw9IiNlY2YwZjEiIGQ9Ik0zNjAuMjAxNjMzIDg0MC45MTUxOTFsMjkyLjMxNTcxOCAwIDAgNjAuNTkxNTE2LTI5Mi4zMTU3MTggMCAwLTYwLjU5MTUxNloiIC8+DQo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWNmMGYxIiBkPSJNMzYwLjIwMTYzMyA5OTIuMzkzOTgybDI5MC40MzAyMjIgMCAwIDMwLjI5NTc1OC0yOTAuNDMwMjIyIDAgMC0zMC4yOTU3NThaIiAvPg0KDQo8L3N2Zz4NCg==",PullRefresh={name:"adv-pullrefresh",props:{className:{type:String,default:""},scrollClassName:{type:String,default:""},pullHeight:{type:Number,default:200},isShowUpdateTime:{type:Boolean,default:!0},updateTime:{type:Number,default:moment().valueOf()},updateTimeFormat:{type:String,default:Resource.Dict.value.ResourceMomentFormat18.value()},loadingAnimation:{type:String,default:"la-ball-circus la-dark",isRequired:!1},renderIcon:{type:Object,default:function(){return null}},renderCanLabel:{type:Object,default:function(){return null}},renderLabel:{type:Object,default:function(){return null}},renderLoadingAnimation:{type:Object,default:function(){return null}}},slots:["icon","canLabel","label","loadingAnimation"],emits:["pull-start","pull-can-refresh","pull-bottom","pull-rebound","pull-refresh"],data:function(){return{isCan:!1,preUpdateTime:(new Date).getTime(),$maskEl:null,$el:null,$iconEl:null,$scrollEl:null,$triggerInnerEl:null,$pullHeight:200,$refreshHeight:0,$startPageY:null,$isDownPull:!1,$isTop:!0}},computed:{getScrollClassName:function(){var e=this.scrollClassName;return classNames(selectorPrefix+"-scroll",e||"")}},methods:{$renderIcon:function(e){return this.$slots.icon?e("div",{class:selectorPrefix+"-trigger-icon"},[e("div",{class:selectorPrefix+"-trigger-icon-inner",ref:"iconElRef"},[this.$slots.icon])]):this.renderIcon?e("div",{class:selectorPrefix+"-trigger-icon"},[e("div",{class:selectorPrefix+"-trigger-icon-inner",ref:"iconElRef"},[this.renderIcon])]):e("div",{class:selectorPrefix+"-trigger-icon"},[e("img",{class:selectorPrefix+"-trigger-icon-inner",attrs:{src:defaultImg,alt:""},ref:"iconElRef"})])},$renderLabel:function(e){return e("p",{class:selectorPrefix+"-trigger-label"},[this.isCan?this.$slots.canLabel||this.renderCanLabel||e("span",[Intl.tv("松开刷新")]):this.$slots.label||this.renderLabel||e("span",[Intl.tv("下拉刷新")])])},$renderUpdateTime:function(e){var t=this,r=t.isShowUpdateTime,i=t.updateTimeFormat,t=t.preUpdateTime;return r?e("p",{class:selectorPrefix+"-trigger-update"},[Intl.tv("更新时间"),"：",e("span",{class:selectorPrefix+"-trigger-update-label"},[moment(t).format(i)])]):null},$renderLoadingAnimation:function(e){var t=this.$slots,r=this.loadingAnimation;return r?e("div",{class:classNames(selectorPrefix+"-trigger-refresh",r||""),ref:"refreshElRef"},[e("div"),e("div"),e("div"),e("div"),e("div")]):e("div",{class:selectorPrefix+"-trigger-refresh",ref:"refreshElRef"},[t.loadingAnimation||this.renderLoadingAnimation])},$renderMask:function(){var e=this.$data;e.$maskEl=document.querySelector("."+selectorPrefix+"-mask"),e.$maskEl||(e.$maskEl=document.createElement("div"),e.$maskEl.className=selectorPrefix+"-mask",document.body.appendChild(e.$maskEl))},getPullHeight:function(){var e=this.$data,t=this.pullHeight;return t<=0?200:t>e.$scrollEl.clientHeight?e.$scrollEl.clientHeight:t},addEvents:function(){var e=this.$data.$scrollEl;e.addEventListener("touchstart",this.onTouchStart),e.addEventListener("mousedown",this.onTouchStart),e.addEventListener("scroll",this.onScroll)},removeEvents:function(){var e=this.$data.$scrollEl;e.removeEventListener("mousemove",this.onTouchMove),e.removeEventListener("mouseup",this.onTouchEnd),e.removeEventListener("touchmove",this.onTouchMove),e.removeEventListener("touchend",this.onTouchEnd)},onTouchStart:function(e){var t=this.$data;this.trigger("pull-start"),t.$startPageY=(e.changedTouches?e.changedTouches[0]:e).pageY;t=t.$scrollEl;t.addEventListener("touchmove",this.onTouchMove),t.addEventListener("mousemove",this.onTouchMove),t.addEventListener("touchend",this.onTouchEnd),t.addEventListener("mouseup",this.onTouchEnd)},onTouchMove:function(e){var t=this.$data,r=t.$scrollEl,i=t.$el,s=t.$startPageY,n=t.$refreshHeight,l=t.$iconEl,a=t.$pullHeight;r.style.overflow="hidden";var o=(e.changedTouches?e.changedTouches[0]:e).pageY-s,s=Math.abs(o);0<o?(e.preventDefault(),t.$isDownPull=!0,s<t.$pullHeight?(this.translateY(r,s+"px",0),this.translateY(i,"calc(-100% + "+s+"px)",0),n+80<=s?(this.rotateIcon(l,0,150),this.isCan=!0,this.trigger("pull-can-refresh")):(this.rotateIcon(l,180,150),this.isCan=!1),i.style.display="flex"):(this.translateY(r,a+"px",0),this.translateY(i,"calc(-100% + "+a+"px)",0),this.rotateIcon(l,0,150),this.isCan=!0,this.trigger("pull-bottom"))):t.$isDownPull?(e.preventDefault(),this.translateY(r,"0px",0),this.translateY(i,"calc(-100% + 0px)",0),this.rotateIcon(l,180,0)):this.clear()},onTouchEnd:function(e){var t=this.$data,r=t.$startPageY,i=t.$pullHeight,t=t.$refreshHeight,e=(e.changedTouches?e.changedTouches[0]:e).pageY-r,r=Math.abs(e);0<e?!(r<i)||t+80<=r?this.refresh():(this.trigger("pull-rebound"),this.reset()):this.clear()},onScroll:function(e){var t=this.$data,r=t.$scrollEl;0===e.target.scrollTop?(t.$isTop=!0,r.addEventListener("touchstart",this.onTouchStart),r.addEventListener("mousedown",this.onTouchStart)):t.$isTop&&(t.$isTop=!1,r.removeEventListener("touchstart",this.onTouchStart),r.removeEventListener("mousedown",this.onTouchStart))},translateY:function(e,t,r){e.style.transition=e.style.webkitTransition="transform "+(r=void 0===r?0:r)+"ms ease",e.style.transform=e.style.webkitTransform="translate3d(0,"+t+",0)"},rotateIcon:function(e,t,r){e.style.transition=e.style.webkitTransition="transform "+(r=void 0===r?0:r)+"ms linear",e.style.transform=e.style.webkitTransform="rotate("+t+"deg)"},trigger:function(e,t){this.$emit(e,t)},clear:function(){this.removeEvents();var e=this.$data;e.$isDownPull=!1,e.$isTop=!0,e.$el.style.display="flex",this.$refs.refreshElRef.style.display="none",e.$triggerInnerEl.style.display="flex",this.rotateIcon(e.$iconEl,180,0),e.$scrollEl.style.overflowY="auto",e.$maskEl.style.display="none"},refresh:function(){var t=this;var e=this.$data,r=e.$maskEl,i=e.$scrollEl,s=e.$el,n=e.$iconEl,l=e.$refreshHeight,a=e.$triggerInnerEl;r.style.display="block",this.removeEvents(),i.addEventListener("transitionend",function e(){a.style.display="none",t.$refs.refreshElRef.style.display="block",t.trigger("pull-refresh",t),i.removeEventListener("transitionend",e),t.preUpdateTime=moment().valueOf()}),this.translateY(i,l+"px",500),this.translateY(s,"calc(-100% + "+l+"px)",500),this.rotateIcon(n,180,300)},reset:function(){var e=this.$data,t=e.$scrollEl,r=e.$triggerInnerEl,e=e.$el;this.clear(),t.addEventListener("transitionend",function e(){t.removeEventListener("transitionend",e),r.style.display="flex"}),this.translateY(t,"0px",200),this.translateY(e,"calc(-100% + 0px)",200)},resetUpdateTime:function(t){var r=this;return new Promise(function(e){r.preUpdateTime=t||moment().valueOf(),e()})},getUpdateTime:function(){return this.preUpdateTime}},created:function(){this.$renderMask()},mounted:function(){var e=this.$data,t=this.$refs;e.$el=t.elRef,e.$iconEl=t.iconElRef,e.$scrollEl=t.scrollElRef,e.$triggerInnerEl=t.triggerInnerElRef,e.$pullHeight=this.getPullHeight(),e.$refreshHeight=e.$el.clientHeight,this.addEvents()},render:function(e){var t=this.$slots;return e("div",{class:selectorPrefix},[e("div",{class:this.getScrollClassName,ref:"scrollElRef"},[t.default]),e("div",{class:selectorPrefix+"-trigger",ref:"elRef"},[e("div",{class:selectorPrefix+"-trigger-inner",ref:"triggerInnerElRef"},[this.$renderIcon(e),this.$renderLabel(e),this.$renderUpdateTime(e)]),this.$renderLoadingAnimation(e)])])}};export default PullRefresh;
//# sourceMappingURL=pullrefresh.js.map
