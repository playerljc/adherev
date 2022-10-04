import BfdUtil from '@baifendian/adherev-util';

import RevolvingItem from './item';
import Revolving from './revolving';

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
