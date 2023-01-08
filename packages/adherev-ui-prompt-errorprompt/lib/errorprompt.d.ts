import { ConfigDuration, ConfigOnClose, ConfigType } from 'ant-design-vue/types/message';
import { ModalOptions } from 'ant-design-vue/types/modal';
export declare const openErrorDialog: (options: ModalOptions) => import("ant-design-vue/types/modal").ModalConfirm;
/**
 * 错误的提示
 * @param content
 * @param duration
 * @param onClose
 */
export declare const openErrorMessage: (content: ConfigType, duration?: ConfigDuration, onClose?: ConfigOnClose) => import("ant-design-vue/types/message").MessageType;
