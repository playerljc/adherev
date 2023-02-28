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
  Image,
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
  Typography,
  Upload,
} from 'ant-design-vue';
import type { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';
import Dict from '@baifendian/adherev-util-dict';
import Intl from '@baifendian/adherev-util-intl';
import WatchMemoized from '@baifendian/adherev-util-watchmemoized';

import AntdvFormItemNormalize, * as AntdvFormItemNormalizeDefault from './AntdvFormItemNormalize';
import FormItemGeneratorToDict, {
  DictFormItem,
  FunctionComponents,
} from './FormItemGeneratorToDict';

const {
  _util: { withVue },
} = Util;

const Components = {
  AntdvFormItemNormalize: AntdvFormItemNormalizeDefault,
  FormItemGeneratorToDict: DictFormItem,
  FormItemGeneratorToDictComponents: FunctionComponents,
};

const Wrap = {
  install: (app: App) => {
    app.use(Affix);
    app.use(Alert);
    app.use(Anchor);
    app.use(AutoComplete);
    app.use(Avatar);
    app.use(BackTop);
    app.use(Badge);
    app.use(Breadcrumb);
    app.use(Button);
    app.use(Calendar);
    app.use(Card);
    app.use(Carousel);
    app.use(Cascader);
    app.use(Checkbox);
    app.use(Col);
    app.use(Collapse);
    app.use(Comment);
    app.use(ConfigProvider);
    app.use(DatePicker);
    app.use(Descriptions);
    app.use(Divider);
    app.use(Drawer);
    app.use(Dropdown);
    app.use(Empty);
    app.use(Form);
    app.use(Image);
    app.use(Input);
    app.use(InputNumber);
    app.use(Layout);
    app.use(List);
    app.use(LocaleProvider);
    app.use(Mentions);
    app.use(Menu);
    app.use(Modal);
    app.use(PageHeader);
    app.use(Pagination);
    app.use(Popconfirm);
    app.use(Popover);
    app.use(Progress);
    app.use(Radio);
    app.use(Rate);
    app.use(Result);
    app.use(Row);
    app.use(Select);
    app.use(Skeleton);
    app.use(Slider);
    app.use(Space);
    app.use(Spin);
    app.use(Statistic);
    app.use(Steps);
    app.use(Switch);
    app.use(Table);
    app.use(Tabs);
    app.use(Tag);
    app.use(TimePicker);
    app.use(Timeline);
    app.use(Tooltip);
    app.use(Transfer);
    app.use(Tree);
    app.use(TreeSelect);
    app.use(Typography);
    app.use(Upload);

    app.use(Dict);
    app.use(Intl);
    app.use(WatchMemoized);
    app.use(AntdvFormItemNormalize);
    app.use(FormItemGeneratorToDict);

    withVue(app, 'AntdvFormItem', Components);

    return app;
  },
  ...Components,
};

export default Wrap as typeof Wrap &
  Plugin & {
    readonly AntdvFormItemNormalize: typeof AntdvFormItemNormalizeDefault;
    readonly FormItemGeneratorToDict: typeof DictFormItem;
    readonly FormItemGeneratorToDictComponents: typeof FunctionComponents;
  };
