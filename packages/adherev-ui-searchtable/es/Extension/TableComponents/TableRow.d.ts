import { TableRowComponentProps } from '../../types';
/**
 * TableRow
 * @description 表格行组件
 */
declare const _default: {
    inject: string[];
    mixins: ({
        provide(): {
            getEditableRowFormIns: any;
        };
        data(): {
            editableRow: {
                form: any;
            };
        };
        methods: {
            useEditableRow(h: import("vue").CreateElement, trVNode: import("vue").VNode): import("vue").VNode;
            getEditableRowFormIns(): any;
        };
    } | {
        methods: {
            useEditableTableRow(h: import("vue").CreateElement, trVNode: import("vue").VNode): import("vue").VNode | null;
        };
    } | {
        methods: {
            useRowDragSortRow(h: import("vue").CreateElement, trVNode: import("vue").VNode): import("vue").VNode | null;
        };
    })[];
    computed: {
        props(): TableRowComponentProps;
    };
    render(h: any): any;
};
export default _default;
