import Resource from './resource';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

Resource.isUse = () => true;
Resource.use = (Vue) => {
  withVue(Vue, 'Resource', Resource);
};

export default Resource;
