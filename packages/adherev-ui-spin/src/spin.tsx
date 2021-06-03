import Resource from '@baifendian/adherev-util-resource';

const selectorPrefix = 'adherev-ui-spin';

export default {
  name: 'adv-spin',
  props: {
    spinning: {
      type: Boolean,
      require: true,
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
    // @ts-ignore
    const { spinning, text, zIndex } = this;

    return spinning ? (
      // @ts-ignore
      <div class={selectorPrefix} style={{ zIndex: zIndex }}>
        {/*@ts-ignore*/}
        <span class={`${selectorPrefix}-dot`}>
          {/*@ts-ignore*/}
          <i></i>
          {/*@ts-ignore*/}
          <i></i>
          {/*@ts-ignore*/}
          <i></i>
          {/*@ts-ignore*/}
          <i></i>
        </span>
        {/*@ts-ignore*/}
        <div class={`${selectorPrefix}-text`}>{text}</div>
      </div>
    ) : null;
  },
};
