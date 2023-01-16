import { PropType } from 'vue';
import { ColumnTypeExt } from '../../types';
/**
 * TableCell
 * @description 表格单元格(td)组件
 */
declare const _default: {
    props: {
        rowIndex: {
            type: NumberConstructor;
        };
        record: {
            type: PropType<{
                [propName: string]: any;
            }>;
        };
        column: {
            type: PropType<ColumnTypeExt>;
        };
        columns: {
            type: PropType<ColumnTypeExt[]>;
        };
    };
    inject: string[];
    mixins: ({
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
            useEditableCell(h: import("vue").CreateElement, tdVNode: import("vue").VNode): import("vue").VNode | null;
        };
    } | {
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
            useEditableTableCell(h: import("vue").CreateElement, tdVNode: import("vue").VNode): import("vue").VNode | null;
        };
    } | {
        methods: {
            useRowDragSortCell(h: import("vue").CreateElement, tdVNode: import("vue").VNode): import("vue").VNode | null;
        };
    })[];
    render(h: any): any;
};
export default _default;
