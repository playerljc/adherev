import"core-js/modules/es.array.reduce.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.object.keys.js";import{Affix,Alert,Anchor,Avatar,BackTop,Badge,Breadcrumb,Button,Calendar,Card,Carousel,Checkbox,Col,Collapse,Comment,ConfigProvider,Descriptions,Divider,Drawer,Dropdown,Empty,Form,FormModel,Icon,InputNumber,Layout,List,LocaleProvider,Menu,PageHeader,Pagination,Popconfirm,Popover,Progress,Radio,Rate,Result,Row,Skeleton,Space,Spin,Statistic,Steps,Switch,Table,Tabs,Tag,Timeline,Transfer,Tree}from"ant-design-vue";import{assignAttrs,extend}from"../util";var AntdComponents={Affix:Affix,Alert:Alert,Anchor:Anchor,Avatar:Avatar,BackTop:BackTop,Badge:Badge,Breadcrumb:Breadcrumb,Button:Button,Calendar:Calendar,Card:Card,Carousel:Carousel,Checkbox:Checkbox,Col:Col,Collapse:Collapse,Comment:Comment,ConfigProvider:ConfigProvider,Descriptions:Descriptions,Divider:Divider,Drawer:Drawer,Dropdown:Dropdown,Empty:Empty,Form:Form,FormModel:FormModel,Icon:Icon,InputNumber:InputNumber,Layout:Layout,List:List,LocaleProvider:LocaleProvider,Menu:Menu,PageHeader:PageHeader,Pagination:Pagination,Popconfirm:Popconfirm,Popover:Popover,Progress:Progress,Radio:Radio,Rate:Rate,Result:Result,Row:Row,Skeleton:Skeleton,Space:Space,Spin:Spin,Statistic:Statistic,Steps:Steps,Switch:Switch,Table:Table,Tabs:Tabs,Tag:Tag,Timeline:Timeline,Transfer:Transfer,Tree:Tree};export default Object.keys(AntdComponents).reduce(function(r,t){var a=AntdComponents[t];return r[t]=extend(a,{functional:!0,inject:["getEl"],render:function(e,o){return assignAttrs(a,o,r[t].defaultProps),e(a,o.data,o.children)}}),r},{});
//# sourceMappingURL=Others.js.map