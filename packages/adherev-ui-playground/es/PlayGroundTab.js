import{mergeProps as _mergeProps,createVNode as _createVNode}from"vue";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.array.find.js";import{__assign}from"tslib";import omit from"omit.js";import{defineComponent,ref,watch}from"vue";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import Card from"./Card";import CodeTabPanel,{codeTabPanelProps}from"./CodeTabPanel";import PlayGroundBase,{playGroundBaseProps}from"./PlayGroundBase";var playGroundTabProps=__assign(__assign({},playGroundBaseProps),codeTabPanelProps);export default defineComponent({name:"adv-playground-tab",props:playGroundTabProps,setup:function(r,e){function n(){var e;return Promise.resolve(null==(e=r.config.find(function(e){return e.key===d.value}))?void 0:e.codeText)}function a(e){i.value=!e}var t=e.slots,u=omit(playGroundBaseProps,["getClipboardText","defaultExpand"]),i=ref(r.defaultExpand),d=ref(r.active);return watch(function(){return r.defaultExpand},function(e){return i.value=e}),watch(function(){return r.active},function(e){return d.value=e}),function(){var e,o={};for(e in u)o[e]=r[e];return _createVNode(PlayGroundBase,_mergeProps(o,{defaultExpand:i.value,getClipboardText:n,onExpand:a}),{default:function(){var e;return null==(e=null==t?void 0:t.default)?void 0:e.call(t)},codeView:function(){return _createVNode(ConditionalRender.Show,{conditional:i.value},{default:function(){return[_createVNode(Card,null,{default:function(){return[_createVNode(CodeTabPanel,{config:r.config,active:d.value,onChange:function(e){d.value=e}},null)]}})]}})}})}}});export{playGroundTabProps};
//# sourceMappingURL=PlayGroundTab.js.map
