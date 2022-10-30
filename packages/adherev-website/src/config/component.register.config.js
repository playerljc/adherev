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
  Progress,
  Radio,
  Result,
  Row,
  Select,
  Skeleton,
  Slider,
  Space,
  Statistic,
  Switch,
  Table,
  Tabs,
  Tag,
  Tooltip,
} from 'ant-design-vue';
import Vue from 'vue';
import { Plugin } from 'vue-fragment';
import VueHighlightJS from 'vue-highlight.js';
import VueI18n from 'vue-i18n';

import { ConfigProvider as AdherevConfigProvider } from '@baifendian/adherev';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';
import PlaygroundMulit from '@/lib/PlaygroundMulit';
import Props from '@/lib/Props';

const register = [
  () => {
    Vue.use(Statistic);
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
    Vue.use(Space);
    Vue.use(Progress);
    Vue.use(Skeleton);
  },
  () => {
    Vue.use(AdherevConfigProvider);
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
