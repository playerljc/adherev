import{createVNode as _createVNode}from"vue";import classNames from"classnames";import{defineComponent,onBeforeMount,onMounted,onUpdated,ref}from"vue";import{object,string}from"vue-types";var selectorPrefix="adherev-ui-stickuplayout",stickupLayoutProps={fixedClassName:string().def(""),fixedStyle:object().def({}),innerClassName:string().def(""),innerStyle:object().def({})};export default defineComponent({name:"adv-stickuplayout",props:stickupLayoutProps,emits:["change"],setup:function(n,e){function o(){var e;c=!1,v=[],a=null==(e=r.value)?void 0:e.querySelectorAll(".".concat(selectorPrefix,"-item-header")),p(),h(),null!=(e=u.value)&&e.removeEventListener("scroll",y),null!=(e=u.value)&&e.addEventListener("scroll",y)}function t(e,n){e=e.start+a[e.index].offsetHeight,0===(n=void 0===n?300:n)?u.value.scrollTop=e:x(e,n)}function i(){f||((f=document.createElement("div")).className="".concat(selectorPrefix,"-mask"),window.document.body.appendChild(f))}var a,l=e.slots,d=e.emit,e=e.expose,r=ref(),s=ref(),u=ref(),c=!1,f=null,v=[],m=null,p=function(){var e,n=0;v=[],m=null;for(var o=0,l=a.length;o<l;o++){var t=a[o],r=n,i=void 0,i=o!==l-1?a[o+1].offsetTop-t.offsetHeight:null==(e=u.value)?void 0:e.scrollHeight;if(v.push({start:r,end:i,dom:t,index:o}),(n=i)>(null==(e=u.value)?void 0:e.scrollHeight)-(null==(r=u.value)?void 0:r.offsetHeight))break}},h=function(){for(var e,n,o=null==(e=u.value)?void 0:e.scrollTop,l=0,t=v.length-1;l<=t&&l<=v.length-1&&t<=v.length-1;){var r,i=v[r=t+l>>1];if(o>=i.start&&o<i.end){n=i;break}o<i.start?t=r-1:l=1+r}if(n){if(m&&m.index===n.index)return!1;m=n,s.value.innerHTML=n.dom.outerHTML,d("change",n.index)}},y=function(){return h()},x=function(o,e){var n,l,t,r;void 0===o&&(o=0),void 0===e&&(e=300),c||(i(),c=!0,f.style.display="block",l=null==(n=u.value)?void 0:n.scrollTop,t=l,r=(null==(n=u.value)?void 0:n.scrollHeight)/(e/((null==(n=window.screen)?void 0:n.updateInterval)||16.7)+(e%((null==(n=window.screen)?void 0:n.updateInterval)||16.7)!=0?1:0)),window.requestAnimationFrame(function e(){function n(){c=!1,f.style.display="none"}l<o?o<t+r?t=o:t+=r:t-r<o?t=o:t-=r,u.value.scrollTop=t,l<o?o<=t?n():"undefined"!=typeof window&&window.requestAnimationFrame(e):t<=o?n():"undefined"!=typeof window&&window.requestAnimationFrame(e)}))};return e({refresh:o,scrollToByIndex:function(e,n){void 0===n&&(n=300);for(var o,l=0;l<v.length;l++)if(v[l].index===e){o=v[l];break}o=o||v[v.length-1],t(o,n)},scrollToByHeaderEl:function(e,n){void 0===n&&(n=300);for(var o,l=0;l<v.length;l++)if(v[l].dom===e){o=v[l],0;break}o=o||v[v.length-1],t(o,n)}}),onMounted(function(){o()}),onUpdated(function(){o()}),onBeforeMount(function(){var e,n;f&&null!=(n=null==(e=null==f?void 0:f.parentElement)?void 0:e.removeChild)&&n.call(e,f)}),function(){var e;return _createVNode("div",{class:selectorPrefix,ref:r},[_createVNode("div",{class:classNames("".concat(selectorPrefix,"-fixed"),n.fixedClassName||""),style:n.fixedStyle,ref:s},null),_createVNode("div",{class:classNames("".concat(selectorPrefix,"-inner"),n.innerClassName||""),style:n.innerStyle,ref:u},[null==(e=null==l?void 0:l.default)?void 0:e.call(l)])])}}});
//# sourceMappingURL=stickuplayout.js.map
