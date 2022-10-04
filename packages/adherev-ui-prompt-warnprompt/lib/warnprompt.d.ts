import { MessageType } from 'ant-design-vue/types/message';
declare const WarnPrompt: {
    (content?: any): MessageType;
    isUse?: () => boolean;
    use?: (Vue: any) => void;
};
/**
 * 警告的提示
 * @param content - {string| VNode |(h) => VNode}
 */
export default WarnPrompt;
