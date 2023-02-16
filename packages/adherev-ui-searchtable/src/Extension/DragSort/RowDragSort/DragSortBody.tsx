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
      const bodyConfig = this.props.bodyConfig;

      return (
        <Draggable
          tag="tbody"
          class={classNames(`${selectorPrefix}-search-row-drag-sort-table`, tbodyVNode.data?.class)}
          draggable={
            bodyConfig?.$bodyDragSort?.canDrag?.()
              ? `.${selectorPrefix}-row-drag-sort-draggable-item`
              : false
          }
          // handle={`.${selectorPrefix}-row-drag-sort-handle`}
          {...{
            props: bodyConfig?.$bodyDragSort?.draggableProps || {},
          }}
          onEnd={(e) => {
            if (bodyConfig?.$bodyDragSort?.draggableProps?.onEnd) {
              bodyConfig?.$bodyDragSort?.draggableProps?.onEnd?.(e)?.then?.(() => {
                this.onUseDragSortRowBodyEnd(e);
              });
            } else {
              this.onUseDragSortRowBodyEnd(e);
            }
          }}
        >
          {tbodyVNode.children}
        </Draggable>
      );
    },
  },
};
