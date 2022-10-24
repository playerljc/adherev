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
    TableGridLayout.use(app);
    WritingBoard.use(app);
    IframeIO.use(app);
    ContourBlock.use(app);
    DateDisplay.use(app);
    Comment.use(app);
    BMap.use(app);
    AdherevConfigProvider.use(app);
    ConditionalRender.use(app);
    DelConfirm.use(app);
    ImportantConfirm.use(app);
    Permission.use(app);
    Intl.use(app);
    MessageDialog.use(app);
    Space.use(app);
    Spin.use(app);
    Split.use(app);
    Suspense.use(app);
    FlexLayout.use(app);
    SearchTable.use(app);
    OLMap.use(app);
    BackTopAnimation.use(app);
    SplitLayout.use(app);
    ScrollLoad.use(app);
    SlideLayout.use(app);
    PullRefresh.use(app);
    Revolving.use(app);
    SuccessPrompt.use(app);
    ErrorPrompt.use(app);
    WarnPrompt.use(app);
    SliderScale.use(app);
    StickupLayout.use(app);
    Surnames.use(app);
    CascadeCompared.use(app);
    SwipeOut.use(app);
    FontSizeSetting.use(app);
    JdCategoryTab.use(app);
    ImageLazy.use(app);
    // BMap.use(app);
    PlayGround.use(app);
    ContextMenu.use(app);
    GlobalIndicator.use(app);
    HistoryBack.use(app);
    Notification.use(app);
    PolygonSelection.use(app);
    Popup.use(app);
    AdapterScreen.use(app);
    Browsersniff.use(app);
    Ajax.use(app);
    Dict.use(app);
    Domain.use(app);
    Emitter.use(app);
    NotNull.use(app);
    Preferences.use(app);
    Resource.use(app);
    Validator.use(app);
    WatchMemoized.use(app);
    Util.use(app);
  },
  (app) => {
    for (const p in VueIcons) {
      app.component(p, VueIcons[p]);
    }
  },
];

export default (app) => register.forEach((t) => t(app));
