export default {
  name: 'adv-conditionalrender',
  props: {
    conditional: {
      type: Boolean,
      required: true,
      default: true,
    },
    noMatch: {
      type: String,
      required: false,
    },
  },
  render(h) {
    // @ts-ignore
    const { conditional, $slots, noMatch } = this;

    // @ts-ignore
    return conditional ? $slots.default : $slots[noMatch] ? $slots[noMatch] : null;
  },
};
