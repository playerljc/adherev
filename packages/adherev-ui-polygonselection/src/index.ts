import Polygonselection from '@baifendian/adhere-ui-polygonselection';
import BfdUtil from '@baifendian/adherev-util';

import { IComponent } from './types';

const {
  _util: { withVue },
} = BfdUtil;

(Polygonselection as IComponent).isUse = () => true;
(Polygonselection as IComponent).use = (Vue: any) => {
  withVue(Vue, 'Polygonselection', Polygonselection);
};

export default Polygonselection;
