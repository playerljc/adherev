export interface IComponent {
  isUse(): boolean;
  use(Vue: any): void;
  EMPTY: string;
  ERROR: string;
  NORMAL: string;
}
