import Domain from '@baifendian/adhere-util-domain';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
Domain.isUse = () => true;
// @ts-ignore
Domain.use = (Vue: any) => {
  withVue(Vue, 'Domain', Domain);
};

export default Domain;
