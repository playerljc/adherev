import{mergeProps as _mergeProps,createVNode as _createVNode}from"vue";import{__assign}from"tslib";import{Teleport,defineComponent,ref}from"vue";import{bool,func,object}from"vue-types";import BackTopAnimation from"@baifendian/adherev-ui-backtopanimation";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import ScrollLoad from"@baifendian/adherev-ui-scrollload";var selectorPrefix="adherev-ui-comment-inner-list",listProps={isLoading:bool().def(!1),hasMore:bool().def(!1),scrollLoadProps:object().def({}),getScrollWrapContainer:func(),renderFirstLoading:object()};export default defineComponent({name:"adv-comment-list",props:listProps,slots:["renderFirstLoading","default"],emits:["loadMore"],setup:function(n,e){function o(){var e;return _createVNode("div",{class:"".concat(selectorPrefix,"-first-loading-wrap")},[t.renderFirstLoading?null==(e=t.renderFirstLoading)?void 0:e.call(t):n.renderFirstLoading])}function r(){var r={getScrollContainer:function(){var e;return null==(e=null==(e=n.getScrollWrapContainer)?void 0:e.call(n))?void 0:e.firstElementChild}};return _createVNode(ConditionalRender,{conditional:n.hasMore},{default:function(){var e,o;return _createVNode("div",{class:"".concat(selectorPrefix,"-normal-wrap")},[_createVNode(ScrollLoad,_mergeProps({onScrollBottom:function(e){console.log("onScrollBottom"),i("loadMore",e)}},__assign(__assign(__assign({},r),n.scrollLoadProps||{}),{distance:(null==(e=n.scrollLoadProps)?void 0:e.distance)||50})),{default:function(){return[null==(o=t.default)?void 0:o.call(t)]}}),_createVNode(ConditionalRender,{conditional:!(!n.getScrollWrapContainer||!n.getScrollWrapContainer())},{default:function(){var e;return _createVNode(Teleport,{to:null==(e=n.getScrollWrapContainer)?void 0:e.call(n)},{default:function(){return[_createVNode(BackTopAnimation,{onTarget:function(e){return e(null==(e=null==(e=n.getScrollWrapContainer)?void 0:e.call(n))?void 0:e.firstElementChild)},onTrigger:function(e){return e()}},null)]}})},noMatch:function(){return _createVNode(BackTopAnimation,{onTarget:function(e){var o;return e(null==(o=null==(e=l.value)?void 0:e.querySelector)?void 0:o.call(e,".adherev-ui-scrollload"))},onTrigger:function(e){return e()}},null)}})])}})}var t=e.slots,i=e.emit,l=ref(),a=!0,d=!0;return function(){return _createVNode("div",{class:selectorPrefix,ref:l},[(e=n.isLoading,a&&!d&&e&&(d=!0),a&&d&&!e&&(d=a=!1),(a?o:r)())]);var e}}});export{listProps};
//# sourceMappingURL=index.js.map
