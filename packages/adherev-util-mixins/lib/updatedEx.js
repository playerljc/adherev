/**
 * updatedEx - 有pre参数的updated的hook
 * 建议使用在全局的mixins中
 */
export default {
    created: function () {
        // @ts-ignore
        var _a = this, $data = _a.$data, $props = _a.$props;
        // 在$data中创建$preProps属性用来存放pre的值
        if (!('$preProps' in $data)) {
            $data.$preProps = {};
        }
        var _loop_1 = function (p) {
            if (!p.startsWith('$') && !p.startsWith('_')) {
                // @ts-ignore
                this_1.$watch(p, function (newVal, oldVal) {
                    $data.$preProps[p] = oldVal;
                });
            }
        };
        var this_1 = this;
        // 枚举data中的属性，用watch进行监控
        for (var p in $data) {
            _loop_1(p);
        }
        var _loop_2 = function (p) {
            if (!p.startsWith('$') && !p.startsWith('_')) {
                // @ts-ignore
                this_2.$watch(p, function (newVal, oldVal) {
                    $data.$preProps[p] = oldVal;
                });
            }
        };
        var this_2 = this;
        // 枚举props中的属性，用watch进行监控
        for (var p in $props) {
            _loop_2(p);
        }
    },
    updated: function () {
        // @ts-ignore
        var _a = this, $options = _a.$options, $data = _a.$data;
        // 在updated中调用updatedEx的hook
        if ('updatedEx' in $options && $options.updatedEx instanceof Function) {
            $options.updatedEx.call(this, $data.$preProps);
        }
    },
};
//# sourceMappingURL=updatedEx.js.map