import { defineComponent } from 'vue';
import { bool } from 'vue-types';

import { deal } from './util';

const props = {
  conditional: bool().def(true),
};

/**
 * adv-conditionalrender-visibility
 */
export default defineComponent({
  name: 'adv-conditionalrender-visibility',
  props,
  slots: ['default', 'noMatch'],
  setup(props, { slots }) {
    return () => {
      const { defaultVNodes, noMatchVNodes } = deal({
        conditional: props.conditional,
        rule: 'visibility',
        ruleVisibleValue: 'visible',
        ruleHideValue: 'hidden',
        slots,
      });

      return (
        <>
          {defaultVNodes}
          {noMatchVNodes}
        </>
      );
    };
  },
});
