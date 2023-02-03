import { VueNode } from 'ant-design-vue/es/_util/type';
import { ConfigOnClose } from 'ant-design-vue/es/message';
import { MessageArgsProps } from 'ant-design-vue/es/message';
import { ModalProps } from 'ant-design-vue/es/modal';
export declare const openErrorDialog: (options: ModalProps) => {
    destroy: () => void;
    update: (newConfig: import("ant-design-vue").ModalFuncProps) => void;
};
/**
 * 错误的提示
 * @param content
 * @param duration
 * @param onClose
 */
export declare const openErrorMessage: (content: VueNode | MessageArgsProps, duration?: number, onClose?: ConfigOnClose) => import("ant-design-vue/lib/message").MessageType;
