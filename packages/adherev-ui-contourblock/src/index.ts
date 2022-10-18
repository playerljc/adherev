import Util from '@baifendian/adherev-util';

import ContourBlock from './contourblock';
import { Component } from './types';

const {
  _util: { withInstall, withVue },
} = Util;

const Component: Component = withInstall(ContourBlock);

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Vue.use(Component);
  withVue(Vue, 'ContourBlock', Component);
};

export default Component;
