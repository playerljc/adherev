import { CSSProperties } from 'vue';

export interface IMenuProps {
  data: Array<IData>;
  className: string;
  style: CSSProperties;
}

export interface IMenuItemProps {
  data: IData;
}

export interface IConfig {
  x: number;
  y: number;
  width: number;
  maskClosable: boolean;
  handler: Function;
  className: string;
  style: CSSProperties;
}

export interface IData {
  name?: string | Object | Function; // 名字
  icon?: string | Object | Function; // 图标
  id?: string; // 唯一的id
  disabled?: boolean; // 不可用
  separation?: boolean; // 分割线
  attribute?: Object; // 自定义属性
  children?: Array<IData>; // 孩子
  className?: string;
  style?: CSSProperties;
  subMenuClassName?: string;
  subMenuStyle?: CSSProperties;
}

export interface IConfig {
  beforeMount(app: any): void;
}

export interface IComponent {
  isUse?(): boolean;
  use?(Vue: any): void;
  open(data: IData[], defaultConfig: IConfig): void;
  close(params: { vm: any; el: HTMLElement }): void;
  setConfig(config: IConfig): void;
}
