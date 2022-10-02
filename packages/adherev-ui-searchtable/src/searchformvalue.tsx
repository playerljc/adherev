import classNames from 'classnames';
import { CreateElement } from 'vue';

const selectorPrefix = 'adherev-ui-searchform-value';

const SearchFormValue: any = {
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

export default SearchFormValue;
