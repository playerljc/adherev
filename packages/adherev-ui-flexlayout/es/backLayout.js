import _defineProperty from"@babel/runtime/helpers/defineProperty";function ownKeys(e,t){var r,o=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)),o}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}import"core-js/modules/es.array.map.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.replace.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.object.get-own-property-descriptor.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.define-properties.js";import"core-js/modules/es.object.define-property.js";import{__assign,__rest,__spreadArrays}from"tslib";import{Button}from"ant-design-vue";import{Fragment}from"vue-fragment";import HistoryBack from"@baifendian/adherev-ui-historyback";import Intl from"@baifendian/adherev-util-intl";import ToolBarLayout from"./toolBarLayout";var BackLayout={name:"adv-flexlayout-back",props:{topClassName:{type:String,default:""},topStyle:{type:String,default:""},bottomClassName:{type:String,default:""},bottomStyle:{type:String,default:""},mainClassName:{type:String,default:""},mainStyle:{type:String,default:""},mainAutoWrapClassName:{type:String,default:""},mainAutoStyle:{type:String,default:""},mainWrapClassName:{type:String,default:""},mainWrapStyle:{type:String,default:""},topProps:{type:Object,default:function(){return{}}},bottomProps:{type:Object,default:function(){return{}}},mainProps:{type:Object,default:function(){return{}}},mainAutoWrapProps:{type:Object,default:function(){return{}}},topToolBarSlotNames:{type:Array,default:function(){return[]}},bottomToolBarSlotNames:{type:Array,default:function(){return[]}},backPath:{type:String,default:"/"},enforceBackPath:{type:String,default:""},isShowBack:{type:Boolean,default:!0}},slots:["backTitle"],computed:{otherProps:function(){var t,e=this.$props,r=(e.isShowBack,e.backPath,e.enforceBackPath,{});for(t in __rest(e,["isShowBack","backPath","enforceBackPath"]))r[t]=this[t];return r}},methods:{renderToolBarItems:function(e){var r=this,t=(this.topToolBarSlotNames||[]).map(function(t){return e(Fragment,{slot:t},[r.$slots[t]])});return this.isShowBack&&t.push(e(Button,{slot:"$back",on:{click:function(){r.enforceBackPath?r.$router.replace(r.enforceBackPath):HistoryBack(r.$router,r.backPath)}}},[this.$slots.backTitle||Intl.v("返回")])),t},renderBottomToolBarItems:function(e){var r=this;return(this.bottomToolBarSlotNames||[]).map(function(t){return e(Fragment,{slot:t},[r.$slots[t]])})}},render:function(t){return t(ToolBarLayout,{props:_objectSpread({},__assign(__assign({},this.otherProps||{}),{topToolBarSlotNames:__spreadArrays(this.topToolBarSlotNames||[],["$back"])}))},[this.$slots.default,this.renderToolBarItems(t),this.renderBottomToolBarItems(t)])}};export default BackLayout;
//# sourceMappingURL=backLayout.js.map
