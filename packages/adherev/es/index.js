import BackTopAnimation from"@baifendian/adherev-ui-backtopanimation";import CascadeCompared from"@baifendian/adherev-ui-cascadecompared";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import DelConfirm from"@baifendian/adherev-ui-confirm-delconfirm";import ImportantConfirm from"@baifendian/adherev-ui-confirm-importantconfirm";import ContextMenu from"@baifendian/adherev-ui-contextmenu";import FlexLayout from"@baifendian/adherev-ui-flexlayout";import FontSizeSetting from"@baifendian/adherev-ui-fontsizesetting";import GlobalIndicator from"@baifendian/adherev-ui-globalindicator";import HistoryBack from"@baifendian/adherev-ui-historyback";import ImageLazy from"@baifendian/adherev-ui-imagelazy";import JdCategoryTab from"@baifendian/adherev-ui-jdcategorytab";import MessageDialog from"@baifendian/adherev-ui-messagedialog";import Notification from"@baifendian/adherev-ui-notification";import OLMap from"@baifendian/adherev-ui-olmap";import Permission from"@baifendian/adherev-ui-permission";import PlayGround from"@baifendian/adherev-ui-playground";import PolygonSelection from"@baifendian/adherev-ui-polygonselection";import Popup from"@baifendian/adherev-ui-popup";import ErrorPrompt from"@baifendian/adherev-ui-prompt-errorprompt";import SuccessPrompt from"@baifendian/adherev-ui-prompt-successprompt";import WarnPrompt from"@baifendian/adherev-ui-prompt-warnprompt";import PullRefresh from"@baifendian/adherev-ui-pullrefresh";import Revolving from"@baifendian/adherev-ui-revolving";import ScrollLoad from"@baifendian/adherev-ui-scrollload";import SearchTable from"@baifendian/adherev-ui-searchtable";import SlideLayout from"@baifendian/adherev-ui-slidelayout";import SliderScale from"@baifendian/adherev-ui-sliderscale";import Space from"@baifendian/adherev-ui-space";import Spin from"@baifendian/adherev-ui-spin";import Split from"@baifendian/adherev-ui-split";import SplitLayout from"@baifendian/adherev-ui-splitlayout";import StickupLayout from"@baifendian/adherev-ui-stickuplayout";import Surnames from"@baifendian/adherev-ui-surnames";import Suspense from"@baifendian/adherev-ui-suspense";import SwipeOut from"@baifendian/adherev-ui-swipeout";import Comment from"@baifendian/adherev-ui-comment";import ConfigProvider from"@baifendian/adherev-ui-configprovider";import ContourBlock from"@baifendian/adherev-ui-contourblock";import DateDisplay from"@baifendian/adherev-ui-datedisplay";import TableGridLayout from"@baifendian/adherev-ui-tablegridlayout";import WritingBoard from"@baifendian/adherev-ui-writingboard";import Hooks from"@baifendian/adherev-ui-hooks";import Util from"@baifendian/adherev-util";import AdapterScreen from"@baifendian/adherev-util-adapterscreen";import Browsersniff from"@baifendian/adherev-util-browsersniff";import Ajax from"@baifendian/adherev-util-communication-ajax";import Dict from"@baifendian/adherev-util-dict";import Domain from"@baifendian/adherev-util-domain";import Emitter from"@baifendian/adherev-util-emitter";import Intl from"@baifendian/adherev-util-intl";import Mixins from"@baifendian/adherev-util-mixins";import NotNull from"@baifendian/adherev-util-notnull";import Preferences from"@baifendian/adherev-util-preferences";import Resource from"@baifendian/adherev-util-resource";import Validator from"@baifendian/adherev-util-validator";import WatchMemoized from"@baifendian/adherev-util-watchmemoized";import IframeIO from"@baifendian/adherev-util-iframeio";export default{install:function(e){var i;null!=(i=BackTopAnimation)&&i.isUse()&&null!=(i=BackTopAnimation)&&i.use(e),null!=(i=CascadeCompared)&&i.isUse()&&null!=(i=CascadeCompared)&&i.use(e),null!=(i=ConditionalRender)&&i.isUse()&&null!=(i=ConditionalRender)&&i.use(e),null!=(i=DelConfirm)&&i.isUse()&&null!=(i=DelConfirm)&&i.use(e),null!=(i=ImportantConfirm)&&i.isUse()&&null!=(i=ImportantConfirm)&&i.use(e),null!=(i=ContextMenu)&&i.isUse()&&null!=(i=ContextMenu)&&i.use(e),null!=(i=FlexLayout)&&i.isUse()&&null!=(i=FlexLayout)&&i.use(e),null!=(i=FontSizeSetting)&&i.isUse()&&null!=(i=FontSizeSetting)&&i.use(e),null!=(i=GlobalIndicator)&&i.isUse()&&null!=(i=GlobalIndicator)&&i.use(e),null!=(i=HistoryBack)&&i.isUse()&&null!=(i=HistoryBack)&&i.use(e),null!=(i=ImageLazy)&&i.isUse()&&null!=(i=ImageLazy)&&i.use(e),null!=(i=JdCategoryTab)&&i.isUse()&&null!=(i=JdCategoryTab)&&i.use(e),null!=(i=MessageDialog)&&i.isUse()&&null!=(i=MessageDialog)&&i.use(e),null!=(i=Notification)&&i.isUse()&&null!=(i=Notification)&&i.use(e),null!=(i=OLMap)&&i.isUse()&&null!=(i=OLMap)&&i.use(e),null!=(i=Permission)&&i.isUse()&&null!=(i=Permission)&&i.use(e),null!=(i=PlayGround)&&i.isUse()&&null!=(i=PlayGround)&&i.use(e),null!=(i=PolygonSelection)&&i.isUse()&&null!=(i=PolygonSelection)&&i.use(e),null!=(i=Popup)&&i.isUse()&&null!=(i=Popup)&&i.use(e),null!=(i=ErrorPrompt)&&i.isUse()&&null!=(i=ErrorPrompt)&&i.use(e),null!=(i=SuccessPrompt)&&i.isUse()&&null!=(i=SuccessPrompt)&&i.use(e),null!=(i=WarnPrompt)&&i.isUse()&&null!=(i=WarnPrompt)&&i.use(e),null!=(i=PullRefresh)&&i.isUse()&&null!=(i=PullRefresh)&&i.use(e),null!=(i=Revolving)&&i.isUse()&&null!=(i=Revolving)&&i.use(e),null!=(i=ScrollLoad)&&i.isUse()&&null!=(i=ScrollLoad)&&i.use(e),null!=(i=SearchTable)&&i.isUse()&&null!=(i=SearchTable)&&i.use(e),null!=(i=SlideLayout)&&i.isUse()&&null!=(i=SlideLayout)&&i.use(e),null!=(i=SliderScale)&&i.isUse()&&null!=(i=SliderScale)&&i.use(e),null!=(i=Space)&&i.isUse()&&null!=(i=Space)&&i.use(e),null!=(i=Spin)&&i.isUse()&&null!=(i=Spin)&&i.use(e),null!=(i=Split)&&i.isUse()&&null!=(i=Split)&&i.use(e),null!=(i=SplitLayout)&&i.isUse()&&null!=(i=SplitLayout)&&i.use(e),null!=(i=StickupLayout)&&i.isUse()&&null!=(i=StickupLayout)&&i.use(e),null!=(i=Surnames)&&i.isUse()&&null!=(i=Surnames)&&i.use(e),null!=(i=Suspense)&&i.isUse()&&null!=(i=Suspense)&&i.use(e),null!=(i=SwipeOut)&&i.isUse()&&null!=(i=SwipeOut)&&i.use(e),null!=(i=Comment)&&i.isUse()&&null!=(i=Comment)&&i.use(e),null!=(i=ConfigProvider)&&i.isUse()&&null!=(i=ConfigProvider)&&i.use(e),null!=(i=ContourBlock)&&i.isUse()&&null!=(i=ContourBlock)&&i.use(e),null!=(i=DateDisplay)&&i.isUse()&&null!=(i=DateDisplay)&&i.use(e),null!=(i=TableGridLayout)&&i.isUse()&&null!=(i=TableGridLayout)&&i.use(e),null!=(i=WritingBoard)&&i.isUse()&&null!=(i=WritingBoard)&&i.use(e),null!=(i=Hooks)&&i.isUse()&&null!=(i=Hooks)&&i.use(e),null!=(i=Util)&&i.isUse()&&null!=(i=Util)&&i.use(e),null!=(i=AdapterScreen)&&i.isUse()&&null!=(i=AdapterScreen)&&i.use(e),null!=(i=Browsersniff)&&i.isUse()&&null!=(i=Browsersniff)&&i.use(e),null!=(i=Ajax)&&i.isUse()&&null!=(i=Ajax)&&i.use(e),null!=(i=Dict)&&i.isUse()&&null!=(i=Dict)&&i.use(e),null!=(i=Domain)&&i.isUse()&&null!=(i=Domain)&&i.use(e),null!=(i=Emitter)&&i.isUse()&&null!=(i=Emitter)&&i.use(e),null!=(i=Intl)&&i.isUse()&&null!=(i=Intl)&&i.use(e),null!=(i=Mixins)&&i.isUse()&&null!=(i=Mixins)&&i.use(e),null!=(i=NotNull)&&i.isUse()&&null!=(i=NotNull)&&i.use(e),null!=(i=Preferences)&&i.isUse()&&null!=(i=Preferences)&&i.use(e),null!=(i=Resource)&&i.isUse()&&null!=(i=Resource)&&i.use(e),null!=(i=Validator)&&i.isUse()&&null!=(i=Validator)&&i.use(e),null!=(i=WatchMemoized)&&i.isUse()&&null!=(i=WatchMemoized)&&i.use(e),null!=(i=IframeIO)&&i.isUse()&&null!=(i=IframeIO)&&i.use(e)}};export{BackTopAnimation,CascadeCompared,ConditionalRender,DelConfirm,ImportantConfirm,ContextMenu,FlexLayout,FontSizeSetting,GlobalIndicator,HistoryBack,ImageLazy,JdCategoryTab,MessageDialog,Notification,OLMap,Permission,PlayGround,PolygonSelection,Popup,ErrorPrompt,SuccessPrompt,WarnPrompt,PullRefresh,Revolving,ScrollLoad,SearchTable,SlideLayout,SliderScale,Space,Spin,Split,SplitLayout,StickupLayout,Surnames,Suspense,SwipeOut,Comment,ConfigProvider,ContourBlock,DateDisplay,TableGridLayout,WritingBoard,Hooks,Util,AdapterScreen,Browsersniff,Ajax,Dict,Domain,Emitter,Intl,Mixins,NotNull,Preferences,Resource,Validator,WatchMemoized,IframeIO};
//# sourceMappingURL=index.js.map
