import { Fragment } from 'vue-fragment';

import { deal } from './util';

/**
 * adv-conditionalrender-visibility
 */
export default {
  name: 'adv-conditionalrender-visibility',
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
      rule: 'visibility',
      ruleVisibleValue: 'visible',
      ruleHideValue: 'hidden',
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
