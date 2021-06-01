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
      require: true,
    },
    closeBtn: {
      type: Boolean,
      require: false,
      default: true,
    },
  },
  mounted() {
    // @ts-ignore
    Emitter.on(Actions.close, this.onEmitterClose);
  },
  beforeDestroy() {
    // @ts-ignore
    Emitter.remove(Actions.close, this.onEmitterClose);
  },
  methods: {
    onEmitterClose() {
      const {
        // @ts-ignore
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
        // @ts-ignore
        config,
        // @ts-ignore
        $listeners: { close },
      } = this;

      return (
        // @ts-ignore
        <Button
          // @ts-ignore
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
      // @ts-ignore
      const { $slots } = this;
      return $slots.default ? $slots.default : null;
    },
    /**
     * renderTitle
     * @param h
     */
    renderTitle(h) {
      // @ts-ignore
      const { $slots } = this;
      // @ts-ignore
      return $slots.title ? <Fragment slot="title">{$slots.title}</Fragment> : null;
    },
    /**
     * renderFooter
     * @param h
     */
    renderFooter(h) {
      // @ts-ignore
      const { config, closeBtn } = this;

      let result = null;

      if (config.footerJSX) {
        if (closeBtn) {
          result = (
            // @ts-ignore
            <Fragment slot="footer">
              {/* @ts-ignore */}
              <div>{[...config.footerJSX, this.renderCloseBtn(h)]}</div>
            </Fragment>
          );
        } else {
          result = (
            // @ts-ignore
            <Fragment slot="footer">
              {/* @ts-ignore */}
              <div>{config.footerJSX}</div>
            </Fragment>
          );
        }
      } else {
        if (closeBtn) {
          // @ts-ignore
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
      // @ts-ignore
      config,
      // @ts-ignore
      $listeners: { close },
    } = this;

    // @ts-ignore
    const { footer = [], centered = true, ...other } = config;

    const data = {
      props: other,
    };

    return (
      // @ts-ignore
      <Modal
        {...data}
        // @ts-ignore
        centered={centered}
        wrapClassName={selectorPrefix}
        onCancel={() => {
          // @ts-ignore
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
