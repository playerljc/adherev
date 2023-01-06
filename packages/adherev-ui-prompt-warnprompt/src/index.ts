import { Modal, message } from 'ant-design-vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import { openWarnDialog, openWarnMessage } from './warnprompt';

const {
  _util: { withVue },
} = BfdUtil;

const WarnPrompt = {
  openWarnMessage,
  openWarnDialog,
  isUse: () => true,
  use: (Vue) => {
    Intl.isUse() && Intl.use(Vue);
    Vue.use(message);
    Vue.use(Modal);
    withVue(Vue, 'WarnPrompt', WarnPrompt);
  },
};

export default WarnPrompt;
