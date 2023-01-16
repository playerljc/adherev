import { TableBodyComponentProps } from '../../types';
/**
 * TableRow
 * @description 表格tbody组件
 */
declare const _default: {
    inject: string[];
    mixins: {
        methods: {
            onUseDragSortRowBodyEnd(e: any): void;
            useDragSortRowBody(h: import("vue").CreateElement, tbodyVNode: import("vue").VNode): import("vue").VNode | null;
        };
    }[];
    computed: {
        props(): TableBodyComponentProps;
    };
    render(h: any): any;
};
export default _default;
