import Vue, { VNode } from 'vue';
import { Spin, Skeleton } from 'ant-design-vue';

const selectorPrefix = 'adherev-ui-suspense';

/**
 * Suspense
 * @overview showLoading: boolean
 * @overview renderInner: VNode | null
 * @overview fetchData(): void
 */
export default Vue.extend({
  props: {
    reset: {
      type: Boolean,
      default: false,
    },
  },
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
    this.fetchData();
  },
  methods: {
    /**
     * renderNormalFirstLoading
     */
    renderNormalFirstLoading(h): VNode | null {
      const result: VNode[] = [];

      for (let i = 0; i < 7; i++) {
        // @ts-ignore
        result.push(<Skeleton key={i + 1} loading active avatar />);
      }

      return <div class={`${selectorPrefix}-loading`}>{result}</div>;
    },
    /**
     * renderFirstLoading
     * @param h
     */
    renderFirstLoading(h): VNode | null {
      const { $slots } = this;

      if ($slots.firstLoading) {
        return $slots.firstLoading;
      }

      return this.renderNormalFirstLoading(h);
    },
    /**
     * renderNormal
     * @param h
     */
    renderNormal(h: VNode | null) {
      return (
        // @ts-ignore
        <Spin size="large" spinning={this.showLoading()}>
          {this.renderInner(h)}
        </Spin>
      );
    },
    /**
     * renderDispatch
     * @param h
     */
    renderDispatch(h) {
      const loading = this.showLoading();

      if (this.isFirst && !this.isFirstLoading && loading) {
        this.isFirstLoading = true;
      }

      if (this.isFirst && this.isFirstLoading && !loading) {
        this.isFirst = false;

        this.isFirstLoading = false;
      }

      if (this.isFirst) {
        return this.renderFirstLoading(h);
      }

      return this.renderNormal(h);
    },
    /**
     * renderSuspense
     * @description - renderSuspense
     * @param h
     */
    renderSuspense(h) {
      return <div class={selectorPrefix}>{this.renderDispatch(h)}</div>;
    },
  },
  /**
   * render
   * @param h
   */
  render(h) {
    return this.renderSuspense(h);
  },
});
