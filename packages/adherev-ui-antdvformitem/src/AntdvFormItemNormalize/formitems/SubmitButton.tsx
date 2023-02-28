import { Button } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const SubmitButton = {
  // @ts-ignore
  props: Button.props,
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    onClick(e) {
      if (!this.$listeners.click) return;

      if (this.loading) return;

      this.loading = true;

      this.$listeners
        ?.click?.(e)
        ?.then?.(() => (this.loading = false))
        ?.catch?.(() => (this.loading = false));
    },
  },
  render(h) {
    return h(
      Button,
      {
        props: {
          ...this.$props,
          loading: this.loading,
        },
        attrs: this.$attrs,
        on: {
          ...this.$listeners,
          click: this.onClick,
        },
        scopedSlots: { ...(this.$scopedSlots || {}) },
      },
      Object.keys(this.$slots).reduce((arr, key) => arr.concat(this.$slots[key]), []),
    );
  },
};

/**
 * SubmitButton
 */
const Wrap = HOC(SubmitButton, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(SubmitButton, context, Wrap.defaultProps);

    return (
      // @ts-ignore
      <SubmitButton
        {...{
          ...context.data,
        }}
      >
        {context.children}
      </SubmitButton>
    );
  },
});

Wrap.defaultProps = {};

export default Wrap;
