import { VNode } from 'vue';

export interface IColumnConfig {
  dataIndex: string;
  isFixed: boolean;
  width: string | number;
  // render: Function | object;
  className: string;
  style: string;
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
  // slotName | VNode
  title: string | VNode;
  className: string;
  style: string;
  fixedWrapClassName: string;
  fixedWrapStyle: string;
  autoWrapClassName: string;
  autoWrapStyle: string;
  autoInnerClassName: string;
  autoInnerStyle: string;
}

/**
 * ICascadeComparedProps
 * @interface ICascadeComparedProps
 */
export interface ICascadeComparedProps {
  className?: string;
  indicatorClassName?: string;
  indicatorStyle?: string;
  indicatorFixedWrapClassName?: string;
  indicatorFixedWrapStyle?: string;
  indicatorAutoWrapClassName?: string;
  indicatorAutoWrapStyle?: string;
  masterClassName?: string;
  masterStyle?: string;
  masterInnerClassName?: string;
  masterInnerStyle?: string;
  masterStickFixedClassName?: string;
  masterStickFixedStyle?: string;
  masterStickInnerClassName?: string;
  masterStickInnerStyle?: string;
  indicator: IIndicatorTableConfig;
  master: IMasterItem[];
  defaultCellWidth: number | string;
}
