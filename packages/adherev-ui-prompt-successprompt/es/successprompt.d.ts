import { MessageType } from 'ant-design-vue/types/message';
declare const SuccessPrompt: {
    (content?: any): MessageType;
    isUse?: () => boolean;
    use?: (Vue: any) => void;
};
/**
 * 成功的提示
 * @param content - {string| VNode |(h) => VNode}
 */
export default SuccessPrompt;
