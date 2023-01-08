import { CreateElement } from 'vue';
import type { VNode } from 'vue';
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
    (h: CreateElement, context: {
        $slots: any;
    }, params: {
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
    (h: CreateElement, context: {
        $slots: any;
    }, data: DataItem, rowCountRef: any): {
        element: VNode[];
        detail: GroupRenderDetail;
    };
}
/**
 * RenderGridSearchForm
 */
export interface RenderGridSearchForm {
    (h: CreateElement, context: {
        $slots: any;
    }, params: {
        data: DataItem;
        rowCountRef?: RowCountRef;
        layout?: 'horizontal' | 'vertical';
        density?: string;
        parity?: boolean;
    }): VNode;
}
/**
 * DataItem
 * @interface DataItem
 */
export interface DataItem {
    className?: string;
    style?: string;
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
 * TableGridLayoutProps
 * @interface TableGridLayoutProps
 */
export interface TableGridLayoutProps {
    bordered?: boolean;
    innerClassName?: string;
    innerStyle?: string;
    data?: DataItem[];
    className?: string;
    style?: string;
    layout: 'horizontal' | 'vertical';
    density?: string;
    parity?: boolean;
}
/**
 * GroupDetail
 * @description 组的渲染细节
 */
export type GroupRenderDetail = {
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
