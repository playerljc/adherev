import { message } from 'ant-design-vue';

import Intl from '@baifendian/adherev-util-intl';

/**
 * 成功的提示
 * @param content - {string| VNode |(h) => VNode}
 */
export default (content) => {
  return message.success(content ? content : Intl.tv('操作成功'));
};
