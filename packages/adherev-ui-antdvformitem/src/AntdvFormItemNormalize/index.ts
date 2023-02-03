import AutoComplete from './formitems/AutoComplete';
import Cascader from './formitems/Cascader';
import DatePicker from './formitems/DatePicker';
import Input from './formitems/Input';
import InputNumberDecimal1 from './formitems/InputNumberDecimal1';
import InputNumberDecimal2 from './formitems/InputNumberDecimal2';
import InputNumberInteger from './formitems/InputNumberInteger';
import Mentions from './formitems/Mentions';
import Modal from './formitems/Modal';
import MultipleSelect from './formitems/MultipleSelect';
import AntdvComponents from './formitems/Others';
import RangePicker from './formitems/RangePicker';
import Select from './formitems/Select';
import Slider from './formitems/Slider';
import TextArea from './formitems/TextArea';
import TimePicker from './formitems/TimePicker';
import Tooltip from './formitems/Tooltip';
import TreeSelect from './formitems/TreeSelect';
import Upload from './formitems/Upload';

const {
  Affix,
  Alert,
  Anchor,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Carousel,
  Checkbox,
  Col,
  Collapse,
  Comment,
  ConfigProvider,
  Descriptions,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Form,
  FormModel,
  Icon,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Result,
  Row,
  Skeleton,
  Space,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  Timeline,
  Transfer,
  Tree,
} = AntdvComponents as any;

export {
  Select,
  MultipleSelect,
  TreeSelect,
  AutoComplete,
  DatePicker,
  RangePicker,
  TimePicker,
  Cascader,
  Modal,
  Mentions,
  Slider,
  Tooltip,
  Upload,
  InputNumberInteger,
  InputNumberDecimal1,
  InputNumberDecimal2,
  Input,
  TextArea,
  Affix,
  Alert,
  Anchor,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Carousel,
  Checkbox,
  Col,
  Collapse,
  Comment,
  ConfigProvider,
  Descriptions,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Form,
  FormModel,
  Icon,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Result,
  Row,
  Skeleton,
  Space,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  Timeline,
  Transfer,
  Tree,
};

// export * as AntdvdComponents from './formitems/Others';

const Obj = {
  Select,
  MultipleSelect,
  TreeSelect,
  AutoComplete,
  DatePicker,
  RangePicker,
  TimePicker,
  Cascader,
  Modal,
  Mentions,
  Slider,
  Tooltip,
  Upload,
  InputNumberInteger,
  InputNumberDecimal1,
  InputNumberDecimal2,
  Input,
  TextArea,
  ...AntdvComponents,
};

export default {
  install: (Vue) => {
    Object.keys(Obj).forEach((key) => {
      // 全局注册组件
      Vue.component(`adv-antdvformitemnormalize-${key.toLowerCase()}`, Obj[key]);
    });
  },
};
