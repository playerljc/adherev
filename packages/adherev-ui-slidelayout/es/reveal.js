import{createVNode as _createVNode,Fragment as _Fragment}from"vue";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.split.js";import{__assign}from"tslib";import classNames from"classnames";import{defineComponent,onMounted,ref,watch}from"vue";import{object,string}from"vue-types";import useSlide,{slideProps}from"./slide";import{slider}from"./slidelayout";var selectorPrefix="adherev-ui-slidelayout-reveal",revealProps=__assign(__assign({},slideProps),{masterClassName:string().def(""),masterStyle:object().def({}),slaveClassName:string().def(""),slaveStyle:object().def({})});export default defineComponent({name:"adv-slidelayout-reveal",props:revealProps,slots:["slide","master"],emits:["after-show","after-close"],setup:function(l,e){var t=e.slots,n=e.emit,a=ref(),e=useSlide(l,e),s=e.getElRef,o=e.setPositionConfig,r=e.getDuration,i=e.initial;return watch(function(){return l.zIndex},function(e){s().value.style.zIndex="".concat(e),a.value.style.zIndex="".concat(e+1)}),onMounted(function(){o(function(e){var t=e.el,s=e.maskEl;return{init:{left:function(){t.value.style.zIndex=l.zIndex,a.value.style.zIndex="".concat(l.zIndex+1),t.value.style.left="0"},right:function(){t.value.style.zIndex=l.zIndex,a.value.style.zIndex="".concat(l.zIndex+1),t.value.style.right="0"}},show:{left:function(e){t.value.style.zIndex=l.zIndex,s&&(s.style.zIndex=l.zIndex-1),a.value.style.zIndex="".concat(l.zIndex-2),slider(a.value,"".concat(t.value.offsetWidth,"px"),"0","0","".concat(r(e),"ms"),function(){n("after-show")}),s&&(s.style.display="block")},right:function(e){t.value.style.zIndex=l.zIndex,s&&(s.style.zIndex=l.zIndex-1),a.value.style.zIndex="".concat(l.zIndex-2),slider(a.value,"-".concat(t.value.offsetWidth,"px"),"0","0","".concat(r(e),"ms"),function(){n("after-show")}),s&&(s.style.display="block")}},close:{left:function(e){t.value.style.zIndex=l.zIndex,a.value.style.zIndex="".concat(l.zIndex+1),slider(a.value,"0","0","0","".concat(r(e),"ms"),function(){n("after-close")}),s&&(s.style.display="none")},right:function(e){t.value.style.zIndex=l.zIndex,a.value.style.zIndex="".concat(l.zIndex+1),slider(a.value,"0","0","0","".concat(r(e),"ms"),function(){n("after-close")}),s&&(s.style.display="none")}}}}).then(function(){return i()})}),function(){var e;return _createVNode(_Fragment,null,[_createVNode("div",{class:classNames("".concat(selectorPrefix),l.direction,(l.slaveClassName||"").split(/\s+/)),style:l.slaveStyle,ref:s()},[null==(e=null==t?void 0:t.slide)?void 0:e.call(t)]),_createVNode("div",{class:classNames("".concat(selectorPrefix,"-master"),(l.masterClassName||"").split(/\s+/)),style:l.masterStyle,ref:a},[null==(e=null==t?void 0:t.master)?void 0:e.call(t)])])}}});export{revealProps};
//# sourceMappingURL=reveal.js.map
