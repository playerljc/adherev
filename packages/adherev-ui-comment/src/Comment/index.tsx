import { Spin } from 'ant-design-vue';
import classNames from 'classnames';
import { VNode, defineComponent } from 'vue';
import { func, number, object, string } from 'vue-types';

import Intl from '@baifendian/adherev-util-intl';

import ReplyInfo from '../Reply/Info';
import { FlexLayoutProps, ListProps } from '../types';
import CommentInfo from './Info';
import ListStandard from './ListStandard';

export const selectorPrefix = 'adherev-ui-comment';

type dataKeys = {
  current: string;
  totalPage: string;
  list: string;
  totalCount: string;
};

const props = {
  getScrollWrapContainer: func<() => HTMLElement | null>(),
  fetchCommentData: func<(params?: any) => Promise<any>>(),
  commentDataKeys: object<dataKeys>().def({
    current: 'current',
    totalPage: 'totalPage',
    list: 'list',
    totalCount: 'totalCount',
  }),
  commentLimit: number().def(10),
  commentKeyProp: string().def('id'),
  fetchReplyData: func<(params?: any) => Promise<any>>(),
  replyDataKeys: object<dataKeys>().def({
    current: 'current',
    totalPage: 'totalPage',
    list: 'list',
    totalCount: 'totalCount',
  }),
  replyLimit: number().def(10),
  replyKeyProp: string().def('id'),
  fetchReply: func<(params?: any) => Promise<any>>(),
  listProps: object<ListProps>().def({}),
  isMoreProp: string().def('isMore'),
  flexLayoutProps: object<FlexLayoutProps>().def({}),
  local: string().def('zh'),
  emojiPickerProps: object<any>().def({}),
  renderReplyLoading: object<VNode>(),
  renderCommentLoading: object<VNode>(),
  showReplyText: object<VNode>(),
  showReplyTextIcon: object<VNode>(),
  hideReplyText: object<VNode>(),
  hideReplyTextIcon: object<VNode>(),
  loadMoreReplyText: object<VNode>(),
  loadMoreCollapseTextIcon: object<VNode>(),
  renderCommentActions: func<(params?: any) => VNode | null>(),
  renderCommentAuthor: func<(params?: any) => VNode | null>(),
  renderCommentAvatar: func<(params?: any) => VNode | null>(),
  renderCommentContent: func<(params?: any) => VNode | null>(),
  renderCommentDateTime: func<(params?: any) => VNode | null>(),
  renderReplyActions: func<(params?: any) => VNode | null>(),
  renderReplyAuthor: func<(params?: any) => VNode | null>(),
  renderReplyAvatar: func<(params?: any) => VNode | null>(),
  renderReplyContent: func<(params?: any) => VNode | null>(),
  renderReplyDateTime: func<(params?: any) => VNode | null>(),
};

export default defineComponent({
  name: 'adv-comment',
  slots: [
    'renderReplyLoading',
    'renderCommentLoading',
    'showReplyText',
    'showReplyTextIcon',
    'hideReplyText',
    'hideReplyTextIcon',
    'loadMoreReplyText',
    'loadMoreCollapseTextIcon',
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
  props,
  setup(props, { slots }) {
    const renderList = (data) => {
      const showReplyText =
        slots.showReplyText?.() || props.showReplyText || Intl.tv('显示回复内容');
      const hideReplyText = slots.hideReplyText?.() || props.hideReplyText || Intl.tv('收起回复');
      const loadMoreReplyText =
        slots.loadMoreReplyText?.() || props.loadMoreReplyText || Intl.tv('加载更多回复');

      const showReplyTextIcon = slots.showReplyTextIcon?.() || props.showReplyTextIcon || (
        <i class={classNames(`${selectorPrefix}-icon`, 'iconfont iconcaret-down')} />
      );

      const hideReplyTextIcon = slots.hideReplyTextIcon?.() || props.hideReplyTextIcon || (
        <i class={classNames(`${selectorPrefix}-icon`, 'iconfont iconcaret-up')} />
      );

      const loadMoreCollapseTextIcon = slots.loadMoreCollapseTextIcon?.() ||
        props.loadMoreCollapseTextIcon || (
          <i class={classNames(`${selectorPrefix}-icon`, 'iconfont iconenter reply-icon')} />
        );

      const scopedSlots = {
        default: (record) => {
          const scopedSlots = {
            renderActions: (params) =>
              slots?.renderReplyActions?.(params) || props?.renderReplyActions?.(params),
            renderAuthor: (params) =>
              slots?.renderReplyAuthor?.(params) || props?.renderReplyAuthor?.(params),
            renderAvatar: (params) =>
              slots?.renderReplyAvatar?.(params) || props?.renderReplyAvatar?.(params),
            renderContent: (params) =>
              slots?.renderReplyContent?.(params) || props?.renderReplyContent?.(params),
            renderDateTime: (params) =>
              slots?.renderReplyDateTime?.(params) || props?.renderReplyDateTime?.(params),
            renderLoading: () => {
              slots.renderReplyLoading?.() || props.renderReplyLoading || renderLoading();
            },
            showReplyText: () => showReplyText,
            hideReplyText: () => hideReplyText,
            loadMoreReplyText: () => loadMoreReplyText,
            showReplyTextIcon: () => showReplyTextIcon,
            hideReplyTextIcon: () => hideReplyTextIcon,
            loadMoreCollapseTextIcon: () => loadMoreCollapseTextIcon,
          };

          return (
            <ReplyInfo
              defaultData={record}
              dataKeys={props.replyDataKeys}
              limit={props.replyLimit}
              keyProp={props.replyKeyProp}
              isMoreProp={props.isMoreProp}
              fetchData={props.fetchReplyData}
              fetchReply={props.fetchReply}
              local={props.local}
              emojiPickerProps={props.emojiPickerProps}
            >
              {scopedSlots}
            </ReplyInfo>
          );
        },
        renderActions: (params) =>
          slots?.renderCommentActions?.(params) || props?.renderCommentActions?.(params),
        renderAuthor: (params) =>
          slots?.renderCommentAuthor?.(params) || props?.renderCommentAuthor?.(params),
        renderAvatar: (params) =>
          slots?.renderCommentAvatar?.(params) || props?.renderCommentAvatar?.(params),
        renderContent: (params) =>
          slots?.renderCommentContent?.(params) || props?.renderCommentContent?.(params),
        renderDateTime: (params) =>
          slots?.renderCommentDateTime?.(params) || props?.renderCommentDateTime?.(params),
        renderLoading: () => {
          slots?.renderCommentLoading?.() || props?.renderCommentLoading || renderLoading();
        },
        showReplyText: () => showReplyText,
        hideReplyText: () => hideReplyText,
        loadMoreReplyText: () => loadMoreReplyText,
        showReplyTextIcon: () => showReplyTextIcon,
        hideReplyTextIcon: () => hideReplyTextIcon,
        loadMoreCollapseTextIcon: () => loadMoreCollapseTextIcon,
      };

      return (
        <ul class={`${selectorPrefix}-list`}>
          {data?.list?.map?.((record) => (
            <li class={`${selectorPrefix}-list-item`} key={record[props.commentKeyProp!]}>
              <CommentInfo
                defaultData={record}
                dataKeys={props.replyDataKeys}
                limit={props.replyLimit}
                keyProp={props.replyKeyProp}
                isMoreProp={props.isMoreProp}
                fetchData={props.fetchReplyData}
                fetchReply={props.fetchReply}
                local={props.local}
                emojiPickerProps={props.emojiPickerProps}
              >
                {scopedSlots}
              </CommentInfo>
            </li>
          ))}
        </ul>
      );
    };

    const renderLoading = () => {
      return (
        <div class={`${selectorPrefix}-loading`}>
          <Spin>
            {{
              indicator: () => (
                <i
                  class={classNames(
                    `${selectorPrefix}-icon`,
                    `${selectorPrefix}-icon-loading`,
                    'iconfont iconloading',
                  )}
                />
              ),
            }}
          </Spin>
        </div>
      );
    };

    return () => (
      <ListStandard
        getScrollWrapContainer={props.getScrollWrapContainer}
        listProps={props.listProps}
        dataKeys={props.commentDataKeys}
        limit={props.commentLimit}
        fetchData={props.fetchCommentData}
        flexLayoutProps={props.flexLayoutProps}
      >
        {{
          renderList: (data) => renderList(data),
        }}
      </ListStandard>
    );
  },
});
