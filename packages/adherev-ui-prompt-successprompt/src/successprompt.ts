import { message } from 'ant-design-vue';
import { MessageType } from 'ant-design-vue/types/message';

import Intl from '@baifendian/adherev-util-intl';

const SuccessPrompt: {
  (content?: any): MessageType;
  isUse?: () => boolean;
  use?: (Vue) => void;
} = (content) => {
  return message.success(content ? content : Intl.tv('操作成功'));
};

/**
 * 成功的提示
 * @param content - {string| VNode |(h) => VNode}
 */
export default SuccessPrompt;
