import { SelectProps } from 'ant-design-vue/es/select';
import { TransferProps } from 'ant-design-vue/es/transfer';
import { defineComponent, h } from 'vue';
import { array, object } from 'vue-types';

import { Transfer } from '../../AntdvFormItemNormalize';
import MulitSelectFormItem from '../MulitSelectFormItem';

export default defineComponent({
  name: 'TransferSelectFormItem',
  props: {
    selectProps: object<SelectProps>().def({}),
    transferProps: object<TransferProps>().def({}),
    value: array().def([]),
    dataSource: array<any>().def([]),
  },
  emits: ['change'],
  data() {
    return {
      inputValue: '',
      selectedKeys: [],
    };
  },
  methods: {
    $renderDropdownRender() {
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
            ...this.transferProps,
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
  render() {
    return h(
      MulitSelectFormItem,
      {
        ...this.$props,
        ...this.$attrs,
        selectProps: {
          dropdownRender: () => this.$renderDropdownRender(),
          filterOption: () => {
            return false;
          },
          ...this.$props.selectProps,
        },
        onSearch: (inputValue) => {
          this.inputValue = inputValue;
        },
        onChange: (val) => {
          this.$emit('change', val);

          if (!val || (Array.isArray(val) && !val.length)) this.inputValue = '';
        },
      },
      this.$slots,
    );
  },
});
