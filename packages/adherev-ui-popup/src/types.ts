import { Popup } from './popup';

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
  create(config: IConfig): Popup;
  show(popup: Popup): void;
  close(popup: Popup): void;
  closeAll(): void;
  destroy(popup: Popup): void;
  getEl(): HTMLElement;
  setEl(tel: HTMLElement): void;
}

export interface IComponent extends IPopupFactory {
  isUse?(): boolean;
  use?(Vue: any): void;
}
