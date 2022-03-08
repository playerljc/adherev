export interface IComponent {
  show(parent: HTMLElement, text: string, zIndex: number): HTMLElement;
  hide(indicatorDom: HTMLElement);
  isUse?(): boolean;
  use?(Vue: any): void;
}
