import { message } from 'ant-design-vue';

import Intl from '@baifendian/adherev-util-intl';

/**
 * 错误的提示
 * @param content - {string| VNode |(h) => VNode}
 */
export default (content) => {
  return message.error(content ? content : Intl.tv('系统异常'));
};
