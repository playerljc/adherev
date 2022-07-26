import { CreateElement } from 'vue';
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
  render(h: CreateElement) {
    const { $slots, className } = this;

    return (
      <td class={classNames(selectorPrefix, ...(className || '').split(/\s+/))}>
        {$slots.default}
      </td>
    );
  },
};
