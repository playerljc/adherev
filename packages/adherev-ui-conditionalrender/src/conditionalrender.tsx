export default {
  name: 'adv-conditionalrender',
  props: {
    conditional: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  render(h) {
    // @ts-ignore
    const { conditional, $slots } = this;

    // @ts-ignore
    return conditional ? $slots.default : $slots.noMatch ? $slots.noMatch : null;
  },
};
