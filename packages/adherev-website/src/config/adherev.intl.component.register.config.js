import Vue from 'vue';

import {
  AdapterScreen,
  Ajax,
  BMap,
  BackTopAnimation,
  Browsersniff,
  CascadeCompared,
  Comment,
  ConditionalRender,
  ContextMenu,
  ContourBlock,
  DateDisplay,
  DelConfirm,
  Dict,
  Domain,
  Emitter,
  ErrorPrompt,
  FlexLayout,
  FontSizeSetting,
  GlobalIndicator,
  HistoryBack,
  IframeIO,
  ImageLazy,
  ImportantConfirm,
  Intl,
  JdCategoryTab,
  MessageDialog,
  NotNull,
  Notification,
  OLMap,
  Permission,
  PlayGround,
  PolygonSelection,
  Popup,
  Preferences,
  PullRefresh,
  Resource,
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
  SuccessPrompt,
  Surnames,
  Suspense,
  SwipeOut,
  TableGridLayout,
  Teleport,
  Util,
  Validator,
  WarnPrompt,
  WatchMemoized,
  WritingBoard,
} from '@baifendian/adherev';

const register = [
  () => {
    ConditionalRender.use(Vue);
    DelConfirm.use(Vue);
    ImportantConfirm.use(Vue);
    Permission.use(Vue);
    Intl.use(Vue);
    MessageDialog.use(Vue);
    Space.use(Vue);
    Spin.use(Vue);
    Split.use(Vue);
    Suspense.use(Vue);
    FlexLayout.use(Vue);
    SearchTable.use(Vue);
    OLMap.use(Vue);
    BackTopAnimation.use(Vue);
    SplitLayout.use(Vue);
    ScrollLoad.use(Vue);
    SlideLayout.use(Vue);
    PullRefresh.use(Vue);
    Revolving.use(Vue);
    SuccessPrompt.use(Vue);
    ErrorPrompt.use(Vue);
    WarnPrompt.use(Vue);
    SliderScale.use(Vue);
    StickupLayout.use(Vue);
    Surnames.use(Vue);
    CascadeCompared.use(Vue);
    SwipeOut.use(Vue);
    FontSizeSetting.use(Vue);
    JdCategoryTab.use(Vue);
    ImageLazy.use(Vue);
    BMap.use(Vue);
    PlayGround.use(Vue);
    ContextMenu.use(Vue);
    GlobalIndicator.use(Vue);
    HistoryBack.use(Vue);
    Notification.use(Vue);
    PolygonSelection.use(Vue);
    Popup.use(Vue);
    Teleport.use(Vue);
    AdapterScreen.use(Vue);
    Browsersniff.use(Vue);
    Ajax.use(Vue);
    Dict.use(Vue);
    Domain.use(Vue);
    Emitter.use(Vue);
    NotNull.use(Vue);
    Preferences.use(Vue);
    Resource.use(Vue);
    Validator.use(Vue);
    WatchMemoized.use(Vue);
    Util.use(Vue);
    Comment.use(Vue);
    ContourBlock.use(Vue);
    DateDisplay.use(Vue);
    TableGridLayout.use(Vue);
    WritingBoard.use(Vue);
    IframeIO.use(Vue);
  },
];

register.forEach((t) => t());
