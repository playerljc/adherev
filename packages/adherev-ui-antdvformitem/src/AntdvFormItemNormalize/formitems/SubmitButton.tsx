import { Button } from 'ant-design-vue';
import { defineComponent, h, ref } from 'vue';

import { HOC, assignAttrs } from '../util';

/**
 * SubmitButton
 */
const Wrap: any = HOC(
  defineComponent({
    setup(props, { attrs, slots }) {
      const loading = ref<boolean>(false);

      return () =>
        h(
          Button,
          {
            loading: loading.value,
            ...props,
            ...attrs,
            onClick(e) {
              if (!attrs.onClick) return;

              if (loading.value) return;

              loading.value = true;

              attrs
                // @ts-ignore
                ?.onClick?.(e)
                // @ts-ignore
                ?.then?.(() => (loading.value = false))
                ?.catch?.(() => (loading.value = false));
            },
          },
          slots,
        );
    },
  }),
  {
    props(props, getEl) {
      return assignAttrs(props, Wrap.defaultProps, getEl?.());
    },
  },
);

Wrap.defaultProps = {};

export default Wrap;
