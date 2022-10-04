import { message } from 'ant-design-vue';
import { MessageType } from 'ant-design-vue/types/message';

const WarnPrompt: {
  (content?: any): MessageType;
  isUse?: () => boolean;
  use?: (Vue) => void;
} = (content) => {
  return message.warn(content);
};

/**
 * 警告的提示
 * @param content - {string| VNode |(h) => VNode}
 */
export default WarnPrompt;
