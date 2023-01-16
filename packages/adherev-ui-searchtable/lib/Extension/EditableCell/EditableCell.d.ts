import { CreateElement, VNode } from 'vue';
/**
 * EditableCell
 * @description 可编辑的单元格
 */
declare const _default: {
    inject: string[];
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
         * useEditableCell
         * @description 固定调用的处理函数
         * @param h
         * @param tdVNode
         */
        useEditableCell(h: CreateElement, tdVNode: VNode): VNode | null;
    };
};
export default _default;
