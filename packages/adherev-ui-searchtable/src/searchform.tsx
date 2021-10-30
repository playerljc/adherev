import Vue, { CreateElement } from 'vue';
import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-searchform';

export default Vue.extend({
  name: 'adv-searchtable-searchform',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  render(h: CreateElement) {
    const { $slots, className } = this;

    return (
      <table class={classNames(selectorPrefix, ...(className || '').split(' '))}>
        <tbody>{$slots.default}</tbody>
      </table>
    );
  },
});
