import { CreateElement, VNode } from 'vue';
/**
 * EditableCell
 * @description 表格整体编辑
 */
declare const _default: {
    data(): {
        $editableCell: {
            defaultConfig: {
                editable: boolean;
                defaultStatus: string;
                type: string;
                props: {};
                formItemProps: {};
                useTrigger: boolean;
                require: boolean;
                dataIndex: any;
                useKeepEdit: boolean;
            };
            watchHandler: never[];
        };
        editableCell: {
            status: any;
        };
    };
    computed: {
        editableCellEditableConfig(): any;
    };
    created(): void;
    beforeDestroy(): void;
    methods: {
        /**
         * useEditableTableCell
         * @description 固定调用的处理函数
         * @param h
         * @param tdVNode
         */
        useEditableTableCell(h: CreateElement, tdVNode: VNode): VNode | null;
    };
};
export default _default;
