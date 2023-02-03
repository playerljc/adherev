// ListSelectFormItem
import { ListProps } from 'ant-design-vue/es/list';
import { SelectProps } from 'ant-design-vue/es/select';
import { defineComponent, h } from 'vue';
import { array, object, string } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import { Radio } from '../../AntdvFormItemNormalize';
import ListFormItem from '../ListFormItem';
import SelectFormItem from '../SelectFormItem';

const selectorPrefix = 'adherev-ui-antdformitem';

export default defineComponent({
  name: 'ListSelectFormItem',
  props: {
    selectProps: object<SelectProps>().def({}),
    listProps: object<ListProps>().def({}),
    value: string().def(''),
    dataSource: array<any>().def([]),
    rowKey: string().def('id'),
    labelKey: string().def('name'),
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
    RadioWrap({ item }) {
      const rowKey = this.rowKey || 'id';

      return (
        <Radio
          onChange={(e) => {
            e.stopPropagation();

            const checked = e.target.checked;

            if (checked) {
              this.selectedRowKeys = [item[rowKey]];
              this.selectedRows = [{ ...item }];
              console.log('item', item);
              console.log('rowKey', rowKey);
              this.$emit('change', item[rowKey]);
            }
          }}
          checked={this.selectedRowKeys.includes(item[rowKey])}
        />
      );
    },
    $renderDropdownRender() {
      const data = this.inputValue
        ? this.dataSource.filter(
            (t) => t[this.labelKey || 'name']?.indexOf?.(this.inputValue) !== -1,
          )
        : this.dataSource;

      return (
        <ListFormItem
          listProps={{
            dataSource: data,
            renderItem: (item, index) => {
              return (
                // @ts-ignore
                <ConditionalRender
                  conditional={!!this.listProps?.renderItem || this.$slots.renderItem}
                >
                  {{
                    default: () => (
                      <div class={`${selectorPrefix}-rowselectwrap`}>
                        <div class={`${selectorPrefix}-rowselectwrap-fixed`}>
                          {this.RadioWrap(item)}
                        </div>
                        <div class={`${selectorPrefix}-rowselectwrap-auto`}>
                          {this?.listProps?.renderItem?.(item) ||
                            this.$slots?.renderItem?.(item, index)}
                        </div>
                      </div>
                    ),
                    noMatch: () => (
                      <div class={`${selectorPrefix}-rowselectwrap`}>
                        <div class={`${selectorPrefix}-rowselectwrap-fixed`}>
                          {this.RadioWrap(item)}
                        </div>
                        <div class={`${selectorPrefix}-rowselectwrap-auto`}>{item}</div>
                      </div>
                    ),
                  }}
                </ConditionalRender>
              );
            },
            ...this.listProps,
          }}
          rowKey={this.rowKey}
        />
      );
    },
  },
  render() {
    return h(
      SelectFormItem,
      {
        ...this.$attrs,
        selectProps: {
          dropdownRender: () => this.$renderDropdownRender(),
          filterOption: () => {
            return false;
          },
          ...this.selectProps,
        },
        value: this.value,
        dataSource: this.dataSource.map((t) => ({
          label: t[this.labelKey || 'name'],
          value: t[this.rowKey || 'id'],
        })),
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
