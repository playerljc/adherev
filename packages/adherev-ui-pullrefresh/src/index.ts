import BfdUtil from '@baifendian/adherev-util';

import PullRefresh from './pullrefresh';

import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component: IComponent = withInstall(PullRefresh);

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Vue.use(Component);
  withVue(Vue, 'PullRefresh', Component);
};

export default Component;
