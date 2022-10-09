"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.string.ends-with.js"),require("core-js/modules/es.array.find.js"),require("core-js/modules/es.object.to-string.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),vue_fragment_1=require("vue-fragment"),adherev_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-conditionalrender")),adherev_ui_flexlayout_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-flexlayout")),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),Info_1=tslib_1.__importDefault(require("../../Reply/Info")),Submit_1=tslib_1.__importDefault(require("../../Reply/Submit")),selectorPrefix="adherev-ui-comment-node",Node={name:"adv-comment-reply-node",props:{isReply:{type:Boolean,default:!1},defaultData:{type:Object,default:function(){return{}}},dataKeys:{type:Object,default:function(){return{current:"current",totalPage:"totalPage",list:"list",totalCount:"totalCount"}}},limit:{type:Number,default:10},fetchData:{type:Function},fetchReply:{type:Function},keyProp:{type:String,default:""},isMoreProp:{type:String,default:""},local:{type:String,default:"zh"},emojiPickerProps:{type:Object,default:function(){return{}}},comId:{type:[String,Number],default:""},renderLoading:{type:Object,default:function(){return null}},loadMoreCollapseTextIcon:{type:Object,default:function(){return null}},loadMoreReplyText:{type:Object,default:function(){return null}},showReplyTextIcon:{type:Object,default:function(){return null}},showReplyText:{type:Object,default:function(){return null}},hideReplyTextIcon:{type:Object,default:function(){return null}},hideReplyText:{type:Object,default:function(){return null}},renderActions:{type:Function,default:function(){return null}},renderAuthor:{type:Function,default:function(){return null}},renderAvatar:{type:Function,default:function(){return null}},renderContent:{type:Function,default:function(){return null}},renderDateTime:{type:Function,default:function(){return null}}},scopedSlots:["renderActions","renderAuthor","renderAvatar","renderContent","renderDateTime"],slots:["renderLoading","loadMoreCollapseTextIcon","loadMoreReplyText","showReplyTextIcon","showReplyText","hideReplyTextIcon","hideReplyText"],data:function(){var e;return{listData:((e={})[this.dataKeys.current]=1,e[this.dataKeys.list]=[],e[this.dataKeys.totalCount]=0,e[this.dataKeys.totalPage]=0,e),data:this.defaultData,collapse:!1,loading:!1,showReply:!1,$paging:{page:1,limit:this.limit}}},watch:{defaultData:function(e){this.data=e}},computed:{hasMore:function(){return this.listData[this.dataKeys.list].length<=this.listData[this.dataKeys.totalCount]}},methods:{$renderActions:function(o){var t=this,e=(null===(e=null===(e=(null===(e=this.$scopedSlots)||void 0===e?void 0:e.renderActions)||this.renderActions)||void 0===e?void 0:e({record:tslib_1.__assign({},this.data),callback:function(e){t.data=e}}))||void 0===e?void 0:e.map(function(e,t){var l,i;return adherev_ui_conditionalrender_1.default.conditionalRender({conditional:!(null!==(i=null===(l=null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.class)||void 0===l?void 0:l.endsWith)&&void 0!==i&&i.call(l,"-actions-action")),noMatch:e,match:o("li",{key:t,class:selectorPrefix+"-actions-action"},[e])})}))||[];return e.find(function(e){return"reply"===(null==e?void 0:e.key)})||e.push(o("li",{key:"reply",class:classnames_1.default(selectorPrefix+"-actions-action",selectorPrefix+"-actions-action-reply-btn"),on:{click:function(){return t.showReply=!0}}},[adherev_util_intl_1.default.v("回复")])),e},$renderChildren:function(i){var e,t,o=this,n={renderActions:function(e){var t,l;return(null===(t=null===(l=o.$scopedSlots)||void 0===l?void 0:l.renderActions)||void 0===t?void 0:t.call(l,e))||(null===(l=null==o?void 0:o.renderActions)||void 0===l?void 0:l.call(o,e))},renderAuthor:function(e){var t,l;return(null===(t=null===(l=o.$scopedSlots)||void 0===l?void 0:l.renderAuthor)||void 0===t?void 0:t.call(l,e))||(null===(l=null==o?void 0:o.renderAuthor)||void 0===l?void 0:l.call(o,e))},renderAvatar:function(e){var t,l;return(null===(t=null===(l=o.$scopedSlots)||void 0===l?void 0:l.renderAvatar)||void 0===t?void 0:t.call(l,e))||(null===(l=null==o?void 0:o.renderAvatar)||void 0===l?void 0:l.call(o,e))},renderContent:function(e){var t,l;return(null===(t=null===(l=o.$scopedSlots)||void 0===l?void 0:l.renderContent)||void 0===t?void 0:t.call(l,e))||(null===(l=null==o?void 0:o.renderContent)||void 0===l?void 0:l.call(o,e))},renderDateTime:function(e){var t,l;return(null===(t=null===(l=o.$scopedSlots)||void 0===l?void 0:l.renderDateTime)||void 0===t?void 0:t.call(l,e))||(null===(l=null==o?void 0:o.renderDateTime)||void 0===l?void 0:l.call(o,e))}};return i("ul",{class:selectorPrefix+"-children"},[null===(t=null===(e=this.listData[this.dataKeys.list]||[])?void 0:e.map)||void 0===t?void 0:t.call(e,function(e){var t,l;return i("li",{class:selectorPrefix+"-children-item",key:e[o.keyProp],attrs:{id:e[o.keyProp]}},[i(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!(null!==(l=null==o?void 0:o.$scopedSlots)&&void 0!==l&&l.default)}},[i(Info_1.default,{attrs:{comId:e[o.keyProp],isReply:!0,defaultData:e,dataKeys:o.dataKeys,limit:o.limit,keyProp:o.keyProp,isMoreProp:o.isMoreProp,fetchData:o.fetchData,fetchReply:o.fetchReply,local:o.local,emojiPickerProps:o.emojiPickerProps},scopedSlots:n},[i("div",{slot:"renderLoading"},[o.$slots.renderLoading||o.renderLoading]),i(vue_fragment_1.Fragment,{slot:"showReplyText"},[o.$slots.showReplyText||o.showReplyText]),i(vue_fragment_1.Fragment,{slot:"hideReplyText"},[o.$slots.hideReplyText||o.hideReplyText]),i(vue_fragment_1.Fragment,{slot:"loadMoreReplyText"},[o.$slots.loadMoreReplyText||o.loadMoreReplyText]),i(vue_fragment_1.Fragment,{slot:"showReplyTextIcon"},[o.$slots.showReplyTextIcon||o.showReplyTextIcon]),i(vue_fragment_1.Fragment,{slot:"hideReplyTextIcon"},[o.$slots.hideReplyTextIcon||o.hideReplyTextIcon]),i(vue_fragment_1.Fragment,{slot:"loadMoreCollapseTextIcon"},[o.$slots.loadMoreCollapseTextIcon||o.loadMoreCollapseTextIcon])]),i(vue_fragment_1.Fragment,{slot:"noMatch"},[null===(l=null===(t=null==o?void 0:o.$scopedSlots)||void 0===t?void 0:t.default)||void 0===l?void 0:l.call(t,e)])])])}),i(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!this.loading&&this.hasMore}},[i("li",{class:classnames_1.default(selectorPrefix+"-children-item","more")},[i("a",{on:{click:this.$appendData}},[i("span",[this.$slots.loadMoreCollapseTextIcon||this.loadMoreCollapseTextIcon]),i("span",[this.$slots.loadMoreReplyText||this.loadMoreReplyText])])])])])},$renderMore:function(e){var t=this;return e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!this.collapse}},[e("a",{class:selectorPrefix+"-collapse",on:{click:function(){var e;t.listData[t.dataKeys.list].length?t.collapse=!0:null!==(e=t.$loadData())&&void 0!==e&&e.then(function(){return t.collapse=!0})}}},[e("span",[this.$slots.showReplyTextIcon||this.showReplyTextIcon]),e("span",[this.$slots.showReplyText||this.showReplyText])]),e("a",{slot:"noMatch",class:selectorPrefix+"-collapse",on:{click:function(){return t.collapse=!1}}},[e("span",[this.$slots.hideReplyTextIcon||this.hideReplyTextIcon]),e("span",[this.$slots.hideReplyText||this.hideReplyText])])])},$loadData:function(){var t=this;return this.loading=!0,this.$data.$paging={page:1,limit:this.limit},this.$fetchData().then(function(e){t.listData=e})},$appendData:function(){var l=this;this.loading=!0,this.$data.$paging.page=this.$data.$paging.page+1;var i=this.dataKeys.list;return this.$fetchData().then(function(e){var t;l.listData=tslib_1.__assign(tslib_1.__assign({},e),((t={})[l.dataKeys.list]=tslib_1.__spreadArrays(l.listData[i],e[i]),t))})},$fetchData:function(){var e,t=this;return null===(e=null===(e=null===(e=null==this?void 0:this.fetchData)||void 0===e?void 0:e.call(this,tslib_1.__assign(tslib_1.__assign({},this.$data.$paging),{record:tslib_1.__assign({},this.data)})))||void 0===e?void 0:e.then(function(e){return t.loading=!1,e}))||void 0===e?void 0:e.catch(function(e){return t.loading=!1,e})}},render:function(e){var t,l=this;return e(adherev_ui_flexlayout_1.default,{attrs:{direction:"horizontal"},class:classnames_1.default(selectorPrefix,this.isReply?selectorPrefix+"-reply":"")},[e(adherev_ui_flexlayout_1.default.Fixed,{class:selectorPrefix+"-avatar-wrap"},[null===(t=(null===(t=this.$scopedSlots)||void 0===t?void 0:t.renderAvatar)||(null==this?void 0:this.renderAvatar))||void 0===t?void 0:t(tslib_1.__assign({},this.data))]),e(adherev_ui_flexlayout_1.default.Auto,{attrs:{autoFixed:!0,fit:!0}},[e(adherev_ui_flexlayout_1.default,{attrs:{direction:"vertical"}},[e(adherev_ui_flexlayout_1.default.Fixed,{class:selectorPrefix+"-title-row",attrs:{fit:!1}},[e("div",{class:selectorPrefix+"-title-row-author"},[null===(t=(null===(t=this.$scopedSlots)||void 0===t?void 0:t.renderAuthor)||(null==this?void 0:this.renderAuthor))||void 0===t?void 0:t(tslib_1.__assign({},this.data))]),e("div",{class:selectorPrefix+"-title-row-date-time"},[null===(t=(null===(t=this.$scopedSlots)||void 0===t?void 0:t.renderDateTime)||(null==this?void 0:this.renderDateTime))||void 0===t?void 0:t(tslib_1.__assign({},this.data))])]),e(adherev_ui_flexlayout_1.default.Auto,{class:selectorPrefix+"-content-wrap"},[null===(t=(null===(t=this.$scopedSlots)||void 0===t?void 0:t.renderContent)||(null==this?void 0:this.renderContent))||void 0===t?void 0:t(tslib_1.__assign({},this.data))]),e(adherev_ui_flexlayout_1.default.Fixed,[e("ul",{class:selectorPrefix+"-actions"},[this.$renderActions(e)])]),e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:this.showReply}},[e(adherev_ui_flexlayout_1.default.Fixed,{style:"margin-top:15px;"},[e(Submit_1.default,{on:{cancel:function(){return l.showReply=!1},result:function(e){var t;null!==(e=null===(t=l.fetchReply)||void 0===t?void 0:t.call(l,{id:null===(t=l.data)||void 0===t?void 0:t[l.keyProp],record:tslib_1.__assign({},l.data),reply:e}))&&void 0!==e&&e.then(function(){l.showReply=!1,l.$loadData()})}},attrs:{local:this.local,emojiPickerProps:this.emojiPickerProps}})])]),e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:null===(t=this.data)||void 0===t?void 0:t[this.isMoreProp]}},[e("div",[e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!this.loading}},[this.$renderMore(e)]),e(adherev_ui_conditionalrender_1.default.Show,{attrs:{conditional:this.collapse}},[this.$renderChildren(e)]),e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:this.loading}},[this.$slots.renderLoading||this.renderLoading])])])])])])}};exports.default=Node;
//# sourceMappingURL=index.js.map
