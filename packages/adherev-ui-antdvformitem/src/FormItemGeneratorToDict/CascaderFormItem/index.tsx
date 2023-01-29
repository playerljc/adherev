import { Cascader } from 'ant-design-vue';

export default {
  name: 'CascaderFormItem',
  props: {
    cascaderProps: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Array,
      default: () => [],
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    targetValue() {
      if (!Array.isArray(this.value)) return [];

      return this.value.filter((_value) => this.$exists(_value));
    },
  },
  watch: {
    value(value) {
      if (!Array.isArray(value)) {
        this.$emit('change', []);
        return;
      }

      const filterValue = value.filter((_value) => this.$exists(_value));

      if (filterValue.length !== value.length) {
        this.$emit('change', filterValue);
      }
    },
  },
  methods: {
    $exists(value) {
      const loop = (dataSource, _val) => {
        let res = null;

        for (let i = 0; i < dataSource.length; i++) {
          const item = dataSource[i];

          if (item.value === _val) {
            res = item;
            break;
          }

          if ('children' in item && Array.isArray(item.children) && item.children.length) {
            res = loop(item.children, _val);

            if (res) {
              break;
            }
          }
        }

        return res;
      };

      return loop(this.dataSource, value);
    },
  },
  render(h) {
    return h(
      Cascader,
      {
        props: {
          ...this.cascaderProps,
          value: this.targetValue,
          options: this.dataSource,
        },
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots,
      },
      this.$slots.default,
    );
  },
};
