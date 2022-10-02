const selectPrefix = 'adherev-ui-playground-page-section';

export const SectionPropTypes = {
  title: {
    type: [String, Object],
    default: '',
  },
  extra: {
    type: Object,
    default: () => null,
  },
};

const Section: any = {
  name: 'adv-playground-page-section',
  props: {
    ...SectionPropTypes,
  },
  render(h) {
    const { title, extra } = this;

    return (
      <div class={selectPrefix}>
        <div class={`${selectPrefix}-header`}>
          <div class={`${selectPrefix}-header-title`}>{title}</div>
          <div class={`${selectPrefix}-header-extra`}>{extra}</div>
        </div>
        <div class={`${selectPrefix}-body`}>{this.$slots.default}</div>
      </div>
    );
  },
};

export default Section;
