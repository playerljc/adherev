import"core-js/modules/es.object.keys.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.object.get-own-property-descriptor.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.define-properties.js";import"core-js/modules/es.object.define-property.js";import _defineProperty from"@babel/runtime/helpers/defineProperty";function ownKeys(r,e){var t,o=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),o.push.apply(o,t)),o}function _objectSpread(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}import{__assign}from"tslib";import BackTopAnimation from"@baifendian/adherev-ui-backtopanimation";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import ScrollLoad from"@baifendian/adherev-ui-scrollload";import Teleport from"@baifendian/adherev-ui-teleport";var selectorPrefix="adherev-ui-comment-inner-list",List={name:"adv-comment-list",props:{isLoading:{type:Boolean,default:!1},hasMore:{type:Boolean,default:!1},scrollLoadProps:{type:Object,default:function(){return{}}},getScrollWrapContainer:{type:Function,default:function(){return null}},renderFirstLoading:{type:Object,default:function(){return null}}},slots:["renderFirstLoading","default"],emits:["loadMore"],data:function(){return{$isFirst:!0,$isFirstLoading:!0}},methods:{$renderDispatch:function(e){var r=this.isLoading;return this.$data.$isFirst&&!this.$data.$isFirstLoading&&r&&(this.$data.$isFirstLoading=!0),this.$data.$isFirst&&this.$data.$isFirstLoading&&!r&&(this.$data.$isFirst=!1,this.$data.$isFirstLoading=!1),this.$data.$isFirst?this.$renderFirstLoading(e):this.$renderNormal(e)},$renderFirstLoading:function(e){return e("div",{class:"".concat(selectorPrefix,"-first-loading-wrap")},[this.$slots.renderFirstLoading||this.renderFirstLoading])},$renderNormal:function(e){var t=this,r={getScrollContainer:function(){var e;return null==(e=null==(e=t.getScrollWrapContainer)?void 0:e.call(t))?void 0:e.firstElementChild}};return e(ConditionalRender,{attrs:{conditional:this.hasMore}},[e("div",{class:"".concat(selectorPrefix,"-normal-wrap")},[e(ScrollLoad,{on:{scrollBottom:function(e){return t.$emit("loadMore",e)}},props:_objectSpread({},__assign(__assign(__assign({},r),this.scrollLoadProps||{}),{distance:(null==(r=this.scrollLoadProps)?void 0:r.distance)||50}))},[this.$slots.default]),e(ConditionalRender,{attrs:{conditional:!(!this.getScrollWrapContainer||!this.getScrollWrapContainer())}},[e(Teleport,{attrs:{to:null==(r=this.getScrollWrapContainer)?void 0:r.call(this)}},[e(BackTopAnimation,{on:{target:function(e){return e(null==(e=null==(e=t.getScrollWrapContainer)?void 0:e.call(t))?void 0:e.firstElementChild)},trigger:function(e){return e()}}})]),e(BackTopAnimation,{slot:"noMatch",on:{target:function(e){var r;return e(null==(r=null==(e=t.$refs.wrapRef)?void 0:e.querySelector)?void 0:r.call(e,".adherev-ui-scrollload"))},trigger:function(e){return e()}}})])])])}},render:function(e){return e("div",{class:selectorPrefix,ref:"wrapRef"},[this.$renderDispatch(e)])}};export default List;
//# sourceMappingURL=index.js.map
