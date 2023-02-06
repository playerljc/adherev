import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';

import Resource from './resource';

const {
  _util: { withVue },
} = BfdUtil;

Resource.install = (app: App) => {
  withVue(app, 'Resource', Resource);
};

export default Resource as typeof Resource & Plugin;
