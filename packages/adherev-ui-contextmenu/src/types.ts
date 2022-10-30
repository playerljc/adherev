export interface IMenuProps {
  data: IData[];
  className: string;
  styleName: string;
}

export interface IMenuItemProps {
  data: IData;
}

export type ISubMenuProps = IMenuProps;

export interface ContextMenuType {
  isUse?: () => boolean;
  use?: (Vue: any) => void;
  open: (data: IData, config: IConfig) => void;
  close: (params: { vm: any; el: HTMLElement }) => void;
  setConfig: (gc: any) => void;
}

export interface IContextMenuComponentProps {
  data: IData[];
  config: IData;
  el: HTMLElement;
}

export interface IConfig {
  x: number;
  y: number;
  width: number;
  maskClosable: boolean;
  handler: Function;
  className: string;
}

export interface IData {
  name: string | object | Function; // 名字
  icon: string | object | Function; // 图标
  id: string; // 唯一的id
  disabled: boolean; // 不可用
  separation: boolean; // 分割线
  attribute: any; // 自定义属性
  children: IData[]; // 孩子
  className: string;
  styleName: string;
  subMenuClassName: string;
  subMenuStyleName: string;
}
