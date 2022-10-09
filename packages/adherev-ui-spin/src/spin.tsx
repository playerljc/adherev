import Resource from '@baifendian/adherev-util-resource';

const selectorPrefix = 'adherev-ui-spin';

const Spin: any = {
  name: 'adv-spin',
  props: {
    spinning: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    zIndex: {
      type: Number,
      default: Resource.Dict.value.ResourceNormalMaxZIndex.value,
    },
  },
  render(h) {
    const { spinning, text, zIndex } = this;

    return spinning ? (
      <div class={selectorPrefix} style={{ zIndex }}>
        <span class={`${selectorPrefix}-dot`}>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>

        <div class={`${selectorPrefix}-text`}>{text}</div>
      </div>
    ) : null;
  },
};

export default Spin;
