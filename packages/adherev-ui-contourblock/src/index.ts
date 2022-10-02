import Util from '@baifendian/adherev-util';

import ContourBlock from './contourblock';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(ContourBlock);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'ContourBlock', Component);
};

export default Component;
