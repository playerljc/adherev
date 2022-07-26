import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';
import { Button, ConfigProvider } from 'ant-design-vue';
import Vue from 'vue';
import ModalDialog from './modal';
import { IAlertArgv, IConfig, IConfirmArgv, IPromptConfig } from './types';

export const selectorPrefix = 'adherev-ui-messagedialog';

const DEFAULT_LOCAL = 'zh_CN';

const LOCAL = Resource.Dict.value.LocalsAntd.value;

const {
  _util: { Fragment },
} = Util;

// MessageDialog的配置
let globalConfig: IConfig | null = null;

/**
 * renderByIcon
 * @param h
 * @param icon
 * @param text
 * @return React.ReactElement
 */
function renderByIcon({ h, icon, text }) {
  return (
    <div class={`${selectorPrefix}-renderByIcon`}>
      <div class={`${selectorPrefix}-renderByIcon-fixed`}>
        {Util.isFunction(icon) ? (
          icon(h)
        ) : (
          // @ts-ignore
          <Fragment>{icon}</Fragment>
        )}
      </div>
      <div class={`${selectorPrefix}-renderByIcon-auto`}>
        {Util.isFunction(text) ? (
          text(h)
        ) : (
          // @ts-ignore
          <Fragment>{text}</Fragment>
        )}
      </div>
    </div>
  );
}

const MessageDialogFactory = {
  setConfig: (gc: IConfig) => {
    globalConfig = gc;
  },
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
    const { close } = this.Modal({
      config: {
        title,
        centered: true,
        width: width || 300,
        closable: false,
        zIndex,
        footer: (h) => {
          return [
            <Button
              // @ts-ignore
              key="submit"
              type="primary"
              title={Intl.tv('确定')}
              onClick={() => {
                if (onSuccess) {
                  onSuccess().then(() => {
                    // Emitter.trigger(Actions.close, el);
                    close();
                  });
                } else {
                  // Emitter.trigger(Actions.close, el);
                  close();
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
        ? (h) => renderByIcon({ h, icon, text })
        : (h) =>
            Util.isFunction(text) ? (
              (text as Function)(h)
            ) : (
              // @ts-ignore
              <Fragment>{text}</Fragment>
            ),
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

    const { close, vm } = this.Modal({
      config: {
        title,
        centered: true,
        width: width || 300,
        closable: false,
        zIndex,
        footer: (h) => {
          return [
            <Button
              // @ts-ignore
              key="submit"
              type="primary"
              title={Intl.tv('确定')}
              onClick={() => {
                if (onSuccess) {
                  const fApi = vm.$refs.rootRef.fApi;

                  fApi.validate((valid) => {
                    if (valid) {
                      onSuccess(fApi.getValue(config.rule[0].field)).then(() => {
                        // Emitter.trigger(Actions.close, el);
                        close();
                      });
                    }
                  });
                } else {
                  // Emitter.trigger(Actions.close, el);
                  close();
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
            v-model="fApi"
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
        ? (h) => renderByIcon({ h, icon, text })
        : (h) =>
            Util.isFunction(text) ? (
              (text as Function)(h)
            ) : (
              // @ts-ignore
              <Fragment>{text}</Fragment>
            ),
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
  Modal({ config = {}, children = Function, defaultCloneBtn = true, local = DEFAULT_LOCAL }) {
    /**
     * renderDefault
     * @param h
     * @param children
     */
    function renderDefault({ h, children }) {
      if (!Util.isEmpty(children)) {
        // 如果是jsx
        if (Util.isFunction(children)) {
          return children(h);
        }

        // 如果是组件
        if (Util.isObject(children)) {
          return h(children, { ref: 'rootRef' });
        }
      }

      return null;
    }

    /**
     * renderTitle
     * @param title
     * @param h
     */
    function renderTitle({ title, h }) {
      if (!Util.isEmpty(title)) {
        // 如果是jsx
        if (Util.isFunction(title)) {
          // @ts-ignore
          return <Fragment slot="title">{title(h)}</Fragment>;
        }

        // 如果是组件
        if (Util.isObject(title)) {
          return h('div', { slot: 'title' }, [h(title)]);
        }
      }

      return null;
    }

    /**
     * renderFooter
     * @param config
     * @param h
     */
    function renderFooter({ config, h }) {
      if (!Util.isEmpty(config.footer)) {
        if (Util.isFunction(config.footer)) {
          return config.footer(h);
        }

        if (Util.isObject(config.footer)) {
          return h(config.footer);
        }
      }

      return null;
    }

    /**
     * close
     */
    function close() {
      _vm.$destroy();

      el?.parentElement?.removeChild(el);
    }

    const { title, ...others } = config as any;

    const modalConfig = {
      maskClosable: false,
      ...others,
    };

    if (Util.isString(title)) {
      modalConfig.title = title;
    }

    const el = document.createElement('div');

    const _vm = new Vue({
      ...(globalConfig?.getOptions?.() || {}),
      i18n: Intl({
        I18nOptions: {
          // @ts-ignore
          messages: (globalConfig || {}).messages,
          locale: local || DEFAULT_LOCAL,
        },
        prefix: 'local',
      }),
      render(h) {
        const footerJSX = renderFooter({ config, h });

        if (footerJSX) {
          modalConfig.footerJSX = footerJSX;
        }

        return (
          // @ts-ignore
          <ConfigProvider locale={LOCAL[local || DEFAULT_LOCAL]}>
            {/* @ts-ignore */}
            <ModalDialog
              config={modalConfig}
              closeBtn={defaultCloneBtn}
              onClose={() => {
                close();
              }}
            >
              {renderDefault({ h, children })}
              {renderTitle({ title, h })}
            </ModalDialog>
          </ConfigProvider>
        );
      },
    }).$mount(el);

    document.body.appendChild(el);

    return {
      el,
      vm: _vm,
      close,
    };
  },
  /**
   * close
   * @param el
   */
  close({ _vm, el }: { _vm: any; el: HTMLElement }) {
    // Emitter.trigger(Actions.close, el);
    _vm.$destroy();

    el?.parentElement?.removeChild(el);
  },
};

export default MessageDialogFactory;
