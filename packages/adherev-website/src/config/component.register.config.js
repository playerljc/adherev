import {
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Col,
  ConfigProvider,
  DatePicker,
  Divider,
  Empty,
  Form,
  FormModel,
  Icon,
  Input,
  InputNumber,
  List,
  Menu,
  Modal,
  Radio,
  Result,
  Row,
  Select,
  Slider,
  Switch,
  Space as AntdSpace,
  Table,
  Tabs,
  Tag,
  Tooltip,
  Progress,
} from 'ant-design-vue';
import Vue from 'vue';
import { Plugin } from 'vue-fragment';
import VueHighlightJS from 'vue-highlight.js';
import VueI18n from 'vue-i18n';

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
  Teleport,
  Util,
  Validator,
  WarnPrompt,
  WatchMemoized,
  WritingBoard,
} from '@baifendian/adherev';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';
import PlaygroundMulit from '@/lib/PlaygroundMulit';
import Props from '@/lib/Props';

const register = [
  () => {
    Vue.use(Menu);
    Vue.use(Button);
    Vue.use(Card);
    Vue.use(Table);
    Vue.use(Tabs);
    Vue.use(Breadcrumb);
    Vue.use(Empty);
    Vue.use(Tooltip);
    Vue.use(Icon);
    Vue.use(Modal);
    Vue.use(Result);
    Vue.use(Form);
    Vue.use(FormModel);
    Vue.use(Input);
    Vue.use(Radio);
    Vue.use(InputNumber);
    Vue.use(Slider);
    Vue.use(DatePicker);
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(ConfigProvider);
    Vue.use(List);
    Vue.use(Avatar);
    Vue.use(Tag);
    Vue.use(Divider);
    Vue.use(Select);
    Vue.use(Switch);
    Vue.use(AntdSpace);
    Vue.use(Progress);
  },
  () => {
    ConditionalRender.use(Vue);
    DelConfirm.use(Vue);
    ImportantConfirm.use(Vue);
    Permission.use(Vue);
    Intl.use(Vue);
    MessageDialog.use(Vue);
    Space.use(Vue);
    Spin.use(Vue);
    Split.use(Vue);
    Suspense.use(Vue);
    FlexLayout.use(Vue);
    SearchTable.use(Vue);
    OLMap.use(Vue);
    BackTopAnimation.use(Vue);
    SplitLayout.use(Vue);
    ScrollLoad.use(Vue);
    SlideLayout.use(Vue);
    PullRefresh.use(Vue);
    Revolving.use(Vue);
    SuccessPrompt.use(Vue);
    ErrorPrompt.use(Vue);
    WarnPrompt.use(Vue);
    SliderScale.use(Vue);
    StickupLayout.use(Vue);
    Surnames.use(Vue);
    CascadeCompared.use(Vue);
    SwipeOut.use(Vue);
    FontSizeSetting.use(Vue);
    JdCategoryTab.use(Vue);
    ImageLazy.use(Vue);
    BMap.use(Vue);
    PlayGround.use(Vue);
    ContextMenu.use(Vue);
    GlobalIndicator.use(Vue);
    HistoryBack.use(Vue);
    Notification.use(Vue);
    PolygonSelection.use(Vue);
    Popup.use(Vue);
    Teleport.use(Vue);
    AdapterScreen.use(Vue);
    Browsersniff.use(Vue);
    Ajax.use(Vue);
    Dict.use(Vue);
    Domain.use(Vue);
    Emitter.use(Vue);
    NotNull.use(Vue);
    Preferences.use(Vue);
    Resource.use(Vue);
    Validator.use(Vue);
    WatchMemoized.use(Vue);
    Util.use(Vue);

    Comment.use(Vue);
    AdherevConfigProvider.use(Vue);
    ContourBlock.use(Vue);
    DateDisplay.use(Vue);
    TableGridLayout.use(Vue);
    WritingBoard.use(Vue);
    IframeIO.use(Vue);
  },
  () => {
    Vue.use(VueHighlightJS);

    Vue.use(Playground);
    Vue.use(PlaygroundMulit);
    Vue.use(FunctionProps);
    Vue.use(Props);
  },
  () => {
    Vue.use(VueI18n);
    Vue.use(Plugin);
  },
];

register.forEach((t) => t());
