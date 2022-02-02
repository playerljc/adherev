import Vue, { CreateElement } from 'vue';
import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-searchform-row';

export default Vue.extend({
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
      <tr class={classNames(selectorPrefix, ...(className || '').split(/\s+/))}>{$slots.default}</tr>
    );
  },
});
