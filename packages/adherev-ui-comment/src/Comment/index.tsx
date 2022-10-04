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
  name: selectorPrefix,
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
      type: Object,
      default: () => ({}),
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
  slots: [],
  scopedSlots: [],
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
        default: (record) => (
          <ReplyInfo
            data={record}
            dataKeys={this.replyDataKeys}
            limit={this.replyLimit}
            keyProp={this.replyKeyProp}
            isMoreProp={this.isMoreProp}
            fetchData={this.fetchReplyData}
            fetchReply={this.fetchReply}
            local={this.local}
            emojiPickerProps={this.emojiPickerProps}
          >
            {/*@ts-ignore*/}
            <Fragment slot="renderActions">{this.$slots.renderReplyActions}</Fragment>
            {/*@ts-ignore*/}
            <Fragment slot="renderAuthor">{this.$slots.renderReplyAuthor}</Fragment>
            {/*@ts-ignore*/}
            <Fragment slot="renderAvatar">{this.$slots.renderReplyAvatar}</Fragment>
            {/*@ts-ignore*/}
            <Fragment slot="renderContent">{this.$slots.renderReplyContent}</Fragment>
            {/*@ts-ignore*/}
            <Fragment slot="renderDateTime">{this.$slots.renderReplyDateTime}</Fragment>
            {/*@ts-ignore*/}
            <Fragment slot="renderLoading">
              {this.$slots.renderReplyLoading || this.$renderLoading(h)}
            </Fragment>
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
        ),
      };

      return (
        <ul class={`${selectorPrefix}-list`}>
          {data?.list?.map?.((record) => (
            <li class={`${selectorPrefix}-list-item`} key={record[this.commentKeyProp!]}>
              <CommentInfo
                data={record}
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
                {/*@ts-ignore*/}
                <Fragment slot="renderActions">{this.$slots.renderCommentActions}</Fragment>
                {/*@ts-ignore*/}
                <Fragment slot="renderAuthor">{this.$slots.renderCommentAuthor}</Fragment>
                {/*@ts-ignore*/}
                <Fragment slot="renderAvatar">{this.$slots.renderCommentAvatar}</Fragment>
                {/*@ts-ignore*/}
                <Fragment slot="renderContent">{this.$slots.renderCommentContent}</Fragment>
                {/*@ts-ignore*/}
                <Fragment slot="renderDateTime">{this.$slots.renderCommentDateTime}</Fragment>
                {/*@ts-ignore*/}
                <Fragment slot="renderLoading">
                  {this.$slots.renderCommentLoading || this.$renderLoading(h)}
                </Fragment>
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
          {/*@ts-ignore*/}
          <Spin indicator={<Icon type="loading" style="font-size: 24px" />} />
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
