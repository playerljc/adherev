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
  (h: CreateElement, params: { data: DataItem; rowCountRef?: RowCountRef }): {
    element: VNode[];
    detail: GroupRenderDetail;
  };
}

/**
 * RenderVertical
 */
export interface RenderVertical {
  (h: CreateElement, data: DataItem, rowCountRef): {
    element: VNode[];
    detail: GroupRenderDetail;
  };
}

/**
 * RenderGridSearchForm
 */
export interface RenderGridSearchForm {
  (
    h: CreateElement,
    params: {
      data: DataItem;
      rowCountRef?: RowCountRef;
      layout?: 'horizontal' | 'vertical';
      density?: string;
      parity?: boolean;
    },
  ): VNode;
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
  //
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
  // 一行开始数据的索引
  startIndex: number;
  // 一行结束数据的索引
  endIndex: number;
}[];

/**
 * RenderDetail
 * @description 渲染细节
 */
export interface RenderDetail {
  // 总行数
  rowCount: number;
  // 渲染时候的布局
  layout: 'horizontal' | 'vertical';
  // 细节
  detail: {
    // 组名称
    name: string;
    // 总行数
    rowCount: number;
    // 细节
    detail: GroupRenderDetail;
  }[];
}

export interface getRenderDetailFunction {
  (h: CreateElement, data: DataItem[], props: Omit<TableGridLayoutProps, 'data'>): RenderDetail;
}

export interface renderGridSearchFormGroupFunction {
  (h: CreateElement, data?: DataItem[], props?: Omit<TableGridLayoutProps, 'data'>): VNode;
}
