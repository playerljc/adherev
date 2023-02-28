import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';

import Space, { SpaceGroup } from './space';

const {
  _util: { withVue },
} = BfdUtil;

Space.Group = SpaceGroup;

Space.install = function (app: App) {
  app.component(SpaceGroup.name, SpaceGroup);
  app.component(Space.name, Space);
  withVue(app, 'Space', Space);

  return app;
};

export default Space as typeof Space &
  Plugin & {
    readonly Group: typeof SpaceGroup;
  };
