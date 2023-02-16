import { ColumnTypeExt } from '@/types';
/**
 * TableCell
 * @description 表格单元格(td)组件
 */
declare const _default: import("vue").DefineComponent<{
    rowIndex: import("vue-types").VueTypeValidableDef<number>;
    record: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    column: import("vue-types").VueTypeValidableDef<ColumnTypeExt> & {
        default: () => ColumnTypeExt;
    };
    columns: import("vue-types").VueTypeValidableDef<ColumnTypeExt[]> & {
        default: () => ColumnTypeExt[];
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rowIndex: import("vue-types").VueTypeValidableDef<number>;
    record: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    column: import("vue-types").VueTypeValidableDef<ColumnTypeExt> & {
        default: () => ColumnTypeExt;
    };
    columns: import("vue-types").VueTypeValidableDef<ColumnTypeExt[]> & {
        default: () => ColumnTypeExt[];
    };
}>>, {
    record: {
        [key: string]: any;
    };
    columns: ColumnTypeExt[];
    column: ColumnTypeExt;
}>;
export default _default;
