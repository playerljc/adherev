"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = exports.Resource = exports.Preferences = exports.NotNull = exports.Mixins = exports.Intl = exports.Emitter = exports.Domain = exports.Dict = exports.Ajax = exports.Browsersniff = exports.AdapterScreen = exports.Util = exports.Teleport = exports.SwipeOut = exports.Suspense = exports.Surnames = exports.StickupLayout = exports.SplitLayout = exports.Split = exports.Spin = exports.Space = exports.SliderScale = exports.SlideLayout = exports.SearchTable = exports.ScrollLoad = exports.Revolving = exports.PullRefresh = exports.WarnPrompt = exports.SuccessPrompt = exports.ErrorPrompt = exports.Popup = exports.PolygonSelection = exports.PlayGround = exports.Permission = exports.OLMap = exports.Notification = exports.MessageDialog = exports.JdCategoryTab = exports.ImageLazy = exports.HistoryBack = exports.GlobalIndicator = exports.FontSizeSetting = exports.FlexLayout = exports.ContextMenu = exports.ImportantConfirm = exports.DelConfirm = exports.ConditionalRender = exports.CascadeCompared = exports.BackTopAnimation = void 0;
exports.WatchMemoized = void 0;
var adherev_ui_backtopanimation_1 = __importDefault(require("@baifendian/adherev-ui-backtopanimation"));
exports.BackTopAnimation = adherev_ui_backtopanimation_1.default;
var adherev_ui_cascadecompared_1 = __importDefault(require("@baifendian/adherev-ui-cascadecompared"));
exports.CascadeCompared = adherev_ui_cascadecompared_1.default;
var adherev_ui_conditionalrender_1 = __importDefault(require("@baifendian/adherev-ui-conditionalrender"));
exports.ConditionalRender = adherev_ui_conditionalrender_1.default;
var adherev_ui_confirm_delconfirm_1 = __importDefault(require("@baifendian/adherev-ui-confirm-delconfirm"));
exports.DelConfirm = adherev_ui_confirm_delconfirm_1.default;
var adherev_ui_confirm_importantconfirm_1 = __importDefault(require("@baifendian/adherev-ui-confirm-importantconfirm"));
exports.ImportantConfirm = adherev_ui_confirm_importantconfirm_1.default;
var adherev_ui_contextmenu_1 = __importDefault(require("@baifendian/adherev-ui-contextmenu"));
exports.ContextMenu = adherev_ui_contextmenu_1.default;
var adherev_ui_flexlayout_1 = __importDefault(require("@baifendian/adherev-ui-flexlayout"));
exports.FlexLayout = adherev_ui_flexlayout_1.default;
var adherev_ui_fontsizesetting_1 = __importDefault(require("@baifendian/adherev-ui-fontsizesetting"));
exports.FontSizeSetting = adherev_ui_fontsizesetting_1.default;
var adherev_ui_globalindicator_1 = __importDefault(require("@baifendian/adherev-ui-globalindicator"));
exports.GlobalIndicator = adherev_ui_globalindicator_1.default;
var adherev_ui_historyback_1 = __importDefault(require("@baifendian/adherev-ui-historyback"));
exports.HistoryBack = adherev_ui_historyback_1.default;
var adherev_ui_imagelazy_1 = __importDefault(require("@baifendian/adherev-ui-imagelazy"));
exports.ImageLazy = adherev_ui_imagelazy_1.default;
var adherev_ui_jdcategorytab_1 = __importDefault(require("@baifendian/adherev-ui-jdcategorytab"));
exports.JdCategoryTab = adherev_ui_jdcategorytab_1.default;
var adherev_ui_messagedialog_1 = __importDefault(require("@baifendian/adherev-ui-messagedialog"));
exports.MessageDialog = adherev_ui_messagedialog_1.default;
var adherev_ui_notification_1 = __importDefault(require("@baifendian/adherev-ui-notification"));
exports.Notification = adherev_ui_notification_1.default;
var adherev_ui_olmap_1 = __importDefault(require("@baifendian/adherev-ui-olmap"));
exports.OLMap = adherev_ui_olmap_1.default;
var adherev_ui_permission_1 = __importDefault(require("@baifendian/adherev-ui-permission"));
exports.Permission = adherev_ui_permission_1.default;
var adherev_ui_playground_1 = __importDefault(require("@baifendian/adherev-ui-playground"));
exports.PlayGround = adherev_ui_playground_1.default;
var adherev_ui_polygonselection_1 = __importDefault(require("@baifendian/adherev-ui-polygonselection"));
exports.PolygonSelection = adherev_ui_polygonselection_1.default;
var adherev_ui_popup_1 = __importDefault(require("@baifendian/adherev-ui-popup"));
exports.Popup = adherev_ui_popup_1.default;
var adherev_ui_prompt_errorprompt_1 = __importDefault(require("@baifendian/adherev-ui-prompt-errorprompt"));
exports.ErrorPrompt = adherev_ui_prompt_errorprompt_1.default;
var adherev_ui_prompt_successprompt_1 = __importDefault(require("@baifendian/adherev-ui-prompt-successprompt"));
exports.SuccessPrompt = adherev_ui_prompt_successprompt_1.default;
var adherev_ui_prompt_warnprompt_1 = __importDefault(require("@baifendian/adherev-ui-prompt-warnprompt"));
exports.WarnPrompt = adherev_ui_prompt_warnprompt_1.default;
var adherev_ui_pullrefresh_1 = __importDefault(require("@baifendian/adherev-ui-pullrefresh"));
exports.PullRefresh = adherev_ui_pullrefresh_1.default;
var adherev_ui_revolving_1 = __importDefault(require("@baifendian/adherev-ui-revolving"));
exports.Revolving = adherev_ui_revolving_1.default;
var adherev_ui_scrollload_1 = __importDefault(require("@baifendian/adherev-ui-scrollload"));
exports.ScrollLoad = adherev_ui_scrollload_1.default;
var adherev_ui_searchtable_1 = __importDefault(require("@baifendian/adherev-ui-searchtable"));
exports.SearchTable = adherev_ui_searchtable_1.default;
var adherev_ui_slidelayout_1 = __importDefault(require("@baifendian/adherev-ui-slidelayout"));
exports.SlideLayout = adherev_ui_slidelayout_1.default;
var adherev_ui_sliderscale_1 = __importDefault(require("@baifendian/adherev-ui-sliderscale"));
exports.SliderScale = adherev_ui_sliderscale_1.default;
var adherev_ui_space_1 = __importDefault(require("@baifendian/adherev-ui-space"));
exports.Space = adherev_ui_space_1.default;
var adherev_ui_spin_1 = __importDefault(require("@baifendian/adherev-ui-spin"));
exports.Spin = adherev_ui_spin_1.default;
var adherev_ui_split_1 = __importDefault(require("@baifendian/adherev-ui-split"));
exports.Split = adherev_ui_split_1.default;
var adherev_ui_splitlayout_1 = __importDefault(require("@baifendian/adherev-ui-splitlayout"));
exports.SplitLayout = adherev_ui_splitlayout_1.default;
var adherev_ui_stickuplayout_1 = __importDefault(require("@baifendian/adherev-ui-stickuplayout"));
exports.StickupLayout = adherev_ui_stickuplayout_1.default;
var adherev_ui_surnames_1 = __importDefault(require("@baifendian/adherev-ui-surnames"));
exports.Surnames = adherev_ui_surnames_1.default;
var adherev_ui_suspense_1 = __importDefault(require("@baifendian/adherev-ui-suspense"));
exports.Suspense = adherev_ui_suspense_1.default;
var adherev_ui_swipeout_1 = __importDefault(require("@baifendian/adherev-ui-swipeout"));
exports.SwipeOut = adherev_ui_swipeout_1.default;
var adherev_ui_teleport_1 = __importDefault(require("@baifendian/adherev-ui-teleport"));
exports.Teleport = adherev_ui_teleport_1.default;
var adherev_util_1 = __importDefault(require("@baifendian/adherev-util"));
exports.Util = adherev_util_1.default;
var adherev_util_adapterscreen_1 = __importDefault(require("@baifendian/adherev-util-adapterscreen"));
exports.AdapterScreen = adherev_util_adapterscreen_1.default;
var adherev_util_browsersniff_1 = __importDefault(require("@baifendian/adherev-util-browsersniff"));
exports.Browsersniff = adherev_util_browsersniff_1.default;
var adherev_util_communication_ajax_1 = __importDefault(require("@baifendian/adherev-util-communication-ajax"));
exports.Ajax = adherev_util_communication_ajax_1.default;
var adherev_util_dict_1 = __importDefault(require("@baifendian/adherev-util-dict"));
exports.Dict = adherev_util_dict_1.default;
var adherev_util_domain_1 = __importDefault(require("@baifendian/adherev-util-domain"));
exports.Domain = adherev_util_domain_1.default;
var adherev_util_emitter_1 = __importDefault(require("@baifendian/adherev-util-emitter"));
exports.Emitter = adherev_util_emitter_1.default;
var adherev_util_intl_1 = __importDefault(require("@baifendian/adherev-util-intl"));
exports.Intl = adherev_util_intl_1.default;
var adherev_util_mixins_1 = __importDefault(require("@baifendian/adherev-util-mixins"));
exports.Mixins = adherev_util_mixins_1.default;
var adherev_util_notnull_1 = __importDefault(require("@baifendian/adherev-util-notnull"));
exports.NotNull = adherev_util_notnull_1.default;
var adherev_util_preferences_1 = __importDefault(require("@baifendian/adherev-util-preferences"));
exports.Preferences = adherev_util_preferences_1.default;
var adherev_util_resource_1 = __importDefault(require("@baifendian/adherev-util-resource"));
exports.Resource = adherev_util_resource_1.default;
var adherev_util_validator_1 = __importDefault(require("@baifendian/adherev-util-validator"));
exports.Validator = adherev_util_validator_1.default;
var adherev_util_watchmemoized_1 = __importDefault(require("@baifendian/adherev-util-watchmemoized"));
exports.WatchMemoized = adherev_util_watchmemoized_1.default;
exports.default = {
    install: function (Vue) {
        if (adherev_ui_backtopanimation_1.default.isUse()) {
            adherev_ui_backtopanimation_1.default.use(Vue);
        }
        if (adherev_ui_cascadecompared_1.default.isUse()) {
            adherev_ui_cascadecompared_1.default.use(Vue);
        }
        if (adherev_ui_conditionalrender_1.default.isUse()) {
            adherev_ui_conditionalrender_1.default.use(Vue);
        }
        if (adherev_ui_confirm_delconfirm_1.default.isUse()) {
            adherev_ui_confirm_delconfirm_1.default.use(Vue);
        }
        if (adherev_ui_confirm_importantconfirm_1.default.isUse()) {
            adherev_ui_confirm_importantconfirm_1.default.use(Vue);
        }
        if (adherev_ui_contextmenu_1.default.isUse()) {
            adherev_ui_contextmenu_1.default.use(Vue);
        }
        if (adherev_ui_flexlayout_1.default.isUse()) {
            adherev_ui_flexlayout_1.default.use(Vue);
        }
        if (adherev_ui_fontsizesetting_1.default.isUse()) {
            adherev_ui_fontsizesetting_1.default.use(Vue);
        }
        if (adherev_ui_globalindicator_1.default.isUse()) {
            adherev_ui_globalindicator_1.default.use(Vue);
        }
        if (adherev_ui_historyback_1.default.isUse()) {
            adherev_ui_historyback_1.default.use(Vue);
        }
        if (adherev_ui_imagelazy_1.default.isUse()) {
            adherev_ui_imagelazy_1.default.use(Vue);
        }
        if (adherev_ui_jdcategorytab_1.default.isUse()) {
            adherev_ui_jdcategorytab_1.default.use(Vue);
        }
        if (adherev_ui_messagedialog_1.default.isUse()) {
            adherev_ui_messagedialog_1.default.use(Vue);
        }
        if (adherev_ui_notification_1.default.isUse()) {
            adherev_ui_notification_1.default.use(Vue);
        }
        if (adherev_ui_olmap_1.default.isUse()) {
            adherev_ui_olmap_1.default.use(Vue);
        }
        if (adherev_ui_permission_1.default.isUse()) {
            adherev_ui_permission_1.default.use(Vue);
        }
        if (adherev_ui_playground_1.default.isUse()) {
            adherev_ui_playground_1.default.use(Vue);
        }
        if (adherev_ui_polygonselection_1.default.isUse()) {
            adherev_ui_polygonselection_1.default.use(Vue);
        }
        if (adherev_ui_popup_1.default.isUse()) {
            adherev_ui_popup_1.default.use(Vue);
        }
        if (adherev_ui_prompt_errorprompt_1.default.isUse()) {
            adherev_ui_prompt_errorprompt_1.default.use(Vue);
        }
        if (adherev_ui_prompt_successprompt_1.default.isUse()) {
            adherev_ui_prompt_successprompt_1.default.use(Vue);
        }
        if (adherev_ui_prompt_warnprompt_1.default.isUse()) {
            adherev_ui_prompt_warnprompt_1.default.use(Vue);
        }
        if (adherev_ui_pullrefresh_1.default.isUse()) {
            adherev_ui_pullrefresh_1.default.use(Vue);
        }
        if (adherev_ui_revolving_1.default.isUse()) {
            adherev_ui_revolving_1.default.use(Vue);
        }
        if (adherev_ui_scrollload_1.default.isUse()) {
            adherev_ui_scrollload_1.default.use(Vue);
        }
        if (adherev_ui_searchtable_1.default.isUse()) {
            adherev_ui_searchtable_1.default.use(Vue);
        }
        if (adherev_ui_slidelayout_1.default.isUse()) {
            adherev_ui_slidelayout_1.default.use(Vue);
        }
        if (adherev_ui_sliderscale_1.default.isUse()) {
            adherev_ui_sliderscale_1.default.use(Vue);
        }
        if (adherev_ui_space_1.default.isUse()) {
            adherev_ui_space_1.default.use(Vue);
        }
        if (adherev_ui_spin_1.default.isUse()) {
            adherev_ui_spin_1.default.use(Vue);
        }
        if (adherev_ui_split_1.default.isUse()) {
            adherev_ui_split_1.default.use(Vue);
        }
        if (adherev_ui_splitlayout_1.default.isUse()) {
            adherev_ui_splitlayout_1.default.use(Vue);
        }
        if (adherev_ui_stickuplayout_1.default.isUse()) {
            adherev_ui_stickuplayout_1.default.use(Vue);
        }
        if (adherev_ui_surnames_1.default.isUse()) {
            adherev_ui_surnames_1.default.use(Vue);
        }
        if (adherev_ui_suspense_1.default.isUse()) {
            adherev_ui_suspense_1.default.use(Vue);
        }
        if (adherev_ui_swipeout_1.default.isUse()) {
            adherev_ui_swipeout_1.default.use(Vue);
        }
        if (adherev_ui_teleport_1.default.isUse()) {
            adherev_ui_teleport_1.default.use(Vue);
        }
        if (adherev_util_1.default.isUse()) {
            adherev_util_1.default.use(Vue);
        }
        if (adherev_util_adapterscreen_1.default.isUse()) {
            adherev_util_adapterscreen_1.default.use(Vue);
        }
        if (adherev_util_browsersniff_1.default.isUse()) {
            adherev_util_browsersniff_1.default.use(Vue);
        }
        if (adherev_util_communication_ajax_1.default.isUse()) {
            adherev_util_communication_ajax_1.default.use(Vue);
        }
        if (adherev_util_dict_1.default.isUse()) {
            adherev_util_dict_1.default.use(Vue);
        }
        if (adherev_util_domain_1.default.isUse()) {
            adherev_util_domain_1.default.use(Vue);
        }
        if (adherev_util_emitter_1.default.isUse()) {
            adherev_util_emitter_1.default.use(Vue);
        }
        if (adherev_util_intl_1.default.isUse()) {
            adherev_util_intl_1.default.use(Vue);
        }
        if (adherev_util_mixins_1.default.isUse()) {
            adherev_util_mixins_1.default.use(Vue);
        }
        if (adherev_util_notnull_1.default.isUse()) {
            adherev_util_notnull_1.default.use(Vue);
        }
        if (adherev_util_preferences_1.default.isUse()) {
            adherev_util_preferences_1.default.use(Vue);
        }
        if (adherev_util_resource_1.default.isUse()) {
            adherev_util_resource_1.default.use(Vue);
        }
        if (adherev_util_validator_1.default.isUse()) {
            adherev_util_validator_1.default.use(Vue);
        }
        if (adherev_util_watchmemoized_1.default.isUse()) {
            adherev_util_watchmemoized_1.default.use(Vue);
        }
    },
};
