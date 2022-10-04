import { MessageType } from 'ant-design-vue/types/message';
declare const ErrorPrompt: {
    (content?: any): MessageType;
    isUse?: () => boolean;
    use?: (Vue: any) => void;
};
/**
 * 错误的提示
 * @param content - {string| VNode |(h) => VNode}
 */
export default ErrorPrompt;
