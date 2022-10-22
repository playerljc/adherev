import Util from '@baifendian/adherev-util';

import Node from '../../Components/Node';

const ReplyInfo = Util._util.HOC(
  Node,
  { name: `adv-comment-reply-info` },
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
