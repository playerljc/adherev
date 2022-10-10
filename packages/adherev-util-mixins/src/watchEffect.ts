/**
 * watchEffect
 * data或者props中的属性只要有一个变化就调用watchEffect方法
 */
export default {
  data() {
    return {
      $watchHandlers: [],
    };
  },
  created() {
    [
      ...Object.keys(this.$props),
      // 过滤掉$开头的全局属性
      ...Object.keys(this.$data).filter((p) => !p.startsWith('$')),
    ].forEach((p) => {
      this.$data.$watchHandlers.push(
        this.$watch(
          p,
          (newVal, oldVal) => {
            // 只要data或者props中的任意一个属性变化，则调用watchEffect方法
            this.$options?.watchEffect?.call?.(this, {
              attr: p, // 属性
              newVal, // 新的值
              oldVal, // 旧的值
            });
          },
          // deep打开
          { deep: true },
        ),
      );
    });
  },
  beforeDestroy() {
    this.$data.$watchHandlers.forEach((uw) => uw());
  },
};
