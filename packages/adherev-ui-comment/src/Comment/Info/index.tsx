import Util from '@baifendian/adherev-util';

import Node from '../../Components/Node';

/**
 * CommentInfo
 * @param props
 * @constructor
 * @classdesc 评论节点
 */
const CommentInfo = Util._util.HOC(
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
    slots(slots) {
      return {
        ...slots,
        default: (record) => slots.default(record),
      };
    },
  },
);

export default CommentInfo;
