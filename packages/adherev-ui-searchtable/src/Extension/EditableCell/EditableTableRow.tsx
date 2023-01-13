import { CreateElement, VNode } from 'vue';

/**
 * EditableTableRow
 * @description 表格编辑
 * @param columns
 * @param value
 * @constructor
 */
export default {
  methods: {
    /**
     * useEditableTableRow
     * @param h
     * @param trVNode
     */
    useEditableTableRow(h: CreateElement, trVNode: VNode): VNode | null {
      return trVNode;
    },
  },
};
