import { IColumnSetting } from '../../types';
declare const _default: import("vue").DefineComponent<{
    columns: import("vue-types").VueTypeValidableDef<IColumnSetting[]> & {
        default: () => IColumnSetting[];
    };
}, unknown, unknown, {
    showColumns(): any;
}, {
    onShowColumns(e: any): void;
    onReset(): void;
    onEnd(): void;
    onChange(column: any, e: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "showColumns" | "sortEnd" | "displayColumn")[], "reset" | "showColumns" | "sortEnd" | "displayColumn", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columns: import("vue-types").VueTypeValidableDef<IColumnSetting[]> & {
        default: () => IColumnSetting[];
    };
}>> & {
    onReset?: ((...args: any[]) => any) | undefined;
    onShowColumns?: ((...args: any[]) => any) | undefined;
    onSortEnd?: ((...args: any[]) => any) | undefined;
    onDisplayColumn?: ((...args: any[]) => any) | undefined;
}, {
    columns: IColumnSetting[];
}>;
export default _default;
