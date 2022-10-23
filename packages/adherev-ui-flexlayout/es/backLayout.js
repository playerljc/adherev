import{createVNode as _createVNode}from"vue";import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.replace.js";import{__assign,__rest,__spreadArray}from"tslib";import{Button}from"ant-design-vue";import{computed,defineComponent,toRefs}from"vue";import{useRouter}from"vue-router";import{array,bool,object,string}from"vue-types";import HistoryBack from"@baifendian/adherev-ui-historyback";import Intl from"@baifendian/adherev-util-intl";import ToolBarLayout from"./toolBarLayout";var props={topClassName:string().def(""),topStyle:object().def({}),bottomClassName:string().def(""),bottomStyle:object().def({}),mainClassName:string().def(""),mainStyle:object().def({}),mainAutoWrapClassName:string().def(""),mainAutoStyle:object().def({}),mainWrapClassName:string().def(""),mainWrapStyle:object().def({}),topProps:object().def({}),bottomProps:object().def({}),mainProps:object().def({}),mainAutoWrapProps:object().def({}),topToolBarSlotNames:array().def([]),bottomToolBarSlotNames:array().def([]),backPath:string().def("/"),enforceBackPath:string().def(""),isShowBack:bool().def(!0)};export default defineComponent({name:"adv-flexlayout-back",props:props,slots:["backTitle"],setup:function(a,o){var r=o.slots,n=useRouter(),t=computed(function(){var o,e=toRefs(a),t=(e.isShowBack,e.backPath,e.enforceBackPath,__rest(e,["isShowBack","backPath","enforceBackPath"])),r={};for(o in t)o in t&&(r[o]=t[o].value);return r});return function(){var e;return _createVNode(ToolBarLayout,__assign(__assign({},t.value||{}),{topToolBarSlotNames:__spreadArray(__spreadArray([],a.topToolBarSlotNames||[],!0),["$back"],!1)}),{default:function(){return[null==(e=null==r?void 0:r.default)?void 0:e.call(r),__assign(__assign({},(t={},(a.topToolBarSlotNames||[]).forEach(function(e){return t[e]=function(){var o;return null==(o=null==r?void 0:r[e])?void 0:o.call(r)}}),a.isShowBack&&(t.$back=function(){var o;return _createVNode(Button,{onClick:function(){a.enforceBackPath?n.replace(a.enforceBackPath):HistoryBack(n,a.backPath)}},{default:function(){return[(null==(o=null==r?void 0:r.backTitle)?void 0:o.call(r))||Intl.tv("返回")]}})}),t)),(o={},(a.bottomToolBarSlotNames||[]).forEach(function(e){return o[e]=function(){var o;return null==(o=null==r?void 0:r[e])?void 0:o.call(r)}}),o))];var o,t}})}}});
//# sourceMappingURL=backLayout.js.map
