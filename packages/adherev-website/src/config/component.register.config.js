import AnchorNavigation from '@/lib/AnchorNavigation';
import CodeBoxPanel from '@/lib/CodeBoxPanel';
import CodePanel from '@/lib/CodePanel';
import CodeTabPanel from '@/lib/CodeTabPanel';
import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';
import PlaygroundMulit from '@/lib/PlaygroundMulit';
import PlaygroundPage from '@/lib/PlaygroundPage';
import PlaygroundTab from '@/lib/PlaygroundTab';
import Props from '@/lib/Props';
import en_US from '@/locales/en_US';
import pt_PT from '@/locales/pt_PT';
import zh_CN from '@/locales/zh_CN';
import {
  ConditionalRender,
  DelConfirm,
  FlexLayout,
  ImportantConfirm,
  Intl,
  MessageDialog,
  OLMap,
  Permission,
  SearchTable,
  Space,
  Spin,
  Split,
  Suspense,
  BackTopAnimation,
  SplitLayout,
  ScrollLoad,
  SlideLayout,
  SuccessPrompt,
  ErrorPrompt,
  WarnPrompt,
  PullRefresh,
  Revolving,
  SliderScale,
  StickupLayout,
  Surnames,
  CascadeCompared,
  SwipeOut,
  FontSizeSetting,
  JdCategoryTab,
  ImageLazy, // BMap,
  PlayGround,
  ContextMenu,
  GlobalIndicator,
  HistoryBack,
  Notification,
  PolygonSelection,
  Popup,
  AdapterScreen,
  Browsersniff,
  Ajax,
  Dict,
  Domain,
  Emitter,
  NotNull,
  Preferences,
  Resource,
  Validator,
  WatchMemoized,
  Util,
} from '@baifendian/adherev';
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  ConfigProvider,
  DatePicker,
  Empty,
  Form,
  Input,
  InputNumber,
  Menu,
  Modal,
  Radio,
  Result,
  Row,
  Slider,
  Table,
  Tabs,
  Tooltip,
  List,
  Avatar,
  Tag,
  Divider,
  Select,
  Switch,
} from 'ant-design-vue';

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
    app.use(Modal);
    app.use(Result);
    app.use(Form);
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
    ConditionalRender.use(app);
    DelConfirm.use(app);
    ImportantConfirm.use(app);
    Permission.use(app);
    Intl.use(app);
    MessageDialog.use(app, {
      messages: {
        en_US,
        zh_CN,
        pt_PT,
      },
    });
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
    app.use(AnchorNavigation);
    app.use(CodeBoxPanel);
    app.use(CodePanel);
    app.use(CodeTabPanel);
    app.use(Playground);
    app.use(PlaygroundMulit);
    app.use(PlaygroundPage);
    app.use(PlaygroundTab);
    app.use(FunctionProps);
    app.use(Props);
  },
];

export default (app) => register.forEach((t) => t(app));
