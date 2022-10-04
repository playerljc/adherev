import BfdUtil from '@baifendian/adherev-util';

import Resource from './resource';

const {
  _util: { withVue },
} = BfdUtil;

Resource.isUse = () => true;

Resource.use = (Vue) => {
  withVue(Vue, 'Resource', Resource);
};

export default Resource;
