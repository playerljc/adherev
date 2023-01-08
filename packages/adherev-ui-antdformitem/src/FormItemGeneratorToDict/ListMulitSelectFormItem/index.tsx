// ListMulitSelectFormItem
import { Checkbox } from 'ant-design-vue';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import ListFormItem from '../ListFormItem';
import MulitSelectFormItem from '../MulitSelectFormItem';

const selectorPrefix = 'adherev-ui-antdformitem';

export default {
  name: 'ListMulitSelectFormItem',
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
      type: Array,
      default: [],
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
      selectedRowKeys: this.value ? this.value : [],
      selectedRows: this.value
        ? this.value.map((t) => this.dataSource.find((_item) => _item[this.rowKey || 'id'] === t))
        : [],
    };
  },
  watch: {
    value(value) {
      this.selectedRowKeys = value;
      this.selectedRows = this.value.map((t) =>
        this.dataSource.find((_item) => _item[this.rowKey || 'id'] === t),
      );
    },
  },
  methods: {
    CheckWrap(h, item) {
      const rowKey = this.rowKey || 'id';

      return (
        <Checkbox
          onChange={(e) => {
            e.stopPropagation();

            const checked = e.target.checked;

            if (checked) {
              this.selectedRowKeys = [...this.selectedRowKeys, item[rowKey]];
              this.selectedRows = [...this.selectedRows, { ...item }];
              this.$emit('change', [...this.selectedRowKeys]);
            } else {
              this.selectedRowKeys = this.selectedRowKeys.filter((key) => key !== item[rowKey]);
              this.selectedRows = this.selectedRows.filter((row) => row[rowKey] !== item[rowKey]);
              this.$emit('change', [...this.selectedRowKeys]);
            }
          }}
          checked={this.selectedRowKeys.includes(item[rowKey])}
        />
      );
    },
  },
  render(h) {
    const Component = ListFormItem;

    return h(
      MulitSelectFormItem,
      {
        props: {
          selectProps: {
            dropdownRender: () => (
              // @ts-ignore
              <Component
                listProps={{
                  dataSource: this.dataSource,
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
                          {this.CheckWrap(h, item)}
                        </div>
                        <div class={`${selectorPrefix}-rowselectwrap-auto`}>{item}</div>
                      </div>

                      <div class={`${selectorPrefix}-rowselectwrap`}>
                        <div class={`${selectorPrefix}-rowselectwrap-fixed`}>
                          {this.CheckWrap(h, item)}
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
            ),
            ...this.selectProps,
          },
          value: this.value,
          dataSource: this.dataSource.map((t) => ({
            label: t[this.labelKey || 'name'],
            value: t[this.rowKey || 'id'],
          })),
        },
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots,
      },
      this.$slots.default,
    );
  },
};
