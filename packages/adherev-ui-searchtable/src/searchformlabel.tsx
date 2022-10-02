import classNames from 'classnames';
import { CreateElement } from 'vue';

const selectorPrefix = 'adherev-ui-searchform-label';

const SearchFormLabel: any = {
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
      <td class={classNames(selectorPrefix, ...(className || '').split(/\s+/))}>
        {$slots.default}
      </td>
    );
  },
};

export default SearchFormLabel;
