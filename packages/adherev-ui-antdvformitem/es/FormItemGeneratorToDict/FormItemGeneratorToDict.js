import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.keys.js";import{__assign}from"tslib";import CascaderFormItem from"./CascaderFormItem";import CascaderLeafFormItem from"./CascaderLeafFormItem";import CheckAllMulitSelectFormItem from"./CheckAllMulitSelectFormItem";import CheckBoxCheckAllCustomFormItem from"./CheckBoxCheckAllCustomFormItem";import CheckBoxCheckAllHorizontalFormItem from"./CheckBoxCheckAllHorizontalFormItem";import CheckBoxCheckAllSelectFormItem from"./CheckBoxCheckAllSelectFormItem";import CheckBoxCheckAllVerticalFormItem from"./CheckBoxCheckAllVerticalFormItem";import CheckBoxCustomFormItem from"./CheckBoxCustomFormItem";import CheckBoxHorizontalFormItem from"./CheckBoxHorizontalFormItem";import CheckBoxSelectFormItem from"./CheckBoxSelectFormItem";import CheckBoxVerticalFormItem from"./CheckBoxVerticalFormItem";import Cascader from"./Fields/Cascader";import CheckBox from"./Fields/CheckBox";import List from"./Fields/List";import Radio from"./Fields/Radio";import Select from"./Fields/Select";import Table from"./Fields/Table";import Transfer from"./Fields/Transfer";import TreeSelect from"./Fields/TreeSelect";import ListFormItem from"./ListFormItem";import ListMulitSelectFormItem from"./ListMulitSelectFormItem";import ListSelectFormItem from"./ListSelectFormItem";import MulitSelectFormItem from"./MulitSelectFormItem";import RadioButtonFormItem from"./RadioButtonFormItem";import RadioCustomFormItem from"./RadioCustomFormItem";import RadioHorizontalFormItem from"./RadioHorizontalFormItem";import RadioSelectFormItem from"./RadioSelectFormItem";import RadioVerticalFormItem from"./RadioVerticalFormItem";import SelectFormItem from"./SelectFormItem";import TableFormItem from"./TableFormItem";import TableMulitSelectFormItem from"./TableMulitSelectFormItem";import TableSelectFormItem from"./TableSelectFormItem";import TransferFormItem from"./TransferFormItem";import TransferSelectFormItem from"./TransferSelectFormItem";import TreeMulitSelectFormItem from"./TreeMulitSelectFormItem";import TreeSelectFormItem from"./TreeSelectFormItem";import TreeSelectLeafFormItem from"./TreeSelectLeafFormItem";import TreeSelectLeafMulitFormItem from"./TreeSelectLeafMulitFormItem";var FormItemComponents,validatorNormal=function(m){return{validator:function(e,o){return o?Promise.resolve():Promise.reject(m)}}},validatorMulti=function(m){return{validator:function(e,o){return!o||Array.isArray(o)&&!o.length?Promise.reject(m):Promise.resolve()}}};export default{init:function(o){FormItemComponents=__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({},CheckBox()),Radio()),Select()),List()),Table()),Transfer()),TreeSelect()),Cascader()),Object.keys(FormItemComponents).forEach(function(e){o.component("".concat(e),FormItemComponents[e])})},getComponents:function(){return __assign({},FormItemComponents)}};export{validatorNormal,validatorMulti,CheckAllMulitSelectFormItem,CheckBoxCheckAllSelectFormItem,CheckBoxCheckAllCustomFormItem,CheckBoxCustomFormItem,CheckBoxHorizontalFormItem,CheckBoxVerticalFormItem,CheckBoxCheckAllVerticalFormItem,CheckBoxCheckAllHorizontalFormItem,CheckBoxSelectFormItem,ListFormItem,ListSelectFormItem,ListMulitSelectFormItem,MulitSelectFormItem,RadioSelectFormItem,RadioVerticalFormItem,RadioButtonFormItem,RadioCustomFormItem,RadioHorizontalFormItem,SelectFormItem,TransferSelectFormItem,TreeSelectFormItem,TreeMulitSelectFormItem,TreeSelectLeafFormItem,TreeSelectLeafMulitFormItem,TableFormItem,TableSelectFormItem,TableMulitSelectFormItem,TransferFormItem,CascaderFormItem,CascaderLeafFormItem};
//# sourceMappingURL=FormItemGeneratorToDict.js.map
