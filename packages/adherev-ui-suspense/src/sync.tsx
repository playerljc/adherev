import { Empty } from 'ant-design-vue';
import { VNode, defineComponent } from 'vue';
import { func, object } from 'vue-types';

import Suspense from './suspense';

const suspenseSyncProps = {
  data: object(),
  isEmpty: func<(params?: any) => boolean>(),
  renderEmpty: func<(params?: any) => VNode | null>(),
};

/**
 * SuspenseSync
 * @description 传数据
 */
const SuspenseSync = defineComponent({
  name: 'adv-suspense-sync',
  mixins: [Suspense],
  props: suspenseSyncProps,
  slots: ['empty'],
  watch: {
    data(newData, oldData) {
      if (
        this.$data.$isLoading &&
        JSON.stringify(newData || []) !== JSON.stringify(oldData || [])
      ) {
        this.loading = false;

        this.$nextTick(function () {
          this.$data.$isLoading = false;
        });
      }
    },
  },
  data() {
    return {
      loading: true,
      $isLoading: true,
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
    resetSync() {
      return new Promise<void>((resolve) => {
        // 第一次
        this.isFirst = true;

        // 第一次加载
        this.isFirstLoading = false;

        this.$data.$isLoading = true;

        this.loading = true;

        this.$nextTick(function () {
          resolve();
        });
      });
    },
  },
});

export default SuspenseSync;
