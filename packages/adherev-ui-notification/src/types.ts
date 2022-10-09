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
  children: object | Function | string;
}

/**
 * IShowStandardConfig
 * @interface IShowStandardConfig
 */
export interface IShowStandardConfig {
  closed: boolean;
  headerLabel: object | Function | string;
  headerIcon: string;
  title: object | Function | string;
  text: object | Function | string;
  icon: string;
  datetime: object | Function | string;
}
