export interface ISplitProps {
  direction: 'vertical' | 'horizontal';
  size: number;
  className?: string;
}

export interface ISplitMethods {
  getStyle: object;
}

export interface ISplitSelf extends ISplitGroupProps, ISplitMethods {}

export interface ISplitGroupProps extends ISplitProps {}

export interface ISplitGroupSelf extends ISplitGroupProps {
  $slots: any;
}

export interface IComponent {
  isUse(): boolean;
  use(Vue: any): void;
  Group: any;
}
