import { Icon, Spin } from 'ant-design-vue';
import { PropType, VNode } from 'vue';
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
      type: Function as PropType<() => HTMLElement | null>,
      default: () => null,
    },
    fetchCommentData: {
      type: Function as PropType<(params?: any) => Promise<any>>,
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
      type: Function as PropType<(params?: any) => Promise<any>>,
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
      type: Function as PropType<(params?: any) => Promise<any>>,
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
    renderReplyLoading: {
      type: Object as PropType<VNode>,
      default: () => null,
    },
    renderCommentLoading: {
      type: Object as PropType<VNode>,
      default: () => null,
    },
    showReplyText: {
      type: Object as PropType<VNode>,
      default: () => null,
    },
    showReplyTextIcon: {
      type: Object as PropType<VNode>,
      default: () => null,
    },
    hideReplyText: {
      type: Object as PropType<VNode>,
      default: () => null,
    },
    hideReplyTextIcon: {
      type: Object as PropType<VNode>,
      default: () => null,
    },
    loadMoreReplyText: {
      type: Object as PropType<VNode>,
      default: () => null,
    },
    loadMoreCollapseTextIcon: {
      type: Object as PropType<VNode>,
      default: () => null,
    },

    renderCommentActions: {
      type: Function as PropType<(params?: any) => VNode | null>,
      default: () => null,
    },
    renderCommentAuthor: {
      type: Function as PropType<(params?: any) => VNode | null>,
      default: () => null,
    },
    renderCommentAvatar: {
      type: Function as PropType<(params?: any) => VNode | null>,
      default: () => null,
    },
    renderCommentContent: {
      type: Function as PropType<(params?: any) => VNode | null>,
      default: () => null,
    },
    renderCommentDateTime: {
      type: Function as PropType<(params?: any) => VNode | null>,
      default: () => null,
    },
    renderReplyActions: {
      type: Function as PropType<(params?: any) => VNode | null>,
      default: () => null,
    },
    renderReplyAuthor: {
      type: Function as PropType<(params?: any) => VNode | null>,
      default: () => null,
    },
    renderReplyAvatar: {
      type: Function as PropType<(params?: any) => VNode | null>,
      default: () => null,
    },
    renderReplyContent: {
      type: Function as PropType<(params?: any) => VNode | null>,
      default: () => null,
    },
    renderReplyDateTime: {
      type: Function as PropType<(params?: any) => VNode | null>,
      default: () => null,
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
      const showReplyText =
        this.$slots.showReplyText || this.showReplyText || Intl.v('显示回复内容');
      const hideReplyText = this.$slots.hideReplyText || this.hideReplyText || Intl.v('收起回复');
      const loadMoreReplyText =
        this.$slots.loadMoreReplyText || this.loadMoreReplyText || Intl.v('加载更多回复');

      const showReplyTextIcon = this.$slots.showReplyTextIcon || this.showReplyTextIcon || (
        // @ts-ignore
        <Icon type="caret-down" />
      );

      const hideReplyTextIcon = this.$slots.hideReplyTextIcon || this.hideReplyTextIcon || (
        // @ts-ignore
        <Icon type="caret-up" />
      );

      const loadMoreCollapseTextIcon = this.$slots.loadMoreCollapseTextIcon ||
        this.loadMoreCollapseTextIcon || (
          // @ts-ignore
          <Icon type="enter" class="reply-icon" />
        );

      const scopedSlots = {
        default: (record) => {
          const scopedSlots = {
            renderActions: (params) =>
              this.$scopedSlots?.renderReplyActions?.(params) || this?.renderReplyActions?.(params),
            renderAuthor: (params) =>
              this.$scopedSlots?.renderReplyAuthor?.(params) || this?.renderReplyAuthor?.(params),
            renderAvatar: (params) =>
              this.$scopedSlots?.renderReplyAvatar?.(params) || this?.renderReplyAvatar?.(params),
            renderContent: (params) =>
              this.$scopedSlots?.renderReplyContent?.(params) || this?.renderReplyContent?.(params),
            renderDateTime: (params) =>
              this.$scopedSlots?.renderReplyDateTime?.(params) ||
              this?.renderReplyDateTime?.(params),
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
                {this.$slots.renderReplyLoading ||
                  this.renderReplyLoading ||
                  this.$renderLoading(h)}
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
        renderActions: (params) =>
          this.$scopedSlots?.renderCommentActions?.(params) || this?.renderCommentActions?.(params),
        renderAuthor: (params) =>
          this.$scopedSlots?.renderCommentAuthor?.(params) || this?.renderCommentAuthor?.(params),
        renderAvatar: (params) =>
          this.$scopedSlots?.renderCommentAvatar?.(params) || this?.renderCommentAvatar?.(params),
        renderContent: (params) =>
          this.$scopedSlots?.renderCommentContent?.(params) || this?.renderCommentContent?.(params),
        renderDateTime: (params) =>
          this.$scopedSlots?.renderCommentDateTime?.(params) ||
          this?.renderCommentDateTime?.(params),
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
                  {this.$slots?.renderCommentLoading ||
                    this?.renderCommentLoading ||
                    this.$renderLoading(h)}
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
