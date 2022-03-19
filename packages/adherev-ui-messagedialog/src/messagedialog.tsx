import { createApp, ref, h } from 'vue';
import { Button, ConfigProvider, Form, Row, Col, Slider, Input } from 'ant-design-vue';
import formCreate from '@form-create/ant-design-vue';
import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';

import Actions from './actions';
import Emitter from './emitter';
import ModalDialog from './modal';
import {
  IAlertArgv,
  IConfig,
  IConfirmArgv,
  IMessageDialogFactory,
  IModalArg,
  IPromptConfig,
} from './types';

export const selectorPrefix = 'adherev-ui-messagedialog';

const DEFAULT_LOCAL = 'zh_CN';

const LOCAL = Resource.Dict.value.LocalsAntd.value;

// MessageDialog的配置
let globalConfig: IConfig | null = null;

/**
 * renderByIcon
 * @param icon
 * @param text
 * @return React.ReactElement
 */
function renderByIcon({ icon, text }: { icon: any; text: any }) {
  return (
    <div
      // @ts-ignore
      class={`${selectorPrefix}-renderByIcon`}
    >
      <div
        // @ts-ignore
        class={`${selectorPrefix}-renderByIcon-fixed`}
      >
        {Util?.isFunction?.(icon) ? icon() : icon}
      </div>
      <div
        // @ts-ignore
        class={`${selectorPrefix}-renderByIcon-auto`}
      >
        {Util?.isFunction?.(text) ? text() : text}
      </div>
    </div>
  );
}

const MessageDialogFactory: IMessageDialogFactory = {
  /**
   * Confirm
   * @param title {String | Function}
   * @param text {String}
   * @param width {number}
   * @param zIndex {number}
   * @param icon {String | Function}
   * @param {Function} - onSuccess
   */
  Confirm({
    title,
    text = null,
    width = 300,
    zIndex = 1000,
    local,
    icon = null,
    onSuccess,
  }: IConfirmArgv) {
    const { el } = this.Modal({
      config: {
        title,
        centered: true,
        width: width || 300,
        closable: false,
        zIndex,
        footer: () => {
          return [
            // @ts-ignore
            <Button
              key="submit"
              type="primary"
              title={Intl.tv('确定')}
              onClick={() => {
                if (onSuccess) {
                  onSuccess().then(() => {
                    Emitter.trigger(Actions.close, el);
                  });
                } else {
                  Emitter.trigger(Actions.close, el);
                }
              }}
            >
              {Intl.tv('确定')}
            </Button>,
          ];
        },
      },
      local,
      children: icon
        ? () => renderByIcon({ icon, text })
        : // @ts-ignore
          () => (Util.isFunction(text) ? text() : text),
    });
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
  Prompt({ title, config, width = 300, zIndex = 1000, local, onSuccess }: IPromptConfig) {
    if (config.option) {
      config.option.submitBtn = false;
      config.option.resetBtn = false;
    }

    // @ts-ignore
    const { el, /*vm,*/ rootRef } = this.Modal({
      config: {
        title,
        centered: true,
        width: width || 300,
        closable: false,
        zIndex,
        footer: () => {
          return [
            // @ts-ignore
            <Button
              key="submit"
              type="primary"
              title={Intl.tv('确定')}
              onClick={() => {
                if (onSuccess) {
                  const fApi = rootRef.value.fApi; //vm?.$refs?.formRef?.fApi;

                  fApi.validate((valid: boolean) => {
                    if (valid) {
                      onSuccess(fApi.getValue(config.rule[0].field)).then(() => {
                        Emitter.trigger(Actions.close, el);
                      });
                    }
                  });
                } else {
                  Emitter.trigger(Actions.close, el);
                }
              }}
            >
              {Intl.tv('确定')}
            </Button>,
          ];
        },
      },
      local,
      children: {
        template: `
          <form-create
            v-model:api="fApi"
            :rule="rule"
            :option="option"
          ></form-create>
        `,
        data() {
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
    });
  },
  /**
   * InputPrompt
   * @param config
   * @param params
   * @constructor
   */
  InputPrompt({ config, ...params }: IPromptConfig) {
    config.rule[0].type = 'input';
    config.rule[0]._fc_drag_tag = 'input';
    config.rule[0].field = 'prompt';

    MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...config,
      },
    });
  },
  /**
   * TextAreaPrompt
   * @param config
   * @param params
   * @constructor
   */
  TextAreaPrompt({ config, ...params }: IPromptConfig) {
    config.rule[0].type = 'input';
    config.rule[0]._fc_drag_tag = 'input';
    config.rule[0].field = 'prompt';
    config.rule[0].props = {
      type: 'textarea',
    };

    MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...config,
      },
    });
  },
  /**
   * PassWordPrompt
   * @param config
   * @param params
   * @constructor
   */
  PassWordPrompt({ config, ...params }: IPromptConfig) {
    config.rule[0].type = 'input';
    config.rule[0]._fc_drag_tag = 'input';
    config.rule[0].field = 'prompt';
    config.rule[0].props = {
      type: 'password',
    };

    MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...config,
      },
    });
  },
  /**
   * NumberPrompt
   * @param config
   * @param params
   * @constructor
   */
  NumberPrompt({ config, ...params }: IPromptConfig) {
    config.rule[0].type = 'input';
    config.rule[0]._fc_drag_tag = 'input';
    config.rule[0].field = 'prompt';
    config.rule[0].props = {
      type: 'number',
    };

    MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...config,
      },
    });
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
  Alert({ title, text = null, width = 300, zIndex = 1000, local, icon }: IAlertArgv) {
    this.Modal({
      config: {
        title,
        centered: true,
        width: width || 300,
        closable: false,
        zIndex,
      },
      local,
      children: icon
        ? () => renderByIcon({ icon, text })
        : // @ts-ignore
          () => (Util.isFunction(text) ? text() : text),
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
  Modal({
    config = {},
    children = Function,
    defaultCloneBtn = true,
    local = DEFAULT_LOCAL,
  }: IModalArg) {
    /**
     * renderDefault
     * @param children
     * @param rootRef
     */
    function renderDefault(children: any, rootRef: any) {
      if (!Util?.isEmpty?.(children)) {
        // 如果是jsx
        if (Util?.isFunction?.(children)) {
          return h(children(), { ref: rootRef });
        }

        // 如果是组件
        if (Util?.isObject?.(children)) {
          return h(children, { ref: rootRef });
        }
      }

      return null;
    }

    /**
     * renderTitle
     * @param title
     */
    function renderTitle(title: any) {
      if (!Util.isEmpty?.(title)) {
        // 如果是jsx
        if (Util.isFunction?.(title)) {
          return h(title());
        }

        // 如果是组件
        if (Util.isObject?.(title)) {
          return h('div', {}, [h(title)]);
        }
      }

      return title;
    }

    /**
     * renderFooter
     * @param config
     */
    function renderFooter(config: any) {
      if (!Util.isEmpty?.(config.footer)) {
        if (Util.isFunction?.(config.footer)) {
          return h(config.footer());
        }

        if (Util.isObject?.(config.footer)) {
          return h(config.footer);
        }
      }

      return null;
    }

    /**
     * close
     */
    function close() {
      try {
        app?.unmount();
      } catch (err) {
        el?.parentElement?.removeChild(el);
      }
    }

    const { title, ...others } = config;

    const modalConfig = {
      maskClosable: false,
      ...others,
    };

    if (Util.isString?.(title)) {
      modalConfig.title = title;
    }

    const el = document.createElement('div');

    const i18n = Intl({
      I18nOptions: {
        // @ts-ignore
        messages: (globalConfig || {}).messages,
        locale: local || DEFAULT_LOCAL,
        globalInjection: true,
        legacy: false,
      },
      prefix: 'local',
    });

    let rootRef;

    const app = createApp({
      setup() {
        rootRef = ref();

        return () => {
          const footerJSX = renderFooter(config);

          if (footerJSX) {
            modalConfig.footerJSX = footerJSX;
          }

          return (
            // @ts-ignore
            <ConfigProvider locale={LOCAL[local || DEFAULT_LOCAL]}>
              {/*@ts-ignore*/}
              <ModalDialog
                config={modalConfig}
                closeBtn={defaultCloneBtn}
                onClose={() => {
                  close();
                }}
              >
                {{
                  default: () => renderDefault(children, rootRef),
                  title: () => renderTitle(title),
                }}
              </ModalDialog>
            </ConfigProvider>
          );
        };
      },
    });

    // Button, ConfigProvider, Form, FormItem, Row, Col, Slider, Input

    app
      .use(ConfigProvider)
      .use(Button)
      .use(Form)
      .use(Row)
      .use(Col)
      .use(Slider)
      .use(Col)
      .use(Input)
      .use(i18n)
      .use(formCreate);

    // @ts-ignore
    Intl.use(app);

    // globalConfig?.useComponents?.forEach?.((com) => {
    //   if ('use' in com && Util.isFunction?.(com.use)) {
    //     com.use(app);
    //   } else {
    //     app.use(com);
    //   }
    // });
    globalConfig?.beforeMount?.(app);

    app.mount(el);

    document.body.appendChild(el);

    return {
      el,
      vm: app,
      rootRef,
    };
  },
  /**
   * close
   * @param el
   */
  close(el: HTMLElement) {
    Emitter.trigger(Actions.close, el);
  },
  setConfig(gc: IConfig) {
    globalConfig = gc;
  },
};

export default MessageDialogFactory;
