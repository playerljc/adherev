import { CSSProperties, ExtractPropTypes, VNode } from 'vue';

import { cascadeComparedProps } from './cascadecompared';

export interface IColumnConfig {
  dataIndex: string;
  isFixed: boolean;
  width: string | number;
  // render?: (config: IColumnConfig, dataSource: object) => any | Object;
  className: string;
  style: CSSProperties;
}

export interface ITableConfig {
  columns: IColumnConfig[];
  dataSource: object[];
}

export interface IIndicatorTableConfig {
  columns: IColumnConfig[];
  dataSource: object;
}

export interface IMasterItem extends ITableConfig {
  title: string | VNode;
  className: string;
  style: CSSProperties;
  fixedWrapClassName: string;
  fixedWrapStyle: CSSProperties;
  autoWrapClassName: string;
  autoWrapStyle: CSSProperties;
  autoInnerClassName: string;
  autoInnerStyle: CSSProperties;
}

export type CascadeComparedProps = Partial<ExtractPropTypes<typeof cascadeComparedProps>>;
