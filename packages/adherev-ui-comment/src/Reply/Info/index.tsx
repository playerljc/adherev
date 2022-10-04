import { selectorPrefix } from '../../Comment';
import Node from '../../Components/Node';

/**
 * ReplyInfo
 * @param props
 * @constructor
 * @classdesc 回复节点
 */
const ReplyInfo: any = {
  name: `${selectorPrefix}-reply-info`,
  props: {
    ...Node.props,
  },
  computed: {
    props() {
      const props = {};

      for (const p in this.$props) {
        props[p] = this[p];
      }

      return props;
    },
  },
  render(h) {
    return (
      <Node
        {...{
          props: {
            ...this.props,
            isReply: true,
          },
        }}
      />
    );
  },
};

export default ReplyInfo;
