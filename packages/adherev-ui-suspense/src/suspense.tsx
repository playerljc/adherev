import { Skeleton, Spin } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { bool } from 'vue-types';

const selectorPrefix = 'adherev-ui-suspense';

const suspenseProps = {
  reset: bool().def(false),
};

/**
 * Suspense
 * @overview showLoading: boolean
 * @overview renderInner: VNode | null
 * @overview fetchData(): void
 */
export default defineComponent({
  props: suspenseProps,
  slots: ['firstLoading'],
  data() {
    return {
      // 第一次
      isFirst: true,
      // 第一次加载
      isFirstLoading: false,
    };
  },
  watch: {
    reset(newVal) {
      if (newVal) {
        // 第一次

        this.isFirst = true;

        // 第一次加载

        this.isFirstLoading = false;

        this.$forceUpdate();
      }
    },
  },
  mounted() {
    // @ts-ignore
    this.fetchData();
  },
  methods: {
    /**
     * renderNormalFirstLoading
     */
    renderNormalFirstLoading(): JSX.Element {
      const result = [];

      for (let i = 0; i < 7; i++) {
        // @ts-ignore
        result.push(<Skeleton key={i + 1} loading active avatar />);
      }

      return (
        <div
          // @ts-ignore
          class={`${selectorPrefix}-loading`}
        >
          {result}
        </div>
      );
    },
    /**
     * renderFirstLoading
     * @param h
     */
    renderFirstLoading(): JSX.Element {
      const { $slots } = this;

      if ($slots.firstLoading) {
        // @ts-ignore
        return $slots.firstLoading();
      }

      return this.renderNormalFirstLoading();
    },
    /**
     * renderNormal
     * @param h
     */
    renderNormal(): JSX.Element {
      return (
        // @ts-ignore
        <Spin size="large" spinning={this.showLoading()}>
          {
            // @ts-ignore
            this.renderInner()
          }
        </Spin>
      );
    },
    /**
     * renderDispatch
     * @param h
     */
    renderDispatch(): JSX.Element {
      // @ts-ignore
      const loading = this.showLoading();

      if (this.isFirst && !this.isFirstLoading && loading) {
        this.isFirstLoading = true;
      }

      if (this.isFirst && this.isFirstLoading && !loading) {
        this.isFirst = false;

        this.isFirstLoading = false;
      }

      if (this.isFirst) {
        return this.renderFirstLoading();
      }

      return this.renderNormal();
    },
    /**
     * renderSuspense
     * @description - renderSuspense
     * @param h
     */
    renderSuspense(): JSX.Element {
      return (
        <div
          // @ts-ignore
          class={selectorPrefix}
        >
          {this.renderDispatch()}
        </div>
      );
    },
  },
  /**
   * render
   */
  render(): JSX.Element {
    return this.renderSuspense();
  },
});
