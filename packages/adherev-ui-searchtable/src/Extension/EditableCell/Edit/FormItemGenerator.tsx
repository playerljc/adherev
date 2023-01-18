import { Input, InputNumber, Rate, Slider, Switch } from 'ant-design-vue';
import { CreateElement, VNode } from 'vue';

import AntdvFormItem from '@baifendian/adherev-ui-antdvformitem';

import { FormItemGeneratorConfig } from '../../../types';

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
   * @param listeners
   * @param dictName distName
   * @param form 表单的form实例
   * @param dataIndex
   * @param rowIndex
   */
  render(
    h: CreateElement,
    {
      type,
      renderChildren,
      props,
      listeners,
      dictName,
      form,
      dataIndex,
      rowIndex,
    }: FormItemGeneratorConfig,
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
            on: {
              ...(listeners || {}),
              // blur: () => {
              //   console.log('blur');
              // }
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
            on: {
              ...(listeners || {}),
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
