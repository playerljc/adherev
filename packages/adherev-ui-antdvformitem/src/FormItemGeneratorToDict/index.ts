import omit from 'omit.js';

import * as FormItemGeneratorToDict from './FormItemGeneratorToDict';

const { validatorMulti, validatorNormal, ...OtherFormItemComponents } = FormItemGeneratorToDict;

// 字典组件
const DictFormItem = OtherFormItemComponents.default;

// 功能组件
const FunctionComponents = omit(OtherFormItemComponents, ['default']);

export { DictFormItem, FunctionComponents };

export default {
  install: (Vue) => {
    Object.keys(FunctionComponents).forEach((key) => {
      Vue.component(`adv-formitemgeneratortodict-${key.toLowerCase()}`, FunctionComponents[key]);
    });
  },
};
