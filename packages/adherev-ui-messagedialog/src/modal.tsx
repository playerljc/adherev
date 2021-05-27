import { Modal, Button } from 'ant-design-vue';

import Intl from '@baifendian/adherev-util-intl';

import { Fragment } from '../../_util';
import { CreateElement } from 'vue';

export const selectorPrefix = 'adherev-ui-messagedialog';

export default {
  props: {
    parent: {
      type: Object,
      require: true,
    },
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
  methods: {
    /**
     * onClose
     * @param el
     */
    onClose(el) {
      // @ts-ignore
      const { parent, $parent } = this;

      function close() {
        // @ts-ignore
        $parent.$destroy();
        parent.parentElement.removeChild(parent);
      }

      if (el) {
        if (el === parent) {
          close();
        }
      } else {
        close();
      }
    },
    /**
     * renderCloseBtn
     * @param h
     */
    renderCloseBtn(h) {
      // @ts-ignore
      const { $slots } = this;

      const props = {
        key: 'close',
        title: Intl.tv('取消'),
        type: undefined,
        onClick: () => {
          // @ts-ignore
          this.onClose();
        },
      };

      if (($slots.footer || []).length === 0) {
        // @ts-ignore
        props.type = 'primary';
      }

      // @ts-ignore
      return <Button {...props}>{Intl.tv('取消')}</Button>;
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
      const { $slots, closeBtn } = this;
      return $slots.footer ? (
        // @ts-ignore
        <Fragment slot="footer">
          {closeBtn ? [...$slots.footer, this.renderCloseBtn(h)] : $slots.footer}
        </Fragment>
      ) : closeBtn ? (
        // @ts-ignore
        <Fragment slot="footer">{this.renderCloseBtn(h)}</Fragment>
      ) : null;
    },
  },
  /**
   * render
   * @param h
   */
  render(h) {
    // @ts-ignore
    const { config } = this;

    // @ts-ignore
    const { footer = [], centered = true, ...other } = config;

    return (
      // @ts-ignore
      <Modal
        {...other}
        centered={centered}
        wrapClassName={selectorPrefix}
        onCancel={() => {
          // @ts-ignore
          this.onClose();
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
