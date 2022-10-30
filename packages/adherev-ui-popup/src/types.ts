import type { Popup } from './popup';

/**
 * IConfig
 * @interface IConfig
 */
export interface IConfig {
  onCreate: Function;
  onBeforeShow: Function;
  onAfterShow: Function;
  onBeforeClose: () => Promise<null>;
  onAfterClose: Function;
  onDestroy: Function;
  children: null | Object;
  zIndex: number;
}

export interface IPopupFactory {
  setConfig: (gc) => void;
  create: (config: IConfig) => Popup;
  show: (popup: Popup) => boolean;
  showClosePrePopup: (popup: Popup) => boolean;
  close: (popup: Popup) => boolean;
  closeAll: () => void;
  destroy: (popup: Popup) => boolean;
  getEl: () => HTMLElement;
  setEl: (el: HTMLElement) => void;
  isUse?: () => boolean;
  use?: (Vue) => void;
}
