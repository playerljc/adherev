import { Checkbox, Space } from 'ant-design-vue';

import Intl from '@baifendian/adherev-util-intl';

import MulitSelectFormItem from '../MulitSelectFormItem';

export default {
  name: 'CheckBoxCheckAllSelectFormItem',
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
  data() {
    return {
      inputValue: '',
      checkAll: this.value.length === this.dataSource.length,
    };
  },
  watch: {
    value(value) {
      this.checkAll = value.length === this.dataSource.length;
    },
    dataSource(dataSource) {
      this.checkAll = this.value.length === dataSource.length;
    },
  },
  methods: {
    $renderDropdownRender(h) {
      const data = this.inputValue
        ? this.dataSource.filter((t) => t.label.startsWith(this.inputValue))
        : this.dataSource;

      return (
        <div>
          <div style="padding-left: 10px;padding-top:10px;">
            <Checkbox
              checked={this.checkAll}
              onChange={(e) => {
                if (e.target.checked) {
                  this.$emit(
                    'change',
                    this.dataSource.map((t) => t.value),
                  );
                  this.checkAll = true;
                } else {
                  this.$emit('change', []);
                  this.checkAll = false;
                }
              }}
            >
              全选
            </Checkbox>
          </div>

          <div>
            <Checkbox.Group
              style="padding: 10px;"
              value={this.value}
              onChange={(values) => {
                this.$emit('change', values);
                this.checkAll = values.length === (this.dataSource || []).length;
              }}
            >
              <Space direction="vertical">
                {data.map((t) => (
                  <Checkbox key={t.value} value={t.value} disabled={t.disabled}>
                    {t.label}
                  </Checkbox>
                ))}
              </Space>
            </Checkbox.Group>
          </div>
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
            dropdownRender: () => this.$renderDropdownRender(h),
            ...this.$props.selectProps,
          },
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: {
          ...this.$listeners,
          change: (values) => {
            this.$emit('change', values);
            this.checkAll = values.length === (this.dataSource || []).length;
          },
          blur: () => {
            this.inputValue = '';
            this.$emit('blur');
          },
        },
      },
      this.$slots.default,
    );
  },
};
