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
  Tooltip,
  List,
  Avatar,
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
} from '@baifendian/adherev';
import Playground from '@/lib/Playground';
import PlaygroundMulit from '@/lib/PlaygroundMulit';
import FunctionProps from '@/lib/FunctionProps';
import Props from '@/lib/Props';

Vue.use(Menu);
Vue.use(Button);
Vue.use(Card);
Vue.use(Table);
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

Vue.use(VueHighlightJS);

ConditionalRender.use(Vue);
DelConfirm.use(Vue);
ImportantConfirm.use(Vue);
Permission.use(Vue);
// @ts-ignore
Intl.use(Vue);
MessageDialog.use(Vue);
Space.use(Vue);
Spin.use(Vue);
Split.use(Vue);
// @ts-ignore
Suspense.use(Vue);
FlexLayout.use(Vue);
SearchTable.use(Vue);
OLMap.use(Vue);
BackTopAnimation.use(Vue);
SplitLayout.use(Vue);
ScrollLoad.use(Vue);
SlideLayout.use(Vue);

Vue.use(Playground);
Vue.use(PlaygroundMulit);
Vue.use(FunctionProps);
Vue.use(Props);