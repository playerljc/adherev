import Vue from 'vue';
import { ConfigProvider, Button } from 'ant-design-vue';

import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';
import Util from '@baifendian/adherev-util';

import { IAlertArgv, IConfirmArgv, IPromptConfig } from './types';
import { Fragment } from '../../_util';

export const selectorPrefix = 'adherev-ui-messagedialog';

import Actions from './actions';
import Emitter from './emitter';

import ModalDialog from './modal';

const DEFAULT_LOCAL = 'zh_CN';

const LOCAL = Resource.Dict.value.LocalsAntd.value;

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
      {/* @ts-ignore */}
      <div class={`${selectorPrefix}-renderByIcon-fixed`}>
        {/* @ts-ignore */}
        {Util.isFunction(icon) ? icon(h) : <Fragment>{icon}</Fragment>}
      </div>
      {/* @ts-ignore */}
      <div class={`${selectorPrefix}-renderByIcon-auto`}>
        {/* @ts-ignore */}
        {Util.isFunction(text) ? text(h) : <Fragment>{text}</Fragment>}
      </div>
    </div>
  );
}

const MessageDialogFactory = {
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
        footer: (h) => {
          return [
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
        ? (h) => renderByIcon({ h, icon, text })
        : (h) => (Util.isFunction(text) ? text(h) : <Fragment>{text}</Fragment>),
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

    const { el, vm } = this.Modal({
      config: {
        title,
        centered: true,
        width: width || 300,
        closable: false,
        zIndex,
        footer: (h) => {
          return [
            <Button
              key="submit"
              type="primary"
              title={Intl.tv('确定')}
              onClick={() => {
                if (onSuccess) {
                  const fApi = vm.$refs.formRef.fApi;

                  fApi.validate((valid) => {
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
        : (h) => (Util.isFunction(text) ? text(h) : <Fragment>{text}</Fragment>),
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
          return h(children, { ref: 'formRef' });
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

      el.parentElement.removeChild(el);
    }

    const { title, ...others } = config;

    const modalConfig = {
      maskClosable: false,
      ...others,
    };

    if (Util.isString(title)) {
      modalConfig.title = title;
    }

    const el = document.createElement('div');

    const _vm = new Vue({
      render(h) {
        const footerJSX = renderFooter({ config, h });

        if (footerJSX) {
          modalConfig.footerJSX = footerJSX;
        }

        return (
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
    };
  },
  /**
   * close
   * @param el
   */
  close(el: HTMLElement) {
    Emitter.trigger(Actions.close, el);
  },
};

export default MessageDialogFactory;
