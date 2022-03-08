import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import BfdUtil from '@baifendian/adherev-util';

import SplitLayout from './splitlayout';
import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component: IComponent = withInstall(SplitLayout);
Component.isUse = () => true;
Component.use = (Vue: any) => {
  FlexLayout.use(Vue);
  Vue.use(Component);
  withVue(Vue, 'SplitLayout', Component);
};

export default Component;
