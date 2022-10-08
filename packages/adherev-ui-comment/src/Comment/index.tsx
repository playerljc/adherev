import { Icon, Spin } from 'ant-design-vue';
import { Fragment } from 'vue-fragment';

import Intl from '@baifendian/adherev-util-intl';

import ReplyInfo from '../Reply/Info';
import CommentInfo from './Info';
import ListStandard from './ListStandard';

export const selectorPrefix = 'adherev-ui-comment';

/**
 * Comment
 * @param props
 * @constructor
 * @classdesc 评论
 */
const Comment: any = {
  name: 'adv-comment',
  props: {
    getScrollWrapContainer: {
      type: Function,
      default: () => null,
    },
    fetchCommentData: {
      type: Function,
      default: () => null,
    },
    commentDataKeys: {
      type: Object,
      default: () => ({
        current: 'current',
        totalPage: 'totalPage',
        list: 'list',
        totalCount: 'totalCount',
      }),
    },
    commentLimit: {
      type: Number,
      default: 10,
    },
    commentKeyProp: {
      type: String,
      default: 'id',
    },
    fetchReplyData: {
      type: Function,
      default: () => null,
    },
    replyDataKeys: {
      type: Object,
      default: () => ({
        current: 'current',
        totalPage: 'totalPage',
        list: 'list',
        totalCount: 'totalCount',
      }),
    },
    replyLimit: {
      type: Number,
      default: 10,
    },
    replyKeyProp: {
      type: String,
      default: 'id',
    },
    fetchReply: {
      type: Function,
      default: () => null,
    },
    listProps: {
      type: Object,
      default: () => ({}),
    },
    isMoreProp: {
      type: String,
      default: 'isMore',
    },
    flexLayoutProps: {
      type: Object,
      default: () => ({}),
    },
    local: {
      type: String,
      default: 'zh',
    },
    emojiPickerProps: {
      type: Object,
      default: () => ({}),
    },
  },
  slots: [
    'renderReplyLoading',
    'renderCommentLoading',
    'showReplyText',
    'showReplyTextIcon',
    'hideReplyText',
    'hideReplyTextIcon',
    'loadMoreReplyText',
    'loadMoreCollapseTextIcon',
  ],
  scopedSlots: [
    'renderCommentActions',
    'renderCommentAuthor',
    'renderCommentAvatar',
    'renderCommentContent',
    'renderCommentDateTime',
    'renderReplyActions',
    'renderReplyAuthor',
    'renderReplyAvatar',
    'renderReplyContent',
    'renderReplyDateTime',
  ],
  emits: [],
  data() {
    return {};
  },
  methods: {
    $renderList(h, data) {
      const showReplyText = this.$slots.showReplyText || Intl.v('显示回复内容');
      const hideReplyText = this.$slots.hideReplyText || Intl.v('收起回复');
      const loadMoreReplyText = this.$slots.loadMoreReplyText || Intl.v('加载更多回复');

      // @ts-ignore
      const showReplyTextIcon = this.$slots.showReplyTextIcon || <Icon type="caret-down" />;
      // @ts-ignore
      const hideReplyTextIcon = this.$slots.hideReplyTextIcon || <Icon type="caret-up" />;

      const loadMoreCollapseTextIcon = this.$slots.loadMoreCollapseTextIcon || (
        // @ts-ignore
        <Icon type="enter" class="reply-icon" />
      );

      const scopedSlots = {
        default: (record) => {
          const scopedSlots = {
            renderActions: (params) => this.$scopedSlots.renderReplyActions(params),
            renderAuthor: (params) => this.$scopedSlots.renderReplyAuthor(params),
            renderAvatar: (params) => this.$scopedSlots.renderReplyAvatar(params),
            renderContent: (params) => this.$scopedSlots.renderReplyContent(params),
            renderDateTime: (params) => this.$scopedSlots.renderReplyDateTime(params),
          };

          return (
            <ReplyInfo
              defaultData={record}
              dataKeys={this.replyDataKeys}
              limit={this.replyLimit}
              keyProp={this.replyKeyProp}
              isMoreProp={this.isMoreProp}
              fetchData={this.fetchReplyData}
              fetchReply={this.fetchReply}
              local={this.local}
              emojiPickerProps={this.emojiPickerProps}
              scopedSlots={scopedSlots}
            >
              <div slot="renderLoading">
                {this.$slots.renderReplyLoading || this.$renderLoading(h)}
              </div>
              {/*@ts-ignore*/}
              <Fragment slot="showReplyText">{showReplyText}</Fragment>
              {/*@ts-ignore*/}
              <Fragment slot="hideReplyText">{hideReplyText}</Fragment>
              {/*@ts-ignore*/}
              <Fragment slot="loadMoreReplyText">{loadMoreReplyText}</Fragment>
              {/*@ts-ignore*/}
              <Fragment slot="showReplyTextIcon">{showReplyTextIcon}</Fragment>
              {/*@ts-ignore*/}
              <Fragment slot="hideReplyTextIcon">{hideReplyTextIcon}</Fragment>
              {/*@ts-ignore*/}
              <Fragment slot="loadMoreCollapseTextIcon">{loadMoreCollapseTextIcon}</Fragment>
            </ReplyInfo>
          );
        },
        renderActions: (params) => this.$scopedSlots.renderCommentActions(params),
        renderAuthor: (params) => this.$scopedSlots.renderCommentAuthor(params),
        renderAvatar: (params) => this.$scopedSlots.renderCommentAvatar(params),
        renderContent: (params) => this.$scopedSlots.renderCommentContent(params),
        renderDateTime: (params) => this.$scopedSlots.renderCommentDateTime(params),
      };

      return (
        <ul class={`${selectorPrefix}-list`}>
          {data?.list?.map?.((record) => (
            <li class={`${selectorPrefix}-list-item`} key={record[this.commentKeyProp!]}>
              <CommentInfo
                defaultData={record}
                dataKeys={this.replyDataKeys}
                limit={this.replyLimit}
                keyProp={this.replyKeyProp}
                isMoreProp={this.isMoreProp}
                fetchData={this.fetchReplyData}
                fetchReply={this.fetchReply}
                local={this.local}
                emojiPickerProps={this.emojiPickerProps}
                scopedSlots={scopedSlots}
              >
                <div slot="renderLoading">
                  {this.$slots.renderCommentLoading || this.$renderLoading(h)}
                </div>
                {/*@ts-ignore*/}
                <Fragment slot="showReplyText">{showReplyText}</Fragment>
                {/*@ts-ignore*/}
                <Fragment slot="hideReplyText">{hideReplyText}</Fragment>
                {/*@ts-ignore*/}
                <Fragment slot="loadMoreReplyText">{loadMoreReplyText}</Fragment>
                {/*@ts-ignore*/}
                <Fragment slot="showReplyTextIcon">{showReplyTextIcon}</Fragment>
                {/*@ts-ignore*/}
                <Fragment slot="hideReplyTextIcon">{hideReplyTextIcon}</Fragment>
                {/*@ts-ignore*/}
                <Fragment slot="loadMoreCollapseTextIcon">{loadMoreCollapseTextIcon}</Fragment>
              </CommentInfo>
            </li>
          ))}
        </ul>
      );
    },
    $renderLoading(h) {
      return (
        <div class={`${selectorPrefix}-loading`}>
          <Spin>
            {/*@ts-ignore*/}
            <Icon slot="indicator" type="loading" style="font-size: 24px;" />
          </Spin>
        </div>
      );
    },
  },
  render(h) {
    const scopedSlots = {
      renderList: (data) => this.$renderList(h, data),
    };

    return (
      <ListStandard
        getScrollWrapContainer={this.getScrollWrapContainer}
        listProps={this.listProps}
        dataKeys={this.commentDataKeys}
        limit={this.commentLimit}
        fetchData={this.fetchCommentData}
        flexLayoutProps={this.flexLayoutProps}
        scopedSlots={scopedSlots}
      />
    );
  },
};

export default Comment;
