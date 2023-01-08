import { ConfigDuration, ConfigOnClose, ConfigType } from 'ant-design-vue/types/message';
import { ModalOptions } from 'ant-design-vue/types/modal';
/**
 * openErrorDialog
 * @param options
 */
export declare const openWarnDialog: (options: ModalOptions) => import("ant-design-vue/types/modal").ModalConfirm;
/**
 * 警告的提示
 * @param content
 * @param duration
 * @param onClose
 */
export declare const openWarnMessage: (content: ConfigType, duration?: ConfigDuration, onClose?: ConfigOnClose) => import("ant-design-vue/types/message").MessageType;
