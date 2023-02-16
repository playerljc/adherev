// export default {
//   methods: {
//     onUseDragSortRowBodyEnd(e) {
//       // newDraggableIndex
//       // newIndex
//       // oldDraggableIndex
//       // oldIndex
//       this.getContext?.()
//         ?.context.moveRow(e.oldDraggableIndex, e.newDraggableIndex)
//         .then(() => {});
//     },
//     /**
//      * useDragSortRowBody
//      * @param tbodyVNode
//      */
//     useDragSortRowBody(tbodyVNode: VNode): VNode | null {
//       const bodyConfig = this.props.bodyConfig;
//
//       return (
//         <Draggable
//           {...(bodyConfig?.$bodyDragSort?.draggableProps || {})}
//           tag="tbody"
//           class={classNames(
//             `${selectorPrefix}-search-row-drag-sort-table`,
//             tbodyVNode?.props?.class,
//           )}
//           draggable={
//             bodyConfig?.$bodyDragSort?.canDrag?.()
//               ? `.${selectorPrefix}-row-drag-sort-draggable-item`
//               : false
//           }
//           // handle={`.${selectorPrefix}-row-drag-sort-handle`}
//           onEnd={this.onUseDragSortRowBodyEnd}
//         >
//           {tbodyVNode.children}
//         </Draggable>
//       );
//     },
//   },
// };
import classNames from 'classnames';
// import Draggable from 'vuedraggable';
import Sortable from 'sortablejs';
import { VNode, cloneVNode, inject, onMounted, ref } from 'vue';

import { selectorPrefix } from '../../../SearchTable';

export default (props?: any) => {
  const getContext = inject<any>('getContext');
  const context = getContext?.()?.context;
  const bodyConfig = context.onBody?.()?.bodyConfig;

  const tbodyRef = ref<HTMLElement>();

  const onUseDragSortRowBodyEnd = (e) => {
    // newDraggableIndex
    // newIndex
    // oldDraggableIndex
    // oldIndex
    context?.moveRow?.(e.oldDraggableIndex, e.newDraggableIndex)?.then?.(() => {});
  };

  onMounted(() => {
    if(!tbodyRef.value) return;

    Sortable.create(tbodyRef.value, {
      draggable: bodyConfig?.$bodyDragSort?.canDrag?.()
        ? `.${selectorPrefix}-row-drag-sort-draggable-item`
        : false,
        ...(bodyConfig?.$bodyDragSort?.draggableProps || {}),
      onEnd: (e) => {
        if (bodyConfig?.$bodyDragSort?.draggableProps?.onEnd) {
          bodyConfig?.$bodyDragSort?.draggableProps?.onEnd?.(e)?.then?.(() => {
            onUseDragSortRowBodyEnd(e);
          });
        } else {
          onUseDragSortRowBodyEnd(e);
        }
      },
    });
  });

  return (tbodyVNode: VNode) => {
    const targetTbodyVNode = cloneVNode(tbodyVNode, {
      ref: tbodyRef,
      class: classNames(
        tbodyVNode?.props?.class,
        `${selectorPrefix}-search-row-drag-sort-table`,
        tbodyVNode?.props?.class,
      ),
    });

    return (
      /*<Draggable
        {...(bodyConfig?.$bodyDragSort?.draggableProps || {})}
        tag="tbody"
        class={classNames(`${selectorPrefix}-search-row-drag-sort-table`, tbodyVNode?.props?.class)}
        draggable={
          bodyConfig?.$bodyDragSort?.canDrag?.()
            ? `.${selectorPrefix}-row-drag-sort-draggable-item`
            : false
        }
        // handle={`.${selectorPrefix}-row-drag-sort-handle`}
        onEnd={onUseDragSortRowBodyEnd}
        list={tbodyVNode?.children?.[0]?.[1]?.children || []}
        v-slots={{
          item: (params) => (params || {})?.element,
        }}
      />*/
      targetTbodyVNode
    );
  };
};
