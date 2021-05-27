import Vue from 'vue';
import { ConfigProvider, Button } from 'ant-design-vue';

import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';
import Util from '@baifendian/adherev-util';

import { IAlertArgv, IConfirmArgv } from './types';
import { Fragment } from '../../_util';

export const selectorPrefix = 'adherev-ui-messagedialog';

import Actions from './actions';
import Emitter from './emitter';
// @ts-ignore
import ModalDialog from './modal';

const DEFAULT_LOCAL = 'zh_CN';

const LOCAL = Resource.Dict.value.LocalsAntd;

/**
 * renderByIcon
 * @param h
 * @param icon
 * @param text
 * @return React.ReactElement
 */
function renderByIcon({ h, icon, text }) {
  return (
    // @ts-ignore
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
    const el = this.Modal({
      config: {
        title,
        centered: true,
        width: width || 300,
        closable: false,
        zIndex,
        footer: (h) => {
          return [
            // @ts-ignore
            <Button
              // @ts-ignore
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
      // @ts-ignore
      children: icon
        ? (h) => renderByIcon({ h, icon, text })
        : // @ts-ignore
          (h) => (Util.isFunction(text) ? text(h) : <Fragment>{text}</Fragment>),
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
      // @ts-ignore
      children: icon
        ? (h) => renderByIcon({ h, icon, text })
        : // @ts-ignore
          (h) => (Util.isFunction(text) ? text(h) : <Fragment>{text}</Fragment>),
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
    function renderDefault({ h, children }) {
      return !Util.isEmpty(children) && Util.isFunction(children) ? children(h) : null;
    }

    function renderTitle({ title, h }) {
      return !Util.isEmpty(title) && Util.isFunction(title) ? (
        // @ts-ignore
        <Fragment slot="title">{title(h)}</Fragment>
      ) : null;
    }

    function renderFooter({ config, h }) {
      return !Util.isEmpty(config.footer) && Util.isFunction(config.footer) ? (
        // @ts-ignore
        <Fragment slot="footer">{config.footer(h)}</Fragment>
      ) : null;
    }

    // @ts-ignore
    const title = config.title;

    const modalConfig = Object.assign(
      {
        maskClosable: false,
      },
      config,
      {
        title: Util.isFunction(title) ? 'title' : title,
      },
    );

    const el = document.createElement('div');

    new Vue({
      render(h) {
        return (
          // @ts-ignore
          <ConfigProvider locale={LOCAL[local || DEFAULT_LOCAL]}>
            {/* @ts-ignore */}
            <ModalDialog parent={el} config={modalConfig} closeBtn={defaultCloneBtn}>
              {renderDefault({ h, children })}
              {renderFooter({ config, h })}
              {renderTitle({ title, h })}
            </ModalDialog>
          </ConfigProvider>
        );
      },
    }).$mount(el);

    document.body.appendChild(el);

    return el;
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
