import { CreateElement } from 'vue';
import { Modal, Button } from 'ant-design-vue';

import Intl from '@baifendian/adherev-util-intl';

import { Fragment } from '../../_util';
import Actions from './actions';
import Emitter from './emitter';

export const selectorPrefix = 'adherev-ui-messagedialog';

export default {
  props: {
    config: {
      type: Object,
      required: true,
    },
    closeBtn: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  mounted() {
    Emitter.on(Actions.close, this.onEmitterClose);
  },
  beforeDestroy() {
    Emitter.remove(Actions.close, this.onEmitterClose);
  },
  methods: {
    onEmitterClose() {
      const {
        $listeners: { close },
      } = this;

      if (close) {
        close();
      }
    },
    /**
     * renderCloseBtn
     * @param h
     */
    renderCloseBtn(h) {
      const {
        config,

        $listeners: { close },
      } = this;

      return (
        <Button
          key="close"
          type={!config.footerJSX ? 'primary' : ''}
          title={Intl.tv('取消')}
          onClick={() => {
            if (close) {
              close();
            }
          }}
        >
          {Intl.tv('取消')}
        </Button>
      );
    },
    /**
     * renderDefault
     * @param h
     */
    renderDefault(h: CreateElement) {
      const { $slots } = this;
      return $slots.default ? $slots.default : null;
    },
    /**
     * renderTitle
     * @param h
     */
    renderTitle(h) {
      const { $slots } = this;

      return $slots.title ? <Fragment slot="title">{$slots.title}</Fragment> : null;
    },
    /**
     * renderFooter
     * @param h
     */
    renderFooter(h) {
      const { config, closeBtn } = this;

      let result = null;

      if (config.footerJSX) {
        if (closeBtn) {
          result = (
            <Fragment slot="footer">
              {/* @ts-ignore */}
              <div>{[...config.footerJSX, this.renderCloseBtn(h)]}</div>
            </Fragment>
          );
        } else {
          result = (
            <Fragment slot="footer">
              {/* @ts-ignore */}
              <div>{config.footerJSX}</div>
            </Fragment>
          );
        }
      } else {
        if (closeBtn) {
          result = <Fragment slot="footer">{this.renderCloseBtn(h)}</Fragment>;
        }
      }

      return result;
    },
  },
  /**
   * render
   * @param h
   */
  render(h) {
    const {
      config,

      $listeners: { close },
    } = this;

    const { footer = [], centered = true, ...other } = config;

    const data = {
      props: other,
    };

    return (
      <Modal
        {...data}
        centered={centered}
        wrapClassName={selectorPrefix}
        onCancel={() => {
          if (close) {
            close();
          }
        }}
        visible
      >
        {/* @ts-ignore */}
        {this.renderDefault(h)}
        {/* @ts-ignore */}
        {this.renderTitle(h)}
        {/* @ts-ignore */}
        {this.renderFooter(h)}
      </Modal>
    );
  },
};
