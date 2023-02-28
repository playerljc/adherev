import { App } from 'vue';

export interface IComponent {
  install?: (app: App) => App<any>;
  show(parent: HTMLElement, text: string, zIndex: number): HTMLElement;
  hide(indicatorDom: HTMLElement);
  isUse?(): boolean;
  use?(Vue: any): void;
}
