import _defineProperty from"@babel/runtime/helpers/defineProperty";function ownKeys(t,e){var r,o=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,r)),o}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}import"core-js/modules/es.array.map.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.replace.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.object.get-own-property-descriptor.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.define-properties.js";import"core-js/modules/es.object.define-property.js";import{__rest}from"tslib";import{Button}from"ant-design-vue";import{Fragment}from"vue-fragment";import HistoryBack from"@baifendian/adherev-ui-historyback";import Intl from"@baifendian/adherev-util-intl";import ToolBarLayout from"./toolBarLayout";var BackLayout={name:"adv-flexlayout-back",props:{topClassName:{type:String,default:""},topStyle:{type:String,default:""},bottomClassName:{type:String,default:""},bottomStyle:{type:String,default:""},mainClassName:{type:String,default:""},mainStyle:{type:String,default:""},mainAutoWrapClassName:{type:String,default:""},mainAutoStyle:{type:String,default:""},mainWrapClassName:{type:String,default:""},mainWrapStyle:{type:String,default:""},topProps:{type:Object,default:function(){return{}}},bottomProps:{type:Object,default:function(){return{}}},mainProps:{type:Object,default:function(){return{}}},mainAutoWrapProps:{type:Object,default:function(){return{}}},topToolBarSlotNames:{type:Array,default:function(){return[]}},backPath:{type:String,default:"/"},enforceBackPath:{type:String,default:""},isShowBack:{type:Boolean,default:!0}},computed:{otherProps:function(){var e,t=this,r=(t.isShowBack,t.backPath,t.enforceBackPath,__rest(t,["isShowBack","backPath","enforceBackPath"])),o={};for(e in this.$props)e in r&&(o[e]=r[e]);return o}},methods:{renderToolBarItems:function(t){var r=this,e=(this.topToolBarSlotNames||[]).map(function(e){return t(Fragment,{slot:e},[r.$slots[e]])});return this.isShowBack&&e.push(t(Button,{slot:"back",on:{click:function(){r.enforceBackPath?r.$router.replace(r.enforceBackPath):HistoryBack(r.$router,r.backPath)}}},[this.$slots.backTitle||Intl.v("返回")])),e}},render:function(e){return e(ToolBarLayout,{props:_objectSpread({},this.otherProps)},[this.$slots.default,this.renderToolBarItems(e)])}};export default BackLayout;
//# sourceMappingURL=backLayout.js.map
