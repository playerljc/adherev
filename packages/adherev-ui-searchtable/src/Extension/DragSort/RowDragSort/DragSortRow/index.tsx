import classNames from 'classnames';
import { CreateElement, VNode } from 'vue';

import Util from '@baifendian/adherev-util';

import { selectorPrefix } from '../../../../SearchTable';

const {
  _util: { cloneElement },
} = Util;

export default {
  methods: {
    /**
     * useRowDragSortRow
     * @param h
     * @param trVNode
     */
    useRowDragSortRow(h: CreateElement, trVNode: VNode): VNode | null {
      let res = trVNode;

      res = cloneElement(trVNode, {
        class: classNames(
          `${trVNode.data?.class}`,
          this.props?.rowConfig?.$rowDragSort?.canDrag?.()
            ? `${selectorPrefix}-row-drag-sort-draggable-item`
            : `${selectorPrefix}-row-drag-sort-no-drag-draggable-item`,
        ),
        children: [...(trVNode?.children || [])],
      });

      return res;
    },
  },
};