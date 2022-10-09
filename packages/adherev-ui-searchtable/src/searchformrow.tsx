import classNames from 'classnames';
import { CreateElement } from 'vue';

const selectorPrefix = 'adherev-ui-searchform-row';

const SearchFormRow: any = {
  name: 'adv-searchtable-searchform-row',
  render(h: CreateElement) {
    const { $slots } = this;

    return <tr class={classNames(selectorPrefix)}>{$slots.default}</tr>;
  },
};

export default SearchFormRow;
