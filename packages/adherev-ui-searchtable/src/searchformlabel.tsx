import classNames from 'classnames';
import { CreateElement } from 'vue';

const selectorPrefix = 'adherev-ui-searchform-label';

const SearchFormLabel: any = {
  name: 'adv-searchtable-searchform-label',
  render(h: CreateElement) {
    const { $slots } = this;

    return <td class={classNames(selectorPrefix)}>{$slots.default}</td>;
  },
};

export default SearchFormLabel;
