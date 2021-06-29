/**
 * updatedEx - 有pre参数的updated的hook
 * 建议使用在全局的mixins中
 */
export default {
  created() {
    // 在$data中创建$preProps属性用来存放pre的值
    if (!("$preProps" in this.$data)) {
      this.$data.$preProps = {};
    }

    // 枚举data中的属性，用watch进行监控
    for (const p in this.$data) {
      if (!p.startsWith("$") && !p.startsWith("_")) {
        this.$watch(p, function (newVal, oldVal) {
          this.$data.$preProps[p] = oldVal;
        });
      }
    }

    // 枚举props中的属性，用watch进行监控
    for (const p in this.$props) {
      if (!p.startsWith("$") && !p.startsWith("_")) {
        this.$watch(p, function (newVal, oldVal) {
          this.$data.$preProps[p] = oldVal;
        });
      }
    }
  },
  updated() {
    // 在updated中调用updatedEx的hook
    if (
      "updatedEx" in this.$options &&
      this.$options.updatedEx instanceof Function
    ) {
      this.$options.updatedEx.call(this, this.$data.$preProps);
    }
  }
};
