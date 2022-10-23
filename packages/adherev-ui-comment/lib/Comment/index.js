"use strict";require("core-js/modules/es.object.to-string.js");var _vue=require("vue");function _isSlot(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,_vue.isVNode)(e)}require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectorPrefix=void 0;var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),classnames_1=tslib_1.__importDefault(require("classnames")),vue_1=require("vue"),vue_types_1=require("vue-types"),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),Info_1=tslib_1.__importDefault(require("../Reply/Info")),Info_2=tslib_1.__importDefault(require("./Info")),ListStandard_1=tslib_1.__importDefault(require("./ListStandard")),props=(exports.selectorPrefix="adherev-ui-comment",{getScrollWrapContainer:(0,vue_types_1.func)(),fetchCommentData:(0,vue_types_1.func)(),commentDataKeys:(0,vue_types_1.object)().def({current:"current",totalPage:"totalPage",list:"list",totalCount:"totalCount"}),commentLimit:(0,vue_types_1.number)().def(10),commentKeyProp:(0,vue_types_1.string)().def("id"),fetchReplyData:(0,vue_types_1.func)(),replyDataKeys:(0,vue_types_1.object)().def({current:"current",totalPage:"totalPage",list:"list",totalCount:"totalCount"}),replyLimit:(0,vue_types_1.number)().def(10),replyKeyProp:(0,vue_types_1.string)().def("id"),fetchReply:(0,vue_types_1.func)(),listProps:(0,vue_types_1.object)().def({}),isMoreProp:(0,vue_types_1.string)().def("isMore"),flexLayoutProps:(0,vue_types_1.object)().def({}),local:(0,vue_types_1.string)().def("zh"),emojiPickerProps:(0,vue_types_1.object)().def({}),renderReplyLoading:(0,vue_types_1.object)(),renderCommentLoading:(0,vue_types_1.object)(),showReplyText:(0,vue_types_1.object)(),showReplyTextIcon:(0,vue_types_1.object)(),hideReplyText:(0,vue_types_1.object)(),hideReplyTextIcon:(0,vue_types_1.object)(),loadMoreReplyText:(0,vue_types_1.object)(),loadMoreCollapseTextIcon:(0,vue_types_1.object)(),renderCommentActions:(0,vue_types_1.func)(),renderCommentAuthor:(0,vue_types_1.func)(),renderCommentAvatar:(0,vue_types_1.func)(),renderCommentContent:(0,vue_types_1.func)(),renderCommentDateTime:(0,vue_types_1.func)(),renderReplyActions:(0,vue_types_1.func)(),renderReplyAuthor:(0,vue_types_1.func)(),renderReplyAvatar:(0,vue_types_1.func)(),renderReplyContent:(0,vue_types_1.func)(),renderReplyDateTime:(0,vue_types_1.func)()});exports.default=(0,vue_1.defineComponent)({name:"adv-comment",slots:["renderReplyLoading","renderCommentLoading","showReplyText","showReplyTextIcon","hideReplyText","hideReplyTextIcon","loadMoreReplyText","loadMoreCollapseTextIcon","renderCommentActions","renderCommentAuthor","renderCommentAvatar","renderCommentContent","renderCommentDateTime","renderReplyActions","renderReplyAuthor","renderReplyAvatar","renderReplyContent","renderReplyDateTime"],props:props,setup:function(c,e){function d(){return(0,_vue.createVNode)("div",{class:"".concat(exports.selectorPrefix,"-loading")},[(0,_vue.createVNode)(ant_design_vue_1.Spin,null,{indicator:function(){return(0,_vue.createVNode)("i",{class:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-icon"),"".concat(exports.selectorPrefix,"-icon-loading"),"iconfont iconloading")},null)}})])}var s=e.slots;return function(){return(0,_vue.createVNode)(ListStandard_1.default,{getScrollWrapContainer:c.getScrollWrapContainer,listProps:c.listProps,dataKeys:c.commentDataKeys,limit:c.commentLimit,fetchData:c.fetchCommentData,flexLayoutProps:c.flexLayoutProps},{renderList:function(e){return e=e,n=(null==(t=s.showReplyText)?void 0:t.call(s))||c.showReplyText||adherev_util_intl_1.default.tv("显示回复内容"),r=(null==(t=s.hideReplyText)?void 0:t.call(s))||c.hideReplyText||adherev_util_intl_1.default.tv("收起回复"),o=(null==(t=s.loadMoreReplyText)?void 0:t.call(s))||c.loadMoreReplyText||adherev_util_intl_1.default.tv("加载更多回复"),l=(null==(t=s.showReplyTextIcon)?void 0:t.call(s))||c.showReplyTextIcon||(0,_vue.createVNode)("i",{class:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-icon"),"iconfont iconcaret-down")},null),i=(null==(t=s.hideReplyTextIcon)?void 0:t.call(s))||c.hideReplyTextIcon||(0,_vue.createVNode)("i",{class:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-icon"),"iconfont iconcaret-up")},null),u=(null==(t=s.loadMoreCollapseTextIcon)?void 0:t.call(s))||c.loadMoreCollapseTextIcon||(0,_vue.createVNode)("i",{class:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-icon"),"iconfont iconenter reply-icon")},null),a={default:function(e){var t={renderActions:function(e){var t;return(null==(t=null==s?void 0:s.renderReplyActions)?void 0:t.call(s,e))||(null==(t=null==c?void 0:c.renderReplyActions)?void 0:t.call(c,e))},renderAuthor:function(e){var t;return(null==(t=null==s?void 0:s.renderReplyAuthor)?void 0:t.call(s,e))||(null==(t=null==c?void 0:c.renderReplyAuthor)?void 0:t.call(c,e))},renderAvatar:function(e){var t;return(null==(t=null==s?void 0:s.renderReplyAvatar)?void 0:t.call(s,e))||(null==(t=null==c?void 0:c.renderReplyAvatar)?void 0:t.call(c,e))},renderContent:function(e){var t;return(null==(t=null==s?void 0:s.renderReplyContent)?void 0:t.call(s,e))||(null==(t=null==c?void 0:c.renderReplyContent)?void 0:t.call(c,e))},renderDateTime:function(e){var t;return(null==(t=null==s?void 0:s.renderReplyDateTime)?void 0:t.call(s,e))||(null==(t=null==c?void 0:c.renderReplyDateTime)?void 0:t.call(c,e))},renderLoading:function(){var e;return(null==(e=s.renderReplyLoading)?void 0:e.call(s))||c.renderReplyLoading||d()},showReplyText:function(){return n},hideReplyText:function(){return r},loadMoreReplyText:function(){return o},showReplyTextIcon:function(){return l},hideReplyTextIcon:function(){return i},loadMoreCollapseTextIcon:function(){return u}};return(0,_vue.createVNode)(Info_1.default,{defaultData:e,dataKeys:c.replyDataKeys,limit:c.replyLimit,keyProp:c.replyKeyProp,isMoreProp:c.isMoreProp,fetchData:c.fetchReplyData,fetchReply:c.fetchReply,local:c.local,emojiPickerProps:c.emojiPickerProps},_isSlot(t)?t:{default:function(){return[t]}})},renderActions:function(e){var t;return(null==(t=null==s?void 0:s.renderCommentActions)?void 0:t.call(s,e))||(null==(t=null==c?void 0:c.renderCommentActions)?void 0:t.call(c,e))},renderAuthor:function(e){var t;return(null==(t=null==s?void 0:s.renderCommentAuthor)?void 0:t.call(s,e))||(null==(t=null==c?void 0:c.renderCommentAuthor)?void 0:t.call(c,e))},renderAvatar:function(e){var t;return(null==(t=null==s?void 0:s.renderCommentAvatar)?void 0:t.call(s,e))||(null==(t=null==c?void 0:c.renderCommentAvatar)?void 0:t.call(c,e))},renderContent:function(e){var t;return(null==(t=null==s?void 0:s.renderCommentContent)?void 0:t.call(s,e))||(null==(t=null==c?void 0:c.renderCommentContent)?void 0:t.call(c,e))},renderDateTime:function(e){var t;return(null==(t=null==s?void 0:s.renderCommentDateTime)?void 0:t.call(s,e))||(null==(t=null==c?void 0:c.renderCommentDateTime)?void 0:t.call(c,e))},renderLoading:function(){var e;return(null==(e=null==s?void 0:s.renderCommentLoading)?void 0:e.call(s))||(null==c?void 0:c.renderCommentLoading)||d()},showReplyText:function(){return n},hideReplyText:function(){return r},loadMoreReplyText:function(){return o},showReplyTextIcon:function(){return l},hideReplyTextIcon:function(){return i},loadMoreCollapseTextIcon:function(){return u}},(0,_vue.createVNode)("ul",{class:"".concat(exports.selectorPrefix,"-list")},[null==(e=null==(t=null==e?void 0:e.list)?void 0:t.map)?void 0:e.call(t,function(e){return(0,_vue.createVNode)("li",{class:"".concat(exports.selectorPrefix,"-list-item"),key:e[c.commentKeyProp]},[(0,_vue.createVNode)(Info_2.default,{defaultData:e,dataKeys:c.replyDataKeys,limit:c.replyLimit,keyProp:c.replyKeyProp,isMoreProp:c.isMoreProp,fetchData:c.fetchReplyData,fetchReply:c.fetchReply,local:c.local,emojiPickerProps:c.emojiPickerProps},_isSlot(a)?a:{default:function(){return[a]}})])})]);var t,n,r,o,l,i,u,a}})}}});
//# sourceMappingURL=index.js.map
