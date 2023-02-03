import { VueNode } from 'ant-design-vue/es/_util/type';
import { ConfigOnClose, MessageArgsProps } from 'ant-design-vue/es/message';
import { ModalProps } from 'ant-design-vue/es/modal';
declare const WarnPrompt: {
    isUse: () => boolean;
    use: (Vue: any) => void;
    openWarnMessage: (content: VueNode | MessageArgsProps, duration?: number, onClose?: ConfigOnClose) => void;
    openWarnDialog: (options: ModalProps) => void;
};
export default WarnPrompt;
