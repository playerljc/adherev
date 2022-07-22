import Resource from './resource';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
Resource.isUse = () => true;
// @ts-ignore
Resource.use = (Vue) => {
  withVue(Vue, 'Resource', Resource);
};

export default Resource;
