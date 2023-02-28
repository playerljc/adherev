import{createTextVNode as _createTextVNode,createVNode as _createVNode}from"vue";import classNames from"classnames";import{computed,defineComponent,onBeforeUnmount,onMounted,ref}from"vue";import{func,number,object,string}from"vue-types";import Intl from"@baifendian/adherev-util-intl";var selectorPrefix="adherev-ui-scrollload",EMPTY="empty",ERROR="error",NORMAL="normal",scrollLoadProps={loadClassName:string().def(""),loadStyle:object().def({}),emptyClassName:string().def(""),emptyStyle:object().def({}),errorClassName:string().def(""),errorStyle:object().def({}),distance:number().def(50),getScrollContainer:func(),renderLoading:object(),renderEmpty:object(),renderError:object()};export default defineComponent({name:"adv-scrollload",props:scrollLoadProps,slots:["loading","empty","error"],emits:["scrollBottom","emptyClick","errorClick"],setup:function(a,e){function l(){var e=v.value,l=i.value,r=c.value,o=d.value,t=e.scrollHeight-e.offsetHeight,e=e.scrollTop;Math.abs(e-t)<=a.distance&&(u||(u=!0,l.style.display="flex",n("scrollBottom",function(e){l.style.display="none",e===EMPTY?r.style.display="block":e===ERROR&&(o.style.display="block"),u=!1})))}function r(){return n("emptyClick")}function o(){return n("errorClick")}var n=e.emit,t=e.slots,e=e.expose,s=ref(),c=ref(),d=ref(),i=ref(),u=!1,v=computed(function(){return a.getScrollContainer&&a.getScrollContainer()||s.value}),m=computed(function(){var e;return"overflow-y: ".concat((null==(e=null==a?void 0:a.getScrollContainer)?void 0:e.call(a))===s.value?"auto":"initial")});return e({hideAll:function(){var e=i.value,l=c.value,r=d.value;e.style.display="none",r.style.display="none",l.style.display="none"}}),onBeforeUnmount(function(){var e;null!=(e=null==v?void 0:v.value)&&e.removeEventListener("scroll",l),null!=(e=null==c?void 0:c.value)&&e.removeEventListener("click",r),null!=(e=null==d?void 0:d.value)&&e.removeEventListener("click",o)}),onMounted(function(){var e;null!=(e=null==v?void 0:v.value)&&e.addEventListener("scroll",l),null!=(e=null==c?void 0:c.value)&&e.addEventListener("click",r),null!=(e=null==d?void 0:d.value)&&e.addEventListener("click",o)}),function(){var e;return _createVNode("div",{class:selectorPrefix,style:m.value,ref:s},[null==(e=null==t?void 0:t.default)?void 0:e.call(t),t.loading||a.renderLoading?_createVNode("div",{class:classNames("".concat(selectorPrefix,"-load"),a.loadClassName||""),style:a.loadStyle,ref:i},[(null==(e=null==t?void 0:t.loading)?void 0:e.call(t))||a.renderLoading]):_createVNode("div",{class:classNames("".concat(selectorPrefix,"-load"),"standard",a.loadClassName||""),style:a.loadStyle,ref:i},[Intl.tv("数据加载中")]),t.empty||a.renderEmpty?_createVNode("div",{class:classNames("".concat(selectorPrefix,"-empty"),a.emptyClassName||""),style:a.emptyStyle,ref:c},[(null==(e=null==t?void 0:t.empty)?void 0:e.call(t))||a.renderEmpty]):_createVNode("div",{class:classNames("".concat(selectorPrefix,"-empty"),a.emptyClassName||""),style:a.emptyStyle,ref:c},[_createTextVNode("~"),Intl.tv("没有更多")]),t.error||a.renderError?_createVNode("div",{class:classNames("".concat(selectorPrefix,"-error"),a.errorClassName||""),style:a.errorStyle,ref:d},[(null==(e=null==t?void 0:t.error)?void 0:e.call(t))||a.renderError]):_createVNode("div",{class:classNames("".concat(selectorPrefix,"-error"),a.errorClassName||""),style:a.errorStyle,ref:d},[Intl.tv("出现错误")])])}}});export{EMPTY,ERROR,NORMAL,scrollLoadProps};
//# sourceMappingURL=scrollload.js.map
