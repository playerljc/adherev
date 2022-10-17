import BfdUtil from '@baifendian/adherev-util';

import StickupLayoutItem from './item';
import StickupLayout from './stickuplayout';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

withInstall(StickupLayout);
withInstall(StickupLayoutItem);

StickupLayout.isUse = () => true;

StickupLayout.use = (Vue: any) => {
  Vue.use(StickupLayout);
  Vue.use(StickupLayoutItem);
  withVue(Vue, 'StickupLayout', StickupLayout);
};

StickupLayout.Item = StickupLayoutItem;

export default StickupLayout;
