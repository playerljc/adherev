import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';

import Split, { SplitGroup } from './split';

const {
  _util: { withVue },
} = BfdUtil;

Split.Group = SplitGroup;

Split.install = function (app: App) {
  app.component(SplitGroup.name, SplitGroup);
  app.component(Split.name, Split);
  withVue(app, 'Split', Split);

  return app;
};

export default Split as typeof Split &
  Plugin & {
    readonly Group: typeof SplitGroup;
  };
