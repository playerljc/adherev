import BfdUtil from '@baifendian/adherev-util';

import Revolving from './revolving';
import RevolvingItem from './item';

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
