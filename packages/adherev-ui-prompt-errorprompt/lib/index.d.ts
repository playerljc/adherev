import { VueNode } from 'ant-design-vue/es/_util/type';
import { ConfigOnClose, MessageArgsProps } from 'ant-design-vue/es/message';
import { ModalProps } from 'ant-design-vue/es/modal';
declare const ErrorPrompt: {
    isUse: () => boolean;
    use: (Vue: any) => void;
    openErrorMessage: (content: VueNode | MessageArgsProps, duration?: number, onClose?: ConfigOnClose) => void;
    openErrorDialog: (options: ModalProps) => void;
};
export default ErrorPrompt;
