import AutoCompleteFormItem from './AutoCompleteFormItem';
import CascaderFormItem from './CascaderFormItem';
import CascaderLeafFormItem from './CascaderLeafFormItem';
import CheckAllMulitSelectFormItem from './CheckAllMulitSelectFormItem';
import CheckBoxCheckAllCustomFormItem from './CheckBoxCheckAllCustomFormItem';
import CheckBoxCheckAllHorizontalFormItem from './CheckBoxCheckAllHorizontalFormItem';
import CheckBoxCheckAllSelectFormItem from './CheckBoxCheckAllSelectFormItem';
import CheckBoxCheckAllVerticalFormItem from './CheckBoxCheckAllVerticalFormItem';
import CheckBoxCustomFormItem from './CheckBoxCustomFormItem';
import CheckBoxHorizontalFormItem from './CheckBoxHorizontalFormItem';
import CheckBoxSelectFormItem from './CheckBoxSelectFormItem';
import CheckBoxVerticalFormItem from './CheckBoxVerticalFormItem';
import AutoComplete from './Fields/AutoComplete';
import Cascader from './Fields/Cascader';
import CheckBox from './Fields/CheckBox';
import List from './Fields/List';
import Radio from './Fields/Radio';
import Select from './Fields/Select';
import Table from './Fields/Table';
import Transfer from './Fields/Transfer';
import TreeSelect from './Fields/TreeSelect';
import ListFormItem from './ListFormItem';
import ListMulitSelectFormItem from './ListMulitSelectFormItem';
import ListSelectFormItem from './ListSelectFormItem';
import MulitSelectFormItem from './MulitSelectFormItem';
import RadioButtonFormItem from './RadioButtonFormItem';
import RadioCustomFormItem from './RadioCustomFormItem';
import RadioHorizontalFormItem from './RadioHorizontalFormItem';
import RadioSelectFormItem from './RadioSelectFormItem';
import RadioVerticalFormItem from './RadioVerticalFormItem';
import SelectFormItem from './SelectFormItem';
import TableFormItem from './TableFormItem';
import TableMulitSelectFormItem from './TableMulitSelectFormItem';
import TableSelectFormItem from './TableSelectFormItem';
import TransferFormItem from './TransferFormItem';
import TransferSelectFormItem from './TransferSelectFormItem';
import TreeMulitSelectFormItem from './TreeMulitSelectFormItem';
import TreeSelectFormItem from './TreeSelectFormItem';
import TreeSelectLeafFormItem from './TreeSelectLeafFormItem';
import TreeSelectLeafMulitFormItem from './TreeSelectLeafMulitFormItem';

let FormItemComponents;

export const validatorNormal = (message) => ({
  validator(_, value) {
    if (!value) return Promise.reject(message);

    return Promise.resolve();
  },
});

export const validatorMulti = (message) => ({
  validator(_, value) {
    if (!value) return Promise.reject(message);

    if (Array.isArray(value) && !value.length) return Promise.reject(message);

    return Promise.resolve();
  },
});

export {
  AutoCompleteFormItem,
  CheckAllMulitSelectFormItem,
  CheckBoxCheckAllSelectFormItem,
  CheckBoxCheckAllCustomFormItem,
  CheckBoxCustomFormItem,
  CheckBoxHorizontalFormItem,
  CheckBoxVerticalFormItem,
  CheckBoxCheckAllVerticalFormItem,
  CheckBoxCheckAllHorizontalFormItem,
  CheckBoxSelectFormItem,
  ListFormItem,
  ListSelectFormItem,
  ListMulitSelectFormItem,
  MulitSelectFormItem,
  RadioSelectFormItem,
  RadioVerticalFormItem,
  RadioButtonFormItem,
  RadioCustomFormItem,
  RadioHorizontalFormItem,
  SelectFormItem,
  TransferSelectFormItem,
  TreeSelectFormItem,
  TreeMulitSelectFormItem,
  TreeSelectLeafFormItem,
  TreeSelectLeafMulitFormItem,
  TableFormItem,
  TableSelectFormItem,
  TableMulitSelectFormItem,
  TransferFormItem,
  CascaderFormItem,
  CascaderLeafFormItem,
};

export default {
  init(Vue) {
    FormItemComponents = {
      ...CheckBox(),
      ...Radio(),
      ...Select(),
      ...List(),
      ...Table(),
      ...Transfer(),
      ...TreeSelect(),
      ...Cascader(),
      ...AutoComplete(),
    };

    Object.keys(FormItemComponents).forEach((key) => {
      Vue.component(`${key}`, FormItemComponents[key]);
    });
  },
  getComponents() {
    return {
      ...FormItemComponents,
    };
  },
};
