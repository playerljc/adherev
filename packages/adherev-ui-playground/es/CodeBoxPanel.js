import{mergeProps as _mergeProps,createVNode as _createVNode}from"vue";import"core-js/modules/es.array.fill.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.map.js";import{__rest}from"tslib";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import{computed,defineComponent,onBeforeMount,onMounted,ref,watch}from"vue";import{array,bool,number,object,oneOfType,string}from"vue-types";import Constant from"./constant";import PlayGround from"./PlayGround";import PlayGroundMulit from"./PlayGroundMulit";import PlayGroundTab from"./PlayGroundTab";var selectPrefix="adherev-ui-playground-code-box",codeBoxPanelProps={title:oneOfType([string(),object()]),extra:object(),isShowExpandAllBtn:bool().def(!0),columnCount:number().def(1),defaultExpandAll:bool().def(!1),config:array().def([])};export default defineComponent({name:"adv-playground-code-box-panel",props:codeBoxPanelProps,setup:function(d,e){function o(){u.value=window.location.hash.substring(1)}var c=e.slots,u=ref(""),s=ref(d.defaultExpandAll),n=!1,t=computed(function(){var e=[];return null!=d.columnCount&&(e.length=d.columnCount),e.fill(0),e}),r=new Map([["PlayGround",function(o,n){var e,t=d.config[n],r=(t.type,t.childrenSlot),i=t.wrapSlot,l=t.id,t=__rest(t,["type","childrenSlot","wrapSlot","id"]),a=_createVNode(PlayGround,_mergeProps(t,{id:l,isActive:u.value===l,defaultExpand:s.value}),{default:function(){return[_createVNode(ConditionalRender,{conditional:!!c[r]},{default:function(){return[null===(e=c[r])||void 0===e?void 0:e.call(c,{columnIndex:o,index:n,config:d.config})]}})]}});return _createVNode(ConditionalRender,{conditional:!!c[i]},{default:function(){var e;return null===(e=c[i])||void 0===e?void 0:e.call(c,{columnIndex:o,index:n,config:d.config,children:a})},noMatch:function(){return a}})}],["PlayGroundMulit",function(o,n){var e,t=d.config[n],r=(t.type,t.childrenSlot),i=t.wrapSlot,l=t.id,t=__rest(t,["type","childrenSlot","wrapSlot","id"]),a=_createVNode(PlayGroundMulit,_mergeProps(t,{id:l,isActive:u.value===l,defaultExpand:s.value}),{default:function(){return[_createVNode(ConditionalRender,{conditional:!!c[r]},{default:function(){return[null===(e=c[r])||void 0===e?void 0:e.call(c,{columnIndex:o,index:n,config:d.config})]}})]}});return _createVNode(ConditionalRender,{conditional:!!c[i]},{default:function(){var e;return null===(e=c[i])||void 0===e?void 0:e.call(c,{columnIndex:o,index:n,config:d.config,children:a})},noMatch:function(){return a}})}],["PlayGroundTab",function(o,n){var e,t=d.config[n],r=(t.type,t.childrenSlot),i=t.wrapSlot,l=t.id,t=__rest(t,["type","childrenSlot","wrapSlot","id"]),a=_createVNode(PlayGroundTab,_mergeProps(t,{id:l,isActive:u.value===l,defaultExpand:s.value}),{default:function(){return[_createVNode(ConditionalRender,{conditional:!!c[r]},{default:function(){return[null===(e=c[r])||void 0===e?void 0:e.call(c,{columnIndex:o,index:n,config:d.config})]}})]}});return _createVNode(ConditionalRender,{conditional:!!c[i]},{default:function(){var e;return null===(e=c[i])||void 0===e?void 0:e.call(c,{columnIndex:o,index:n,config:d.config,children:a})},noMatch:function(){return a}})}]]);return watch(s,function(){n=!1}),watch(function(){return d.defaultExpandAll},function(e){return s.value=e}),onMounted(function(){"undefined"!=typeof window&&window.addEventListener("hashchange",o)}),onBeforeMount(function(){"undefined"!=typeof window&&window.removeEventListener("hashchange",o)}),function(){return _createVNode("div",{class:selectPrefix},[_createVNode("div",{class:"".concat(selectPrefix,"-header")},[_createVNode(ConditionalRender,{conditional:!!d.title},{default:function(){return[_createVNode("div",{class:"".concat(selectPrefix,"-header-title")},[d.title])]}}),_createVNode("div",{class:"".concat(selectPrefix,"-header-extra")},[_createVNode(ConditionalRender,{conditional:d.isShowExpandAllBtn},{default:function(){return[_createVNode(ConditionalRender,{conditional:s.value},{default:function(){return _createVNode("img",{class:"".concat(selectPrefix,"-expand-code"),src:Constant.CloseCodeAll,alt:"",onClick:function(){n||(n=!0,s.value=!1)}},null)},noMatch:function(){return _createVNode("img",{class:"".concat(selectPrefix,"-expand-code"),src:Constant.ExpandCodeAll,alt:"",onClick:function(){n||(n=!0,s.value=!0)}},null)}})]}}),_createVNode(ConditionalRender,{conditional:!!d.extra},{default:function(){return[d.extra]}})])]),_createVNode("div",{class:"".concat(selectPrefix,"-main")},[t.value.map(function(e,n){return _createVNode("div",{class:"".concat(selectPrefix,"-column")},[d.config.map(function(e,o){return o%d.columnCount===n?_createVNode("div",{class:"".concat(selectPrefix,"-item"),key:e.id},[null===(e=null==r?void 0:r.get(e.type))||void 0===e?void 0:e(n,o)]):null})])})])])}}});
//# sourceMappingURL=CodeBoxPanel.js.map
