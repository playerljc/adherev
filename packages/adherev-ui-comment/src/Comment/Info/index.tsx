import { createHOC } from 'vue-hoc';

import Node from '../../Components/Node';

/**
 * CommentInfo
 * @param props
 * @constructor
 * @classdesc 评论节点
 */
const CommentInfo: any = createHOC(
  Node,
  {
    name: `adv-comment-comment-info`,
  },
  {
    props(props) {
      return {
        ...props,
        isReply: false,
      };
    },
    scopedSlots(slots) {
      return {
        ...slots,
        default: (record) => slots.default(record),
      };
    },
  },
);

export default CommentInfo;
