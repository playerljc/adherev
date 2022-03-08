import BfdUtil from '@baifendian/adherev-util';

import Revolving from './revolving';
import RevolvingItem from './item';

import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

withInstall(Revolving);
withInstall(RevolvingItem);

(Revolving as unknown as IComponent).Item = RevolvingItem;

(Revolving as unknown as IComponent).isUse = () => true;

(Revolving as unknown as IComponent).use = (Vue: any) => {
  Vue.use(Revolving);
  Vue.use(RevolvingItem);
  withVue(Vue, 'Revolving', Revolving);
};

export default Revolving;
