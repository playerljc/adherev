import Vue from 'vue';
import { Plugin } from 'vue-fragment';
import { Breadcrumb, Button, Card, Col, ConfigProvider, DatePicker, Empty, Form, FormModel, Icon, Input, InputNumber, Menu, Modal, Radio, Result, Row, Slider, Table, Tabs, Tooltip, List, Avatar, Tag, Divider, Select, Switch, } from 'ant-design-vue';
import VueHighlightJS from 'vue-highlight.js';
import { ConditionalRender, DelConfirm, FlexLayout, ImportantConfirm, Intl, MessageDialog, OLMap, Permission, SearchTable, Space, Spin, Split, Suspense, BackTopAnimation, SplitLayout, ScrollLoad, SlideLayout, SuccessPrompt, ErrorPrompt, WarnPrompt, PullRefresh, Revolving, SliderScale, StickupLayout, Surnames, CascadeCompared, SwipeOut, FontSizeSetting, JdCategoryTab, ImageLazy, BMap, PlayGround, ContextMenu, GlobalIndicator, HistoryBack, Notification, PolygonSelection, Popup, AdapterScreen, Browsersniff, Ajax, Dict, Domain, Emitter, NotNull, Preferences, Resource, Validator, WatchMemoized, Util, } from '@baifendian/adherev';
import Playground from '@/lib/Playground';
import PlaygroundMulit from '@/lib/PlaygroundMulit';
import FunctionProps from '@/lib/FunctionProps';
import Props from '@/lib/Props';
import en_US from '@/locales/en_US';
import zh_CN from '@/locales/zh_CN';
import pt_PT from '@/locales/pt_PT';
const register = [
    () => {
        Vue.use(Menu);
        Vue.use(Button);
        Vue.use(Card);
        Vue.use(Table);
        Vue.use(Tabs);
        Vue.use(Breadcrumb);
        Vue.use(Empty);
        Vue.use(Tooltip);
        Vue.use(Icon);
        Vue.use(Modal);
        Vue.use(Result);
        Vue.use(Form);
        Vue.use(FormModel);
        Vue.use(Input);
        Vue.use(Radio);
        Vue.use(InputNumber);
        Vue.use(Slider);
        Vue.use(DatePicker);
        Vue.use(Row);
        Vue.use(Col);
        Vue.use(ConfigProvider);
        Vue.use(List);
        Vue.use(Avatar);
        Vue.use(Tag);
        Vue.use(Divider);
        Vue.use(Select);
        Vue.use(Switch);
    },
    () => {
        ConditionalRender.use(Vue);
        DelConfirm.use(Vue);
        ImportantConfirm.use(Vue);
        Permission.use(Vue);
        Intl.use(Vue);
        MessageDialog.use(Vue, {
            messages: {
                en_US,
                zh_CN,
                pt_PT,
            },
        });
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
    },
    () => {
        Vue.use(VueHighlightJS);
        Vue.use(Playground);
        Vue.use(PlaygroundMulit);
        Vue.use(FunctionProps);
        Vue.use(Props);
    },
    () => {
        Vue.use(Plugin);
    }
];
register.forEach((t) => t());
//# sourceMappingURL=component.register.config.js.map