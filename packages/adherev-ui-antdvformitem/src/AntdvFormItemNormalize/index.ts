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
import Transfer from './formitems/Transfer';
import TreeSelect from './formitems/TreeSelect';
import Upload from './formitems/Upload';

const {
  Affix,
  Alert,
  Anchor,
  AnchorLink,
  AutoCompleteOptGroup,
  AutoCompleteOption,
  Avatar,
  AvatarGroup,
  BackTop,
  Badge,
  BadgeRibbon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  CardGrid,
  CardMeta,
  Carousel,
  CheckableTag,
  Checkbox,
  CheckboxGroup,
  Col,
  Collapse,
  CollapsePanel,
  Comment,
  ConfigProvider,
  Descriptions,
  DescriptionsItem,
  DirectoryTree,
  Divider,
  Drawer,
  Dropdown,
  DropdownButton,
  Empty,
  Form,
  FormItem,
  FormItemRest,
  Grid,
  Image,
  ImagePreviewGroup,
  InputGroup,
  InputNumber,
  InputPassword,
  InputSearch,
  Layout,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutSider,
  List,
  ListItem,
  ListItemMeta,
  LocaleProvider,
  MentionsOption,
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemGroup,
  MonthPicker,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  QuarterPicker,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Result,
  Row,
  SelectOptGroup,
  SelectOption,
  Skeleton,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonImage,
  SkeletonInput,
  SkeletonTitle,
  Space,
  Spin,
  Statistic,
  StatisticCountdown,
  Step,
  Steps,
  SubMenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  TableColumnGroup,
  TableSummary,
  TableSummaryCell,
  TableSummaryRow,
  Tabs,
  Tag,
  Textarea,
  TimeRangePicker,
  Timeline,
  TimelineItem,
  Tree,
  TreeNode,
  TreeSelectNode,
  Typography,
  TypographyLink,
  TypographyParagraph,
  TypographyText,
  TypographyTitle,
  UploadDragger,
  WeekPicker,
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
  Transfer,
  Affix,
  Alert,
  Anchor,
  AnchorLink,
  AutoCompleteOptGroup,
  AutoCompleteOption,
  Avatar,
  AvatarGroup,
  BackTop,
  Badge,
  BadgeRibbon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  CardGrid,
  CardMeta,
  Carousel,
  CheckableTag,
  Checkbox,
  CheckboxGroup,
  Col,
  Collapse,
  CollapsePanel,
  Comment,
  ConfigProvider,
  Descriptions,
  DescriptionsItem,
  DirectoryTree,
  Divider,
  Drawer,
  Dropdown,
  DropdownButton,
  Empty,
  Form,
  FormItem,
  FormItemRest,
  Grid,
  Image,
  ImagePreviewGroup,
  InputGroup,
  InputNumber,
  InputPassword,
  InputSearch,
  Layout,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutSider,
  List,
  ListItem,
  ListItemMeta,
  LocaleProvider,
  MentionsOption,
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemGroup,
  MonthPicker,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  QuarterPicker,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Result,
  Row,
  SelectOptGroup,
  SelectOption,
  Skeleton,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonImage,
  SkeletonInput,
  SkeletonTitle,
  Space,
  Spin,
  Statistic,
  StatisticCountdown,
  Step,
  Steps,
  SubMenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  TableColumnGroup,
  TableSummary,
  TableSummaryCell,
  TableSummaryRow,
  Tabs,
  Tag,
  Textarea,
  TimeRangePicker,
  Timeline,
  TimelineItem,
  Tree,
  TreeNode,
  TreeSelectNode,
  Typography,
  TypographyLink,
  TypographyParagraph,
  TypographyText,
  TypographyTitle,
  UploadDragger,
  WeekPicker,
};

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
  Transfer,
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
