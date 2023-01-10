import {
  Affix,
  Alert,
  Anchor,
  AutoComplete,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  Collapse,
  Comment,
  ConfigProvider,
  DatePicker,
  Descriptions,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Form,
  FormModel,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Mentions,
  Menu,
  Modal,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Result,
  Row,
  Select,
  Skeleton,
  Slider,
  Space,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Transfer,
  Tree,
  TreeSelect,
  Upload,
} from 'ant-design-vue';

import Util from '@baifendian/adherev-util';
import Dict from '@baifendian/adherev-util-dict';
import Intl from '@baifendian/adherev-util-intl';
import WatchMemoized from '@baifendian/adherev-util-watchmemoized';

import AntFormItemNormalize, * as AntFormItemNormalizeDefault from './AntFormItemNormalize';
import FormItemGeneratorToDict, {
  DictFormItem,
  FunctionComponents,
} from './FormItemGeneratorToDict';

const {
  _util: { withVue },
} = Util;

const Components = {
  AntFormItemNormalize: {
    ...AntFormItemNormalizeDefault,
  },
  FormItemGeneratorToDict: DictFormItem,
  FormItemGeneratorToDictComponents: FunctionComponents,
};

const Component: any = {
  isUse: () => true,
  use: (Vue) => {
    if ((Dict as any).isUse()) {
      (Dict as any).use(Vue);
    }
    if ((Intl as any).isUse()) {
      (Intl as any).use(Vue);
    }
    if ((WatchMemoized as any).isUse()) {
      (WatchMemoized as any).use(Vue);
    }

    Vue.use(Affix);
    Vue.use(Alert);
    Vue.use(Anchor);
    Vue.use(AutoComplete);
    Vue.use(Avatar);
    Vue.use(BackTop);
    Vue.use(Badge);
    Vue.use(Breadcrumb);
    Vue.use(Button);
    Vue.use(Calendar);
    Vue.use(Card);
    Vue.use(Carousel);
    Vue.use(Cascader);
    Vue.use(Checkbox);
    Vue.use(Col);
    Vue.use(Collapse);
    Vue.use(Comment);
    Vue.use(ConfigProvider);
    Vue.use(DatePicker);
    Vue.use(Descriptions);
    Vue.use(Divider);
    Vue.use(Drawer);
    Vue.use(Dropdown);
    Vue.use(Empty);
    Vue.use(Form);
    Vue.use(FormModel);
    Vue.use(Icon);
    Vue.use(Input);
    Vue.use(InputNumber);
    Vue.use(Layout);
    Vue.use(List);
    Vue.use(LocaleProvider);
    Vue.use(Mentions);
    Vue.use(Menu);
    Vue.use(Modal);
    Vue.use(PageHeader);
    Vue.use(Pagination);
    Vue.use(Popconfirm);
    Vue.use(Popover);
    Vue.use(Progress);
    Vue.use(Radio);
    Vue.use(Rate);
    Vue.use(Result);
    Vue.use(Row);
    Vue.use(Select);
    Vue.use(Skeleton);
    Vue.use(Slider);
    Vue.use(Space);
    Vue.use(Spin);
    Vue.use(Statistic);
    Vue.use(Steps);
    Vue.use(Switch);
    Vue.use(Table);
    Vue.use(Tabs);
    Vue.use(Tag);
    Vue.use(TimePicker);
    Vue.use(Timeline);
    Vue.use(Tooltip);
    Vue.use(Transfer);
    Vue.use(Tree);
    Vue.use(TreeSelect);
    Vue.use(Upload);

    Vue.use(AntFormItemNormalize);
    Vue.use(FormItemGeneratorToDict);
    withVue(Vue, 'AntdvFormItem', {
      ...Components,
    });
  },
  ...Components,
};

export default Component;
