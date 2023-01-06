import { Modal, message } from 'ant-design-vue';
import { ConfigDuration, ConfigOnClose, ConfigType } from 'ant-design-vue/types/message';
import { ModalOptions } from 'ant-design-vue/types/modal';

import Intl from '@baifendian/adherev-util-intl';

export const openErrorDialog = (options: ModalOptions) =>
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
  content: ConfigType,
  duration?: ConfigDuration,
  onClose?: ConfigOnClose,
) => message.error(content ? content : Intl.tv('系统异常'), duration, onClose);
