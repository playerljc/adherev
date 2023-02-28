import { Modal, message } from 'ant-design-vue';
import { VueNode } from 'ant-design-vue/es/_util/type';
import { ConfigOnClose } from 'ant-design-vue/es/message';
import { MessageArgsProps } from 'ant-design-vue/es/message';
import { ModalProps } from 'ant-design-vue/es/modal';

import Intl from '@baifendian/adherev-util-intl';

/**
 * openErrorDialog
 * @param options
 */
export const openWarnDialog = (options: ModalProps) =>
  Modal.warning({
    title: Intl.tv('提示'),
    mask: false,
    maskClosable: true,
    ...(options || {}),
  });

/**
 * 警告的提示
 * @param content
 * @param duration
 * @param onClose
 */
export const openWarnMessage = (
  content: VueNode | MessageArgsProps,
  duration?: number,
  onClose?: ConfigOnClose,
) => message.warning(content, duration, onClose);
