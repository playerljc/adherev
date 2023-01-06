import { Modal, message } from 'ant-design-vue';
import { ConfigDuration, ConfigOnClose, ConfigType } from 'ant-design-vue/types/message';
import { ModalOptions } from 'ant-design-vue/types/modal';

import Intl from '@baifendian/adherev-util-intl';

/**
 * openSuccessDialog
 * @param options
 */
export const openSuccessDialog = (options: ModalOptions) =>
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
  content: ConfigType,
  duration?: ConfigDuration,
  onClose?: ConfigOnClose,
) => message.success(content ? content : Intl.tv('操作成功'), duration, onClose);
