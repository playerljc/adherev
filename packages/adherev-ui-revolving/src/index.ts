import Revolving from './revolving';
import RevolvingItem from './item';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = BfdUtil;

withInstall(Revolving);
withInstall(RevolvingItem);

Revolving.Item = RevolvingItem;

Revolving.isUse = () => true;
Revolving.use = (Vue) => {
  Vue.use(Revolving);
  Vue.use(RevolvingItem);
  withVue(Vue, 'Revolving', Revolving);
};

export default Revolving;
