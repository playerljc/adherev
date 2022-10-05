import { Empty } from 'ant-design-vue';
import { Fragment } from 'vue-fragment';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import ScrollLoad from '@baifendian/adherev-ui-scrollload';

import CommentList from '../List';
import { selectorPrefix } from '../index';

const { VerticalFlexLayout } = FlexLayout;

const ListStandard: any = {
  name: `${selectorPrefix}-list-standard`,
  slots: ['renderEmpty', 'renderFirstLoading'],
  scopedSlots: ['renderList'],
  props: {
    getScrollWrapContainer: {
      type: Function,
      default: () => null,
    },
    flexLayoutProps: {
      type: Object,
      default: () => ({}),
    },
    listProps: {
      type: Object,
      default: () => ({}),
    },
    limit: {
      type: Number,
      default: 10,
    },
    fetchData: {
      type: Function,
      default: () => null,
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
  },
  data() {
    return {
      loading: true,
      data: {
        [this.dataKeys.current]: 1,
        [this.dataKeys.totalPage]: 0,
        [this.dataKeys.list]: [],
        [this.dataKeys.totalCount]: 0,
      },
      $paging: {
        page: 1,
        limit: this.limit,
      },
      $status: ScrollLoad.NORMAL,
      $callbackHandler: null,
    };
  },
  computed: {
    isEmpty() {
      return (
        this.$data.$paging.page === 1 && (this.data[this.dataKeys.list] as Array<any>).length === 0
      );
    },
  },
  methods: {
    $loadMore(callback) {
      if (this.$data.$status === ScrollLoad.EMPTY) {
        this.$data.$status = ScrollLoad.EMPTY;
        callback(ScrollLoad.EMPTY);
        return;
      }

      this.$data.$callbackHandler = callback;

      setTimeout(() => this.$appendData(), 100);
    },
    /**
     * loadData
     * @description 重新加载数据
     * @return {*}
     */
    $loadData() {
      this.loading = true;

      this.$data.$paging = {
        page: 1,
        limit: this.limit,
      };

      return this.$fetchData((res) => {
        this.data = res;
      });
    },
    /**
     * appendData
     * @description 加载更多
     * @return {*}
     */
    $appendData() {
      this.loading = true;

      this.$data.$paging.page = this.$data.$paging.page + 1;

      const { list } = this.dataKeys;

      return this.$fetchData((res) => {
        this.data = {
          ...res,
          [this.dataKeys.list]: [...(this.data[list] as any), ...res[list]],
        };
      });
    },
    /**
     * fetchData
     * @description 调用接口
     */
    $fetchData(callback) {
      return this?.fetchData?.(this.$data.$paging)
        .then((data) => {
          callback(data);

          this.loading = false;

          return data;
        })
        .catch((error) => {
          this.loading = false;

          if (this.$data.$callbackHandler) {
            this.$data.$status = ScrollLoad.ERROR;
            this.$data.$callbackHandler?.(this.$data.$status);
          }

          return error;
        });
    },
  },
  mounted() {
    this.$loadData();
  },
  watch: {
    data(data) {
      this.$nextTick(function () {
        if (this.$data.$callbackHandler) {
          this.$data.$status =
            this.$data.$paging.page < data[this.dataKeys.totalPage]
              ? ScrollLoad.NORMAL
              : ScrollLoad.EMPTY;
          this.$data.$callbackHandler(this.$data.$status);
        }
      });
    },
  },
  render() {
    // @ts-ignore
    return (
      <VerticalFlexLayout class={`${selectorPrefix}`} {...{ props: this.flexLayoutProps || {} }}>
        <div slot="renderMain" class={`${selectorPrefix}-auto`} ref="mainRef">
          <CommentList
            getScrollWrapContainer={this.getScrollWrapContainer}
            isLoading={this.loading}
            hasMore={
              (this.data[this.dataKeys!.list] as Array<any>).length <=
              this.data[this.dataKeys!.totalCount]
            }
            loadMore={() => this.$loadMore}
            {...{ props: this.listProps || {} }}
          >
            {/*@ts-ignore*/}
            <Fragment slot="renderFirstLoading">{this.$slots.renderFirstLoading}</Fragment>

            <ConditionalRender conditional={!this.isEmpty}>
              {this.$scopedSlots?.renderList?.(this.data)}
              {/*@ts-ignore*/}
              <Fragment slot="noMatch">{this.$slots.renderEmpty || <Empty />}</Fragment>
            </ConditionalRender>
          </CommentList>
        </div>
      </VerticalFlexLayout>
    );
  },
};

export default ListStandard;