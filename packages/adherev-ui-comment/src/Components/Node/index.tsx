import classNames from 'classnames';
import type { VNode } from 'vue';
import { Fragment } from 'vue-fragment';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import Intl from '@baifendian/adherev-util-intl';

import ReplyInfo from '../../Reply/Info';
import ReplySubmit from '../../Reply/Submit';

const selectorPrefix = 'adherev-ui-comment-node';

/**
 * Node
 * @param props
 * @constructor
 * @classdesc 节点(评论 | 回复)
 */
const Node: any = {
  name: `adv-comment-reply-node`,
  props: {
    isReply: {
      type: Boolean,
      default: false,
    },
    defaultData: {
      type: Object,
      default: () => ({}),
    },
    dataKeys: {
      type: Object,
      default: () => ({
        current: 'current',
        totalPage: 'totalPage',
        list: 'list',
        totalCount: 'totalCount',
      }),
    },
    limit: {
      type: Number,
      default: 10,
    },
    fetchData: {
      type: Function,
    },
    fetchReply: {
      type: Function,
    },
    keyProp: {
      type: String,
      default: '',
    },
    isMoreProp: {
      type: String,
      default: '',
    },
    local: {
      type: String,
      default: 'zh',
    },
    emojiPickerProps: {
      type: Object,
      default: () => ({}),
    },
    comId: {
      type: [String, Number],
      default: '',
    },
  },
  scopedSlots: ['renderActions', 'renderAuthor', 'renderAvatar', 'renderContent', 'renderDateTime'],
  slots: [
    'renderLoading',
    'loadMoreCollapseTextIcon',
    'loadMoreReplyText',
    'showReplyTextIcon',
    'showReplyText',
    'hideReplyTextIcon',
    'hideReplyText',
  ],
  data() {
    return {
      listData: {
        [this.dataKeys.current]: 1,
        [this.dataKeys.list]: [],
        [this.dataKeys.totalCount]: 0,
        [this.dataKeys.totalPage]: 0,
      },
      data: this.defaultData,
      collapse: false,
      loading: false,
      showReply: false,
      $paging: {
        page: 1,
        limit: this.limit,
      },
    };
  },
  watch: {
    defaultData(data) {
      this.data = data;
    },
  },
  computed: {
    hasMore() {
      return (
        (this.listData[this.dataKeys.list] as []).length <= this.listData[this.dataKeys.totalCount]
      );
    },
  },
  methods: {
    $renderActions(h) {
      const actions: VNode[] =
        this.$scopedSlots
          ?.renderActions?.({
            record: { ...this.data },
            callback: (_data) => {
              this.data = _data;
            },
          })
          ?.map((node, index) =>
            ConditionalRender.conditionalRender({
              conditional: !node?.data?.class?.endsWith?.('-actions-action'),
              noMatch: node,
              match: (
                <li key={index} class={`${selectorPrefix}-actions-action`}>
                  {node}
                </li>
              ),
            }),
          ) || [];

      if (!actions.find((node) => node?.key === 'reply')) {
        actions.push(
          <li
            key="reply"
            class={classNames(
              `${selectorPrefix}-actions-action`,
              `${selectorPrefix}-actions-action-reply-btn`,
            )}
            onClick={() => (this.showReply = true)}
          >
            {Intl.v('回复')}
          </li>,
        );
      }

      return actions;
    },
    $renderChildren(h) {
      const scopedSlots = {
        renderActions: (params) => this.$scopedSlots.renderActions(params),
        renderAuthor: (params) => this.$scopedSlots.renderAuthor(params),
        renderAvatar: (params) => this.$scopedSlots.renderAvatar(params),
        renderContent: (params) => this.$scopedSlots.renderContent(params),
        renderDateTime: (params) => this.$scopedSlots.renderDateTime(params),
      };

      return (
        <ul class={`${selectorPrefix}-children`}>
          {((this.listData[this.dataKeys.list] as []) || [])?.map?.((record) => (
            <li
              class={`${selectorPrefix}-children-item`}
              key={record[this.keyProp]}
              id={record[this.keyProp]}
            >
              <ConditionalRender conditional={!this?.$scopedSlots?.default}>
                <ReplyInfo
                  comId={record[this.keyProp]}
                  isReply
                  defaultData={record}
                  dataKeys={this.dataKeys}
                  limit={this.limit}
                  keyProp={this.keyProp}
                  isMoreProp={this.isMoreProp}
                  fetchData={this.fetchData}
                  fetchReply={this.fetchReply}
                  local={this.local}
                  emojiPickerProps={this.emojiPickerProps}
                  scopedSlots={scopedSlots}
                >
                  <div slot="renderLoading">{this.$slots.renderLoading}</div>

                  {/*@ts-ignore*/}
                  <Fragment slot="showReplyText">{this.$slots.showReplyText}</Fragment>
                  {/*@ts-ignore*/}
                  <Fragment slot="hideReplyText">{this.$slots.hideReplyText}</Fragment>
                  {/*@ts-ignore*/}
                  <Fragment slot="loadMoreReplyText">{this.$slots.loadMoreReplyText}</Fragment>
                  {/*@ts-ignore*/}
                  <Fragment slot="showReplyTextIcon">{this.$slots.showReplyTextIcon}</Fragment>
                  {/*@ts-ignore*/}
                  <Fragment slot="hideReplyTextIcon">{this.$slots.hideReplyTextIcon}</Fragment>
                  {/*@ts-ignore*/}
                  <Fragment slot="loadMoreCollapseTextIcon">
                    {this.$slots.loadMoreCollapseTextIcon}
                  </Fragment>
                </ReplyInfo>

                {/*@ts-ignore*/}
                <Fragment slot="noMatch">{this?.$scopedSlots?.default?.(record)}</Fragment>
              </ConditionalRender>
            </li>
          ))}

          <ConditionalRender conditional={!this.loading && this.hasMore}>
            <li class={classNames(`${selectorPrefix}-children-item`, 'more')}>
              <a onClick={this.$appendData}>
                <span>{this.$slots.loadMoreCollapseTextIcon}</span>
                <span>{this.$slots.loadMoreReplyText}</span>
              </a>
            </li>
          </ConditionalRender>
        </ul>
      );
    },
    $renderMore(h) {
      return (
        <ConditionalRender conditional={!this.collapse}>
          <a
            class={`${selectorPrefix}-collapse`}
            onClick={() => {
              if (!!(this.listData[this.dataKeys.list] as []).length) {
                this.collapse = true;
                return;
              }

              console.log('renderMore加载回复', 'comId:' + this.comId);

              this.$loadData()?.then(() => (this.collapse = true));
            }}
          >
            <span>{this.$slots.showReplyTextIcon}</span>
            <span>{this.$slots.showReplyText}</span>
          </a>

          <a
            slot="noMatch"
            class={`${selectorPrefix}-collapse`}
            onClick={() => (this.collapse = false)}
          >
            <span>{this.$slots.hideReplyTextIcon}</span>
            <span>{this.$slots.hideReplyText}</span>
          </a>
        </ConditionalRender>
      );
    },
    $loadData() {
      this.loading = true;

      this.$data.$paging = {
        page: 1,
        limit: this.limit,
      };

      console.log('$loadData', 'comId:' + this.comId);

      return this.$fetchData().then((res) => {
        this.listData = res;
      });
    },
    $appendData() {
      this.loading = true;

      this.$data.$paging.page = this.$data.$paging.page + 1;

      const { list } = this.dataKeys;

      return this.$fetchData().then((res) => {
        this.listData = {
          ...res,
          [this.dataKeys.list]: [...(this.listData[list] as any), ...res[list]],
        };
      });
    },
    $fetchData() {
      // console.log('$fetchData', '页码:' + this.$data.$paging.page, 'comId:' + this.comId);

      return this?.fetchData?.({
        ...this.$data.$paging,
        record: { ...this.data },
      })
        ?.then((data) => {
          this.loading = false;

          return data;
        })
        ?.catch((error) => {
          this.loading = false;

          return error;
        });
    },
  },
  render(h) {
    return (
      <FlexLayout
        direction="horizontal"
        class={classNames(selectorPrefix, this.isReply ? `${selectorPrefix}-reply` : '')}
      >
        <FlexLayout.Fixed class={`${selectorPrefix}-avatar-wrap`}>
          {this.$scopedSlots?.renderAvatar?.({ ...this.data })}
        </FlexLayout.Fixed>

        <FlexLayout.Auto autoFixed fit>
          <FlexLayout direction="vertical">
            <FlexLayout.Fixed class={`${selectorPrefix}-title-row`} fit={false}>
              <div class={`${selectorPrefix}-title-row-author`}>
                {this.$scopedSlots?.renderAuthor?.({ ...this.data })}
              </div>
              <div class={`${selectorPrefix}-title-row-date-time`}>
                {this.$scopedSlots?.renderDateTime?.({ ...this.data })}
              </div>
            </FlexLayout.Fixed>

            <FlexLayout.Auto class={`${selectorPrefix}-content-wrap`}>
              {this.$scopedSlots?.renderContent?.({ ...this.data })}
            </FlexLayout.Auto>

            <FlexLayout.Fixed>
              <ul class={`${selectorPrefix}-actions`}>{this.$renderActions(h)}</ul>
            </FlexLayout.Fixed>

            <ConditionalRender conditional={this.showReply}>
              <FlexLayout.Fixed style="margin-top:15px;">
                <ReplySubmit
                  onCancel={() => (this.showReply = false)}
                  onResult={(reply) => {
                    this.fetchReply?.({
                      id: this.data?.[this.keyProp!],
                      record: { ...this.data },
                      reply,
                    })?.then(() => {
                      this.showReply = false;
                      this.$loadData();
                    });
                  }}
                  local={this.local}
                  emojiPickerProps={this.emojiPickerProps}
                />
              </FlexLayout.Fixed>
            </ConditionalRender>

            <ConditionalRender conditional={this.data?.[this.isMoreProp]}>
              <div>
                <ConditionalRender conditional={!this.loading}>
                  {this.$renderMore(h)}
                </ConditionalRender>

                <ConditionalRender.Show conditional={this.collapse}>
                  {this.$renderChildren(h)}
                </ConditionalRender.Show>

                <ConditionalRender conditional={this.loading}>
                  {this.$slots.renderLoading}
                </ConditionalRender>
              </div>
            </ConditionalRender>
          </FlexLayout>
        </FlexLayout.Auto>
      </FlexLayout>
    );
  },
};

export default Node;
