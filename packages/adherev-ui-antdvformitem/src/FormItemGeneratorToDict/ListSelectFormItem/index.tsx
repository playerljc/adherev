// ListSelectFormItem
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import { Radio } from '../../AntdvFormItemNormalize';
import ListFormItem from '../ListFormItem';
import SelectFormItem from '../SelectFormItem';

const selectorPrefix = 'adherev-ui-antdformitem';

export default {
  name: 'ListSelectFormItem',
  props: {
    selectProps: {
      type: Object,
      default: () => ({}),
    },
    listProps: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: String,
      default: '',
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
    rowKey: {
      type: String,
      default: 'id',
    },
    labelKey: {
      type: String,
      default: 'name',
    },
  },
  emits: ['change'],
  data() {
    return {
      inputValue: '',
      selectedRowKeys: this.value ? [this.value] : [],
      selectedRows: this.value
        ? this.dataSource.find((t) => t[this.rowKey || 'id'] === this.value)
        : [],
    };
  },
  watch: {
    value(value) {
      this.selectedRowKeys = [value];
      this.selectedRows = [this.dataSource.find((t) => t[this.rowKey || 'id'] === this.value)];
    },
  },
  methods: {
    RadioWrap(h, item) {
      const rowKey = this.rowKey || 'id';

      return (
        <Radio
          onChange={(e) => {
            e.stopPropagation();

            const checked = e.target.checked;

            if (checked) {
              this.selectedRowKeys = [item[rowKey]];
              this.selectedRows = [{ ...item }];
              this.$emit('change', item[rowKey]);
            }
          }}
          checked={this.selectedRowKeys.includes(item[rowKey])}
        />
      );
    },
    $renderDropdownRender(h) {
      const data = this.inputValue
        ? this.dataSource.filter((t) => t.label.startsWith(this.inputValue))
        : this.dataSource;

      return (
        // @ts-ignore
        <ListFormItem
          listProps={{
            dataSource: data,
            ...this.listProps,
            renderItem: (item, index) => (
              <ConditionalRender
                conditional={
                  !!this.listProps?.renderItem ||
                  this.$slots.renderItem ||
                  this.$scopedSlots.renderItem
                }
              >
                <div slot="noMatch" class={`${selectorPrefix}-rowselectwrap`}>
                  <div class={`${selectorPrefix}-rowselectwrap-fixed`}>
                    {this.RadioWrap(h, item)}
                  </div>
                  <div class={`${selectorPrefix}-rowselectwrap-auto`}>{item}</div>
                </div>

                <div class={`${selectorPrefix}-rowselectwrap`}>
                  <div class={`${selectorPrefix}-rowselectwrap-fixed`}>
                    {this.RadioWrap(h, item)}
                  </div>
                  <div class={`${selectorPrefix}-rowselectwrap-auto`}>
                    {this?.listProps?.renderItem?.(item) ||
                      this.$slots.renderItem ||
                      this.$scopedSlots.renderItem(item, index)}
                  </div>
                </div>
              </ConditionalRender>
            ),
          }}
          rowKey={this.rowKey}
        />
      );
    },
  },
  render(h) {
    return h(
      SelectFormItem,
      {
        props: {
          selectProps: {
            dropdownRender: () => this.$renderDropdownRender(h),
            filterOption: (inputValue) => {
              this.inputValue = inputValue;

              return false;
            },
            ...this.selectProps,
          },
          value: this.value,
          dataSource: this.dataSource.map((t) => ({
            label: t[this.labelKey || 'name'],
            value: t[this.rowKey || 'id'],
          })),
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: {
          ...this.$listeners,
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
