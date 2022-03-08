export interface IComponent {
  isUse(): boolean;
  use(Vue: any): void;
  open: any;
}
