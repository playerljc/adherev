import classNames from 'classnames';
import { CreateElement } from 'vue';

const selectorPrefix = 'adherev-ui-searchform-row';

export default {
  name: 'adv-searchtable-searchform-row',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  render(h: CreateElement) {
    const { $slots, className } = this;

    return (
      <tr class={classNames(selectorPrefix, ...(className || '').split(/\s+/))}>
        {$slots.default}
      </tr>
    );
  },
};
