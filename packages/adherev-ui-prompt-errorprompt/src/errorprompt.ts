import { Modal, message } from 'ant-design-vue';
import { VueNode } from 'ant-design-vue/es/_util/type';
import { ConfigOnClose } from 'ant-design-vue/es/message';
import { MessageArgsProps } from 'ant-design-vue/es/message';
import { ModalProps } from 'ant-design-vue/es/modal';

import Intl from '@baifendian/adherev-util-intl';

export const openErrorDialog = (options: ModalProps) =>
  Modal.error({
    title: Intl.v('提示'),
    content: Intl.v('系统异常'),
    mask: false,
    maskClosable: true,
    ...(options || {}),
  });

/**
 * 错误的提示
 * @param content
 * @param duration
 * @param onClose
 */
export const openErrorMessage = (
  content: VueNode | MessageArgsProps,
  duration?: number,
  onClose?: ConfigOnClose,
) => message.error(content ? content : Intl.tv('系统异常'), duration, onClose);
