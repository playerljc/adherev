import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import DelConfirm from '@baifendian/adherev-ui-confirm-delconfirm';
import ImportantConfirm from '@baifendian/adherev-ui-confirm-importantconfirm';
import GlobalIndicator from '@baifendian/adherev-ui-globalindicator';
import HistoryBack from '@baifendian/adherev-ui-historyback';
import MessageDialog from '@baifendian/adherev-ui-messagedialog';
import Permission from '@baifendian/adherev-ui-permission';
import ErrorPrompt from '@baifendian/adherev-ui-prompt-errorprompt';
import SuccessPrompt from '@baifendian/adherev-ui-prompt-successprompt';
import WarnPrompt from '@baifendian/adherev-ui-prompt-warnprompt';
import Space from '@baifendian/adherev-ui-space';
import Spin from '@baifendian/adherev-ui-spin';
import Split from '@baifendian/adherev-ui-split';
import Suspense from '@baifendian/adherev-ui-suspense';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import SearchTable from '@baifendian/adherev-ui-searchtable';
import OLMap from '@baifendian/adherev-ui-olmap';
import Util from '@baifendian/adherev-util';
import AdapterScreen from '@baifendian/adherev-util-adapterscreen';
import Ajax from '@baifendian/adherev-util-communication-ajax';
import Dict from '@baifendian/adherev-util-dict';
import Emitter from '@baifendian/adherev-util-emitter';
import Intl from '@baifendian/adherev-util-intl';
import NotNull from '@baifendian/adherev-util-notnull';
import Preferences from '@baifendian/adherev-util-preferences';
import Resource from '@baifendian/adherev-util-resource';
import WatchMemoized from '@baifendian/adherev-util-watchmemoized';

export {
  ConditionalRender,
  DelConfirm,
  ImportantConfirm,
  GlobalIndicator,
  HistoryBack,
  MessageDialog,
  Permission,
  ErrorPrompt,
  SuccessPrompt,
  WarnPrompt,
  Space,
  Spin,
  Split,
  Suspense,
  FlexLayout,
  SearchTable,
  OLMap,
  Util,
  AdapterScreen,
  Ajax,
  Dict,
  Emitter,
  Intl,
  NotNull,
  Preferences,
  Resource,
  WatchMemoized,
};

export default {
  install: function (Vue) {
    if (
      // @ts-ignore
      ConditionalRender.isUse()
    ) {
      // @ts-ignore
      ConditionalRender.use(Vue);
    }
    if (
      // @ts-ignore
      DelConfirm.isUse()
    ) {
      // @ts-ignore
      DelConfirm.use(Vue);
    }
    if (
      // @ts-ignore
      ImportantConfirm.isUse()
    ) {
      // @ts-ignore
      ImportantConfirm.use(Vue);
    }
    if (
      // @ts-ignore
      GlobalIndicator.isUse()
    ) {
      // @ts-ignore
      GlobalIndicator.use(Vue);
    }
    if (
      // @ts-ignore
      HistoryBack.isUse()
    ) {
      // @ts-ignore
      HistoryBack.use(Vue);
    }
    if (
      // @ts-ignore
      MessageDialog.isUse()
    ) {
      // @ts-ignore
      MessageDialog.use(Vue);
    }
    if (
      // @ts-ignore
      Permission.isUse()
    ) {
      // @ts-ignore
      Permission.use(Vue);
    }
    if (
      // @ts-ignore
      ErrorPrompt.isUse()
    ) {
      // @ts-ignore
      ErrorPrompt.use(Vue);
    }
    if (
      // @ts-ignore
      SuccessPrompt.isUse()
    ) {
      // @ts-ignore
      SuccessPrompt.use(Vue);
    }
    if (
      // @ts-ignore
      WarnPrompt.isUse()
    ) {
      // @ts-ignore
      WarnPrompt.use(Vue);
    }
    if (
      // @ts-ignore
      Space.isUse()
    ) {
      // @ts-ignore
      Space.use(Vue);
    }
    if (
      // @ts-ignore
      Spin.isUse()
    ) {
      // @ts-ignore
      Spin.use(Vue);
    }
    if (
      // @ts-ignore
      Split.isUse()
    ) {
      // @ts-ignore
      Split.use(Vue);
    }
    if (
      // @ts-ignore
      Suspense.isUse()
    ) {
      // @ts-ignore
      Suspense.use(Vue);
    }
    if (
      // @ts-ignore
      FlexLayout.isUse()
    ) {
      // @ts-ignore
      FlexLayout.use(Vue);
    }
    if (
      // @ts-ignore
      SearchTable.isUse()
    ) {
      // @ts-ignore
      SearchTable.use(Vue);
    }
    if (
      // @ts-ignore
      OLMap.isUse()
    ) {
      // @ts-ignore
      OLMap.use(Vue);
    }
    if (
      // @ts-ignore
      Util.isUse()
    ) {
      // @ts-ignore
      Util.use(Vue);
    }
    if (
      // @ts-ignore
      AdapterScreen.isUse()
    ) {
      // @ts-ignore
      AdapterScreen.use(Vue);
    }
    if (
      // @ts-ignore
      Ajax.isUse()
    ) {
      // @ts-ignore
      Ajax.use(Vue);
    }
    if (
      // @ts-ignore
      Dict.isUse()
    ) {
      // @ts-ignore
      Dict.use(Vue);
    }
    if (
      // @ts-ignore
      Emitter.isUse()
    ) {
      // @ts-ignore
      Emitter.use(Vue);
    }
    if (
      // @ts-ignore
      Intl.isUse()
    ) {
      // @ts-ignore
      Intl.use(Vue);
    }
    if (
      // @ts-ignore
      NotNull.isUse()
    ) {
      // @ts-ignore
      NotNull.use(Vue);
    }
    if (
      // @ts-ignore
      Preferences.isUse()
    ) {
      // @ts-ignore
      Preferences.use(Vue);
    }
    if (
      // @ts-ignore
      Resource.isUse()
    ) {
      // @ts-ignore
      Resource.use(Vue);
    }
    if (
      // @ts-ignore
      WatchMemoized.isUse()
    ) {
      // @ts-ignore
      WatchMemoized.use(Vue);
    }
  },
};
