import{createVNode as _createVNode}from"vue";import"core-js/modules/es.array.find.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.map.js";import classNames from"classnames";import{computed,defineComponent,onBeforeUnmount,onMounted,onUpdated,ref}from"vue";import{array,string}from"vue-types";import Util from"@baifendian/adherev-util";var positionType,selectorPrefix="adherev-ui-surnames",DURATION=100,surnamesProps=(!function(e){e.top="top",e.right="right",e.bottom="bottom",e.left="left"}(positionType=positionType||{}),{position:string().def(positionType.right),indexes:array().def([]),dataSource:array().def([])});export default defineComponent({name:"adv-surnames",props:surnamesProps,slots:["index","title","content"],emits:["scroll","before-scroll"],setup:function(e,t){function n(e){e.preventDefault(),e.stopPropagation(),A(e)}function o(e){e.preventDefault();var t=e.changedTouches[0].pageY,n=e.changedTouches[0].pageX,e=e.target,o=null==(o=Util.getTopDom)?void 0:o.call(Util,e,"".concat(selectorPrefix,"-index-item"));L=null==o?void 0:o.dataset.name,j(n,t)}function l(){h.value.style.display="none",h.value.innerText="",h.value.style.transform="translate3d(0,0,0)"}function r(e){e.preventDefault(),w=e.pageY,D=e.pageX;var e=e.target,t=null==(t=Util.getTopDom)?void 0:t.call(Util,e,"".concat(selectorPrefix,"-index-item"));L=null==t?void 0:t.dataset.name,U=!0}function a(e){if(!U)return!1;b=!0,e.preventDefault();var t=e.pageY,e=e.pageX;j(e,t)}function i(){b=U=!1,h.value.style.display="none",h.value.innerText="",h.value.style.transform="translate3d(0,0,0)"}function s(e){if(b)return b=U=!1,h.value.style.display="none",h.value.innerText="",!(h.value.style.transform="translate3d(0,0,0)");e.preventDefault(),A(e)}function c(){return q()}function u(){var e;"vertical"===k()?(x.value.style.height="".concat((null==(e=P.value)?void 0:e.offsetHeight)+50,"px"),x.value.style.width="100%"):x.value.style.height="100%"}function d(){var e,t=null==(e=P.value)?void 0:e.querySelectorAll(".".concat(selectorPrefix,"-index-item"));E=[];for(var n=0;n<t.length;n++){var o=t[n],l=o.dataset.name,r=o.getBoundingClientRect();E.push({name:l,top:r.top,bottom:r.bottom,left:r.left,right:r.right,offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,width:o.offsetWidth,height:o.offsetHeight})}}function f(o,e){void 0===e&&(e=100);var t=null==(t=y.value)?void 0:t.querySelector(".".concat(selectorPrefix,"-group-title[data-name='").concat(o,"']")),l=null==(n=y.value)?void 0:n.scrollTop,r=t.offsetTop,n=screen.updateInterval,a=(null==(t=x.value)?void 0:t.scrollHeight)/((DURATION|e)/(n||16.7)+((DURATION|e)%(n||16.7)!=0?1:0));g("before-scroll",o),window.requestAnimationFrame(function e(){var t;function n(){U=N=!1,V.style.display="none",g("scroll",o)}(null==(t=y.value)?void 0:t.scrollTop)<r?r<l+a?l=r:l+=a:l-a<r?l=r:l-=a,y.value.scrollTop=l,(null==(t=y.value)?void 0:t.scrollTop)<r?r<=l?n():window.requestAnimationFrame(e):l<=r?n():window.requestAnimationFrame(e)})}function v(e){var t;y.value.scrollTop=(null==(t=null==y?void 0:y.value)?void 0:t.querySelector(".".concat(selectorPrefix,"-group-title[data-name='").concat(e,"']"))).offsetTop,g("scroll",e)}function p(e,t){for(var n,o=k(),l="vertical"===o?t-w:e-D,r=E.find(function(e){return e.name===L}),a=0,i=E.length-1;a<=i&&a<=E.length-1&&i<=E.length-1;){var s,c=E[s=i+a>>1],u=void 0,d=void 0,f=void 0,f="vertical"===o?(u=(null==r?void 0:r.top)+l,null==r||r.bottom,d=c.top,c.bottom):(u=(null==r?void 0:r.left)+l,null==r||r.right,d=c.left,c.right);if(d<=u&&u<=f){n=c;break}u<d?i=s-1:a=1+s}return n||null}var m=t.slots,g=t.emit,t=t.expose,x=ref(),h=ref(),y=ref(),T=ref(),P=ref(),N=!1,U=!1,b=!1,w=-1,D=-1,L="",E=[],V=null,_=computed(function(){return classNames(selectorPrefix,"".concat(selectorPrefix,"-config-position-").concat(e.position))}),A=function(e){var t=e.target;if(e.preventDefault(),N)return!1;N=!0,V.style.display="block";e=null==(e=Util.getTopDom)?void 0:e.call(Util,t,"".concat(selectorPrefix,"-index-item"));f(null==(t=null==e?void 0:e.dataset)?void 0:t.name)},j=function(e,t){e=p(e,t);e&&(h.value.innerText=e.name,h.value.style.display="block","vertical"===k()?(t=e.offsetTop+Math.floor(e.height/2),h.value.style.transform="translate3d(0,".concat(t,"px,0)")):(t=e.offsetLeft+e.width,h.value.style.transform="translate3d(".concat(t,"px,0,0)")),v(e.name))},k=function(){return"left"===e.position||"right"===e.position?"vertical":"horizontal"},q=function(){u(),d()};return onMounted(function(){var e;null!=(e=Util.isTouch)&&e.call(Util)?(null!=(e=P.value)&&e.addEventListener("click",n),null!=(e=P.value)&&e.addEventListener("touchmove",o),null!=(e=P.value)&&e.addEventListener("touchend",l)):(null!=(e=P.value)&&e.addEventListener("mousedown",r),null!=(e=P.value)&&e.addEventListener("mousemove",a),null!=(e=P.value)&&e.addEventListener("mouseleave",i),null!=(e=P.value)&&e.addEventListener("mouseup",s),window.addEventListener("resize",c)),(e=document.createElement("div")).innerHTML="<div class='".concat(selectorPrefix,"-mask'></div>"),V=e.firstElementChild,document.body.appendChild(V),u(),d()}),onUpdated(function(){u(),d()}),onBeforeUnmount(function(){var e;V&&null!=(e=null==V?void 0:V.parentElement)&&e.removeChild(V)}),t({scrollToAnimation:f,scrollTo:v}),function(){return _createVNode("div",{class:_.value,ref:x},[_createVNode("div",{class:"".concat(selectorPrefix,"-highlighted"),ref:h},null),_createVNode("div",{class:"".concat(selectorPrefix,"-content"),ref:y},[e.dataSource.map(function(e){var t;return _createVNode("div",{key:e.index,class:"".concat(selectorPrefix,"-group")},[_createVNode("a",{class:"".concat(selectorPrefix,"-group-title"),"data-name":e.index},[m.title?null==(t=null==m?void 0:m.title)?void 0:t.call(m,e):e.index]),_createVNode("div",{class:"".concat(selectorPrefix,"-group-inner")},[m.content?null==(t=null==m?void 0:m.content)?void 0:t.call(m,e):null])])})]),_createVNode("div",{class:"".concat(selectorPrefix,"-index"),ref:T},[_createVNode("div",{class:"".concat(selectorPrefix,"-index-inner"),ref:P},[e.indexes.map(function(e){var t;return _createVNode("a",{key:e.index,class:"".concat(selectorPrefix,"-index-item"),"data-name":e.index},[m.index?null==(t=null==m?void 0:m.index)?void 0:t.call(m,e):e.index])})])])])}}});export{surnamesProps};
//# sourceMappingURL=surnames.js.map
