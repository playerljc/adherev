import { Modal, message } from 'ant-design-vue';
import { ConfigDuration, ConfigOnClose, ConfigType } from 'ant-design-vue/types/message';
import { ModalOptions } from 'ant-design-vue/types/modal';

import Intl from '@baifendian/adherev-util-intl';

/**
 * openErrorDialog
 * @param options
 */
export const openWarnDialog = (options: ModalOptions) =>
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
  content: ConfigType,
  duration?: ConfigDuration,
  onClose?: ConfigOnClose,
) => message.warning(content, duration, onClose);
