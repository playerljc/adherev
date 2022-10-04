import Node from '../../Components/Node';
import { selectorPrefix } from '../index';

/**
 * CommentInfo
 * @param props
 * @constructor
 * @classdesc 评论节点
 */
const CommentInfo: any = {
  name: `${selectorPrefix}-comment-info`,
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
    const scopedSlots = {
      default: (record) => this.$scopedSlots.default(record),
    };

    return (
      <Node
        {...{
          props: {
            ...this.props,
            isReply: false,
          },
        }}
        scopedSlots={scopedSlots}
      />
    );
  },
};

export default CommentInfo;
