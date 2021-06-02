import { message } from 'ant-design-vue';

/**
 * 警告的提示
 * @param content - {string| VNode |(h) => VNode}
 */
export default (content) => {
  return message.warn(content);
};
