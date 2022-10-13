import { Empty } from 'ant-design-vue';
import { PropType, VNode } from 'vue';

import Suspense from './suspense';

/**
 * SuspenseSync
 * @description 传数据
 */
const SuspenseSync: any = {
  name: 'adv-suspense-sync',
  mixins: [Suspense],
  props: {
    data: {
      type: Object as PropType<any>,
      default: () => null,
    },
    isEmpty: {
      type: Function as PropType<(params?: any) => boolean>,
      default: false,
    },
    renderEmpty: {
      type: Function as PropType<(params?: any) => VNode | null>,
      default: () => null,
    },
  },
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
    renderInner(h) {
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
};

export default SuspenseSync;
