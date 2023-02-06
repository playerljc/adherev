import { defineComponent } from 'vue';
import { bool } from 'vue-types';

export const conditionalRenderProps = {
  conditional: bool().def(true),
};

/**
 * ConditionalRender
 */
export default defineComponent({
  name: 'adv-conditionalrender',
  props: conditionalRenderProps,
  slots: ['default', 'noMatch'],
  setup(props, { slots }) {
    return () =>
      props.conditional
        ? slots.default
          ? slots.default()
          : null
        : slots.noMatch
        ? slots.noMatch()
        : null;
  },
});
