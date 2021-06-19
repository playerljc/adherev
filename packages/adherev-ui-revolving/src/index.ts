import Revolving from './revolving';

import RevolvingItem from './item';
import { withInstall } from '../../_util/index';

withInstall(Revolving);
withInstall(RevolvingItem);

Revolving.isUse = () => true;
Revolving.Item = RevolvingItem;
Revolving.use = (Vue) => {
  Vue.use(Revolving);
  Vue.use(RevolvingItem);
};

export default Revolving;
