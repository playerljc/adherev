import { App, Plugin } from 'vue';

import Emitter from '@baifendian/adhere-util-emitter';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const EmitterWrap: typeof Emitter & {
  install?: (app: App) => App
} = Emitter;

EmitterWrap.install = (app: App) => {
  withVue(app, 'Emitter', Emitter);

  return app;
};

export default EmitterWrap as typeof EmitterWrap & Plugin;
