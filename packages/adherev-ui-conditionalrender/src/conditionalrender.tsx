/**
 * ConditionalRender
 */
export default {
  name: 'adv-conditionalrender',
  props: {
    conditional: {
      type: Boolean,
      default: true,
    },
  },
  render(h) {
    const { conditional, $slots } = this;

    return conditional ? $slots.default : $slots.noMatch ? $slots.noMatch : null;
  },
};
