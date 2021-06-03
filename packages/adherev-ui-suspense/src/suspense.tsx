import { Spin, Skeleton } from 'ant-design-vue';

const selectorPrefix = 'adherev-ui-suspense';

/**
 * renderNormalFirstLoading
 */
function renderNormalFirstLoading(h) {
  console.log('renderNormalFirstLoading', h);
  const result = [];

  for (let i = 0; i < 7; i++) {
    // @ts-ignore
    result.push(<Skeleton key={i + 1} loading active avatar />);
  }

  // @ts-ignore
  return <div class={`${selectorPrefix}-loading`}>{result}</div>;
}

/**
 * Suspense
 * @overview showLoading: boolean
 * @overview renderInner: VNode | null
 * @overview fetchData(): void
 */
export default {
  props: {
    reset: {
      type: Boolean,
      default: false,
    },
    // firstLoading: {
    //   type: String,
    //   default: null,
    // },
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
    reset: function (newVal, oldVal) {
      if (newVal) {
        // 第一次
        // @ts-ignore
        this.isFirst = true;

        // 第一次加载
        // @ts-ignore
        this.isFirstLoading = false;

        // @ts-ignore
        this.$forceUpdate();
      }
    },
  },
  mounted() {
    // @ts-ignore
    this.fetchData();
  },
  methods: {
    renderFirstLoading(h) {
      console.log('renderFirstLoading', h);
      // @ts-ignore
      const { $slots } = this;

      if ($slots.firstLoading) {
        return $slots.firstLoading;
      }

      // @ts-ignore
      return renderNormalFirstLoading(h);
    },
    renderNormal(h) {
      console.log('renderNormal', h);
      return (
        // @ts-ignore
        <Spin size="large" spinning={this.showLoading()}>
          {/*@ts-ignore*/}
          {this.renderInner(h)}
        </Spin>
      );
    },
    renderDispatch(h) {
      console.log('renderDispatch', h);
      // @ts-ignore
      const loading = this.showLoading();

      // @ts-ignore
      if (this.isFirst && !this.isFirstLoading && loading) {
        // @ts-ignore
        this.isFirstLoading = true;
      }

      // @ts-ignore
      if (this.isFirst && this.isFirstLoading && !loading) {
        // @ts-ignore
        this.isFirst = false;
        // @ts-ignore
        this.isFirstLoading = false;
      }

      // @ts-ignore
      if (this.isFirst) {
        return this.renderFirstLoading(h);
      }

      return this.renderNormal(h);
    },
  },
  render(h) {
    // @ts-ignore
    return <div class={selectorPrefix}>{this.renderDispatch(h)}</div>;
  },
};
