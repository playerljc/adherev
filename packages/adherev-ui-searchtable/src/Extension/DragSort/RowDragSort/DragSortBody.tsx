import classNames from 'classnames';
import { CreateElement, VNode } from 'vue';
import Draggable from 'vuedraggable';

import { selectorPrefix } from '../../../SearchTable';

export default {
  methods: {
    onUseDragSortRowBodyEnd(e) {
      // newDraggableIndex
      // newIndex
      // oldDraggableIndex
      // oldIndex
      this.getContext?.()
        ?.context.moveRow(e.oldDraggableIndex, e.newDraggableIndex)
        .then(() => {});
    },
    /**
     * useDragSortRowBody
     * @param h
     * @param tbodyVNode
     */
    useDragSortRowBody(h: CreateElement, tbodyVNode: VNode): VNode | null {
      return (
        <Draggable
          {...{
            props: this.props.bodyConfig.$bodyDragSort || {},
          }}
          tag="tbody"
          class={classNames(`${selectorPrefix}-search-row-drag-sort-table`, tbodyVNode.data?.class)}
          draggable={`.${selectorPrefix}-row-drag-sort-draggable-item`}
          // handle={`.${selectorPrefix}-row-drag-sort-handle`}
          onEnd={this.onUseDragSortRowBodyEnd}
        >
          {tbodyVNode.children}
        </Draggable>
      );
    },
  },
};
