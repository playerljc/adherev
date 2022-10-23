import{isVNode as _isVNode,mergeProps as _mergeProps,createVNode as _createVNode}from"vue";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.string.includes.js";import"core-js/modules/es.string.trim.js";import{Button,Input,Popover}from"ant-design-vue";import{defineComponent,nextTick,onBeforeUnmount,onMounted,ref}from"vue";import{object,string}from"vue-types";import Intl from"@baifendian/adherev-util-intl";import Emoji from"../../Components/Emoji";import en from"../../Components/Emoji/locales/en";import zh from"../../Components/Emoji/locales/zh";import EmojiIcon from"./emoji";function _isSlot(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!_isVNode(e)}var TextArea=Input.TextArea,LOCAL_MAP=new Map([["en",en],["zh",zh]]),selectorPrefix="adherev-ui-comment-reply",props={local:string().def("zh"),emojiPickerProps:object().def({})};export default defineComponent({name:"adv-comment-reply",emits:["result","cancel"],props:props,setup:function(t,e){function r(e){var o=e.native,t=a.value.querySelector("textarea"),r=t.selectionStart;l.value="".concat(l.value.substring(0,r)).concat(o).concat(l.value.substring(r)),nextTick(function(){t.focus(),t.setSelectionRange(r+o.length,r+o.length)})}function n(e){e=e.target,[a.value.querySelector("textarea")].includes(e)||(m.value=!1)}function s(e){e.stopPropagation()}var c=e.emit,a=ref(),i=ref(),l=ref(""),m=ref(!1);return onMounted(function(){var e,o;document.body.addEventListener("click",n),null!=(o=(e=i.value).addEventListener)&&o.call(e,"click",s)}),onBeforeUnmount(function(){var e,o;document.body.removeEventListener("click",n),null!=(o=(e=i.value).removeEventListener)&&o.call(e,"click",s)}),function(){var e,o;return _createVNode("div",{class:"".concat(selectorPrefix)},[_createVNode("div",{class:"".concat(selectorPrefix,"-textarea-wrap"),ref:a},[_createVNode(TextArea,{class:"".concat(selectorPrefix,"-textarea"),placeholder:Intl.tv("请输入回复内容"),autoFocus:!0,value:l.value,onChange:function(e){l.value=e.target.value},maxLength:100},null)]),_createVNode("div",{ref:i,class:"".concat(selectorPrefix,"-toolbar-emoji-wrap")},null),_createVNode("div",{class:"".concat(selectorPrefix,"-toolbar")},[_createVNode(Popover,{placement:"bottomLeft",getPopupContainer:function(){return i.value},content:_createVNode(Emoji,_mergeProps({set:"emojione",i18n:LOCAL_MAP.get(t.local||"zh"),onSelect:r},t.emojiPickerProps||{}),null),visible:m.value},{default:function(){return[_createVNode("div",{onClick:function(e){e.stopPropagation(),m.value=!m.value}},[_createVNode(EmojiIcon,{class:"".concat(selectorPrefix,"-toolbar-item-emoji")},null)])]}}),_createVNode("div",{class:"".concat(selectorPrefix,"-toolbar-inner")},[_createVNode(Button,{type:"primary",class:"".concat(selectorPrefix,"-toolbar-item"),disabled:!l,onClick:function(){return c("result",l.value.trim())}},_isSlot(e=Intl.tv("添加"))?e:{default:function(){return[e]}}),_createVNode(Button,{class:"".concat(selectorPrefix,"-toolbar-item"),onClick:function(){return c("cancel")}},_isSlot(o=Intl.tv("取消"))?o:{default:function(){return[o]}})])])])}}});
//# sourceMappingURL=index.js.map