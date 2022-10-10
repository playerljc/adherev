import { message } from 'ant-design-vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import SuccessPrompt from './successprompt';

const {
  _util: { withVue },
} = BfdUtil;

SuccessPrompt.isUse = () => true;

SuccessPrompt.use = (Vue) => {
  Intl.isUse() && Intl.use(Vue);
  Vue.use(message);
  withVue(Vue, 'SuccessPrompt', SuccessPrompt);
};

export default SuccessPrompt;
