import { message } from 'ant-design-vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import WarnPrompt from './warnprompt';

const {
  _util: { withVue },
} = BfdUtil;

WarnPrompt.isUse = () => true;

WarnPrompt.use = (Vue) => {
  Intl.isUse() && Intl.use(Vue);
  Vue.use(message);
  withVue(Vue, 'WarnPrompt', WarnPrompt);
};

export default WarnPrompt;
