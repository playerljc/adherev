import { CreateElement, VNode } from 'vue';
/**
 * EditableRow
 * @description 行编辑
 * @param columns
 * @param value
 * @constructor
 */
declare const EditableRow: {
    methods: {
        /**
         * useEditableRow
         * @description 固定的调用，操作
         * @param h createElement
         * @param trVNode trVNode
         */
        useEditableRow(h: CreateElement, trVNode: VNode): VNode;
    };
};
export default EditableRow;
