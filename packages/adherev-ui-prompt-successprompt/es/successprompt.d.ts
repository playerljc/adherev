import { VueNode } from 'ant-design-vue/es/_util/type';
import { ConfigOnClose } from 'ant-design-vue/es/message';
import { MessageArgsProps } from 'ant-design-vue/es/message';
import { ModalProps } from 'ant-design-vue/es/modal';
/**
 * openSuccessDialog
 * @param options
 */
export declare const openSuccessDialog: (options: ModalProps) => {
    destroy: () => void;
    update: (newConfig: import("ant-design-vue").ModalFuncProps) => void;
};
/**
 * 成功的提示
 * @param content
 * @param duration
 * @param onClose
 */
export declare const openSuccessMessage: (content: VueNode | MessageArgsProps, duration?: number, onClose?: ConfigOnClose) => import("ant-design-vue/lib/message").MessageType;
