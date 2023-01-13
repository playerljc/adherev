import { TableRowComponentProps } from '../../types';
/**
 * TableRow
 * @description 表格行组件
 */
declare const _default: {
    inject: string[];
    mixins: ({
        methods: {
            useEditableRow(h: import("vue").CreateElement, trVNode: import("vue").VNode): import("vue").VNode;
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
