import { ColumnTypeExt } from '../../types';
declare const _default: import("vue").DefineComponent<{
    record: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rowIndex: import("vue-types").VueTypeValidableDef<number>;
    column: import("vue-types").VueTypeValidableDef<ColumnTypeExt> & {
        default: () => ColumnTypeExt;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    record: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rowIndex: import("vue-types").VueTypeValidableDef<number>;
    column: import("vue-types").VueTypeValidableDef<ColumnTypeExt> & {
        default: () => ColumnTypeExt;
    };
}>>, {
    record: {
        [key: string]: any;
    };
    column: ColumnTypeExt;
}>;
export default _default;
