/**
 * updatedEx - 有pre参数的updated的hook
 * 建议使用在全局的mixins中
 */
export default {
  created() {
    const { $watch, $data, $props } = this;

    // 在$data中创建$preProps属性用来存放pre的值
    if (!('$preProps' in $data)) {
      $data.$preProps = {};
    }

    // 枚举data中的属性，用watch进行监控
    for (const p in $data) {
      if (!p.startsWith('$') && !p.startsWith('_')) {
        $watch(p, function (newVal, oldVal) {
          $data.$preProps[p] = oldVal;
        });
      }
    }

    // 枚举props中的属性，用watch进行监控
    for (const p in $props) {
      if (!p.startsWith('$') && !p.startsWith('_')) {
        $watch(p, function (newVal, oldVal) {
          $data.$preProps[p] = oldVal;
        });
      }
    }
  },
  updated() {
    const { $options, $data } = this;

    // 在updated中调用updatedEx的hook
    if ('updatedEx' in $options && $options.updatedEx instanceof Function) {
      $options.updatedEx.call(this, $data.$preProps);
    }
  },
};
