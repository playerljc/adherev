import { Modal, message } from 'ant-design-vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import { openErrorDialog, openErrorMessage } from './errorprompt';

const {
  _util: { withVue },
} = BfdUtil;

const ErrorPrompt = {
  openErrorDialog,
  openErrorMessage,
  isUse: () => true,
  use: (Vue) => {
    Intl.isUse() && Intl.use(Vue);
    Vue.use(message);
    Vue.use(Modal);
    withVue(Vue, 'ErrorPrompt', ErrorPrompt);
  },
};

export default ErrorPrompt;
