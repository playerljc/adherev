import{mergeProps as _mergeProps,createVNode as _createVNode,isVNode as _isVNode}from"vue";import"core-js/modules/es.object.to-string.js";import{__rest,__spreadArray}from"tslib";import{Button,Modal}from"ant-design-vue";import{defineComponent,toRaw}from"vue";import{any,bool,func}from"vue-types";import Intl from"@baifendian/adherev-util-intl";function _isSlot(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!_isVNode(e)}var selectorPrefix="adherev-ui-messagedialog",props={config:any(),closeBtn:bool().def(!0),onClose:func()};export default defineComponent({props:props,slots:["title","footer"],setup:function(t,e){function r(){var e;return _createVNode(Button,{key:"close",type:t.config.footerJSX?void 0:"primary",title:Intl.tv("取消"),onClick:function(){t.onClose&&t.onClose()}},_isSlot(e=Intl.tv("取消"))?e:{default:function(){return[e]}})}var n=e.slots;return function(){var e=toRaw(t.config),o=(e.footer,e.centered),e=(e.title,__rest(e,["footer","centered","title"]));return _createVNode(Modal,_mergeProps(e,{centered:null==o||o,wrapClassName:selectorPrefix,onCancel:function(){t.onClose&&t.onClose()},visible:!0}),{default:function(){return null==(e=n.default)?void 0:e.call(n);var e},title:function(){return null==(e=n.title)?void 0:e.call(n);var e},footer:function(){return e=null,t.config.footerJSX?e=t.closeBtn?_createVNode("div",null,[__spreadArray(__spreadArray([],t.config.footerJSX,!0),[r()],!1)]):_createVNode("div",null,[t.config.footerJSX]):t.closeBtn&&(e=r()),e;var e}})}}});export{selectorPrefix};
//# sourceMappingURL=modal.js.map
