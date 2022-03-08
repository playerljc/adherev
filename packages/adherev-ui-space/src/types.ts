export interface ISpaceProps {
  direction?: 'vertical' | 'horizontal';
  size?: number;
}

export interface ISpaceComputed {
  getStyle: string;
}

export interface ISpaceSelf extends ISpaceProps, ISpaceComputed {}

export interface ISpaceGroupProps extends ISpaceProps {
  className?: string;
}

export interface ISpaceGroupSelf extends ISpaceGroupProps {
  $slots: any;
}

export interface IComponent {
  isUse(): boolean;
  use(Vue: any): void;
  Group: any;
}
