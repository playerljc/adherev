import { Modal, message } from 'ant-design-vue';
import { VueNode } from 'ant-design-vue/es/_util/type';
import { ConfigOnClose, MessageArgsProps } from 'ant-design-vue/es/message';
import { ModalProps } from 'ant-design-vue/es/modal';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import { openWarnDialog, openWarnMessage } from './warnprompt';

const {
  _util: { withVue },
} = BfdUtil;

const WarnPrompt: {
  isUse: () => boolean;
  use: (Vue: any) => void;
  openWarnMessage: (
    content: VueNode | MessageArgsProps,
    duration?: number,
    onClose?: ConfigOnClose,
  ) => void;
  openWarnDialog: (options: ModalProps) => void;
} = {
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
