import CheckAllMulitSelectFormItem from './CheckAllMulitSelectFormItem/CheckAllMulitSelectFormItem';
import CheckBoxCheckAllSelectFormItem from './CheckBoxCheckAllSelectFormItem/CheckBoxCheckAllSelectFormItem';
import CheckBoxSelectFormItem from './CheckBoxSelectFormItem/CheckBoxSelectFormItem';
import MulitSelectFormItem from './MulitSelectFormItem/MulitSelectFormItem';
import RadioSelectFormItem from './RadioSelectFormItem/RadioSelectFormItem';
import SelectFormItem from './SelectFormItem/SelectFormItem';
import TransferSelectFormItem from './TransferSelectFormItem/TransferSelectFormItem';
import TreeMulitSelectFormItem from './TreeMulitSelectFormItem/TreeMulitSelectFormItem';
import TreeSelectFormItem from './TreeSelectFormItem/TreeSelectFormItem';
declare const FormItemComponents: any;
export declare const validatorNormal: (message: any) => {
    validator(_: any, value: any): Promise<void>;
};
export declare const validatorMulti: (message: any) => {
    validator(_: any, value: any): Promise<void>;
};
export { CheckAllMulitSelectFormItem, CheckBoxCheckAllSelectFormItem, CheckBoxSelectFormItem, MulitSelectFormItem, RadioSelectFormItem, SelectFormItem, TransferSelectFormItem, TreeMulitSelectFormItem, TreeSelectFormItem, };
export default FormItemComponents;
