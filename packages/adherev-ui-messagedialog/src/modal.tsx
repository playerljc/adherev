import { Button, Modal } from 'ant-design-vue';
import { CreateElement } from 'vue';

import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

// import Actions from './actions';
// import Emitter from './emitter';

const {
  _util: { Fragment },
} = Util;

export const selectorPrefix = 'adherev-ui-messagedialog';

const ModalConfig: any = {
  props: {
    config: {
      type: Object,
    },
    closeBtn: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  // mounted() {
  //   Emitter.on(Actions.close, this.onEmitterClose);
  // },
  // beforeDestroy() {
  //   Emitter.remove(Actions.close, this.onEmitterClose);
  // },
  methods: {
    // onEmitterClose() {
    //   const {
    //     $listeners: { close },
    //   } = this;

    //   if (close) {
    //     close();
    //   }
    // },
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
      const { $slots } = this;
      return $slots.default ? $slots.default : null;
    },
    /**
     * renderTitle
     * @param h
     */
    renderTitle(h) {
      const { $slots } = this;

      return $slots.title ? (
        // @ts-ignore
        <Fragment slot="title">{$slots.title}</Fragment>
      ) : null;
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
            // @ts-ignore
            <Fragment slot="footer">
              <div>{[...config.footerJSX, this.renderCloseBtn(h)]}</div>
            </Fragment>
          );
        } else {
          result = (
            // @ts-ignore
            <Fragment slot="footer">
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
        // @ts-ignore
        centered={centered}
        wrapClassName={selectorPrefix}
        onCancel={() => {
          if (close) {
            close();
          }
        }}
        visible
      >
        {this.renderDefault(h)}
        {this.renderTitle(h)}
        {this.renderFooter(h)}
      </Modal>
    );
  },
};

export default ModalConfig;
