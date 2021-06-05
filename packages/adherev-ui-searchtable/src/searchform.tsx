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
    // @ts-ignore
    const { $slots, className } = this;

    return (
      //  @ts-ignore
      <table class={classNames(selectorPrefix, ...(className || '').split(' '))}>
        {/*@ts-ignore*/}
        <tbody>{$slots.default}</tbody>
      </table>
    );
  },
};
