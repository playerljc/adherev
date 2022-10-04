import classNames from 'classnames';
import { Fragment } from 'vue-fragment';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import Intl from '@baifendian/adherev-util-intl';

import { selectorPrefix } from '../../Comment';
import ReplyInfo from '../../Reply/Info';
import ReplySubmit from '../../Reply/Submit';

/**
 * Node
 * @param props
 * @constructor
 * @classdesc 节点(评论 | 回复)
 */
const Node: any = {
  name: `${selectorPrefix}-reply-node`,
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
  },
  scopedSlots: ['renderAvatar', 'renderAuthor', 'renderDateTime', 'renderContent'],
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
      const actions = [
        ...(
          this?.renderActions?.({ ...this.data }, (_data) => {
            this.data = _data;
          }) || []
        ).map((action, index) =>
          ConditionalRender.conditionalRender({
            conditional: !(action as any)?.data.class?.endsWith('-actions-action'),
            noMatch: action,
            match: (
              <li key={index} class={`${selectorPrefix}-actions-action`}>
                {action}
              </li>
            ),
          }),
        ),
      ];

      if (!actions.find((t) => t?.children?.[0]?.key === 'reply')) {
        actions.push(
          <li
            key="reply"
            class={classNames(
              `${selectorPrefix}-actions-action`,
              `${selectorPrefix}-actions-action-reply-btn`,
            )}
            onClick={() => {
              this.showReply = true;
            }}
          >
            {Intl.v('回复')}
          </li>,
        );
      }

      return actions;
    },
    $renderChildren(h) {
      const scopedSlots = {
        renderAuthor: (params) => this.$slots.renderAuthor(params),
        renderAvatar: (params) => this.$slots.renderAvatar(params),
        renderContent: (params) => this.$slots.renderContent(params),
        renderDateTime: (params) => this.$slots.renderDateTime(params),
      };

      return (
        <ul class={`${selectorPrefix}-children`}>
          {((this.listData[this.dataKeys.list] as []) || [])?.map?.((record) => (
            <li class={`${selectorPrefix}-children-item`} key={record[this.keyProp!]}>
              <ConditionalRender conditional={!this.$scopedSlots.default}>
                <ReplyInfo
                  isReply
                  data={record}
                  keyProp={this.keyProp}
                  isMoreProp={this.isMoreProp}
                  fetchData={this.$fetchData}
                  scopedSlots={scopedSlots}
                >
                  {/*@ts-ignore*/}
                  <Fragment slot="renderActions">{this.$slots.renderActions}</Fragment>
                  {/*@ts-ignore*/}
                  <Fragment slot="renderLoading">{this.$slots.renderLoading}</Fragment>
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
                <Fragment slot="noMatch">{this.$scopedSlots.default(record)}</Fragment>
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

              this.$loadData()?.then(() => {
                this.$nextTick(() => {
                  this.collapse = true;
                });
              });
            }}
          >
            <span>{this.$slots.showReplyTextIcon}</span>
            <span>{this.$slots.showReplyText}</span>
          </a>

          <a
            slot="noMatch"
            class={`${selectorPrefix}-collapse`}
            onClick={() => {
              this.collapse = false;
            }}
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

      return this.fetchData()?.then((res) => {
        this.data = res;
      });
    },
    $appendData() {
      this.loading = true;

      this.$data.$paging.page = this.$data.$paging.page + 1;

      const { list } = this.dataKeys;

      return this.fetchData()?.then((res) => {
        this.data = {
          ...res,
          [this.dataKeys.list]: [...(this.data[list] as any), ...res[list]],
        };
      });
    },
    $fetchData() {
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
    const {
      $scopedSlots: { renderAvatar, renderAuthor, renderDateTime, renderContent },
      $slots: { renderLoading },
    } = this;

    return (
      <FlexLayout
        direction="horizontal"
        class={classNames(selectorPrefix, this.isReply ? `${selectorPrefix}-reply` : null)}
      >
        <FlexLayout.Fixed class={`${selectorPrefix}-avatar-wrap`}>
          {renderAvatar?.({ ...this.data })}
        </FlexLayout.Fixed>

        <FlexLayout.Auto autoFixed fit>
          <FlexLayout direction="vertical">
            <FlexLayout.Fixed class={`${selectorPrefix}-title-row`} fit={false}>
              <div class={`${selectorPrefix}-title-row-author`}>
                {renderAuthor?.({ ...this.data })}
              </div>
              <div class={`${selectorPrefix}-title-row-date-time`}>
                {renderDateTime?.({ ...this.data })}
              </div>
            </FlexLayout.Fixed>

            <FlexLayout.Auto class={`${selectorPrefix}-content-wrap`}>
              {renderContent?.({ ...this.data })}
            </FlexLayout.Auto>

            <FlexLayout.Fixed>
              <ul class={`${selectorPrefix}-actions`}>{this.$renderActions(h)}</ul>
            </FlexLayout.Fixed>

            <ConditionalRender conditional={this.showReply}>
              <FlexLayout.Fixed style={{ marginTop: 15 }}>
                <ReplySubmit
                  onCancel={() => {
                    this.showReply = false;
                  }}
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
              {/*@ts-ignore*/}
              <Fragment>
                <ConditionalRender conditional={!this.loading}>
                  {this.$renderMore(h)}
                </ConditionalRender>

                <ConditionalRender conditional={this.collapse}>
                  {this.$renderChildren(h)}
                </ConditionalRender>

                <ConditionalRender conditional={this.loading}>{renderLoading}</ConditionalRender>
              </Fragment>
            </ConditionalRender>
          </FlexLayout>
        </FlexLayout.Auto>
      </FlexLayout>
    );
  },
};

export default Node;
