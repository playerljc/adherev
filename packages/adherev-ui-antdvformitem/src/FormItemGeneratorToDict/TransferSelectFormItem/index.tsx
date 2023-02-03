import { Transfer } from '../../AntdvFormItemNormalize';
import MulitSelectFormItem from '../MulitSelectFormItem';

export default {
  name: 'TransferSelectFormItem',
  props: {
    selectProps: {
      type: Object,
      default: () => ({}),
    },
    transferProps: {
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
  emits: ['change'],
  data() {
    return {
      inputValue: '',
      selectedKeys: [],
    };
  },
  methods: {
    $renderDropdownRender(h) {
      const data = this.inputValue
        ? this.dataSource.filter((t) => t.label.indexOf(this.inputValue) !== -1)
        : this.dataSource;

      return (
        <Transfer
          selectedKeys={this.selectedKeys}
          targetKeys={this.value}
          dataSource={data.map((t) => ({
            key: `${t.value}`,
            title: t.label,
            description: t.label,
          }))}
          render={(item) => item.title}
          {...{
            props: this.transferProps,
          }}
          onChange={(targetKeys) => {
            this.$emit('change', targetKeys);
          }}
          onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
            this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];
          }}
        />
      );
    },
  },
  render(h) {
    return h(
      MulitSelectFormItem,
      {
        props: {
          ...this.$props,
          selectProps: {
            dropdownRender: () => this.$renderDropdownRender(h),
            filterOption: () => {
              return false;
            },
            ...this.$props.selectProps,
          },
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: {
          ...this.$listeners,
          search: (inputValue) => {
            this.inputValue = inputValue;
          },
          change: (val) => {
            this.$emit('change', val);

            if (!val || (Array.isArray(val) && !val.length)) this.inputValue = '';
          },
        },
      },
      this.$slots.default,
    );
  },
};
