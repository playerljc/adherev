import type { CSSProperties, ExtractPropTypes, VNode } from 'vue';
export declare const tableGridLayoutProps: {
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    innerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    innerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    bordered: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    data: import("vue-types").VueTypeValidableDef<DataItem[]> & {
        default: () => DataItem[];
    };
    layout: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    density: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    parity: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
};
export declare type TableGridLayoutProps = ExtractPropTypes<typeof tableGridLayoutProps>;
export interface TableGridLayoutFunction {
    (props: TableGridLayoutProps): VNode;
    name: string;
    isUse?: () => boolean;
    use?: (Vue?: any) => void;
}
/**
 * RowCountRef
 */
export interface RowCountRef {
    current: number;
}
/**
 * RenderHorizontal
 */
export interface RenderHorizontal {
    (slots: any, params: {
        data: DataItem;
        rowCountRef?: RowCountRef;
    }): {
        element: VNode[];
        detail: GroupRenderDetail;
    };
}
/**
 * RenderVertical
 */
export interface RenderVertical {
    (slots: any, data: DataItem, rowCountRef: any): {
        element: VNode[];
        detail: GroupRenderDetail;
    };
}
/**
 * RenderGridSearchForm
 */
export interface RenderGridSearchForm {
    (slots: any, params: {
        data: DataItem;
        rowCountRef?: RowCountRef;
        layout?: 'horizontal' | 'vertical';
        density?: 'default' | 'middle' | 'small';
        parity?: boolean;
    }): VNode;
}
/**
 * DataItem
 * @interface DataItem
 */
export interface DataItem {
    className?: string;
    style?: CSSProperties;
    name?: string;
    width?: string | number;
    defaultLabelWidth?: number;
    padding?: string;
    colgroup?: (number | 'auto')[];
    columnCount?: number;
    data?: {
        key: string;
        require?: boolean;
        label: any;
        value: any;
    }[];
}
/**
 * GroupDetail
 * @description 组的渲染细节
 */
export declare type GroupRenderDetail = {
    startIndex: number;
    endIndex: number;
}[];
/**
 * RenderDetail
 * @description 渲染细节
 */
export interface RenderDetail {
    rowCount: number;
    layout: 'horizontal' | 'vertical';
    detail: {
        name: string;
        rowCount: number;
        detail: GroupRenderDetail;
    }[];
}
