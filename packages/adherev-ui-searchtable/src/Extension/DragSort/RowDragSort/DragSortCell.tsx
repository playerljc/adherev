import { CreateElement, VNode } from 'vue';

export default {
  methods: {
    /**
     * useRowDragSortCell
     * @param h
     * @param tdVNode
     */
    useRowDragSortCell(h: CreateElement, tdVNode: VNode): VNode | null {
      return tdVNode;
    },
  },
};
