import { SelectProps } from 'ant-design-vue/es/select';
import { defineComponent, h } from 'vue';
import { array, object } from 'vue-types';

import { Checkbox, Space } from '../../AntdvFormItemNormalize';
import MulitSelectFormItem from '../MulitSelectFormItem';

export default defineComponent({
  name: 'CheckBoxCheckAllSelectFormItem',
  props: {
    selectProps: object<SelectProps>().def({}),
    value: array().def([]),
    dataSource: array().def([]),
  },
  emits: ['change', 'blur'],
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
    $renderDropdownRender() {
      const data = this.inputValue
        ? this.dataSource.filter((t) => t.label.indexOf(this.inputValue) !== -1)
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
        onChange: (values) => {
          this.$emit('change', values);
          this.checkAll = values.length === (this.dataSource || []).length;
        },
        onBlur: () => {
          this.inputValue = '';
          this.$emit('blur');
        },
      },
      this.$slots,
    );
  },
});
