import { PropType } from 'vue';
import { IColumnSetting } from '../../types';
declare const _default: import("vue").DefineComponent<{
    columns: {
        type: PropType<IColumnSetting[]>;
        default: () => never[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "showColumns" | "sortEnd" | "displayColumn")[], "reset" | "showColumns" | "sortEnd" | "displayColumn", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<IColumnSetting[]>;
        default: () => never[];
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
