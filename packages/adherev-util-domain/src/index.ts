import Domain from '@baifendian/adhere-util-domain';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

Domain.isUse = () => true;
Domain.use = (Vue) => {
  withVue(Vue, 'Domain', Domain);
};

export default Domain;
