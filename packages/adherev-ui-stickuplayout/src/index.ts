import StickupLayout from './stickuplayout';
import StickupLayoutItem from './item';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = BfdUtil;

withInstall(StickupLayout);
withInstall(StickupLayoutItem);

// @ts-ignore
StickupLayout.isUse = () => true;
// @ts-ignore
StickupLayout.use = (Vue) => {
  Vue.use(StickupLayout);
  Vue.use(StickupLayoutItem);
  withVue(Vue, 'StickupLayout', StickupLayout);
};

// @ts-ignore
StickupLayout.Item = StickupLayoutItem;

export default StickupLayout;
