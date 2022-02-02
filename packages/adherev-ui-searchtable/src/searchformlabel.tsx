import Vue, { CreateElement } from 'vue';
import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-searchform-label';

export default Vue.extend({
  name: 'adv-searchtable-searchform-label',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  render(h: CreateElement) {
    const { $slots, className } = this;

    return (
      <td class={classNames(selectorPrefix, ...(className || '').split(/\s+/))}>{$slots.default}</td>
    );
  },
});
