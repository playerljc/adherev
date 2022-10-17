import { VNode } from 'vue';

export interface IComponent {
  isUse: () => boolean;
  use: (Vue: any) => void;
  Show: any;
  Visibility: any;
  Wrap: any;
  conditionalRender: (params: {
    conditional: boolean;
    match: VNode;
    noMatch: VNode | null;
  }) => VNode | null;
  conditionalArr: (arr: any[]) => any[];
  conditionalNotEmptyArr: (arr: any[]) => any[];
}
