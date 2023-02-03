import { Modal, message } from 'ant-design-vue';
import { VueNode } from 'ant-design-vue/es/_util/type';
import { ConfigOnClose, MessageArgsProps } from 'ant-design-vue/es/message';
import { ModalProps } from 'ant-design-vue/es/modal';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import { openErrorDialog, openErrorMessage } from './errorprompt';

const {
  _util: { withVue },
} = BfdUtil;

const ErrorPrompt: {
  isUse: () => boolean;
  use: (Vue: any) => void;
  openErrorMessage: (
    content: VueNode | MessageArgsProps,
    duration?: number,
    onClose?: ConfigOnClose,
  ) => void;
  openErrorDialog: (options: ModalProps) => void;
} = {
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
