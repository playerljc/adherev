import { createApp, h } from 'vue';

import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import Dict from '@baifendian/adherev-util-dict';

import AntdFormItem from '../index';
// @ts-ignore
import Index from './antdformitem';
import TestDist from './dict.test.config';
// @ts-ignore
import Test from './test';

import '../index.less';

// 配置字典
// @ts-ignore
Dict.init([TestDist], { isFunMemo: false });

const app = createApp({
  render() {
    return h(/*Index*/ Test);
  },
});

// 初始化字典组件
AntdFormItem.FormItemGeneratorToDict.init(app);
// AntdFormItem.AntdvFormItemNormalize.Input.defaultProps.maxlength = 10;

app.use(AntdFormItem);
app.use(Dict);
app.use(FlexLayout);

app.mount('#app');
