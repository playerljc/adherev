import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-searchform';

export default {
  name: 'adv-searchtable-searchform',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  render(h) {
    const { $slots, className } = this;

    return (
      //  @ts-ignore
      <table class={classNames(selectorPrefix, ...(className || '').split(' '))}>
        <tbody>{$slots.default}</tbody>
      </table>
    );
  },
};
