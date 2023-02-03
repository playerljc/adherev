import { VueNode } from 'ant-design-vue/es/_util/type';
import { ConfigOnClose, MessageArgsProps } from 'ant-design-vue/es/message';
import { ModalProps } from 'ant-design-vue/es/modal';
declare const SuccessPrompt: {
    isUse: () => boolean;
    use: (Vue: any) => void;
    openSuccessMessage: (content: VueNode | MessageArgsProps, duration?: number, onClose?: ConfigOnClose) => void;
    openSuccessDialog: (options: ModalProps) => void;
};
export default SuccessPrompt;
