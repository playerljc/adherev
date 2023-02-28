import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.keys.js";import{__assign}from"tslib";import AutoComplete from"./formitems/AutoComplete";import Cascader from"./formitems/Cascader";import DatePicker from"./formitems/DatePicker";import Input from"./formitems/Input";import InputNumberDecimal1 from"./formitems/InputNumberDecimal1";import InputNumberDecimal2 from"./formitems/InputNumberDecimal2";import InputNumberInteger from"./formitems/InputNumberInteger";import Mentions from"./formitems/Mentions";import Modal from"./formitems/Modal";import MultipleSelect from"./formitems/MultipleSelect";import AntdvComponents from"./formitems/Others";import RangePicker from"./formitems/RangePicker";import Select from"./formitems/Select";import Slider from"./formitems/Slider";import TextArea from"./formitems/TextArea";import TimePicker from"./formitems/TimePicker";import Tooltip from"./formitems/Tooltip";import Transfer from"./formitems/Transfer";import TreeSelect from"./formitems/TreeSelect";import Upload from"./formitems/Upload";import SubmitButton from"./formitems/SubmitButton";var _a=AntdvComponents,Affix=_a.Affix,Alert=_a.Alert,Anchor=_a.Anchor,AnchorLink=_a.AnchorLink,AutoCompleteOptGroup=_a.AutoCompleteOptGroup,AutoCompleteOption=_a.AutoCompleteOption,Avatar=_a.Avatar,AvatarGroup=_a.AvatarGroup,BackTop=_a.BackTop,Badge=_a.Badge,BadgeRibbon=_a.BadgeRibbon,Breadcrumb=_a.Breadcrumb,BreadcrumbItem=_a.BreadcrumbItem,BreadcrumbSeparator=_a.BreadcrumbSeparator,Button=_a.Button,ButtonGroup=_a.ButtonGroup,Calendar=_a.Calendar,Card=_a.Card,CardGrid=_a.CardGrid,CardMeta=_a.CardMeta,Carousel=_a.Carousel,CheckableTag=_a.CheckableTag,Checkbox=_a.Checkbox,CheckboxGroup=_a.CheckboxGroup,Col=_a.Col,Collapse=_a.Collapse,CollapsePanel=_a.CollapsePanel,Comment=_a.Comment,ConfigProvider=_a.ConfigProvider,Descriptions=_a.Descriptions,DescriptionsItem=_a.DescriptionsItem,DirectoryTree=_a.DirectoryTree,Divider=_a.Divider,Drawer=_a.Drawer,Dropdown=_a.Dropdown,DropdownButton=_a.DropdownButton,Empty=_a.Empty,Form=_a.Form,FormItem=_a.FormItem,FormItemRest=_a.FormItemRest,Grid=_a.Grid,Image=_a.Image,ImagePreviewGroup=_a.ImagePreviewGroup,InputGroup=_a.InputGroup,InputNumber=_a.InputNumber,InputPassword=_a.InputPassword,InputSearch=_a.InputSearch,Layout=_a.Layout,LayoutContent=_a.LayoutContent,LayoutFooter=_a.LayoutFooter,LayoutHeader=_a.LayoutHeader,LayoutSider=_a.LayoutSider,List=_a.List,ListItem=_a.ListItem,ListItemMeta=_a.ListItemMeta,LocaleProvider=_a.LocaleProvider,MentionsOption=_a.MentionsOption,Menu=_a.Menu,MenuDivider=_a.MenuDivider,MenuItem=_a.MenuItem,MenuItemGroup=_a.MenuItemGroup,MonthPicker=_a.MonthPicker,PageHeader=_a.PageHeader,Pagination=_a.Pagination,Popconfirm=_a.Popconfirm,Popover=_a.Popover,Progress=_a.Progress,QuarterPicker=_a.QuarterPicker,Radio=_a.Radio,RadioButton=_a.RadioButton,RadioGroup=_a.RadioGroup,Rate=_a.Rate,Result=_a.Result,Row=_a.Row,SelectOptGroup=_a.SelectOptGroup,SelectOption=_a.SelectOption,Skeleton=_a.Skeleton,SkeletonAvatar=_a.SkeletonAvatar,SkeletonButton=_a.SkeletonButton,SkeletonImage=_a.SkeletonImage,SkeletonInput=_a.SkeletonInput,SkeletonTitle=_a.SkeletonTitle,Space=_a.Space,Spin=_a.Spin,Statistic=_a.Statistic,StatisticCountdown=_a.StatisticCountdown,Step=_a.Step,Steps=_a.Steps,SubMenu=_a.SubMenu,Switch=_a.Switch,TabPane=_a.TabPane,Table=_a.Table,TableColumn=_a.TableColumn,TableColumnGroup=_a.TableColumnGroup,TableSummary=_a.TableSummary,TableSummaryCell=_a.TableSummaryCell,TableSummaryRow=_a.TableSummaryRow,Tabs=_a.Tabs,Tag=_a.Tag,Textarea=_a.Textarea,TimeRangePicker=_a.TimeRangePicker,Timeline=_a.Timeline,TimelineItem=_a.TimelineItem,Tree=_a.Tree,TreeNode=_a.TreeNode,TreeSelectNode=_a.TreeSelectNode,Typography=_a.Typography,TypographyLink=_a.TypographyLink,TypographyParagraph=_a.TypographyParagraph,TypographyText=_a.TypographyText,TypographyTitle=_a.TypographyTitle,UploadDragger=_a.UploadDragger,WeekPicker=_a.WeekPicker,Obj=__assign({Select:Select,MultipleSelect:MultipleSelect,TreeSelect:TreeSelect,AutoComplete:AutoComplete,DatePicker:DatePicker,RangePicker:RangePicker,TimePicker:TimePicker,Cascader:Cascader,Modal:Modal,Mentions:Mentions,Slider:Slider,Tooltip:Tooltip,Upload:Upload,InputNumberInteger:InputNumberInteger,InputNumberDecimal1:InputNumberDecimal1,InputNumberDecimal2:InputNumberDecimal2,Input:Input,TextArea:TextArea,Transfer:Transfer,SubmitButton:SubmitButton},AntdvComponents);export default{install:function(t){Object.keys(Obj).forEach(function(e){t.component("adv-antdvformitemnormalize-".concat(e.toLowerCase()),Obj[e])})}};export{Select,MultipleSelect,TreeSelect,AutoComplete,DatePicker,RangePicker,TimePicker,Cascader,Modal,Mentions,Slider,Tooltip,Upload,InputNumberInteger,InputNumberDecimal1,InputNumberDecimal2,Input,TextArea,Transfer,Affix,Alert,Anchor,AnchorLink,AutoCompleteOptGroup,AutoCompleteOption,Avatar,AvatarGroup,BackTop,Badge,BadgeRibbon,Breadcrumb,BreadcrumbItem,BreadcrumbSeparator,Button,ButtonGroup,Calendar,Card,CardGrid,CardMeta,Carousel,CheckableTag,Checkbox,CheckboxGroup,Col,Collapse,CollapsePanel,Comment,ConfigProvider,Descriptions,DescriptionsItem,DirectoryTree,Divider,Drawer,Dropdown,DropdownButton,Empty,Form,FormItem,FormItemRest,Grid,Image,ImagePreviewGroup,InputGroup,InputNumber,InputPassword,InputSearch,Layout,LayoutContent,LayoutFooter,LayoutHeader,LayoutSider,List,ListItem,ListItemMeta,LocaleProvider,MentionsOption,Menu,MenuDivider,MenuItem,MenuItemGroup,MonthPicker,PageHeader,Pagination,Popconfirm,Popover,Progress,QuarterPicker,Radio,RadioButton,RadioGroup,Rate,Result,Row,SelectOptGroup,SelectOption,Skeleton,SkeletonAvatar,SkeletonButton,SkeletonImage,SkeletonInput,SkeletonTitle,Space,Spin,Statistic,StatisticCountdown,Step,Steps,SubMenu,Switch,SubmitButton,TabPane,Table,TableColumn,TableColumnGroup,TableSummary,TableSummaryCell,TableSummaryRow,Tabs,Tag,Textarea,TimeRangePicker,Timeline,TimelineItem,Tree,TreeNode,TreeSelectNode,Typography,TypographyLink,TypographyParagraph,TypographyText,TypographyTitle,UploadDragger,WeekPicker};
//# sourceMappingURL=index.js.map
