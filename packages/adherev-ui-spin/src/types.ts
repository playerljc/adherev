export interface IProps {
  spinning: boolean;
  text: string;
  zIndex: number;
}

export interface ISelf extends IProps {}

export interface IComponent {
  isUse(): boolean;
  use(Vue: any): void;
}
