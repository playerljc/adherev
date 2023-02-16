import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';

import { Overlay, Push, Revolving } from './slidelayout';

const {
  _util: { withVue },
} = BfdUtil;

const SlideLayout = {
  Push,
  Overlay,
  Revolving,
  install: function (app: App) {
    app.component(Push.name, Push);
    app.component(Overlay.name, Overlay);
    app.component(Revolving.name, Revolving);
    withVue(app, 'SlideLayout', SlideLayout);

    return app;
  },
};

export default SlideLayout as typeof SlideLayout &
  Plugin & {
    readonly Push: typeof Push;
    readonly Overlay: typeof Overlay;
    readonly Revolving: typeof Revolving;
  };
