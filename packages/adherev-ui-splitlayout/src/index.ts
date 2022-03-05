// @ts-ignore
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import SplitLayout from './splitlayout';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(SplitLayout);
Component.isUse = () => true;
Component.use = (Vue) => {
  FlexLayout.use(Vue);
  Vue.use(Component);
  withVue(Vue, 'SplitLayout', Component);
};

export default Component;
