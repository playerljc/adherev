import { SelectProps } from 'ant-design-vue/es/select';
import { defineComponent, h } from 'vue';
import { array, object } from 'vue-types';

import Intl from '@baifendian/adherev-util-intl';

import { Checkbox, Divider } from '../../AntdvFormItemNormalize';
import MulitSelectFormItem from '../MulitSelectFormItem';

const selectorPrefix = 'adherev-ui-antdformitem';

export default defineComponent({
  name: 'CheckAllMulitSelectFormItem',
  props: {
    selectProps: object<SelectProps>().def({}),
    value: array().def([]),
    dataSource: array().def([]),
  },
  emits: ['checkAllChange', 'change'],
  data() {
    return {
      checked: false,
    };
  },
  watch: {
    value(val) {
      this.checked =
        JSON.stringify(JSON.parse(JSON.stringify(val || [])).sort()) ===
        JSON.stringify((this.dataSource || []).map((t) => t.value).sort());
    },
    dataSource(dataSource) {
      this.checked =
        JSON.stringify(JSON.parse(JSON.stringify(this.value || [])).sort()) ===
        JSON.stringify((dataSource || []).map((t) => t.value).sort());
    },
  },
  methods: {
    $onCheckAllChange(e) {
      this.checked = e.target.checked;

      this.$emit('checkAllChange', e.target.checked);
    },
    $onChange(values) {
      this.checked = values.length === (this.dataSource || []).map((t) => t.value).length;

      this.$emit('change', values);
    },
    $dropdownRender({ menuNode }) {
      return (
        <div class={`${selectorPrefix}-wrap`}>
          <div class={`${selectorPrefix}-checkallwrap`}>
            <Checkbox checked={this.checked} onChange={this.$onCheckAllChange}>
              {Intl.tv('全选')}
            </Checkbox>
          </div>

          <Divider style="margin: 5px 0" />

          {menuNode}
        </div>
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
          dropdownRender: (menu) => this.$dropdownRender(menu),
          ...this.$props.selectProps,
        },
        onChange: this.$onChange,
      },
      this.$slots,
    );
  },
});
