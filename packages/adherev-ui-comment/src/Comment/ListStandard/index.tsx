import { Empty, Skeleton } from 'ant-design-vue';
import { VNode, computed, defineComponent, nextTick, onMounted, ref, shallowRef, watch } from 'vue';
import { func, number, object } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import ScrollLoad from '@baifendian/adherev-ui-scrollload';

import { FlexLayoutProps, ListProps } from '../../types';
import CommentList from '../List';

const selectorPrefix = 'adherev-ui-comment-list-standard';

const { VerticalFlexLayout } = FlexLayout;

type dataKey = {
  current: string;
  totalPage: string;
  list: string;
  totalCount: string;
};

const props = {
  getScrollWrapContainer: func<() => HTMLElement | null>(),
  flexLayoutProps: object<FlexLayoutProps>().def({}),
  listProps: object<ListProps>().def({}),
  limit: number().def(10),
  fetchData: func<(params?: any) => Promise<any>>(),
  dataKeys: object<dataKey>().def({
    current: 'current',
    totalPage: 'totalPage',
    list: 'list',
    totalCount: 'totalCount',
  }),
  renderEmpty: object<VNode>(),
  renderFirstLoading: object<VNode>(),
  renderList: func<(params?: any) => VNode | null>(),
};

export default defineComponent({
  name: `adv-comment-list-standard`,
  slots: ['renderEmpty', 'renderFirstLoading'],
  scopedSlots: ['renderList'],
  props,
  setup(props, { slots }) {
    const loading = ref(true);

    const data = shallowRef({
      [props.dataKeys.current]: 1,
      [props.dataKeys.totalPage]: 0,
      [props.dataKeys.list]: [],
      [props.dataKeys.totalCount]: 0,
    });

    const mainRef = ref<HTMLDivElement>();

    let paging = {
      page: 1,
      limit: props.limit,
    };

    let status = ScrollLoad.NORMAL;

    let callbackHandler: ((status?: string) => any) | null = null;

    const onLoadMore = (callback) => {
      if (status === ScrollLoad.EMPTY) {
        status = ScrollLoad.EMPTY;
        callback(ScrollLoad.EMPTY);
        return;
      }

      callbackHandler = callback;

      setTimeout(() => appendData(), 100);
    };

    const loadData = () => {
      loading.value = true;

      paging = {
        page: 1,
        limit: props.limit,
      };

      return fetchData((res) => {
        data.value = res;
      });
    };

    const appendData = () => {
      loading.value = true;

      paging.page = paging.page + 1;

      return fetchData((res) => {
        data.value = {
          ...res,
          [props.dataKeys.list]: [
            ...(data.value[props.dataKeys.list] as any),
            ...res[props.dataKeys.list],
          ],
        };
      });
    };

    const fetchData = (callback) => {
      return props
        ?.fetchData?.(paging)
        .then((data) => {
          callback(data);

          loading.value = false;

          return data;
        })
        .catch((error) => {
          loading.value = false;

          if (callbackHandler) {
            status = ScrollLoad.ERROR;
            callbackHandler?.(status);
          }

          return error;
        });
    };

    const renderFirstLoading = () => {
      if (slots.renderFirstLoading) {
        return slots.renderFirstLoading?.();
      }

      if (props.renderFirstLoading) {
        return props.renderFirstLoading;
      }

      const result: VNode[] = [];

      for (let i = 0; i < 7; i++) {
        result.push(<Skeleton key={i + 1} loading avatar />);
      }

      return result;
    };

    const isEmpty = computed(
      () => paging.page === 1 && (data.value[props.dataKeys.list] as any[]).length === 0,
    );

    watch(
      () => data,
      (newData) =>
        nextTick(() => {
          if (callbackHandler) {
            status =
              paging.page < data[props.dataKeys.totalPage] ? ScrollLoad.NORMAL : ScrollLoad.EMPTY;
            callbackHandler?.(status);
          }
        }),
    );

    onMounted(() => loadData());

    return () => (
      <VerticalFlexLayout class={`${selectorPrefix}`} {...(props.flexLayoutProps || {})}>
        {{
          renderMain: () => (
            <div class={`${selectorPrefix}-auto`} ref={mainRef}>
              {/*@ts-ignore*/}
              <CommentList
                getScrollWrapContainer={props.getScrollWrapContainer}
                isLoading={loading.value}
                hasMore={
                  (data.value[props.dataKeys.list] as any[]).length <=
                  data.value[props.dataKeys.totalCount]
                }
                onLoadMore={onLoadMore}
                {...(props.listProps || {})}
              >
                {{
                  default: () => (
                    // @ts-ignore
                    <ConditionalRender conditional={!isEmpty.value}>
                      {{
                        default: () =>
                          slots.renderList
                            ? slots?.renderList?.(data.value)
                            : props?.renderList?.(data.value),
                        noMatch: () => slots.renderEmpty?.() || props.renderEmpty || <Empty />,
                      }}
                    </ConditionalRender>
                  ),
                  renderFirstLoading: () => <div>{renderFirstLoading()}</div>,
                }}
              </CommentList>
            </div>
          ),
        }}
      </VerticalFlexLayout>
    );
  },
});
