import{mergeProps as _mergeProps,createVNode as _createVNode}from"vue";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import{__assign}from"tslib";import omit from"omit.js";import{defineComponent,ref,watch}from"vue";import{string}from"vue-types";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import Card from"./Card";import CodePanel,{codePanelProps}from"./CodePanel";import PlayGroundBase,{playGroundBaseProps}from"./PlayGroundBase";var playGroundProps=__assign(__assign(__assign({},codePanelProps),playGroundBaseProps),{codeText:string().def("")});export default defineComponent({name:"adv-playground",props:playGroundProps,setup:function(r,e){function n(){return Promise.resolve(r.codeText)}function t(e){i.value=!e}var a=e.slots,d=omit(playGroundBaseProps,["getClipboardText","defaultExpand"]),i=ref(r.defaultExpand);return watch(function(){return r.defaultExpand},function(e){return i.value=e}),function(){var e,o={};for(e in d)o[e]=r[e];return _createVNode(PlayGroundBase,_mergeProps(o,{defaultExpand:i.value,getClipboardText:n,onExpand:t}),{default:function(){var e;return null==(e=null==a?void 0:a.default)?void 0:e.call(a)},codeView:function(){return _createVNode(ConditionalRender.Show,{conditional:i.value},{default:function(){return[_createVNode(Card,null,{default:function(){return[_createVNode(CodePanel,{lang:r.lang,codeText:r.codeText},null)]}})]}})}})}}});export{playGroundProps};
//# sourceMappingURL=PlayGround.js.map
