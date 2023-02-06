import { CSSProperties } from 'vue';
import { IColumnItem } from './types';
export declare const tableProps: {
    tableClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tableStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    columns: import("vue-types").VueTypeValidableDef<IColumnItem[]> & {
        default: () => IColumnItem[];
    };
    dataSource: import("vue-types").VueTypeValidableDef<object[]> & {
        default: () => object[];
    };
    rowKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    tableClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tableStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    columns: import("vue-types").VueTypeValidableDef<IColumnItem[]> & {
        default: () => IColumnItem[];
    };
    dataSource: import("vue-types").VueTypeValidableDef<object[]> & {
        default: () => object[];
    };
    rowKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tableClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tableStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    columns: import("vue-types").VueTypeValidableDef<IColumnItem[]> & {
        default: () => IColumnItem[];
    };
    dataSource: import("vue-types").VueTypeValidableDef<object[]> & {
        default: () => object[];
    };
    rowKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>>, {
    tableClassName: string;
    tableStyle: CSSProperties;
    columns: IColumnItem[];
    dataSource: object[];
    rowKey: string;
}>;
export default _default;
