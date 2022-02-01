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
    // @ts-ignore
    const { conditional, $slots } = this;

    return conditional ? $slots.default : $slots.noMatch ? $slots.noMatch : null;
  },
};
