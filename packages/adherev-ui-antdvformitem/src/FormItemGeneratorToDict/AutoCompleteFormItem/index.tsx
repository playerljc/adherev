import { AutoCompleteProps } from 'ant-design-vue/es/auto-complete';
import { PropType } from 'vue';

import { AutoComplete } from '../../AntdvFormItemNormalize';

export default {
  name: 'AutoCompleteFormItem',
  props: {
    autoCompleteProps: {
      type: Object as PropType<AutoCompleteProps>,
      default: () => ({}),
    },
    value: {
      type: Object as PropType<{
        inputValue: string;
        selectValue: string | number;
      }>,
      default: () => ({
        inputValue: '',
        selectValue: '',
      }),
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    options() {
      let options = [];

      if (!this.value.inputValue) options = this.dataSource || [];
      else
        options = this?.dataSource?.filter?.((t) => t.label.includes(this.value.inputValue)) || [];

      // @ts-ignore
      return options.map((t) => ({ text: t.label, value: `${t.value}` }));
    },
    autoCompleteValue() {
      if (this.value.inputValue) return `${this.value.inputValue}`;

      if (this.value.selectValue)
        return this?.dataSource?.find((t) => t.value == this.value.selectValue)?.label;

      return '';
    },
  },
  methods: {
    onSelect(selectValue) {
      if (this.$listeners?.change) {
        this.$listeners?.change?.({
          inputValue: '',
          selectValue,
        });
      }
    },
    onSearch(searchText) {
      if (this.$listeners?.change) {
        this.$listeners?.change?.({
          inputValue: searchText.trim(),
          selectValue: undefined,
        });
      }
    },
    onChange() {},
  },
  render(h) {
    return h(
      AutoComplete,
      {
        props: {
          filterOption: false,
          ...this.$props,
          dataSource: this.options,
          value: this.autoCompleteValue,
        },
        attrs: this.$attrs,
        on: {
          select: this.onSelect,
          search: this.onSearch,
          ...this.$listeners,
          change: this.onChange,
        },
        scopedSlots: { ...(this.$scopedSlots || {}) },
      },
      Object.keys(this.$slots).reduce((arr, key) => arr.concat(this.$slots[key]), []),
    );
  },
};
