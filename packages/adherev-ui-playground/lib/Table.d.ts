import { CSSProperties } from 'vue';
interface IColumnItem {
    title?: string;
    className?: string;
    style?: CSSProperties;
    align?: string;
    width?: string | null;
    key: string;
    dataIndex: string;
    valign?: string;
    slot?: string;
}
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
