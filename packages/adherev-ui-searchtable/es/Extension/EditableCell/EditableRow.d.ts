import { CreateElement, VNode } from 'vue';
declare const EditableRow: {
    provide(): {
        getEditableRowFormIns: any;
    };
    data(): {
        editableRow: {
            form: any;
        };
    };
    methods: {
        /**
         * useEditableRow
         * @description 固定的调用，操作
         * @param h createElement
         * @param trVNode trVNode
         */
        useEditableRow(h: CreateElement, trVNode: VNode): VNode;
        /**
         * getEditableRowFormIns
         * @description 获取form对象实例
         */
        getEditableRowFormIns(): any;
    };
};
export default EditableRow;
