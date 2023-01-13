import { Input, InputNumber, Rate, Slider, Switch } from 'ant-design-vue';
import { CreateElement, VNode } from 'vue';

import AntdvFormItem from '@baifendian/adherev-ui-antdvformitem';

import { FormItemGeneratorConfig } from '../../../types';

console.log(AntdvFormItem.AntdvFormItemNormalize);

const {
  FormItemGeneratorToDict,
  AntdvFormItemNormalize: {
    DatePicker,
    InputNumberDecimal1,
    InputNumberDecimal2,
    InputNumberInteger,
    RangePicker,
    TimePicker,
  },
} = AntdvFormItem;

export default {
  /**
   * render
   * @description 对表单控件进行渲染
   * @param h
   * @param type 控件类型
   * @param renderChildren 渲染孩子
   * @param props 控件的props
   * @param dictName distName
   * @param form 表单的form实例
   * @param dataIndex
   * @param rowIndex
   */
  render(
    h: CreateElement,
    { type, renderChildren, props, dictName, form, dataIndex, rowIndex }: FormItemGeneratorConfig,
  ) {
    const defaultProps = {
      autoFocus: true,
    };

    const renderInput = () => {
      return (
        <Input
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };

    const renderTextArea = () => {
      return (
        <Input.TextArea
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderInputNumber = () => {
      return (
        <InputNumber
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderInputNumberDecimal1 = () => {
      return (
        <InputNumberDecimal1
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderInputNumberDecimal2 = () => {
      return (
        <InputNumberDecimal2
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderInputNumberInteger = () => {
      return (
        <InputNumberInteger
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };

    const renderSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}FormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}MulitFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderCheckAllMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CheckAllMulitFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };

    const renderAutoCompleteSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}FormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderAutoCompleteSelectMulti = () => {
      const Component = FormItemGeneratorToDict[`${dictName}MulitFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderAutoCompleteSelectCheckAllMulti = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CheckAllMulitFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };

    const renderRadioHorizontal = () => {
      const Component = FormItemGeneratorToDict[`${dictName}HorizontalFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderRadioButton = () => {
      const Component = FormItemGeneratorToDict[`${dictName}ButtonFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderRadioSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderRadioCustom = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CustomFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        >
          {(data) => renderChildren?.(data)}
        </Component>
      );
    };

    const renderCheckBoxHorizontal = () => {
      const Component = FormItemGeneratorToDict[`${dictName}HorizontalFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderCheckBoxCheckAllHorizontal = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CheckAllHorizontalFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderCheckboxSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderCheckBoxCheckAllSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CheckAllSelectFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderCheckBoxCustom = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CustomFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        >
          {(dataSource) => renderChildren?.(dataSource)}
        </Component>
      );
    };
    const renderCheckBoxCheckAllCustom = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CheckAllCustomFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        >
          {(dataSource) => renderChildren?.(dataSource)}
        </Component>
      );
    };

    const renderTransferSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };

    const renderTableSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderTableMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}MulitSelectFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderTablePagingSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}PaginationSelectFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderTablePagingMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}PaginationMulitSelectFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };

    const renderListSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderListMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}MulitSelectFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderListPagingSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}PaginationSelectFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderListPagingMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}PaginationMulitSelectFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };

    const renderTreeSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}FormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderTreeMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}MulitFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderTreeSelectLeaf = () => {
      const Component = FormItemGeneratorToDict[`${dictName}LeafFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderTreeMultiSelectLeaf = () => {
      const Component = FormItemGeneratorToDict[`${dictName}LeafMulitFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };

    const renderCascaderSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}FormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderCascaderMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}MulitFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderCascaderSelectLeaf = () => {
      const Component = FormItemGeneratorToDict[`${dictName}LeafFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderCascaderMultiSelectLeaf = () => {
      const Component = FormItemGeneratorToDict[`${dictName}LeafMulitFormItem`];

      return (
        <Component
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };

    const renderDatePicker = () => {
      return (
        <DatePicker
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderTimePicker = () => {
      return (
        <TimePicker
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderRangePicker = () => {
      return (
        <RangePicker
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };

    const renderSlider = () => {
      return (
        <Slider
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderSliderRange = () => {
      return (
        <Slider
          range
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };

    const renderRate = () => {
      return (
        <Rate
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
          }}
        />
      );
    };
    const renderSwitch = () => {
      return (
        <Switch
          {...{
            props: {
              ...defaultProps,
              ...(props || {}),
            },
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
