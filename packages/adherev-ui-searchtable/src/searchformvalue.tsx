import classNames from 'classnames';
import { CreateElement } from 'vue';

const selectorPrefix = 'adherev-ui-searchform-value';

const SearchFormValue: any = {
  name: 'adv-searchtable-searchform-value',
  render(h: CreateElement) {
    const { $slots } = this;

    return <td class={classNames(selectorPrefix)}>{$slots.default}</td>;
  },
};

export default SearchFormValue;
