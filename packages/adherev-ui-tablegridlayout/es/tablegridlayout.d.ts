import type { DataItem, RenderDetail, TableGridLayoutProps } from './types';
declare const TableGridLayout: import("vue").DefineComponent<{
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    style: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    innerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    innerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    bordered: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    data: import("vue-types").VueTypeValidableDef<DataItem[]> & {
        default: () => DataItem[];
    };
    layout: import("vue-types").VueTypeValidableDef<"horizontal" | "vertical"> & {
        default: "horizontal" | "vertical";
    };
    /**
     * renderHorizontal
     * @description 渲染横向布局
     * @return {
     *   element: JSX.Element[];
         detail: GroupRenderDetail;
     * }
     */
    density: import("vue-types").VueTypeValidableDef<"default" | "middle" | "small"> & {
        default: "default" | "middle" | "small";
    };
    parity: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    style: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    innerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    innerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    bordered: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    data: import("vue-types").VueTypeValidableDef<DataItem[]> & {
        default: () => DataItem[];
    };
    layout: import("vue-types").VueTypeValidableDef<"horizontal" | "vertical"> & {
        default: "horizontal" | "vertical";
    };
    /**
     * renderHorizontal
     * @description 渲染横向布局
     * @return {
     *   element: JSX.Element[];
         detail: GroupRenderDetail;
     * }
     */
    density: import("vue-types").VueTypeValidableDef<"default" | "middle" | "small"> & {
        default: "default" | "middle" | "small";
    };
    parity: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}>>, {
    className: string;
    style: import("vue").CSSProperties;
    innerClassName: string;
    innerStyle: import("vue").CSSProperties;
    bordered: boolean;
    data: DataItem[];
    layout: "horizontal" | "vertical";
    density: "default" | "middle" | "small";
    parity: boolean;
}>;
/**
 * Label
 * @description 左侧Label
 * @param props
 * @param slots
 * @constructor
 */
declare const Label: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
/**
 * Value
 * @description 右侧Value
 * @param props
 * @param slots
 * @constructor
 */
declare const Value: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
/**
 * renderGridSearchFormGroup
 * @description - 渲染TableGridLayout
 * @param slots
 * @param data
 * @param props
 * @return {VNode}
 */
declare const renderGridSearchFormGroup: (slots: any, data?: DataItem[], props?: Omit<TableGridLayoutProps, 'data'>) => JSX.Element;
/**
 * getRenderDetail
 * @description 获取渲染细节
 * @param slots
 * @param data - 组数据
 * @param props - 配置
 * @return RenderDetail
 */
declare const getRenderDetail: (slots: any, data: DataItem[], props: Omit<TableGridLayoutProps, 'data'>) => RenderDetail;
export { TableGridLayout, renderGridSearchFormGroup, getRenderDetail, Label, Value };
