import { Empty } from 'ant-design-vue';
import { VNode, defineComponent } from 'vue';
import { func } from 'vue-types';

import Suspense from './suspense';

export const suspenseAsyncProps = {
  isEmpty: func<(params?: any) => boolean>(),
  renderEmpty: func<(params?: any) => VNode | null>(),
  fetchAsyncData: func<(params?: any) => Promise<any>>(),
};

/**
 * SuspenseAsync
 * @description 调用接口
 */
const SuspenseAsync = defineComponent({
  name: 'adv-suspense-async',
  mixins: [Suspense],
  props: suspenseAsyncProps,
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
    renderInner() {
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
});

export default SuspenseAsync;
