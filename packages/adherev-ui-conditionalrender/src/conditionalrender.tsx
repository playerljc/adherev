import { defineComponent } from 'vue';
import { bool } from 'vue-types';

const props = {
  conditional: bool().def(true),
};

/**
 * ConditionalRender
 */
export default defineComponent({
  name: 'adv-conditionalrender',
  props,
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
