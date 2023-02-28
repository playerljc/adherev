import { TableProps } from 'ant-design-vue/es/table';
declare const _default: import("vue").DefineComponent<{
    tableProps: import("vue-types").VueTypeValidableDef<TableProps<any>> & {
        default: () => TableProps<any>;
    };
    rowKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tableProps: import("vue-types").VueTypeValidableDef<TableProps<any>> & {
        default: () => TableProps<any>;
    };
    rowKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    rowKey: string;
    tableProps: TableProps<any>;
}>;
export default _default;
