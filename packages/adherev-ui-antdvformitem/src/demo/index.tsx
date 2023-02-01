import Vue from 'vue';

import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import Dict from '@baifendian/adherev-util-dict';

import AntdFormItem from '../index';
// @ts-ignore
import Index from './antdformitem';
import TestDist from './dict.test.config';
//@ts-ignore
import Test from './test';

import '../index.less';

AntdFormItem.use(Vue);
Dict.use(Vue);
FlexLayout.use(Vue);

// 配置字典
Dict.init([TestDist], { isFunMemo: false });

// 初始化字典组件
AntdFormItem.FormItemGeneratorToDict.init(Vue);
// AntdFormItem.AntdvFormItemNormalize.Input.defaultProps.maxLength = 10;

new Vue({
  el: '#app',
  render(h) {
    return h(/*Index*/ Test);
  },
});
