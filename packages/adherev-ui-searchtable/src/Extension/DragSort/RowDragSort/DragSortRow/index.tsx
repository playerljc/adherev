// import classNames from 'classnames';
// import { VNode, cloneVNode } from 'vue';
//
// import { selectorPrefix } from '../../../../SearchTable';
//
// export default {
//   methods: {
//     /**
//      * useRowDragSortRow
//      * @param h
//      * @param trVNode
//      */
//     useRowDragSortRow(trVNode: VNode): VNode | null {
//       let res = trVNode;
//
//       res = cloneVNode(trVNode, {
//         class: classNames(
//           `${trVNode?.props?.class}`,
//           this.props?.rowConfig?.$rowDragSort?.canDrag?.()
//             ? `${selectorPrefix}-row-drag-sort-draggable-item`
//             : `${selectorPrefix}-row-drag-sort-no-drag-draggable-item`,
//         ),
//         // @ts-ignore
//         children: [...(trVNode?.children || [])],
//       });
//
//       return res;
//     },
//   },
// };
import classNames from 'classnames';
import { VNode, cloneVNode, inject } from 'vue';

import { selectorPrefix } from '../../../../SearchTable';

export default (props?: any) => (trVNode: VNode) => {
  const getContext = inject<any>('getContext');
  const context = getContext?.()?.context;
  const rowKey = props?.record?.[context?.getRowKey?.()];//props['data-row-key'];

  return cloneVNode(trVNode, {
    class: classNames(
      `${trVNode?.props?.class || ''}`,
      context?.onRow?.(/*$parent.rowKey*/ rowKey)?.rowConfig?.$rowDragSort?.canDrag?.()
        ? `${selectorPrefix}-row-drag-sort-draggable-item`
        : `${selectorPrefix}-row-drag-sort-no-drag-draggable-item`,
    ),
    // @ts-ignore
    children: [...(trVNode?.children || [])],
  });
};
