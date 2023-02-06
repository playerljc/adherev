// import 'vue3-highlightjs/lib/allLanguages';
import 'highlight.js/lib/common';
import { App, Plugin } from 'vue';

import ContextMenu from '@baifendian/adherev-ui-contextmenu';
import Space from '@baifendian/adherev-ui-space';
import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import hljsVuePlugin from '@highlightjs/vue-plugin';

import AnchorNavigation from './AnchorNavigation';
import CodeBoxPanel from './CodeBoxPanel';
import CodePanel from './CodePanel';
import CodeTabPanel from './CodeTabPanel';
import FunctionProps from './FunctionProps';
import PlayGround from './PlayGround';
import PlayGroundMulit from './PlayGroundMulit';
import PlayGroundPage from './PlayGroundPage';
import CodeBoxSection from './PlayGroundPage/CodeBoxSection';
import FunctionPropsSection from './PlayGroundPage/FunctionPropsSection';
import PropsSection from './PlayGroundPage/PropsSection';
import Section from './PlayGroundPage/Section';
import PlayGroundTab from './PlayGroundTab';
import Props from './Props';

const {
  _util: { withVue },
} = BfdUtil;

PlayGround.FunctionProps = FunctionProps;
PlayGround.Props = Props;
PlayGround.CodePanel = CodePanel;
PlayGround.CodeTabPanel = CodeTabPanel;
PlayGround.CodeBoxPanel = CodeBoxPanel;
PlayGround.PlayGroundTab = PlayGroundTab;
PlayGround.PlayGroundMulit = PlayGroundMulit;
PlayGround.AnchorNavigation = AnchorNavigation;
PlayGround.PlayGroundPage = PlayGroundPage;
PlayGround.PlayGroundPage.CodeBoxSection = CodeBoxSection;
PlayGround.PlayGroundPage.FunctionPropsSection = FunctionPropsSection;
PlayGround.PlayGroundPage.PropsSection = PropsSection;
PlayGround.PlayGroundPage.Section = Section;

PlayGround.install = function (app: App) {
  app.component(PlayGround.name, PlayGround);
  app.use(ContextMenu);
  app.component(Space.name, Space);
  app.component(Intl.name, Intl);

  app.component(FunctionProps.name, FunctionProps);
  app.component(Props.name, Props);
  app.component(CodePanel.name, CodePanel);
  app.component(CodeTabPanel.name, CodeTabPanel);
  app.component(CodeBoxPanel.name, CodeBoxPanel);
  app.component(PlayGroundTab.name, PlayGroundTab);
  app.component(PlayGroundMulit.name, PlayGroundMulit);
  app.component(AnchorNavigation.name, AnchorNavigation);
  app.component(PlayGroundPage.name, PlayGroundPage);
  app.component(CodeBoxSection.name, CodeBoxSection);
  app.component(FunctionPropsSection.name, FunctionPropsSection);
  app.component(PropsSection.name, PropsSection);
  app.component(Section.name, Section);
  app.component(hljsVuePlugin.component.name, hljsVuePlugin.component);

  withVue(app, 'PlayGround', PlayGround);

  return app;
};

export default PlayGround as typeof PlayGround &
  Plugin & {
    readonly FunctionProps: typeof FunctionProps;
    readonly Props: typeof Props;
    readonly CodePanel: typeof CodePanel;
    readonly CodeTabPanel: typeof CodeTabPanel;
    readonly CodeBoxPanel: typeof CodeBoxPanel;
    readonly PlayGroundTab: typeof PlayGroundTab;
    readonly PlayGroundMulit: typeof PlayGroundMulit;
    readonly AnchorNavigation: typeof AnchorNavigation;
    readonly PlayGroundPage: typeof PlayGroundPage & {
      readonly CodeBoxSection: typeof CodeBoxSection;
      readonly FunctionPropsSection: typeof FunctionPropsSection;
      readonly PropsSection: typeof PropsSection;
      readonly Section: typeof Section;
    };
  };
