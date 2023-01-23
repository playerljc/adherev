import"core-js/modules/es.object.keys.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.get-own-property-descriptor.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.define-properties.js";import"core-js/modules/es.object.define-property.js";import _defineProperty from"@babel/runtime/helpers/defineProperty";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";function ownKeys(t,e){var o,n=Object.keys(t);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(t),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)),n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(o),!0).forEach(function(e){_defineProperty(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}import{__assign}from"tslib";import{Input,InputNumber,Rate,Slider,Switch}from"ant-design-vue";import AntdvFormItem from"@baifendian/adherev-ui-antdvformitem";var getComponents=AntdvFormItem.FormItemGeneratorToDict.getComponents,_a=AntdvFormItem.AntdvFormItemNormalize,DatePicker=_a.DatePicker,InputNumberDecimal1=_a.InputNumberDecimal1,InputNumberDecimal2=_a.InputNumberDecimal2,InputNumberInteger=_a.InputNumberInteger,RangePicker=_a.RangePicker,TimePicker=_a.TimePicker,Components=function(){return getComponents()};export default{render:function(t,e){var o=e.type,n=e.renderChildren,r=e.props,s=e.listeners,a=e.dictName,_=(e.form,e.dataIndex,e.rowIndex,{autoFocus:!0});return null==(e=new Map([["input",function(){return t(Input,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["textArea",function(){return t(Input.TextArea,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["inputNumber",function(){return t(InputNumber,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["inputNumberDecimal1",function(){return t(InputNumberDecimal1,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["inputNumberDecimal2",function(){return t(InputNumberDecimal2,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["inputNumberInteger",function(){return t(InputNumberInteger,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["select",function(){var e=Components()["".concat(a,"FormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["multiSelect",function(){var e=Components()["".concat(a,"MulitFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["checkAllMultiSelect",function(){var e=Components()["".concat(a,"CheckAllMulitFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["autoCompleteSelect",function(){var e=Components()["".concat(a,"FormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["autoCompleteSelectMulti",function(){var e=Components()["".concat(a,"MulitFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["autoCompleteSelectCheckAllMulti",function(){var e=Components()["".concat(a,"CheckAllMulitFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["radioHorizontal",function(){var e=Components()["".concat(a,"HorizontalFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["radioButton",function(){var e=Components()["".concat(a,"ButtonFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["radioSelect",function(){var e=Components()["".concat(a,"SelectFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["radioCustom",function(){var e=Components()["".concat(a,"CustomFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))},[function(e){return null==n?void 0:n(e)}])}],["checkBoxHorizontal",function(){var e=Components()["".concat(a,"HorizontalFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["checkBoxCheckAllHorizontal",function(){var e=Components()["".concat(a,"CheckAllHorizontalFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["checkboxSelect",function(){var e=Components()["".concat(a,"SelectFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["checkBoxCheckAllSelect",function(){var e=Components()["".concat(a,"CheckAllSelectFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["checkBoxCustom",function(){var e=Components()["".concat(a,"CustomFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))},[function(e){return null==n?void 0:n(e)}])}],["checkBoxCheckAllCustom",function(){var e=Components()["".concat(a,"CheckAllCustomFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))},[function(e){return null==n?void 0:n(e)}])}],["transferSelect",function(){var e=Components()["".concat(a,"SelectFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["tableSelect",function(){var e=Components()["".concat(a,"SelectFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["tableMultiSelect",function(){var e=Components()["".concat(a,"MulitSelectFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["tablePagingSelect",function(){var e=Components()["".concat(a,"PaginationSelectFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["tablePagingMultiSelect",function(){var e=Components()["".concat(a,"PaginationMulitSelectFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["listSelect",function(){var e=Components()["".concat(a,"SelectFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["listMultiSelect",function(){var e=Components()["".concat(a,"MulitSelectFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["listPagingSelect",function(){var e=Components()["".concat(a,"PaginationSelectFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["listPagingMultiSelect",function(){var e=Components()["".concat(a,"PaginationMulitSelectFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["treeSelect",function(){var e=Components()["".concat(a,"FormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["treeMultiSelect",function(){var e=Components()["".concat(a,"MulitFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["treeSelectLeaf",function(){var e=Components()["".concat(a,"LeafFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["treeMultiSelectLeaf",function(){var e=Components()["".concat(a,"LeafMulitFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["cascaderSelect",function(){var e=Components()["".concat(a,"FormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["cascaderMultiSelect",function(){var e=Components()["".concat(a,"MulitFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["cascaderSelectLeaf",function(){var e=Components()["".concat(a,"LeafFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["cascaderMultiSelectLeaf",function(){var e=Components()["".concat(a,"LeafMulitFormItem")];return t(e,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["datePicker",function(){return t(DatePicker,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["timePicker",function(){return t(TimePicker,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["rangePicker",function(){return t(RangePicker,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["slider",function(){return t(Slider,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["sliderRange",function(){return t(Slider,{attrs:{range:!0},props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["rate",function(){return t(Rate,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}],["switch",function(){return t(Switch,{props:_objectSpread({},__assign(__assign({},_),r||{})),on:_objectSpread({},__assign({},s||{}))})}]]).get(o))?void 0:e()}};
//# sourceMappingURL=FormItemGenerator.js.map
