import { Fragment } from 'vue-fragment';

import { deal } from './util';

export default {
  name: 'adv-conditionalrender-show',
  props: {
    conditional: {
      type: Boolean,
      default: true,
    },
  },
  render(h) {
    const { conditional, $slots } = this;

    deal({
      conditional,
      rule: 'display',
      ruleVisibleValue: '',
      ruleHideValue: 'none',
      slots: $slots,
    });

    return (
      // @ts-ignore
      <Fragment>
        {$slots.default}
        {$slots.noMatch}
      </Fragment>
    );
  },
};
