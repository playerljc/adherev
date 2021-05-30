import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import DelConfirm from '@baifendian/adherev-ui-confirm-delconfirm';
import ImportantConfirm from '@baifendian/adherev-ui-confirm-importantconfirm';
import GlobalIndicator from '@baifendian/adherev-ui-globalindicator';
import HistoryBack from '@baifendian/adherev-ui-historyback';
import MessageDialog from '@baifendian/adherev-ui-messagedialog';
import Permission from '@baifendian/adherev-ui-permission';
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
    if (ConditionalRender.isUse()) {
      ConditionalRender.use(Vue);
    }
    if (DelConfirm.isUse()) {
      DelConfirm.use(Vue);
    }
    if (ImportantConfirm.isUse()) {
      ImportantConfirm.use(Vue);
    }
    if (GlobalIndicator.isUse()) {
      GlobalIndicator.use(Vue);
    }
    if (HistoryBack.isUse()) {
      HistoryBack.use(Vue);
    }
    if (MessageDialog.isUse()) {
      MessageDialog.use(Vue);
    }
    if (Permission.isUse()) {
      Permission.use(Vue);
    }
    if (Util.isUse()) {
      Util.use(Vue);
    }
    if (AdapterScreen.isUse()) {
      AdapterScreen.use(Vue);
    }
    if (Ajax.isUse()) {
      Ajax.use(Vue);
    }
    if (Dict.isUse()) {
      Dict.use(Vue);
    }
    if (Emitter.isUse()) {
      Emitter.use(Vue);
    }
    if (Intl.isUse()) {
      Intl.use(Vue);
    }
    if (NotNull.isUse()) {
      NotNull.use(Vue);
    }
    if (Preferences.isUse()) {
      Preferences.use(Vue);
    }
    if (Resource.isUse()) {
      Resource.use(Vue);
    }
    if (WatchMemoized.isUse()) {
      WatchMemoized.use(Vue);
    }
  },
};
