import classNames from 'classnames';
import { CreateElement } from 'vue';

const selectorPrefix = 'adherev-ui-searchform';

const SearchForm: any = {
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
      <table class={classNames(selectorPrefix, ...(className || '').split(/\s+/))}>
        <tbody>{$slots.default}</tbody>
      </table>
    );
  },
};

export default SearchForm;
