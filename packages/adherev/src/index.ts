import {App} from 'vue';import AntdvFormItem from '@baifendian/adherev-ui-antdvformitem';
import BackTopAnimation from '@baifendian/adherev-ui-backtopanimation';
import CascadeCompared from '@baifendian/adherev-ui-cascadecompared';
import Comment from '@baifendian/adherev-ui-comment';
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import ConfigProvider from '@baifendian/adherev-ui-configprovider';
import DelConfirm from '@baifendian/adherev-ui-confirm-delconfirm';
import ImportantConfirm from '@baifendian/adherev-ui-confirm-importantconfirm';
import ContextMenu from '@baifendian/adherev-ui-contextmenu';
import ContourBlock from '@baifendian/adherev-ui-contourblock';
import DateDisplay from '@baifendian/adherev-ui-datedisplay';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import FontSizeSetting from '@baifendian/adherev-ui-fontsizesetting';
import GlobalIndicator from '@baifendian/adherev-ui-globalindicator';
import HistoryBack from '@baifendian/adherev-ui-historyback';
import Hooks from '@baifendian/adherev-ui-hooks';
import ImageLazy from '@baifendian/adherev-ui-imagelazy';
import JdCategoryTab from '@baifendian/adherev-ui-jdcategorytab';
import MessageDialog from '@baifendian/adherev-ui-messagedialog';
import Notification from '@baifendian/adherev-ui-notification';
import OLMap from '@baifendian/adherev-ui-olmap';
import Permission from '@baifendian/adherev-ui-permission';
import PlayGround from '@baifendian/adherev-ui-playground';
import PolygonSelection from '@baifendian/adherev-ui-polygonselection';
import Popup from '@baifendian/adherev-ui-popup';
import ErrorPrompt from '@baifendian/adherev-ui-prompt-errorprompt';
import SuccessPrompt from '@baifendian/adherev-ui-prompt-successprompt';
import WarnPrompt from '@baifendian/adherev-ui-prompt-warnprompt';
import PullRefresh from '@baifendian/adherev-ui-pullrefresh';
import Revolving from '@baifendian/adherev-ui-revolving';
import ScrollLoad from '@baifendian/adherev-ui-scrollload';
import SearchTable from '@baifendian/adherev-ui-searchtable';
import SlideLayout from '@baifendian/adherev-ui-slidelayout';
import SliderScale from '@baifendian/adherev-ui-sliderscale';
import Space from '@baifendian/adherev-ui-space';
import Spin from '@baifendian/adherev-ui-spin';
import Split from '@baifendian/adherev-ui-split';
import SplitLayout from '@baifendian/adherev-ui-splitlayout';
import StickupLayout from '@baifendian/adherev-ui-stickuplayout';
import Surnames from '@baifendian/adherev-ui-surnames';
import Suspense from '@baifendian/adherev-ui-suspense';
import SwipeOut from '@baifendian/adherev-ui-swipeout';
import TableGridLayout from '@baifendian/adherev-ui-tablegridlayout';
import VueQuillSandBox from '@baifendian/adherev-ui-vuequill-sandbox';
import WritingBoard from '@baifendian/adherev-ui-writingboard';
import Util from '@baifendian/adherev-util';
import AdapterScreen from '@baifendian/adherev-util-adapterscreen';
import Browsersniff from '@baifendian/adherev-util-browsersniff';
import Ajax from '@baifendian/adherev-util-communication-ajax';
import Dict from '@baifendian/adherev-util-dict';
import Domain from '@baifendian/adherev-util-domain';
import Emitter from '@baifendian/adherev-util-emitter';
import IframeIO from '@baifendian/adherev-util-iframeio';
import Intl from '@baifendian/adherev-util-intl';
import Mixins from '@baifendian/adherev-util-mixins';
import NotNull from '@baifendian/adherev-util-notnull';
import Preferences from '@baifendian/adherev-util-preferences';
import Resource from '@baifendian/adherev-util-resource';
import Validator from '@baifendian/adherev-util-validator';
import WatchMemoized from '@baifendian/adherev-util-watchmemoized';

export { 
  AntdvFormItem,
  BackTopAnimation,
  CascadeCompared,
  Comment,
  ConditionalRender,
  ConfigProvider,
  DelConfirm,
  ImportantConfirm,
  ContextMenu,
  ContourBlock,
  DateDisplay,
  FlexLayout,
  FontSizeSetting,
  GlobalIndicator,
  HistoryBack,
  Hooks,
  ImageLazy,
  JdCategoryTab,
  MessageDialog,
  Notification,
  OLMap,
  Permission,
  PlayGround,
  PolygonSelection,
  Popup,
  ErrorPrompt,
  SuccessPrompt,
  WarnPrompt,
  PullRefresh,
  Revolving,
  ScrollLoad,
  SearchTable,
  SlideLayout,
  SliderScale,
  Space,
  Spin,
  Split,
  SplitLayout,
  StickupLayout,
  Surnames,
  Suspense,
  SwipeOut,
  TableGridLayout,
  VueQuillSandBox,
  WritingBoard,
  Util,
  AdapterScreen,
  Browsersniff,
  Ajax,
  Dict,
  Domain,
  Emitter,
  IframeIO,
  Intl,
  Mixins,
  NotNull,
  Preferences,
  Resource,
  Validator,
  WatchMemoized,
};

export default {
	install:function (app:App){
	if(

(AntdvFormItem as any)?.install()){ 

app?.use?.(AntdvFormItem); }
		if(

(BackTopAnimation as any)?.install()){ 

app?.use?.(BackTopAnimation); }
		if(

(CascadeCompared as any)?.install()){ 

app?.use?.(CascadeCompared); }
		if(

(Comment as any)?.install()){ 

app?.use?.(Comment); }
		if(

(ConditionalRender as any)?.install()){ 

app?.use?.(ConditionalRender); }
		if(

(ConfigProvider as any)?.install()){ 

app?.use?.(ConfigProvider); }
		if(

(DelConfirm as any)?.install()){ 

app?.use?.(DelConfirm); }
		if(

(ImportantConfirm as any)?.install()){ 

app?.use?.(ImportantConfirm); }
		if(

(ContextMenu as any)?.install()){ 

app?.use?.(ContextMenu); }
		if(

(ContourBlock as any)?.install()){ 

app?.use?.(ContourBlock); }
		if(

(DateDisplay as any)?.install()){ 

app?.use?.(DateDisplay); }
		if(

(FlexLayout as any)?.install()){ 

app?.use?.(FlexLayout); }
		if(

(FontSizeSetting as any)?.install()){ 

app?.use?.(FontSizeSetting); }
		if(

(GlobalIndicator as any)?.install()){ 

app?.use?.(GlobalIndicator); }
		if(

(HistoryBack as any)?.install()){ 

app?.use?.(HistoryBack); }
		if(

(Hooks as any)?.install()){ 

app?.use?.(Hooks); }
		if(

(ImageLazy as any)?.install()){ 

app?.use?.(ImageLazy); }
		if(

(JdCategoryTab as any)?.install()){ 

app?.use?.(JdCategoryTab); }
		if(

(MessageDialog as any)?.install()){ 

app?.use?.(MessageDialog); }
		if(

(Notification as any)?.install()){ 

app?.use?.(Notification); }
		if(

(OLMap as any)?.install()){ 

app?.use?.(OLMap); }
		if(

(Permission as any)?.install()){ 

app?.use?.(Permission); }
		if(

(PlayGround as any)?.install()){ 

app?.use?.(PlayGround); }
		if(

(PolygonSelection as any)?.install()){ 

app?.use?.(PolygonSelection); }
		if(

(Popup as any)?.install()){ 

app?.use?.(Popup); }
		if(

(ErrorPrompt as any)?.install()){ 

app?.use?.(ErrorPrompt); }
		if(

(SuccessPrompt as any)?.install()){ 

app?.use?.(SuccessPrompt); }
		if(

(WarnPrompt as any)?.install()){ 

app?.use?.(WarnPrompt); }
		if(

(PullRefresh as any)?.install()){ 

app?.use?.(PullRefresh); }
		if(

(Revolving as any)?.install()){ 

app?.use?.(Revolving); }
		if(

(ScrollLoad as any)?.install()){ 

app?.use?.(ScrollLoad); }
		if(

(SearchTable as any)?.install()){ 

app?.use?.(SearchTable); }
		if(

(SlideLayout as any)?.install()){ 

app?.use?.(SlideLayout); }
		if(

(SliderScale as any)?.install()){ 

app?.use?.(SliderScale); }
		if(

(Space as any)?.install()){ 

app?.use?.(Space); }
		if(

(Spin as any)?.install()){ 

app?.use?.(Spin); }
		if(

(Split as any)?.install()){ 

app?.use?.(Split); }
		if(

(SplitLayout as any)?.install()){ 

app?.use?.(SplitLayout); }
		if(

(StickupLayout as any)?.install()){ 

app?.use?.(StickupLayout); }
		if(

(Surnames as any)?.install()){ 

app?.use?.(Surnames); }
		if(

(Suspense as any)?.install()){ 

app?.use?.(Suspense); }
		if(

(SwipeOut as any)?.install()){ 

app?.use?.(SwipeOut); }
		if(

(TableGridLayout as any)?.install()){ 

app?.use?.(TableGridLayout); }
		if(

(VueQuillSandBox as any)?.install()){ 

app?.use?.(VueQuillSandBox); }
		if(

(WritingBoard as any)?.install()){ 

app?.use?.(WritingBoard); }
		if(

(Util as any)?.install()){ 

app?.use?.(Util); }
		if(

(AdapterScreen as any)?.install()){ 

app?.use?.(AdapterScreen); }
		if(

(Browsersniff as any)?.install()){ 

app?.use?.(Browsersniff); }
		if(

(Ajax as any)?.install()){ 

app?.use?.(Ajax); }
		if(

(Dict as any)?.install()){ 

app?.use?.(Dict); }
		if(

(Domain as any)?.install()){ 

app?.use?.(Domain); }
		if(

(Emitter as any)?.install()){ 

app?.use?.(Emitter); }
		if(

(IframeIO as any)?.install()){ 

app?.use?.(IframeIO); }
		if(

(Intl as any)?.install()){ 

app?.use?.(Intl); }
		if(

(Mixins as any)?.install()){ 

app?.use?.(Mixins); }
		if(

(NotNull as any)?.install()){ 

app?.use?.(NotNull); }
		if(

(Preferences as any)?.install()){ 

app?.use?.(Preferences); }
		if(

(Resource as any)?.install()){ 

app?.use?.(Resource); }
		if(

(Validator as any)?.install()){ 

app?.use?.(Validator); }
		if(

(WatchMemoized as any)?.install()){ 

app?.use?.(WatchMemoized); }
		},
};