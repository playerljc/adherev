import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import PullRefresh from './pullrefresh';
import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component: IComponent = withInstall(PullRefresh);

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Intl.isUse() && Intl.use(Vue);
  Vue.use(Component);
  withVue(Vue, 'PullRefresh', Component);
};

export default Component;
