import BfdUtil from '@baifendian/adherev-util';

import RevolvingItem from './item';
import Revolving from './revolving';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

withInstall(Revolving);
withInstall(RevolvingItem);

// @ts-ignore
Revolving.Item = RevolvingItem;

// @ts-ignore
Revolving.isUse = () => true;

// @ts-ignore
Revolving.use = (Vue) => {
  Vue.use(Revolving);
  Vue.use(RevolvingItem);
  withVue(Vue, 'Revolving', Revolving);
};

export default Revolving;
