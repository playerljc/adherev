import { Modal, message } from 'ant-design-vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import { openSuccessDialog, openSuccessMessage } from './successprompt';

const {
  _util: { withVue },
} = BfdUtil;

const SuccessPrompt = {
  openSuccessDialog,
  openSuccessMessage,
  isUse: () => true,
  use: (Vue) => {
    Intl.isUse() && Intl.use(Vue);
    Vue.use(message);
    Vue.use(Modal);
    withVue(Vue, 'SuccessPrompt', SuccessPrompt);
  },
};

export default SuccessPrompt;
