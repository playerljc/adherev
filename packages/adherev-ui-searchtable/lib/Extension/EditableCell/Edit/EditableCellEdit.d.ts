import { ColumnEditableConfig, ColumnTypeExt } from '../../../types';
/**
 * EditableCellEditor
 * @description 可编辑单元格的编辑状态
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
    columns: import("vue-types").VueTypeValidableDef<ColumnTypeExt[][]> & {
        default: () => ColumnTypeExt[][];
    };
    editableConfig: import("vue-types").VueTypeValidableDef<ColumnEditableConfig>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "triggerChange"[], "triggerChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    columns: import("vue-types").VueTypeValidableDef<ColumnTypeExt[][]> & {
        default: () => ColumnTypeExt[][];
    };
    editableConfig: import("vue-types").VueTypeValidableDef<ColumnEditableConfig>;
}>> & {
    onTriggerChange?: ((...args: any[]) => any) | undefined;
}, {
    record: {
        [key: string]: any;
    };
    columns: ColumnTypeExt[][];
    column: ColumnTypeExt;
}>;
export default _default;
