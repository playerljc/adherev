import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-playground-simple-tabs-panel';

export default {
  name: 'adv-playground-simple-tabs-tab-panel',
  props: {
    title: {
      type: String,
      default: '',
    },
    index: {
      type: [String, Number],
      default: '',
    },
  },
  inject: ['getActiveKey'],
  render(h) {
    const { index, $slots, getActiveKey } = this;

    return (
      <div class={classNames(selectorPrefix, getActiveKey() === index ? `active` : '')}>
        {$slots.default}
      </div>
    );
  },
};
