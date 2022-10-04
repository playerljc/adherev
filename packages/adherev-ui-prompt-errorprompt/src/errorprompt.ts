import { message } from 'ant-design-vue';
import { MessageType } from 'ant-design-vue/types/message';

import Intl from '@baifendian/adherev-util-intl';

const ErrorPrompt: {
  (content?: any): MessageType;
  isUse?: () => boolean;
  use?: (Vue) => void;
} = (content) => {
  return message.error(content ? content : Intl.tv('系统异常'));
};

/**
 * 错误的提示
 * @param content - {string| VNode |(h) => VNode}
 */
export default ErrorPrompt;
