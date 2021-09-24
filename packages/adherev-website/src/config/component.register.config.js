import Vue from 'vue';
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  ConfigProvider,
  DatePicker,
  Empty,
  Form,
  FormModel,
  Icon,
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
} from 'ant-design-vue';
import VueHighlightJS from 'vue-highlight.js';
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
  PullRefresh,
  Revolving,
  SliderScale,
  StickupLayout,
  Surnames,
  CascadeCompared,
  SwipeOut,
  FontSizeSetting,
  JdCategoryTab,
  ImageLazy,
  BMap,
} from '@baifendian/adherev';
import Playground from '@/lib/Playground';
import PlaygroundMulit from '@/lib/PlaygroundMulit';
import FunctionProps from '@/lib/FunctionProps';
import Props from '@/lib/Props';

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

Vue.use(VueHighlightJS);

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
SliderScale.use(Vue);
StickupLayout.use(Vue);
Surnames.use(Vue);
CascadeCompared.use(Vue);
SwipeOut.use(Vue);
FontSizeSetting.use(Vue);
JdCategoryTab.use(Vue);
ImageLazy.use(Vue);
BMap.use(Vue);

Vue.use(Playground);
Vue.use(PlaygroundMulit);
Vue.use(FunctionProps);
Vue.use(Props);
