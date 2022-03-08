import Surnames from './surnames';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(Surnames);
Component.isUse = () => true;
Component.use = (Vue: any) => {
  Vue.use(Component);
  withVue(Vue, 'Surnames', Component);
};

export default Component;
