import { Empty } from 'ant-design-vue';
import { PropType, VNode } from 'vue';

import Suspense from './suspense';

/**
 * SuspenseAsync
 * @description 调用接口
 */
const SuspenseAsync: any = {
  name: 'adv-suspense-async',
  mixins: [Suspense],
  props: {
    isEmpty: {
      type: Function as PropType<(params?: any) => boolean>,
      default: () => true,
    },
    renderEmpty: {
      type: Function as PropType<(params?: any) => VNode | null>,
      default: () => null,
    },
    fetchAsyncData: {
      type: Function as PropType<(params?: any) => Promise<any>>,
      default: () => null,
    },
  },
  slots: ['empty'],
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    showLoading() {
      return this.loading;
    },
    renderInner(h) {
      if (!this.isEmpty()) return this.$slots.default;

      return this.$slots.empty || this.renderEmpty || <Empty />;
    },
    resetAsync() {
      return new Promise<void>((resolve) => {
        // 第一次
        this.isFirst = true;

        // 第一次加载
        this.isFirstLoading = false;

        this.fetchData()
          .then(() => resolve())
          .catch(() => resolve());
      });
    },
    fetchData() {
      return new Promise<void>((resolve) => {
        if (!this.fetchAsyncData) {
          this.loading = false;

          resolve();

          return;
        }

        this.loading = true;

        return this?.fetchAsyncData?.()
          ?.then(() => {
            this.loading = false;

            this.$nextTick(function () {
              resolve();
            });
          })
          ?.catch(() => {
            this.loading = false;

            this.$nextTick(function () {
              resolve();
            });
          });
      });
    },
  },
};

export default SuspenseAsync;
