import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-stickuplayout-item';

export default {
  name: 'adv-stickuplayout-item',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  render(h) {
    const { $slots, className } = this;

    return (
      <div class={classNames(selectorPrefix, className.split(' '))}>
        <div class={`${selectorPrefix}-header`}>{$slots.title}</div>
        <div class={`${selectorPrefix}-content`}>{$slots.default}</div>
      </div>
    );
  },
};
