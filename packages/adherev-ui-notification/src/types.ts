import { Notification } from './notification';

/**
 * IConfig
 * @interface IConfig
 */
export interface IConfig {
  // 风格
  style: 'ios' | 'material';
  // 类型
  type: 'top' | 'bottom';
  onCreate?: () => void;
  onShow?: () => void;
  onCloseBefore?: () => void;
  onCloseAfter?: () => void;
}

/**
 * IShowConfig
 * @interface IShowConfig
 */
export interface IShowConfig {
  closed: boolean;
  children: Object | Function | string;
}

/**
 * IShowStandardConfig
 * @interface IShowStandardConfig
 */
export interface IShowStandardConfig {
  closed: boolean;
  headerLabel: Object | Function | string;
  headerIcon: string;
  title: Object | Function | string;
  text: Object | Function | string;
  icon: string;
  datetime: Object | Function | string;
}

export interface INotificationFactory {
  build(container: HTMLElement, config: IConfig): Notification;
  isUse?(): boolean;
  use?(Vue: any): void;
}
