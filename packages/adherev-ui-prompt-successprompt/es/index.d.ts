declare const SuccessPrompt: {
    openSuccessDialog: (options: import("ant-design-vue/types/modal").ModalOptions) => import("ant-design-vue/types/modal").ModalConfirm;
    openSuccessMessage: (content: import("ant-design-vue/types/message").ConfigType, duration?: import("ant-design-vue/types/message").ConfigDuration | undefined, onClose?: import("ant-design-vue/types/message").ConfigOnClose | undefined) => import("ant-design-vue/types/message").MessageType;
    isUse: () => boolean;
    use: (Vue: any) => void;
};
export default SuccessPrompt;
