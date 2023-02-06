import classNames from 'classnames';
import { VNode, computed, defineComponent, ref, watch } from 'vue';
import { bool, func, number, object, oneOfType, string } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import Intl from '@baifendian/adherev-util-intl';

import ReplyInfo from '../../Reply/Info';
import ReplySubmit from '../../Reply/Submit';

const selectorPrefix = 'adherev-ui-comment-node';

type dataKeys = {
  current: string;
  totalPage: string;
  list: string;
  totalCount: string;
};

const props = {
  isReply: bool().def(false),
  defaultData: object().def({}),
  dataKeys: object<dataKeys>().def({
    current: 'current',
    totalPage: 'totalPage',
    list: 'list',
    totalCount: 'totalCount',
  }),
  limit: number().def(10),
  fetchData: func<(params?: any) => Promise<any>>(),
  fetchReply: func<(params?: any) => Promise<any>>(),
  keyProp: string().def(''),
  isMoreProp: string().def(''),
  local: string().def('zh'),
  emojiPickerProps: object().def({}),
  comId: oneOfType([string(), number()]).def(''),
  renderLoading: object<VNode>(),
  loadMoreCollapseTextIcon: object<VNode>(),
  loadMoreReplyText: object<VNode>(),
  showReplyTextIcon: object<VNode>(),
  showReplyText: object<VNode>(),
  hideReplyTextIcon: object<VNode>(),
  hideReplyText: object<VNode>(),
  renderActions: func<(params?: any) => VNode[] | null>(),
  renderAuthor: func<(params?: any) => VNode | null>(),
  renderAvatar: func<(params?: any) => VNode | null>(),
  renderContent: func<(params?: any) => VNode | null>(),
  renderDateTime: func<(params?: any) => VNode | null>(),
};

export default defineComponent({
  name: `adv-comment-reply-node`,
  slots: [
    'renderLoading',
    'loadMoreCollapseTextIcon',
    'loadMoreReplyText',
    'showReplyTextIcon',
    'showReplyText',
    'hideReplyTextIcon',
    'hideReplyText',
    'renderActions',
    'renderAuthor',
    'renderAvatar',
    'renderContent',
    'renderDateTime',
  ],
  props,
  setup(props, { slots }) {
    const listData = ref({
      [props.dataKeys.current]: 1,
      [props.dataKeys.list]: [],
      [props.dataKeys.totalCount]: 0,
      [props.dataKeys.totalPage]: 0,
    });

    const data = ref(props.defaultData);

    const collapse = ref(false);

    const loading = ref(false);

    const showReply = ref(false);

    let paging = {
      page: 1,
      limit: props.limit,
    };

    const renderActions = () => {
      const actions: VNode[] = ((slots?.renderActions || props.renderActions)?.({
        record: { ...data.value },
        callback: (_data) => {
          data.value = _data;
        },
      })?.map?.((node, index) =>
        ConditionalRender.conditionalRender({
          conditional: !node?.props?.class?.endsWith?.('-actions-action'),
          noMatch: node,
          match: (
            <li key={index} class={`${selectorPrefix}-actions-action`}>
              {node}
            </li>
          ),
        }),
      ) || []) as VNode[];

      if (!actions.find((node) => node?.key === 'reply')) {
        actions.push(
          <li
            key="reply"
            class={classNames(
              `${selectorPrefix}-actions-action`,
              `${selectorPrefix}-actions-action-reply-btn`,
            )}
            // @ts-ignore
            onClick={() => (showReply.value = true)}
          >
            {Intl.tv('回复')}
          </li>,
        );
      }

      return actions;
    };

    const renderChildren = () => {
      const scopedSlots = {
        renderActions: (params) => slots?.renderActions?.(params) || props?.renderActions?.(params),
        renderAuthor: (params) => slots?.renderAuthor?.(params) || props?.renderAuthor?.(params),
        renderAvatar: (params) => slots?.renderAvatar?.(params) || props?.renderAvatar?.(params),
        renderContent: (params) => slots?.renderContent?.(params) || props?.renderContent?.(params),
        renderDateTime: (params) =>
          slots?.renderDateTime?.(params) || props?.renderDateTime?.(params),
        renderLoading: () => {
          slots.renderLoading?.() || props.renderLoading;
        },
        showReplyText: () => slots.showReplyText?.() || props.showReplyText,
        hideReplyText: () => slots.hideReplyText?.() || props.hideReplyText,
        loadMoreReplyText: () => slots.loadMoreReplyText?.() || props.loadMoreReplyText,
        showReplyTextIcon: () => slots.showReplyTextIcon?.() || props.showReplyTextIcon,
        hideReplyTextIcon: () => slots.hideReplyTextIcon?.() || props.hideReplyTextIcon,
        loadMoreCollapseTextIcon: () =>
          slots.loadMoreCollapseTextIcon?.() || props.loadMoreCollapseTextIcon,
      };

      return (
        <ul class={`${selectorPrefix}-children`}>
          {((listData.value[props.dataKeys.list] as []) || [])?.map?.((record) => (
            <li
              class={`${selectorPrefix}-children-item`}
              key={record[props.keyProp]}
              id={record[props.keyProp]}
            >
              {/*@ts-ignore*/}
              <ConditionalRender conditional={!slots?.default}>
                {{
                  default: () => (
                    <ReplyInfo
                      // @ts-ignore
                      comId={record[props.keyProp]}
                      isReply
                      defaultData={record}
                      dataKeys={props.dataKeys}
                      limit={props.limit}
                      keyProp={props.keyProp}
                      isMoreProp={props.isMoreProp}
                      fetchData={props.fetchData}
                      fetchReply={props.fetchReply}
                      local={props.local}
                      emojiPickerProps={props.emojiPickerProps}
                    >
                      {scopedSlots}
                    </ReplyInfo>
                  ),
                  noMatch: () => slots?.default?.(record),
                }}
              </ConditionalRender>
            </li>
          ))}

          {/*@ts-ignore*/}
          <ConditionalRender conditional={!loading.value && hasMore.value}>
            {{
              default: () => (
                <li class={classNames(`${selectorPrefix}-children-item`, 'more')}>
                  <a
                    // @ts-ignore
                    onClick={appendData}
                  >
                    <span>
                      {slots.loadMoreCollapseTextIcon?.() || props.loadMoreCollapseTextIcon}
                    </span>
                    <span>{slots.loadMoreReplyText?.() || props.loadMoreReplyText}</span>
                  </a>
                </li>
              ),
            }}
          </ConditionalRender>
        </ul>
      );
    };

    const renderMore = () => {
      return (
        // @ts-ignore
        <ConditionalRender conditional={!collapse.value}>
          {{
            default: () => (
              <a
                class={`${selectorPrefix}-collapse`}
                // @ts-ignore
                onClick={() => {
                  if (!!(listData.value[props.dataKeys.list] as []).length) {
                    collapse.value = true;
                    return;
                  }

                  loadData()?.then(() => (collapse.value = true));
                }}
              >
                <span>{slots.showReplyTextIcon?.() || props.showReplyTextIcon}</span>
                <span>{slots.showReplyText?.() || props.showReplyText}</span>
              </a>
            ),
            noMatch: () => (
              <a
                class={`${selectorPrefix}-collapse`}
                // @ts-ignore
                onClick={() => (collapse.value = false)}
              >
                <span>{slots.hideReplyTextIcon?.() || props.hideReplyTextIcon}</span>
                <span>{slots.hideReplyText?.() || props.hideReplyText}</span>
              </a>
            ),
          }}
        </ConditionalRender>
      );
    };

    const loadData = () => {
      loading.value = true;

      paging = {
        page: 1,
        limit: props.limit,
      };

      return fetchData?.()?.then((res) => {
        listData.value = res;
      });
    };

    const appendData = () => {
      loading.value = true;

      paging.page = paging.page + 1;

      return fetchData?.()?.then((res) => {
        listData.value = {
          ...res,
          [props.dataKeys.list]: [
            ...(listData.value[props.dataKeys.list] as any),
            ...res[props.dataKeys.list],
          ],
        };
      });
    };

    const fetchData = () => {
      return props
        ?.fetchData?.({
          ...paging,
          record: { ...data.value },
        })
        ?.then((data) => {
          loading.value = false;

          return data;
        })
        ?.catch((error) => {
          loading.value = false;

          return error;
        });
    };

    const hasMore = computed(
      () =>
        (listData.value[props.dataKeys.list] as []).length <=
        listData.value[props.dataKeys.totalCount],
    );

    watch(
      () => props.defaultData,
      (_val) => (data.value = _val),
    );

    return () => (
      // @ts-ignore
      <FlexLayout
        direction="horizontal"
        class={classNames(selectorPrefix, props.isReply ? `${selectorPrefix}-reply` : '')}
      >
        <FlexLayout.Fixed class={`${selectorPrefix}-avatar-wrap`}>
          {(slots?.renderAvatar || props?.renderAvatar)?.({ ...data.value })}
        </FlexLayout.Fixed>

        <FlexLayout.Auto autoFixed fit>
          {/*@ts-ignore*/}
          <FlexLayout direction="vertical">
            <FlexLayout.Fixed class={`${selectorPrefix}-title-row`} fit={false}>
              <div class={`${selectorPrefix}-title-row-author`}>
                {(slots?.renderAuthor || props?.renderAuthor)?.({ ...data.value })}
              </div>
              <div class={`${selectorPrefix}-title-row-date-time`}>
                {(slots?.renderDateTime || props?.renderDateTime)?.({ ...data.value })}
              </div>
            </FlexLayout.Fixed>

            <FlexLayout.Auto class={`${selectorPrefix}-content-wrap`}>
              {(slots?.renderContent || props?.renderContent)?.({ ...data.value })}
            </FlexLayout.Auto>

            <FlexLayout.Fixed>
              <ul class={`${selectorPrefix}-actions`}>{renderActions()}</ul>
            </FlexLayout.Fixed>

            {/*@ts-ignore*/}
            <ConditionalRender conditional={showReply.value}>
              {{
                default: () => (
                  <FlexLayout.Fixed style="margin-top:15px;">
                    <ReplySubmit
                      onCancel={() => (showReply.value = false)}
                      onResult={(reply) => {
                        props
                          .fetchReply?.({
                            id: data.value?.[props.keyProp!],
                            record: { ...data.value },
                            reply,
                          })
                          ?.then(() => {
                            showReply.value = false;
                            loadData();
                          });
                      }}
                      local={props.local}
                      emojiPickerProps={props.emojiPickerProps}
                    />
                  </FlexLayout.Fixed>
                ),
              }}
            </ConditionalRender>

            {/*@ts-ignore*/}
            <ConditionalRender conditional={data.value?.[props.isMoreProp]}>
              {{
                default: () => (
                  <>
                    {/*@ts-ignore*/}
                    <ConditionalRender conditional={!loading.value}>
                      {renderMore()}
                    </ConditionalRender>

                    <ConditionalRender.Show conditional={collapse.value}>
                      {renderChildren()}
                    </ConditionalRender.Show>

                    {/*@ts-ignore*/}
                    <ConditionalRender conditional={loading.value}>
                      {slots.renderLoading?.() || props.renderLoading}
                    </ConditionalRender>
                  </>
                ),
              }}
            </ConditionalRender>
          </FlexLayout>
        </FlexLayout.Auto>
      </FlexLayout>
    );
  },
});
