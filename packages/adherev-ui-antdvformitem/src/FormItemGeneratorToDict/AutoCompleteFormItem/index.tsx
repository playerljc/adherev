import { AutoCompleteProps } from 'ant-design-vue/es/auto-complete';
import { computed, defineComponent } from 'vue';
import { array, object } from 'vue-types';

import { AutoComplete } from '../../AntdvFormItemNormalize';

export default defineComponent({
  name: 'AutoCompleteFormItem',
  props: {
    autoCompleteProps: object<AutoCompleteProps>().def({}),
    value: object<{
      inputValue: string;
      selectValue: string | number;
    }>().def({
      inputValue: '',
      selectValue: '',
    }),
    dataSource: array<any>().def([]),
  },
  setup(props, { attrs, slots, emit }) {
    // 选择Select的时候调用
    const onSelect = (selectValue) => {
      if (attrs?.onChange) {
        // @ts-ignore
        attrs?.onChange?.({
          inputValue: '',
          selectValue,
        });
      }
    };

    // 每次输入的时候调用
    const onSearch = (searchText) => {
      if (attrs?.onChange) {
        // @ts-ignore
        attrs?.onChange?.({
          inputValue: searchText.trim(),
          selectValue: undefined,
        });
      }
    };

    const options = computed(() => {
      if (!props.value.inputValue) return props.dataSource || [];

      return props?.dataSource?.filter?.((t) => t.label.includes(props.value.inputValue)) || [];
    });

    const value = computed(() => {
      if (props.value.inputValue) return props.value.inputValue;

      if (props.value.selectValue)
        return props?.dataSource?.find((t) => t.value === props.value.selectValue)?.label;
    });

    return () => (
      <AutoComplete
        options={options.value}
        filterOption={false}
        onSelect={onSelect}
        onSearch={onSearch}
        {...{
          ...props,
          ...attrs,
        }}
        value={value.value}
      />
    );
  },
});
