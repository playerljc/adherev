import { Modal, message } from 'ant-design-vue';
import { VueNode } from 'ant-design-vue/es/_util/type';
import { ConfigOnClose, MessageArgsProps } from 'ant-design-vue/es/message';
import { ModalProps } from 'ant-design-vue/es/modal';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import { openSuccessDialog, openSuccessMessage } from './successprompt';

const {
  _util: { withVue },
} = BfdUtil;

const SuccessPrompt: {
  isUse: () => boolean;
  use: (Vue: any) => void;
  openSuccessMessage: (
    content: VueNode | MessageArgsProps,
    duration?: number,
    onClose?: ConfigOnClose,
  ) => void;
  openSuccessDialog: (options: ModalProps) => void;
} = {
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
