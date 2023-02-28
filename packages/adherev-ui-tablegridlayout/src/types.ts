import type { CSSProperties, ExtractPropTypes, VNode } from 'vue';
import { array, bool, object, string } from 'vue-types';

export const tableGridLayoutProps = {
  className: string().def(''),
  style: object<CSSProperties>().def({}),
  innerClassName: string().def(''),
  innerStyle: object<CSSProperties>().def({}),
  bordered: bool().def(false),
  data: array<DataItem>().def([]),
  // @ts-ignore
  layout: string<'horizontal' | 'vertical'>().def('horizontal'),
  // @ts-ignore
  density: string<'default' | 'middle' | 'small'>().def('default'),
  parity: bool().def(false),
};

// /**
//  * TableGridLayoutProps
//  * @interface TableGridLayoutProps
//  */
// export interface TableGridLayoutProps {
//   className?: string;
//   style?: CSSProperties;
//   bordered?: boolean;
//   innerClassName?: string;
//   innerStyle?: CSSProperties;
//   data?: DataItem[];
//   layout: 'horizontal' | 'vertical';
//   density?: string;
//   parity?: boolean;
// }

export type TableGridLayoutProps = ExtractPropTypes<typeof tableGridLayoutProps>;

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
  (slots: any, params: { data: DataItem; rowCountRef?: RowCountRef }): {
    element: VNode[];
    detail: GroupRenderDetail;
  };
}

/**
 * RenderVertical
 */
export interface RenderVertical {
  (slots: any, data: DataItem, rowCountRef): {
    element: VNode[];
    detail: GroupRenderDetail;
  };
}

/**
 * RenderGridSearchForm
 */
export interface RenderGridSearchForm {
  (
    slots: any,
    params: {
      data: DataItem;
      rowCountRef?: RowCountRef;
      layout?: 'horizontal' | 'vertical';
      density?: 'default' | 'middle' | 'small';
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
