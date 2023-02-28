import{createVNode as _createVNode}from"vue";import"core-js/modules/es.array.find-index.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/es.array.map.js";import classNames from"classnames";import IScroll from"iscroll/build/iscroll";import{computed,defineComponent,nextTick,onMounted,provide,ref,watch}from"vue";import{array,func,object,string}from"vue-types";var selectorPrefix="adherev-ui-jdcategorytab",jdCategoryTabProps={className:string().def(""),menuClassName:string().def(""),menuStyle:object().def({}),menuInnerClassName:string().def(""),menuInnerStyle:object().def({}),tabClassName:string().def(""),tabStyle:object().def({}),menuItemClassName:string().def(""),menuItemStyle:object().def({}),menuData:array().def([]),defaultActiveKey:string().def(""),onBeforeChange:func()};export default defineComponent({name:"adv-jdcategorytab",props:jdCategoryTabProps,slots:["menuItem"],emits:["change"],setup:function(l,e){function t(e,t,n){n=n||i.circular;var r,a,o=!0;(o=l.onBeforeChange?l.onBeforeChange(s.value,e):o)&&(m.scrollToElement((r=e,o=l.menuData.findIndex(function(e){return e.key===r}),(a=Array.from(null==(a=c.value)?void 0:a.querySelectorAll(".".concat(selectorPrefix,"-menu-item")))).length?a[o]:null),t,null,null,n),setTimeout(function(){s.value=e,nextTick(function(){u("change",e)})},t))}var n=e.slots,u=e.emit,e=e.expose,s=ref(l.defaultActiveKey),r=ref(null),c=ref(null),m=null,i=IScroll.utils.ease,a=computed(function(){return classNames("".concat(selectorPrefix,"-menu"),l.menuClassName||"")}),o=computed(function(){return classNames("".concat(selectorPrefix,"-menu-inner"),l.menuInnerClassName||"")}),f=computed(function(){return classNames("".concat(selectorPrefix,"-tab"),l.tabClassName||"")}),d=computed(function(){return function(e){return classNames("".concat(selectorPrefix,"-menu-item"),s.value===e?"active":null,l.menuItemClassName||"")}});return watch(function(){return l.defaultActiveKey},function(e){s.value=e}),onMounted(function(){m=new IScroll(r.value,{mouseWheel:!0,click:!0}),r.value.addEventListener("touchmove",function(e){e.preventDefault()})}),provide("activeKey",s),e({scrollTo:t}),function(){return _createVNode("div",{class:selectorPrefix},[_createVNode("div",{class:a.value,style:l.menuStyle,ref:r},[_createVNode("ul",{class:o.value,style:l.menuInnerStyle,ref:c},[l.menuData.map(function(e){return _createVNode("li",{key:e.key,class:d.value(e.key),style:l.menuItemStyle},[_createVNode("a",{onClick:function(){return t(e.key)}},[n.menuItem?n.menuItem(e):e.name])])})])]),_createVNode("ul",{class:f.value,style:l.tabStyle},[n.default?n.default():null])])}}});export{jdCategoryTabProps};
//# sourceMappingURL=jdcategorytab.js.map
