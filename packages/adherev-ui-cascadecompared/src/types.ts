export interface IColumnConfig {
  dataIndex: string;
  isFixed: boolean;
  width: string | number;
  render: Function | Object;
  className: string;
  style: string;
}

export interface ITableConfig {
  columns: Array<IColumnConfig>;
  dataSource: Array<object>;
}

export function TableConfig(config: ITableConfig) {
  this.columns = config.columns;
  this.dataSource = config.dataSource;
}

export interface IIndicatorTableConfig {
  columns: Array<IColumnConfig>;
  dataSource: object;
}

export interface IMasterItem extends ITableConfig {
  title: Function | Object;
  className: string;
  style: string;
  fixedWrapClassName: string;
  fixedWrapStyle: string;
  autoWrapClassName: string;
  autoWrapStyle: string;
  autoInnerClassName: string;
  autoInnerStyle: string;
}

export function MasterItem(props: IMasterItem) {
  this.title = props.title;
  this.className = props.className;
  this.fixedWrapClassName = props.fixedWrapClassName;
  this.fixedWrapStyle = props.fixedWrapStyle;
  this.autoWrapClassName = props.autoWrapClassName;
  this.autoWrapStyle = props.autoWrapStyle;
  this.autoInnerClassName = props.autoInnerClassName;
  this.autoInnerStyle = props.autoInnerStyle;
  this.columns = props.columns;
  this.dataSource = props.dataSource;
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
  master: Array<IMasterItem>;
  defaultCellWidth: number | string;
}
