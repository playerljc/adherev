import{createVNode as _createVNode}from"vue";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.split.js";import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import classNames from"classnames";import{computed,defineComponent,inject,ref}from"vue";import{array,object,string}from"vue-types";import MenuItem from"./MenuItem";var selectorPrefix="adherev-ui-contextmenu-submenu",menuProps={data:array().def([]),className:string().def(""),style:object().def({})};export default defineComponent({props:menuProps,setup:function(e,t){var t=t.expose,c=ref(null),u=inject("context"),o=computed(function(){return __assign(__assign({},e.style),{width:"".concat(u.config.width,"px"),zIndex:199999})}),n=computed(function(){return classNames(selectorPrefix,(e.className||"").split(/\s+/))});return t({mount:function(){var e=u.config.x,t=u.config.y,o=null==(o=c.value)?void 0:o.offsetWidth,n=null==(n=c.value)?void 0:n.offsetHeight,r=document.body.clientWidth||document.documentElement.clientWidth,s=document.body.clientHeight||document.documentElement.clientHeight;s-t<n&&(t=s-n),c.value.style.left="".concat(e=r-e<o?r-o:e,"px"),c.value.style.top="".concat(t,"px")}}),function(){return _createVNode("ul",{class:n.value,style:o.value,ref:c},[e.data.map(function(e){return _createVNode(MenuItem,{key:e.id,data:e},null)})])}}});export{menuProps};
//# sourceMappingURL=Menu.js.map
