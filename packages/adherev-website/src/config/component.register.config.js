import {
  Space as AntdSpace,
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Col,
  ConfigProvider,
  DatePicker,
  Divider,
  Empty,
  Form, // FormModel,
  // Icon,
  Input,
  InputNumber,
  List,
  Menu,
  Modal,
  Progress,
  Radio,
  Result,
  Row,
  Select,
  Slider,
  Statistic,
  Switch,
  Table,
  Tabs,
  Tag,
  Tooltip,
} from 'ant-design-vue';

import * as VueIcons from '@ant-design/icons-vue';
import {
  AdapterScreen,
  ConfigProvider as AdherevConfigProvider,
  Ajax,
  BMap,
  BackTopAnimation,
  Browsersniff,
  CascadeCompared,
  Comment,
  ConditionalRender,
  ContextMenu,
  ContourBlock,
  DateDisplay,
  DelConfirm,
  Dict,
  Domain,
  Emitter,
  ErrorPrompt,
  FlexLayout,
  FontSizeSetting,
  GlobalIndicator,
  HistoryBack,
  IframeIO,
  ImageLazy,
  ImportantConfirm,
  Intl,
  JdCategoryTab,
  MessageDialog,
  NotNull,
  Notification,
  OLMap,
  Permission,
  PlayGround,
  PolygonSelection,
  Popup,
  Preferences,
  PullRefresh,
  Resource,
  Revolving,
  ScrollLoad,
  SearchTable,
  SlideLayout,
  SliderScale,
  Space,
  Spin,
  Split,
  SplitLayout,
  StickupLayout,
  SuccessPrompt,
  Surnames,
  Suspense,
  SwipeOut,
  TableGridLayout,
  Util,
  Validator,
  WarnPrompt,
  WatchMemoized,
  WritingBoard,
} from '@baifendian/adherev';

const register = [
  (app) => {
    app.use(Menu);
    app.use(Button);
    app.use(Card);
    app.use(Table);
    app.use(Tabs);
    app.use(Breadcrumb);
    app.use(Empty);
    app.use(Tooltip);
    // app.use(Icon);
    app.use(Statistic);
    app.use(Progress);
    app.use(Modal);
    app.use(Result);
    app.use(Form);
    app.use(AntdSpace);
    // app.use(FormModel);
    app.use(Input);
    app.use(Radio);
    app.use(InputNumber);
    app.use(Slider);
    app.use(DatePicker);
    app.use(Row);
    app.use(Col);
    app.use(ConfigProvider);
    app.use(List);
    app.use(Avatar);
    app.use(Tag);
    app.use(Divider);
    app.use(Select);
    app.use(Switch);
  },
  (app) => {
    app.use(TableGridLayout);
    app.use(WritingBoard);
    app.use(IframeIO);
    app.use(ContourBlock);
    app.use(DateDisplay);
    app.use(Comment);
    app.use(BMap);
    app.use(AdherevConfigProvider);
    app.use(ConditionalRender);
    app.use(DelConfirm);
    app.use(ImportantConfirm);
    app.use(Permission);
    app.use(Intl);
    app.use(MessageDialog);
    app.use(Space);
    app.use(Spin);
    app.use(Split);
    app.use(Suspense);
    app.use(FlexLayout);
    app.use(SearchTable);
    app.use(OLMap);
    app.use(BackTopAnimation);
    app.use(SplitLayout);
    app.use(ScrollLoad);
    app.use(SlideLayout);
    app.use(PullRefresh);
    app.use(Revolving);
    app.use(SuccessPrompt);
    app.use(ErrorPrompt);
    app.use(WarnPrompt);
    app.use(SliderScale);
    app.use(StickupLayout);
    app.use(Surnames);
    app.use(CascadeCompared);
    app.use(SwipeOut);
    app.use(FontSizeSetting);
    app.use(JdCategoryTab);
    app.use(ImageLazy);
    app.use(PlayGround);
    app.use(ContextMenu);
    app.use(GlobalIndicator);
    app.use(HistoryBack);
    app.use(Notification);
    app.use(PolygonSelection);
    app.use(Popup);
    app.use(AdapterScreen);
    app.use(Browsersniff);
    app.use(Ajax);
    app.use(Dict);
    app.use(Domain);
    app.use(Emitter);
    app.use(NotNull);
    app.use(Preferences);
    app.use(Resource);
    app.use(Validator);
    app.use(WatchMemoized);
    app.use(Util);
  },
  (app) => {
    for (const p in VueIcons) {
      app.component(p, VueIcons[p]);
    }
  },
];

export default (app) => register.forEach((t) => t(app));
