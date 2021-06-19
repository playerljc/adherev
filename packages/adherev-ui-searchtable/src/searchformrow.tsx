import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-searchform-row';

export default {
  name: 'adv-searchtable-searchform-row',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  render(h) {
    const { $slots, className } = this;

    return (
      <tr class={classNames(selectorPrefix, ...(className || '').split(' '))}>{$slots.default}</tr>
    );
  },
};
