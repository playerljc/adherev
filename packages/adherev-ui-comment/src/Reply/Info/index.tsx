import { createHOC } from 'vue-hoc';

import Node from '../../Components/Node';

/**
 * ReplyInfo
 * @param props
 * @constructor
 * @classdesc 回复节点
 */
const ReplyInfo: any = createHOC(
  Node,
  {
    name: `adv-comment-reply-info`,
  },
  {
    props(props) {
      return {
        ...props,
        isReply: true,
      };
    },
  },
);

export default ReplyInfo;
