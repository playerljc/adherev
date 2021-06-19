import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-searchform-value';

export default {
  name: 'adv-searchtable-searchform-value',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  render(h) {
    const { $slots, className } = this;

    return (
      <td class={classNames(selectorPrefix, ...(className || '').split(' '))}>{$slots.default}</td>
    );
  },
};
