import { ConfigDuration, ConfigOnClose, ConfigType } from 'ant-design-vue/types/message';
import { ModalOptions } from 'ant-design-vue/types/modal';
/**
 * openSuccessDialog
 * @param options
 */
export declare const openSuccessDialog: (options: ModalOptions) => import("ant-design-vue/types/modal").ModalConfirm;
/**
 * 成功的提示
 * @param content
 * @param duration
 * @param onClose
 */
export declare const openSuccessMessage: (content: ConfigType, duration?: ConfigDuration, onClose?: ConfigOnClose) => import("ant-design-vue/types/message").MessageType;
