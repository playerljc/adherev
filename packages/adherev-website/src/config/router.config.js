import BasicLayout from '@/lib/BasicLayout';
import { lazy } from '@/lib/Router';

// const Split = lazy(() => import(/* webpackChunkName: "split" */ '@/components/ui/split'));
// const ConditionalRender = lazy(() =>
//   import(/* webpackChunkName: "conditionalrender" */ '@/components/ui/conditionalrender'),
// );
// const ImageLazy = lazy(() =>
//   import(/* webpackChunkName: "imagelazy" */ '@/components/ui/imagelazy'),
// );
// const Suspense = lazy(() => import(/* webpackChunkName: "suspense" */ '@/components/ui/suspense'));
// const TableHeadSearch = lazy(() =>
//   import(/* webpackChunkName: "tableheadsearch" */ '@/components/ui/tableheadsearch'),
// );
// const CSS = lazy(() => import(/* webpackChunkName: "css" */ '@/components/ui/css'));
// const OLMap = lazy(() => import(/* webpackChunkName: "olmap" */ '@/components/ui/olmap'));
// const FlexLayout = lazy(() =>
//   import(/* webpackChunkName: "flexlayout" */ '@/components/ui/flexlayout'),
// );
// const SplitLayout = lazy(() =>
//   import(/* webpackChunkName: "splitlayout" */ '@/components/ui/splitlayout'),
// );
// const StickupLayout = lazy(() =>
//   import(/* webpackChunkName: "stickuplayout" */ '@/components/ui/stickuplayout'),
// );
// const Surnames = lazy(() => import(/* webpackChunkName: "surnames" */ '@/components/ui/surnames'));
// const SliderScale = lazy(() =>
//   import(/* webpackChunkName: "sliderscale" */ '@/components/ui/sliderscale'),
// );
// const Revolving = lazy(() =>
//   import(/* webpackChunkName: "revolving" */ '@/components/ui/revolving'),
// );
// const ScrollLoad = lazy(() =>
//   import(/* webpackChunkName: "scrollload" */ '@/components/ui/scrollload'),
// );
// const JCategoryTab = lazy(() =>
//   import(/* webpackChunkName: "jcategorytab" */ '@/components/ui/jdcategorytab'),
// );
// const CascadeCompared = lazy(() =>
//   import(/* webpackChunkName: "cascadecompared" */ '@/components/ui/cascadecompared'),
// );
// const SlideLayout = lazy(() =>
//   import(/* webpackChunkName: "slidelayout" */ '@/components/ui/slidelayout'),
// );
// const ContextMenu = lazy(() =>
//   import(/* webpackChunkName: "contextmenu" */ '@/components/ui/contextmenu'),
// );
// const FontSizeSetting = lazy(() =>
//   import(/* webpackChunkName: "fontsizesetting" */ '@/components/ui/fontsizesetting'),
// );
// const SearchTable = lazy(() =>
//   import(/* webpackChunkName: "searchtable" */ '@/components/ui/searchtable'),
// );
// const FormItemCreator = lazy(() =>
//   import(/* webpackChunkName: "formitemcreator" */ '@/components/ui/formitemcreator'),
// );
// const TableList = lazy(() =>
//   import(/* webpackChunkName: "tablelist" */ '@/components/ui/tablelist'),
// );
// const Popup = lazy(() => import(/* webpackChunkName: "popup" */ '@/components/ui/popup'));
// const BackTopAnimation = lazy(() =>
//   import(/* webpackChunkName: "backtopanimation" */ '@/components/ui/backtopanimation'),
// );
// const PullRefresh = lazy(() =>
//   import(/* webpackChunkName: "pullrefresh" */ '@/components/ui/pullrefresh'),
// );
// const Notification = lazy(() =>
//   import(/* webpackChunkName: "notification" */ '@/components/ui/notification'),
// );
// const SwipeOut = lazy(() => import(/* webpackChunkName: "swipeout" */ '@/components/ui/swipeout'));
//
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
const HistoryBack = () =>
  lazy(import(/* webpackChunkName: "historyback" */ '@/components/ui/historyback'));

export default () => [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        redirect: '/adherev',
      },
      {
        path: '/adherev',
        component: BasicLayout,
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
            path: '/adherev/ui',
            name: 'UI',
            children: [
              {
                path: '/',
                redirect: '/adherev/ui/conditionalrender',
              },
              {
                path: '/adherev/ui/conditionalrender',
                name: 'ConditionalRender',
                component: ConditionalRender,
              },
              // {
              //   path: '/',
              //   redirect: '/adherev/ui/split',
              // },
              // {
              //   path: '/adherev/ui/split',
              //   name: 'Split',
              //   component: Split,
              // },
              {
                path: '/adherev/ui/space',
                name: 'Space',
                component: Space,
              },
              {
                path: '/adherev/ui/delconfirm',
                name: 'DelConfirm',
                component: DelConfirm,
              },
              {
                path: '/adherev/ui/importantconfirm',
                name: 'ImportantConfirm',
                component: ImportantConfirm,
              },
              {
                path: '/adherev/ui/globalindicator',
                name: 'GlobalIndicator',
                component: GlobalIndicator,
              },
              {
                path: '/adherev/ui/spin',
                name: 'Spin',
                component: Spin,
              },
              {
                path: '/adherev/ui/historyback',
                name: 'HistoryBack',
                component: HistoryBack,
              },
              {
                path: '/adherev/ui/successprompt',
                name: 'SuccessPrompt',
                component: SuccessPrompt,
              },
              {
                path: '/adherev/ui/errorprompt',
                name: 'ErrorPrompt',
                component: ErrorPrompt,
              },
              {
                path: '/adherev/ui/warnprompt',
                name: 'WarnPrompt',
                component: WarnPrompt,
              },
              // {
              //   path: '/adherev/ui/imagelazy',
              //   name: 'ImageLazy',
              //   component: ImageLazy,
              // },
              {
                path: '/adherev/ui/messagedialog',
                name: 'MessageDialog',
                component: MessageDialog,
              },
              {
                path: '/adherev/ui/permission',
                name: 'Permission',
                component: Permission,
              },
              // {
              //   path: '/adherev/ui/suspense',
              //   name: 'Suspense',
              //   component: Suspense,
              // },
              // {
              //   path: '/adherev/ui/tableheadsearch',
              //   name: 'TableHeadSearch',
              //   component: TableHeadSearch,
              // },
              // {
              //   path: '/adherev/ui/css',
              //   name: 'CSS',
              //   component: CSS,
              // },
              // {
              //   path: '/adherev/ui/olmap',
              //   name: 'OLMap',
              //   component: OLMap,
              // },
              // {
              //   path: '/adherev/ui/flexlayout',
              //   name: 'FlexLayout',
              //   component: FlexLayout,
              // },
              // {
              //   path: '/adherev/ui/splitlayout',
              //   name: 'SplitLayout',
              //   component: SplitLayout,
              // },
              // {
              //   path: '/adherev/ui/stickuplayout',
              //   name: 'StickupLayout',
              //   component: StickupLayout,
              // },
              // {
              //   path: '/adherev/ui/surnames',
              //   name: 'Surnames',
              //   component: Surnames,
              // },
              // {
              //   path: '/adherev/ui/sliderscale',
              //   name: 'SliderScale',
              //   component: SliderScale,
              // },
              // {
              //   path: '/adherev/ui/revolving',
              //   name: 'Revolving',
              //   component: Revolving,
              // },
              // {
              //   path: '/adherev/ui/scrollload',
              //   name: 'ScrollLoad',
              //   component: ScrollLoad,
              // },
              // {
              //   path: '/adherev/ui/jcategorytab',
              //   name: 'JCategoryTab',
              //   component: JCategoryTab,
              // },
              // {
              //   path: '/adherev/ui/cascadecompared',
              //   name: 'CascadeCompared',
              //   component: CascadeCompared,
              // },
              // {
              //   path: '/adherev/ui/slidelayout',
              //   name: 'SlideLayout',
              //   component: SlideLayout,
              // },
              // {
              //   path: '/adherev/ui/contextmenu',
              //   name: 'ContextMenu',
              //   component: ContextMenu,
              // },
              // {
              //   path: '/adherev/ui/fontsizesetting',
              //   name: 'FontSizeSetting',
              //   component: FontSizeSetting,
              // },
              // {
              //   path: '/adherev/ui/searchtable',
              //   name: 'SearchTable',
              //   component: SearchTable,
              // },
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
              // {
              //   path: '/adherev/ui/popup',
              //   name: 'Popup',
              //   component: Popup,
              // },
              // {
              //   path: '/adherev/ui/backtopanimation',
              //   name: 'BackTopAnimation',
              //   component: BackTopAnimation,
              // },
              // {
              //   path: '/adherev/ui/pullrefresh',
              //   name: 'PullRefresh',
              //   component: PullRefresh,
              // },
              // {
              //   path: '/adherev/ui/notification',
              //   name: 'Notification',
              //   component: Notification,
              // },
              // {
              //   path: '/adherev/ui/swipeout',
              //   name: 'SwipeOut',
              //   component: SwipeOut,
              // },
            ],
          },
          {
            path: '/adherev/util',
            name: 'Util',
            children: [
              {
                path: '/',
                redirect: '/adherev/util/adapterscreen',
              },
              {
                path: '/adherev/util/adapterscreen',
                name: 'AdapterScreen',
                component: AdapterScreen,
              },
              // {
              //   path: '/adherev/util/decorators',
              //   name: 'Decorators',
              //   component: Decorators,
              // },
              {
                path: '/adherev/util/dict',
                name: 'Dict',
                component: Dict,
              },
              {
                path: '/adherev/util/emitter',
                name: 'Emitter',
                component: Emitter,
              },
              {
                path: '/adherev/util/preferences',
                name: 'Preferences',
                component: Preferences,
              },
              {
                path: '/adherev/util/intl',
                name: 'Intl',
                component: Intl,
              },
              {
                path: '/adherev/util/notnull',
                name: 'NotNull',
                component: NotNull,
              },
              {
                path: '/adherev/util/util',
                name: 'Util',
                component: Util,
              },
              {
                path: '/adherev/util/watchmemoized',
                name: 'WatchMemoized',
                component: WatchMemoized,
              },
              {
                path: '/adherev/util/ajax',
                name: 'Ajax',
                component: Ajax,
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
];
