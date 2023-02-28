import { Input, InputNumber, Rate, Slider, Switch } from 'ant-design-vue';
import { VNode } from 'vue';

import AntdvFormItem from '@baifendian/adherev-ui-antdvformitem';

import { FormItemGeneratorConfig } from '../../../types';

const {
  FormItemGeneratorToDict: { getComponents },
  AntdvFormItemNormalize: {
    DatePicker,
    InputNumberDecimal1,
    InputNumberDecimal2,
    InputNumberInteger,
    RangePicker,
    TimePicker,
  },
} = AntdvFormItem;

const Components = () => getComponents();

export default {
  /**
   * render
   * @description 对表单控件进行渲染
   * @param h
   * @param type 控件类型
   * @param renderChildren 渲染孩子
   * @param props 控件的props
   * @param listeners
   * @param dictName distName
   * @param form 表单的form实例
   * @param dataIndex
   * @param rowIndex
   */
  render({
    type,
    renderChildren,
    props,
    listeners,
    dictName,
    form,
    dataIndex,
    rowIndex,
    initialValue,
    name,
    context,
  }: FormItemGeneratorConfig) {
    const defaultProps = {
      autoFocus: true,
      defaultValue: initialValue,
      value: context?.formData?.[name as string],
      onChange: (val) => {
        if (typeof val === 'number') {
          context.formData[name as string] = val;
        } else if ('target' in val) {
          context.formData[name as string] = val.target.value.trim();
        } else {
          context.formData[name as string] = val;
        }
      },
    };

    const renderInput = () => {
      return (
        <Input
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };

    const renderTextArea = () => {
      return (
        <Input.TextArea
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderInputNumber = () => {
      return (
        <InputNumber
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderInputNumberDecimal1 = () => {
      return (
        <InputNumberDecimal1
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderInputNumberDecimal2 = () => {
      return (
        <InputNumberDecimal2
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderInputNumberInteger = () => {
      return (
        <InputNumberInteger
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };

    const renderSelect = () => {
      const Component = Components()[`${dictName}FormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderMultiSelect = () => {
      const Component = Components()[`${dictName}MulitFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderCheckAllMultiSelect = () => {
      const Component = Components()[`${dictName}CheckAllMulitFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };

    const renderAutoCompleteSelect = () => {
      const Component = Components()[`${dictName}FormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderAutoCompleteSelectMulti = () => {
      const Component = Components()[`${dictName}MulitFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderAutoCompleteSelectCheckAllMulti = () => {
      const Component = Components()[`${dictName}CheckAllMulitFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };

    const renderRadioHorizontal = () => {
      const Component = Components()[`${dictName}HorizontalFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderRadioButton = () => {
      const Component = Components()[`${dictName}ButtonFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderRadioSelect = () => {
      const Component = Components()[`${dictName}SelectFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderRadioCustom = () => {
      const Component = Components()[`${dictName}CustomFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        >
          {(data) => renderChildren?.(data)}
        </Component>
      );
    };

    const renderCheckBoxHorizontal = () => {
      const Component = Components()[`${dictName}HorizontalFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderCheckBoxCheckAllHorizontal = () => {
      const Component = Components()[`${dictName}CheckAllHorizontalFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderCheckboxSelect = () => {
      const Component = Components()[`${dictName}SelectFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderCheckBoxCheckAllSelect = () => {
      const Component = Components()[`${dictName}CheckAllSelectFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderCheckBoxCustom = () => {
      const Component = Components()[`${dictName}CustomFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        >
          {(dataSource) => renderChildren?.(dataSource)}
        </Component>
      );
    };
    const renderCheckBoxCheckAllCustom = () => {
      const Component = Components()[`${dictName}CheckAllCustomFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        >
          {(dataSource) => renderChildren?.(dataSource)}
        </Component>
      );
    };

    const renderTransferSelect = () => {
      const Component = Components()[`${dictName}SelectFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };

    const renderTableSelect = () => {
      const Component = Components()[`${dictName}SelectFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderTableMultiSelect = () => {
      const Component = Components()[`${dictName}MulitSelectFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderTablePagingSelect = () => {
      const Component = Components()[`${dictName}PaginationSelectFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderTablePagingMultiSelect = () => {
      const Component = Components()[`${dictName}PaginationMulitSelectFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };

    const renderListSelect = () => {
      const Component = Components()[`${dictName}SelectFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderListMultiSelect = () => {
      const Component = Components()[`${dictName}MulitSelectFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderListPagingSelect = () => {
      const Component = Components()[`${dictName}PaginationSelectFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderListPagingMultiSelect = () => {
      const Component = Components()[`${dictName}PaginationMulitSelectFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };

    const renderTreeSelect = () => {
      const Component = Components()[`${dictName}FormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderTreeMultiSelect = () => {
      const Component = Components()[`${dictName}MulitFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderTreeSelectLeaf = () => {
      const Component = Components()[`${dictName}LeafFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderTreeMultiSelectLeaf = () => {
      const Component = Components()[`${dictName}LeafMulitFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };

    const renderCascaderSelect = () => {
      const Component = Components()[`${dictName}FormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderCascaderMultiSelect = () => {
      const Component = Components()[`${dictName}MulitFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderCascaderSelectLeaf = () => {
      const Component = Components()[`${dictName}LeafFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderCascaderMultiSelectLeaf = () => {
      const Component = Components()[`${dictName}LeafMulitFormItem`];

      return (
        <Component
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };

    const renderDatePicker = () => {
      return (
        <DatePicker
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderTimePicker = () => {
      return (
        <TimePicker
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderRangePicker = () => {
      return (
        <RangePicker
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };

    const renderSlider = () => {
      return (
        <Slider
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderSliderRange = () => {
      return (
        <Slider
          range
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };

    const renderRate = () => {
      return (
        <Rate
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };
    const renderSwitch = () => {
      return (
        <Switch
          {...{
            ...defaultProps,
            ...(props || {}),
            ...(listeners || {}),
          }}
        />
      );
    };

    const typeMap = new Map<string, () => VNode>([
      ['input', renderInput],
      ['textArea', renderTextArea],

      ['inputNumber', renderInputNumber],
      ['inputNumberDecimal1', renderInputNumberDecimal1],
      ['inputNumberDecimal2', renderInputNumberDecimal2],
      ['inputNumberInteger', renderInputNumberInteger],

      ['select', renderSelect],
      ['multiSelect', renderMultiSelect],
      ['checkAllMultiSelect', renderCheckAllMultiSelect],

      ['autoCompleteSelect', renderAutoCompleteSelect],
      ['autoCompleteSelectMulti', renderAutoCompleteSelectMulti],
      ['autoCompleteSelectCheckAllMulti', renderAutoCompleteSelectCheckAllMulti],

      ['radioHorizontal', renderRadioHorizontal],
      ['radioButton', renderRadioButton],
      ['radioSelect', renderRadioSelect],
      ['radioCustom', renderRadioCustom],

      ['checkBoxHorizontal', renderCheckBoxHorizontal],
      ['checkBoxCheckAllHorizontal', renderCheckBoxCheckAllHorizontal],
      ['checkboxSelect', renderCheckboxSelect],
      ['checkBoxCheckAllSelect', renderCheckBoxCheckAllSelect],
      ['checkBoxCustom', renderCheckBoxCustom],
      ['checkBoxCheckAllCustom', renderCheckBoxCheckAllCustom],

      ['transferSelect', renderTransferSelect],

      ['tableSelect', renderTableSelect],
      ['tableMultiSelect', renderTableMultiSelect],
      ['tablePagingSelect', renderTablePagingSelect],
      ['tablePagingMultiSelect', renderTablePagingMultiSelect],

      ['listSelect', renderListSelect],
      ['listMultiSelect', renderListMultiSelect],
      ['listPagingSelect', renderListPagingSelect],
      ['listPagingMultiSelect', renderListPagingMultiSelect],

      ['treeSelect', renderTreeSelect],
      ['treeMultiSelect', renderTreeMultiSelect],
      ['treeSelectLeaf', renderTreeSelectLeaf],
      ['treeMultiSelectLeaf', renderTreeMultiSelectLeaf],

      ['cascaderSelect', renderCascaderSelect],
      ['cascaderMultiSelect', renderCascaderMultiSelect],
      ['cascaderSelectLeaf', renderCascaderSelectLeaf],
      ['cascaderMultiSelectLeaf', renderCascaderMultiSelectLeaf],

      ['datePicker', renderDatePicker],
      ['timePicker', renderTimePicker],
      ['rangePicker', renderRangePicker],

      ['slider', renderSlider],
      ['sliderRange', renderSliderRange],
      ['rate', renderRate],
      ['switch', renderSwitch],
    ]);

    return typeMap.get(type as string)?.();
  },
};
