import { message } from 'ant-design-vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import ErrorPrompt from './errorprompt';

const {
  _util: { withVue },
} = BfdUtil;

ErrorPrompt.isUse = () => true;

ErrorPrompt.use = (Vue) => {
  Intl.isUse() && Intl.use(Vue);
  Vue.use(message);
  withVue(Vue, 'ErrorPrompt', ErrorPrompt);
};

export default ErrorPrompt;
