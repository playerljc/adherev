import classNames from 'classnames';
import { CreateElement } from 'vue';

const selectorPrefix = 'adherev-ui-searchform';

const SearchForm: any = {
  name: 'adv-searchtable-searchform',
  render(h: CreateElement) {
    const { $slots } = this;

    return (
      <table class={classNames(selectorPrefix)}>
        <tbody>{$slots.default}</tbody>
      </table>
    );
  },
};

export default SearchForm;
