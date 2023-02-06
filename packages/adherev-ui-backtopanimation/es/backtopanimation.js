import{createVNode as _createVNode}from"vue";import{defineComponent,onBeforeUnmount,onMounted,ref}from"vue";import{integer,number,oneOfType,string}from"vue-types";import Resource from"@baifendian/adherev-util-resource";var selectorPrefix="adherev-ui-backtopanimation",backTopAnimationProps={className:string().def(""),zIndex:oneOfType([string(),number()]).def(Resource.Dict.value.ResourceNormalMaxZIndex.value),duration:integer().def(300)};export default defineComponent({name:"adv-backtopanimation",props:backTopAnimationProps,emits:["trigger","scrollTop","target"],setup:function(e,n){function o(){c||i("trigger",function(){var o,t,r;l&&a&&(c=!0,l.style.display="block",o=a.scrollTop,t=0,r=a.scrollHeight/(e.duration/(screen.updateInterval||16.7)+(e.duration%(screen.updateInterval||16.7)!=0?1:0)),window.requestAnimationFrame(function e(){function n(){l&&a&&(l.style.display="none",c=!1)}l&&a&&(a&&a.scrollTop<t?t<o+r?o=t:o+=r:o-r<t?o=t:o-=r,a&&(a.scrollTop=o),i("scrollTop",o),a.scrollTop<t?t<=o?n():window.requestAnimationFrame(e):o<=t?n():window.requestAnimationFrame(e))}))})}var i=n.emit,t=ref(),a=null,l=null,c=!1,r=(onMounted(function(){u(),r()}),onBeforeUnmount(function(){var e;if(l)try{null!=(e=null==l?void 0:l.parentElement)&&e.removeChild(l)}catch(e){}}),function(){i("target",function(e){a=e,l&&a&&a.addEventListener("scroll",function(){l&&a&&t.value&&(0!==a.scrollTop?t.value&&(t.value.style.display="block"):t.value&&(t.value.style.display="none"))},!1)})}),u=function(){(l=document.body.querySelector(".".concat(selectorPrefix,"-mask")))||((l=document.createElement("div")).className="".concat(selectorPrefix,"-mask"),document.body.appendChild(l))};return function(){return _createVNode("div",{ref:t,class:selectorPrefix,onClick:function(){o()}},null)}}});export{backTopAnimationProps};
//# sourceMappingURL=backtopanimation.js.map
