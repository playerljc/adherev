import { Checkbox, Divider } from 'ant-design-vue';

import Intl from '@baifendian/adherev-util-intl';

import MulitSelectFormItem from '../MulitSelectFormItem';

const selectorPrefix = 'adherev-ui-antdformitem';

export default {
  name: 'CheckAllMulitSelectFormItem',
  props: {
    selectProps: {
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
    $dropdownRender(h, menu) {
      return (
        <div class={`${selectorPrefix}-wrap`}>
          <div class={`${selectorPrefix}-checkallwrap`}>
            <Checkbox checked={this.checked} onChange={this.$onCheckAllChange}>
              {Intl.tv('全选')}
            </Checkbox>
          </div>

          <Divider style="margin: 5px 0" />

          {menu}
        </div>
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
            dropdownRender: (menu) => this.$dropdownRender(h, menu),
            ...this.$props.selectProps,
          },
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: {
          ...this.$listeners,
          change: this.$onChange,
        },
      },
      this.$slots.default,
    );
  },
};
