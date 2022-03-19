"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectorPrefix = void 0;
var tslib_1 = require("tslib");
var vue_1 = require("vue");
var ant_design_vue_1 = require("ant-design-vue");
var ant_design_vue_2 = (0, tslib_1.__importDefault)(require("@form-create/ant-design-vue"));
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
var adherev_util_intl_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-intl"));
var adherev_util_resource_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-resource"));
var actions_1 = (0, tslib_1.__importDefault)(require("./actions"));
var emitter_1 = (0, tslib_1.__importDefault)(require("./emitter"));
var modal_1 = (0, tslib_1.__importDefault)(require("./modal"));
exports.selectorPrefix = 'adherev-ui-messagedialog';
var DEFAULT_LOCAL = 'zh_CN';
var LOCAL = adherev_util_resource_1.default.Dict.value.LocalsAntd.value;
// MessageDialog的配置
var globalConfig = null;
/**
 * renderByIcon
 * @param icon
 * @param text
 * @return React.ReactElement
 */
function renderByIcon(_a) {
    var _b, _c;
    var icon = _a.icon, text = _a.text;
    return (<div 
    // @ts-ignore
    class={"".concat(exports.selectorPrefix, "-renderByIcon")}>
      <div 
    // @ts-ignore
    class={"".concat(exports.selectorPrefix, "-renderByIcon-fixed")}>
        {((_b = adherev_util_1.default === null || adherev_util_1.default === void 0 ? void 0 : adherev_util_1.default.isFunction) === null || _b === void 0 ? void 0 : _b.call(adherev_util_1.default, icon)) ? icon() : icon}
      </div>
      <div 
    // @ts-ignore
    class={"".concat(exports.selectorPrefix, "-renderByIcon-auto")}>
        {((_c = adherev_util_1.default === null || adherev_util_1.default === void 0 ? void 0 : adherev_util_1.default.isFunction) === null || _c === void 0 ? void 0 : _c.call(adherev_util_1.default, text)) ? text() : text}
      </div>
    </div>);
}
var MessageDialogFactory = {
    /**
     * Confirm
     * @param title {String | Function}
     * @param text {String}
     * @param width {number}
     * @param zIndex {number}
     * @param icon {String | Function}
     * @param {Function} - onSuccess
     */
    Confirm: function (_a) {
        var title = _a.title, _b = _a.text, text = _b === void 0 ? null : _b, _c = _a.width, width = _c === void 0 ? 300 : _c, _d = _a.zIndex, zIndex = _d === void 0 ? 1000 : _d, local = _a.local, _e = _a.icon, icon = _e === void 0 ? null : _e, onSuccess = _a.onSuccess;
        var el = this.Modal({
            config: {
                title: title,
                centered: true,
                width: width || 300,
                closable: false,
                zIndex: zIndex,
                footer: function () {
                    return [
                        // @ts-ignore
                        <ant_design_vue_1.Button key="submit" type="primary" title={adherev_util_intl_1.default.tv('确定')} onClick={function () {
                                if (onSuccess) {
                                    onSuccess().then(function () {
                                        emitter_1.default.trigger(actions_1.default.close, el);
                                    });
                                }
                                else {
                                    emitter_1.default.trigger(actions_1.default.close, el);
                                }
                            }}>
              {adherev_util_intl_1.default.tv('确定')}
            </ant_design_vue_1.Button>,
                    ];
                },
            },
            local: local,
            children: icon
                ? function () { return renderByIcon({ icon: icon, text: text }); }
                : // @ts-ignore
                    function () { return (adherev_util_1.default.isFunction(text) ? text() : text); },
        }).el;
    },
    /**
     * Prompt
     * @param title
     * @param config
     * @param layout
     * @param width
     * @param zIndex
     * @param local
     * @param onSuccess
     * @constructor
     */
    Prompt: function (_a) {
        var title = _a.title, config = _a.config, _b = _a.width, width = _b === void 0 ? 300 : _b, _c = _a.zIndex, zIndex = _c === void 0 ? 1000 : _c, local = _a.local, onSuccess = _a.onSuccess;
        if (config.option) {
            config.option.submitBtn = false;
            config.option.resetBtn = false;
        }
        // @ts-ignore
        var _d = this.Modal({
            config: {
                title: title,
                centered: true,
                width: width || 300,
                closable: false,
                zIndex: zIndex,
                footer: function () {
                    return [
                        // @ts-ignore
                        <ant_design_vue_1.Button key="submit" type="primary" title={adherev_util_intl_1.default.tv('确定')} onClick={function () {
                                if (onSuccess) {
                                    var fApi_1 = rootRef.value.fApi; //vm?.$refs?.formRef?.fApi;
                                    fApi_1.validate(function (valid) {
                                        if (valid) {
                                            onSuccess(fApi_1.getValue(config.rule[0].field)).then(function () {
                                                emitter_1.default.trigger(actions_1.default.close, el);
                                            });
                                        }
                                    });
                                }
                                else {
                                    emitter_1.default.trigger(actions_1.default.close, el);
                                }
                            }}>
              {adherev_util_intl_1.default.tv('确定')}
            </ant_design_vue_1.Button>,
                    ];
                },
            },
            local: local,
            children: {
                template: "\n          <form-create\n            v-model:api=\"fApi\"\n            :rule=\"rule\"\n            :option=\"option\"\n          ></form-create>\n        ",
                data: function () {
                    return {
                        fApi: {},
                        rule: config.rule || [
                            {
                                type: 'input',
                                field: 'prompt',
                                title: '输入框',
                                info: '',
                                _fc_drag_tag: 'input',
                                hidden: false,
                                display: true,
                                value: '',
                                wrap: {
                                    labelCol: { span: 4 },
                                    wrapperCol: { span: 20 },
                                },
                            },
                        ],
                        option: config.option || {
                            form: {
                                labelPosition: 'right',
                                size: 'mini',
                                labelWidth: '125px',
                                hideRequiredAsterisk: false,
                                showMessage: true,
                                inlineMessage: false,
                                submitBtn: false,
                                resetBtn: false,
                            },
                        },
                    };
                },
            },
        }), el = _d.el, /*vm,*/ rootRef = _d.rootRef;
    },
    /**
     * InputPrompt
     * @param config
     * @param params
     * @constructor
     */
    InputPrompt: function (_a) {
        var config = _a.config, params = (0, tslib_1.__rest)(_a, ["config"]);
        config.rule[0].type = 'input';
        config.rule[0]._fc_drag_tag = 'input';
        config.rule[0].field = 'prompt';
        MessageDialogFactory.Prompt((0, tslib_1.__assign)((0, tslib_1.__assign)({}, params), { config: (0, tslib_1.__assign)({}, config) }));
    },
    /**
     * TextAreaPrompt
     * @param config
     * @param params
     * @constructor
     */
    TextAreaPrompt: function (_a) {
        var config = _a.config, params = (0, tslib_1.__rest)(_a, ["config"]);
        config.rule[0].type = 'input';
        config.rule[0]._fc_drag_tag = 'input';
        config.rule[0].field = 'prompt';
        config.rule[0].props = {
            type: 'textarea',
        };
        MessageDialogFactory.Prompt((0, tslib_1.__assign)((0, tslib_1.__assign)({}, params), { config: (0, tslib_1.__assign)({}, config) }));
    },
    /**
     * PassWordPrompt
     * @param config
     * @param params
     * @constructor
     */
    PassWordPrompt: function (_a) {
        var config = _a.config, params = (0, tslib_1.__rest)(_a, ["config"]);
        config.rule[0].type = 'input';
        config.rule[0]._fc_drag_tag = 'input';
        config.rule[0].field = 'prompt';
        config.rule[0].props = {
            type: 'password',
        };
        MessageDialogFactory.Prompt((0, tslib_1.__assign)((0, tslib_1.__assign)({}, params), { config: (0, tslib_1.__assign)({}, config) }));
    },
    /**
     * NumberPrompt
     * @param config
     * @param params
     * @constructor
     */
    NumberPrompt: function (_a) {
        var config = _a.config, params = (0, tslib_1.__rest)(_a, ["config"]);
        config.rule[0].type = 'input';
        config.rule[0]._fc_drag_tag = 'input';
        config.rule[0].field = 'prompt';
        config.rule[0].props = {
            type: 'number',
        };
        MessageDialogFactory.Prompt((0, tslib_1.__assign)((0, tslib_1.__assign)({}, params), { config: (0, tslib_1.__assign)({}, config) }));
    },
    /**
     * Alert
     * @param title - {String | Function}
     * @param text - {String | Function}
     * @param width - {number}
     * @param local
     * @param zIndex
     * @param icon - {Function}
     */
    Alert: function (_a) {
        var title = _a.title, _b = _a.text, text = _b === void 0 ? null : _b, _c = _a.width, width = _c === void 0 ? 300 : _c, _d = _a.zIndex, zIndex = _d === void 0 ? 1000 : _d, local = _a.local, icon = _a.icon;
        this.Modal({
            config: {
                title: title,
                centered: true,
                width: width || 300,
                closable: false,
                zIndex: zIndex,
            },
            local: local,
            children: icon
                ? function () { return renderByIcon({ icon: icon, text: text }); }
                : // @ts-ignore
                    function () { return (adherev_util_1.default.isFunction(text) ? text() : text); },
        });
    },
    /**
     *  Modal
     *  @param {Object} - config
     *  @param {String | Function} - title
     *  @param {Boolean} - maskClosable 是否点击遮罩关闭 默认是false
     *  @param {Number} - zIndex 层级大小
     *  @param {String} - class 容器类名
     *  @param {String} - wrapclass 包裹容器类名
     *  @param {Boolean} - centered 垂直居中展示 Modal 默认false
     *  @param {String | Number} - width 宽度
     *  @param {Boolean} - closable 是否显示关闭 默认true
     *  @param {Function} - footer
     *  @param {Function} - children
     *  @param defaultCloneBtn
     */
    Modal: function (_a) {
        var _b, _c;
        var _d = _a.config, config = _d === void 0 ? {} : _d, _e = _a.children, children = _e === void 0 ? Function : _e, _f = _a.defaultCloneBtn, defaultCloneBtn = _f === void 0 ? true : _f, _g = _a.local, local = _g === void 0 ? DEFAULT_LOCAL : _g;
        /**
         * renderDefault
         * @param children
         * @param rootRef
         */
        function renderDefault(children, rootRef) {
            var _a, _b, _c;
            if (!((_a = adherev_util_1.default === null || adherev_util_1.default === void 0 ? void 0 : adherev_util_1.default.isEmpty) === null || _a === void 0 ? void 0 : _a.call(adherev_util_1.default, children))) {
                // 如果是jsx
                if ((_b = adherev_util_1.default === null || adherev_util_1.default === void 0 ? void 0 : adherev_util_1.default.isFunction) === null || _b === void 0 ? void 0 : _b.call(adherev_util_1.default, children)) {
                    return children();
                }
                // 如果是组件
                if ((_c = adherev_util_1.default === null || adherev_util_1.default === void 0 ? void 0 : adherev_util_1.default.isObject) === null || _c === void 0 ? void 0 : _c.call(adherev_util_1.default, children)) {
                    return (0, vue_1.h)(children, { ref: rootRef });
                }
            }
            return null;
        }
        /**
         * renderTitle
         * @param title
         */
        function renderTitle(title) {
            var _a, _b, _c;
            if (!((_a = adherev_util_1.default.isEmpty) === null || _a === void 0 ? void 0 : _a.call(adherev_util_1.default, title))) {
                // 如果是jsx
                if ((_b = adherev_util_1.default.isFunction) === null || _b === void 0 ? void 0 : _b.call(adherev_util_1.default, title)) {
                    return title();
                }
                // 如果是组件
                if ((_c = adherev_util_1.default.isObject) === null || _c === void 0 ? void 0 : _c.call(adherev_util_1.default, title)) {
                    return (0, vue_1.h)('div', {}, [(0, vue_1.h)(title)]);
                }
            }
            return title;
        }
        /**
         * renderFooter
         * @param config
         */
        function renderFooter(config) {
            var _a, _b, _c;
            if (!((_a = adherev_util_1.default.isEmpty) === null || _a === void 0 ? void 0 : _a.call(adherev_util_1.default, config.footer))) {
                if ((_b = adherev_util_1.default.isFunction) === null || _b === void 0 ? void 0 : _b.call(adherev_util_1.default, config.footer)) {
                    return config.footer();
                }
                if ((_c = adherev_util_1.default.isObject) === null || _c === void 0 ? void 0 : _c.call(adherev_util_1.default, config.footer)) {
                    return (0, vue_1.h)(config.footer);
                }
            }
            return null;
        }
        /**
         * close
         */
        function close() {
            var _a;
            try {
                app === null || app === void 0 ? void 0 : app.unmount();
            }
            catch (err) {
                (_a = el === null || el === void 0 ? void 0 : el.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(el);
            }
        }
        var title = config.title, others = (0, tslib_1.__rest)(config, ["title"]);
        var modalConfig = (0, tslib_1.__assign)({ maskClosable: false }, others);
        if ((_b = adherev_util_1.default.isString) === null || _b === void 0 ? void 0 : _b.call(adherev_util_1.default, title)) {
            modalConfig.title = title;
        }
        var el = document.createElement('div');
        var i18n = (0, adherev_util_intl_1.default)({
            I18nOptions: {
                // @ts-ignore
                messages: (globalConfig || {}).messages,
                locale: local || DEFAULT_LOCAL,
                globalInjection: true,
                legacy: false,
            },
            prefix: 'local',
        });
        var rootRef;
        var app = (0, vue_1.createApp)({
            setup: function () {
                rootRef = (0, vue_1.ref)();
                return function () {
                    var footerJSX = renderFooter(config);
                    if (footerJSX) {
                        modalConfig.footerJSX = footerJSX;
                    }
                    return (
                    // @ts-ignore
                    <ant_design_vue_1.ConfigProvider locale={LOCAL[local || DEFAULT_LOCAL]}>
              {/*@ts-ignore*/}
              <modal_1.default config={modalConfig} closeBtn={defaultCloneBtn} onClose={function () {
                            close();
                        }}>
                {{
                            default: function () { return renderDefault(children, rootRef); },
                            title: function () { return renderTitle(title); },
                        }}
              </modal_1.default>
            </ant_design_vue_1.ConfigProvider>);
                };
            },
        });
        // Button, ConfigProvider, Form, FormItem, Row, Col, Slider, Input
        app
            .use(ant_design_vue_1.ConfigProvider)
            .use(ant_design_vue_1.Button)
            .use(ant_design_vue_1.Form)
            .use(ant_design_vue_1.Row)
            .use(ant_design_vue_1.Col)
            .use(ant_design_vue_1.Slider)
            .use(ant_design_vue_1.Col)
            .use(ant_design_vue_1.Input)
            .use(i18n)
            .use(ant_design_vue_2.default);
        // @ts-ignore
        adherev_util_intl_1.default.use(app);
        // globalConfig?.useComponents?.forEach?.((com) => {
        //   if ('use' in com && Util.isFunction?.(com.use)) {
        //     com.use(app);
        //   } else {
        //     app.use(com);
        //   }
        // });
        (_c = globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.beforeMount) === null || _c === void 0 ? void 0 : _c.call(globalConfig, app);
        app.mount(el);
        document.body.appendChild(el);
        return {
            el: el,
            vm: app,
            rootRef: rootRef,
        };
    },
    /**
     * close
     * @param el
     */
    close: function (el) {
        emitter_1.default.trigger(actions_1.default.close, el);
    },
    setConfig: function (gc) {
        globalConfig = gc;
    },
};
exports.default = MessageDialogFactory;
//# sourceMappingURL=messagedialog.jsx.map