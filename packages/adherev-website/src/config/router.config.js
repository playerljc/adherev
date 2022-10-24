import BasicLayout from '@/lib/BasicLayout';
import { lazy } from '@/lib/Router';

// const TableHeadSearch = lazy(() =>
//   import(/* webpackChunkName: "tableheadsearch" */ '@/components/ui/tableheadsearch'),
// );
// const FormItemCreator = lazy(() =>
//   import(/* webpackChunkName: "formitemcreator" */ '@/components/ui/formitemcreator'),
// );
// const TableList = lazy(() =>
//   import(/* webpackChunkName: "tablelist" */ '@/components/ui/tablelist'),
// );
// const Decorators = lazy(() =>
//   import(/* webpackChunkName: "decorators" */ '@/components/util/decorators'),
// );
//
// const Echarts = lazy(() =>
//   import(/* webpackChunkName: "echarts" */ '@/components/gallery/echarts'),
// );
// const MapTalks = lazy(() =>
//   import(/* webpackChunkName: "echarts" */ '@/components/gallery/gis/maptalks'),
// );

const App = () => lazy(import(/* webpackChunkName: "app" */ '@/app'));
const Introduction = () => lazy(import(/* webpackChunkName: "introduction" */ '@/introduction'));
const Changelog = () => lazy(import(/* webpackChunkName: "changelog" */ '@/changelog'));
const ConditionalRender = () => lazy(import('@/components/ui/conditionalrender'));
const GlobalIndicator = () =>
  lazy(import(/* webpackChunkName: "globalindicator" */ '@/components/ui/globalindicator'));
const MessageDialog = () =>
  lazy(import(/* webpackChunkName: "messagedialog" */ '@/components/ui/messagedialog'));
const Permission = () =>
  lazy(import(/* webpackChunkName: "permission" */ '@/components/ui/permission'));
const DelConfirm = () =>
  lazy(import(/* webpackChunkName: "delconfirm" */ '@/components/ui/delconfirm'));
const ImportantConfirm = () =>
  lazy(import(/* webpackChunkName: "importantconfirm" */ '@/components/ui/importantconfirm'));
const AdapterScreen = () =>
  lazy(import(/* webpackChunkName: "adapterscreen" */ '@/components/util/adapterscreen'));
const Dict = () => lazy(import(/* webpackChunkName: "dict" */ '@/components/util/dict'));
const Emitter = () => lazy(import(/* webpackChunkName: "emitter" */ '@/components/util/emitter'));
const Preferences = () =>
  lazy(import(/* webpackChunkName: "preferences" */ '@/components/util/preferences'));
const WatchMemoized = () =>
  lazy(import(/* webpackChunkName: "watchmemoized" */ '@/components/util/watchmemoized'));
const Util = () => lazy(import(/* webpackChunkName: "util" */ '@/components/util/util'));
const NotNull = () => lazy(import(/* webpackChunkName: "notnull" */ '@/components/util/notnull'));
const Intl = () => lazy(import(/* webpackChunkName: "intl" */ '@/components/util/intl'));
const Ajax = () => lazy(import(/* webpackChunkName: "ajax" */ '@/components/util/ajax'));
const SuccessPrompt = () =>
  lazy(import(/* webpackChunkName: "successprompt" */ '@/components/ui/successprompt'));
const ErrorPrompt = () =>
  lazy(import(/* webpackChunkName: "errorprompt" */ '@/components/ui/errorprompt'));
const WarnPrompt = () =>
  lazy(import(/* webpackChunkName: "warnprompt" */ '@/components/ui/warnprompt'));
const Space = () => lazy(import(/* webpackChunkName: "space" */ '@/components/ui/space'));
const Spin = () => lazy(import(/* webpackChunkName: "spin" */ '@/components/ui/spin'));
const Split = () => lazy(import(/* webpackChunkName: "split" */ '@/components/ui/split'));
const HistoryBack = () =>
  lazy(import(/* webpackChunkName: "historyback" */ '@/components/ui/historyback'));
const Suspense = () => lazy(import(/* webpackChunkName: "suspense" */ '@/components/ui/suspense'));
const CSS = () => lazy(import(/* webpackChunkName: "css" */ '@/components/ui/css'));
const FlexLayout = () =>
  lazy(import(/* webpackChunkName: "flexlayout" */ '@/components/ui/flexlayout'));
const SearchTable = () =>
  lazy(import(/* webpackChunkName: "searchtable" */ '@/components/ui/searchtable'));
const OLMap = () => lazy(import(/* webpackChunkName: "olmap" */ '@/components/ui/olmap'));
const BackTopAnimation = () =>
  lazy(import(/* webpackChunkName: "backtopanimation" */ '@/components/ui/backtopanimation'));
const SplitLayout = () =>
  lazy(import(/* webpackChunkName: "splitlayout" */ '@/components/ui/splitlayout'));
const ScrollLoad = () =>
  lazy(import(/* webpackChunkName: "scrollload" */ '@/components/ui/scrollload'));
const SlideLayout = () =>
  lazy(import(/* webpackChunkName: "slidelayout" */ '@/components/ui/slidelayout'));
const ContextMenu = () =>
  lazy(import(/* webpackChunkName: "contextmenu" */ '@/components/ui/contextmenu'));
const PullRefresh = () =>
  lazy(import(/* webpackChunkName: "pullrefresh" */ '@/components/ui/pullrefresh'));
const Revolving = () =>
  lazy(import(/* webpackChunkName: "revolving" */ '@/components/ui/revolving'));
const Popup = () => lazy(import(/* webpackChunkName: "popup" */ '@/components/ui/popup'));
const SliderScale = () =>
  lazy(import(/* webpackChunkName: "sliderscale" */ '@/components/ui/sliderscale'));
const StickupLayout = () =>
  lazy(import(/* webpackChunkName: "stickuplayout" */ '@/components/ui/stickuplayout'));
const Surnames = () => lazy(import(/* webpackChunkName: "surnames" */ '@/components/ui/surnames'));
const PlayGround = () =>
  lazy(import(/* webpackChunkName: "playground" */ '@/components/ui/playground'));
const CascadeCompared = () =>
  lazy(import(/* webpackChunkName: "cascadecompared" */ '@/components/ui/cascadecompared'));
const SwipeOut = () => lazy(import(/* webpackChunkName: "swipeout" */ '@/components/ui/swipeout'));
const Notification = () =>
  lazy(import(/* webpackChunkName: "notification" */ '@/components/ui/notification'));
const FontSizeSetting = () =>
  lazy(import(/* webpackChunkName: "fontsizesetting" */ '@/components/ui/fontsizesetting'));

const JDCategoryTab = () =>
  lazy(import(/* webpackChunkName: "jdcategorytab" */ '@/components/ui/jdcategorytab'));
const ImageLazy = () =>
  lazy(import(/* webpackChunkName: "imagelazy" */ '@/components/ui/imagelazy'));
const BMap = () => lazy(import(/* webpackChunkName: "bmap" */ '@/components/ui/bmap'));
const PolygonSelection = () =>
  lazy(import(/* webpackChunkName: "polygonselection" */ '@/components/ui/polygonselection'));
const Teleport = () => lazy(import(/* webpackChunkName: "teleport" */ '@/components/ui/teleport'));
const Comment = () => lazy(import(/* webpackChunkName: "comment" */ '@/components/ui/comment'));
const ConfigProvider = () =>
  lazy(import(/* webpackChunkName: "configprovider" */ '@/components/ui/configprovider'));
const ContourBlock = () =>
  lazy(import(/* webpackChunkName: "contourblock" */ '@/components/ui/contourblock'));
const DateDisplay = () =>
  lazy(import(/* webpackChunkName: "datedisplay" */ '@/components/ui/datedisplay'));
const TableGridLayout = () =>
  lazy(import(/* webpackChunkName: "tablegridlayout" */ '@/components/ui/tablegridlayout'));
const WritingBoard = () =>
  lazy(import(/* webpackChunkName: "writingboard" */ '@/components/ui/writingboard'));

const Demo = () => lazy(import(/* webpackChunkName: "demo" */ '@/components/ui/demo'));

const Mixins = () => lazy(import(/* webpackChunkName: "mixins" */ '@/components/util/mixins'));
const Domain = () => lazy(import(/* webpackChunkName: "domain" */ '@/components/util/domain'));
const Resource = () =>
  lazy(import(/* webpackChunkName: "resource" */ '@/components/util/resource'));
const Browsersniff = () =>
  lazy(import(/* webpackChunkName: "browsersniff" */ '@/components/util/browsersniff'));
const Validator = () =>
  lazy(import(/* webpackChunkName: "validator" */ '@/components/util/validator'));
const IframeIO = () =>
  lazy(import(/* webpackChunkName: "iframeio" */ '@/components/util/iframeio'));

const Echarts = () =>
  lazy(import(/* webpackChunkName: "echarts" */ '@/components/gallery/echarts'));

import IframeServer from '@/components/util/iframeio/server';

export default () => [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        redirect: '/adherev/introduction',
      },
      {
        path: '/adherev/introduction',
        name: '简介',
        component: Introduction,
      },
      {
        path: '/adherev/changelog',
        name: '更新日志',
        component: Changelog,
      },
      {
        path: '/adherev/gallery',
        component: BasicLayout,
        children: [
          {
            path: '/',
            redirect: '/adherev/gallery/echarts',
          },
          {
            path: '/adherev/gallery/echarts',
            name: 'Echarts',
            component: Echarts,
          },
        ],
      },
      {
        path: '/adherev/component',
        component: BasicLayout,
        children: [
          {
            path: '/',
            redirect: '/adherev/component/ui',
          },
          {
            path: '/adherev/component/ui',
            name: 'UI',
            children: [
              {
                path: '/',
                redirect: '/adherev/component/ui/conditionalrender',
              },
              {
                path: '/adherev/component/ui/demo',
                name: 'Demo',
                component: Demo,
              },
              {
                path: '/adherev/component/ui/conditionalrender',
                name: 'ConditionalRender',
                component: ConditionalRender,
              },
              {
                path: '/adherev/component/ui/split',
                name: 'Split',
                component: Split,
              },
              {
                path: '/adherev/component/ui/space',
                name: 'Space',
                component: Space,
              },
              {
                path: '/adherev/component/ui/delconfirm',
                name: 'DelConfirm',
                component: DelConfirm,
              },
              {
                path: '/adherev/component/ui/importantconfirm',
                name: 'ImportantConfirm',
                component: ImportantConfirm,
              },
              {
                path: '/adherev/component/ui/globalindicator',
                name: 'GlobalIndicator',
                component: GlobalIndicator,
              },
              {
                path: '/adherev/component/ui/spin',
                name: 'Spin',
                component: Spin,
              },
              {
                path: '/adherev/component/ui/historyback',
                name: 'HistoryBack',
                component: HistoryBack,
              },
              {
                path: '/adherev/component/ui/successprompt',
                name: 'SuccessPrompt',
                component: SuccessPrompt,
              },
              {
                path: '/adherev/component/ui/errorprompt',
                name: 'ErrorPrompt',
                component: ErrorPrompt,
              },
              {
                path: '/adherev/component/ui/warnprompt',
                name: 'WarnPrompt',
                component: WarnPrompt,
              },
              {
                path: '/adherev/component/ui/imagelazy',
                name: 'ImageLazy',
                component: ImageLazy,
              },
              {
                path: '/adherev/component/ui/messagedialog',
                name: 'MessageDialog',
                component: MessageDialog,
              },
              {
                path: '/adherev/component/ui/permission',
                name: 'Permission',
                component: Permission,
              },
              {
                path: '/adherev/component/ui/suspense',
                name: 'Suspense',
                component: Suspense,
              },
              // {
              //   path: '/adherev/ui/tableheadsearch',
              //   name: 'TableHeadSearch',
              //   component: TableHeadSearch,
              // },
              {
                path: '/adherev/component/ui/css',
                name: 'CSS',
                component: CSS,
              },
              {
                path: '/adherev/component/ui/olmap',
                name: 'OLMap',
                component: OLMap,
              },
              {
                path: '/adherev/component/ui/flexlayout',
                name: 'FlexLayout',
                component: FlexLayout,
              },
              {
                path: '/adherev/component/ui/splitlayout',
                name: 'SplitLayout',
                component: SplitLayout,
              },
              {
                path: '/adherev/component/ui/stickuplayout',
                name: 'StickupLayout',
                component: StickupLayout,
              },
              {
                path: '/adherev/component/ui/surnames',
                name: 'Surnames',
                component: Surnames,
              },
              {
                path: '/adherev/component/ui/sliderscale',
                name: 'SliderScale',
                component: SliderScale,
              },
              {
                path: '/adherev/component/ui/revolving',
                name: 'Revolving',
                component: Revolving,
              },
              {
                path: '/adherev/component/ui/scrollload',
                name: 'ScrollLoad',
                component: ScrollLoad,
              },
              {
                path: '/adherev/component/ui/jdcategorytab',
                name: 'JDCategoryTab',
                component: JDCategoryTab,
              },
              {
                path: '/adherev/component/ui/cascadecompared',
                name: 'CascadeCompared',
                component: CascadeCompared,
              },
              {
                path: '/adherev/component/ui/slidelayout',
                name: 'SlideLayout',
                component: SlideLayout,
              },
              {
                path: '/adherev/component/ui/contextmenu',
                name: 'ContextMenu',
                component: ContextMenu,
              },
              {
                path: '/adherev/component/ui/fontsizesetting',
                name: 'FontSizeSetting',
                component: FontSizeSetting,
              },
              {
                path: '/adherev/component/ui/searchtable',
                name: 'SearchTable',
                component: SearchTable,
              },
              // {
              //   path: '/adherev/ui/formitemcreator',
              //   name: 'FormItemCreator',
              //   component: FormItemCreator,
              // },
              // {
              //   path: '/adherev/ui/tablelist',
              //   name: 'TableList',
              //   component: TableList,
              // },
              {
                path: '/adherev/component/ui/popup',
                name: 'Popup',
                component: Popup,
              },
              {
                path: '/adherev/component/ui/backtopanimation',
                name: 'BackTopAnimation',
                component: BackTopAnimation,
              },
              {
                path: '/adherev/component/ui/pullrefresh',
                name: 'PullRefresh',
                component: PullRefresh,
              },
              {
                path: '/adherev/component/ui/notification',
                name: 'Notification',
                component: Notification,
              },
              {
                path: '/adherev/component/ui/swipeout',
                name: 'SwipeOut',
                component: SwipeOut,
              },
              {
                path: '/adherev/component/ui/polygonselection',
                name: 'PolygonSelection',
                component: PolygonSelection,
              },
              {
                path: '/adherev/component/ui/PlayGround',
                name: 'PlayGround',
                component: PlayGround,
              },
              {
                path: '/adherev/component/ui/bmap',
                name: 'BMap',
                component: BMap,
              },
              {
                path: '/adherev/component/ui/teleport',
                name: 'Teleport',
                component: Teleport,
              },
              {
                path: '/adherev/component/ui/comment',
                name: 'Comment',
                component: Comment,
              },
              {
                path: '/adherev/component/ui/configprovider',
                name: 'ConfigProvider',
                component: ConfigProvider,
              },
              {
                path: '/adherev/component/ui/contourblock',
                name: 'ContourBlock',
                component: ContourBlock,
              },
              {
                path: '/adherev/component/ui/datedisplay',
                name: 'DateDisplay',
                component: DateDisplay,
              },
              {
                path: '/adherev/component/ui/tablegridlayout',
                name: 'TableGridLayout',
                component: TableGridLayout,
              },
              {
                path: '/adherev/component/ui/writingboard',
                name: 'WritingBoard',
                component: WritingBoard,
              },
            ],
          },
          {
            path: '/adherev/component/util',
            name: 'Util',
            children: [
              {
                path: '/',
                redirect: '/adherev/component/util/adapterscreen',
              },
              {
                path: '/adherev/component/util/adapterscreen',
                name: 'AdapterScreen',
                component: AdapterScreen,
              },
              // {
              //   path: '/adherev/util/decorators',
              //   name: 'Decorators',
              //   component: Decorators,
              // },
              {
                path: '/adherev/component/util/dict',
                name: 'Dict',
                component: Dict,
              },
              {
                path: '/adherev/component/util/emitter',
                name: 'Emitter',
                component: Emitter,
              },
              {
                path: '/adherev/component/util/preferences',
                name: 'Preferences',
                component: Preferences,
              },
              {
                path: '/adherev/component/util/intl',
                name: 'Intl',
                component: Intl,
              },
              {
                path: '/adherev/component/util/notnull',
                name: 'NotNull',
                component: NotNull,
              },
              {
                path: '/adherev/component/util/util',
                name: 'Util',
                component: Util,
              },
              {
                path: '/adherev/component/util/watchmemoized',
                name: 'WatchMemoized',
                component: WatchMemoized,
              },
              {
                path: '/adherev/component/util/ajax',
                name: 'Ajax',
                component: Ajax,
              },
              {
                path: '/adherev/component/util/mixins',
                name: 'Mixins',
                component: Mixins,
              },
              {
                path: '/adherev/component/util/domain',
                name: 'Domain',
                component: Domain,
              },
              {
                path: '/adherev/component/util/resource',
                name: 'Resource',
                component: Resource,
              },
              {
                path: '/adherev/component/util/browsersniff',
                name: 'Browsersniff',
                component: Browsersniff,
              },
              {
                path: '/adherev/component/util/validator',
                name: 'Validator',
                component: Validator,
              },
              {
                path: '/adherev/component/util/iframeio',
                name: 'IframeIO',
                component: IframeIO,
              },
            ],
          },
          // {
          //   path: '/adherev/gallery',
          //   name: 'Gallery',
          //   children: [
          //     {
          //       path: '/',
          //       redirect: '/adherev/gallery/echarts',
          //     },
          //     {
          //       path: '/adherev/gallery/echarts',
          //       name: 'Echarts',
          //       component: Echarts,
          //     },
          //     {
          //       path: '/adherev/gallery/gis',
          //       name: 'GIS',
          //       children: [
          //         {
          //           path: '/',
          //           redirect: '/adherev/gallery/gis/maptalks',
          //         },
          //         {
          //           path: '/adherev/gallery/gis/maptalks',
          //           name: 'MapTalks',
          //           component: MapTalks,
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
      },
    ],
  },
  {
    path: '/iframeServer',
    component: IframeServer,
  },
];
