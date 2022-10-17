import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import ScrollLoad, { EMPTY, ERROR, NORMAL } from './scrollload';
import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component: IComponent = withInstall(ScrollLoad);

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Intl.isUse() && Intl.use(Vue);
  Vue.use(Component);
  withVue(Vue, 'ScrollLoad', Component);
};

ScrollLoad.ERROR = ERROR;
ScrollLoad.EMPTY = EMPTY;
ScrollLoad.NORMAL = NORMAL;

export default Component;
