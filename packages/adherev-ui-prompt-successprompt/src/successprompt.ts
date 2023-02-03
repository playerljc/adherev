import { Modal, message } from 'ant-design-vue';
import { VueNode } from 'ant-design-vue/es/_util/type';
import { ConfigOnClose } from 'ant-design-vue/es/message';
import { MessageArgsProps } from 'ant-design-vue/es/message';
import { ModalProps } from 'ant-design-vue/es/modal';

import Intl from '@baifendian/adherev-util-intl';

/**
 * openSuccessDialog
 * @param options
 */
export const openSuccessDialog = (options: ModalProps) =>
  Modal.success({
    title: Intl.tv('提示'),
    content: Intl.tv('操作成功'),
    mask: false,
    maskClosable: true,
    ...(options || {}),
  });

/**
 * 成功的提示
 * @param content
 * @param duration
 * @param onClose
 */
export const openSuccessMessage = (
  content: VueNode | MessageArgsProps,
  duration?: number,
  onClose?: ConfigOnClose,
) => message.success(content ? content : Intl.tv('操作成功'), duration, onClose);
