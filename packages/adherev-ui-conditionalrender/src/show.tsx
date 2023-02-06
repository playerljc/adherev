import { defineComponent } from 'vue';
import { bool } from 'vue-types';

import { deal } from './util';

export const showProps = {
  conditional: bool().def(true),
};

export default defineComponent({
  name: 'adv-conditionalrender-show',
  props: showProps,
  slots: ['default', 'noMatch'],
  setup(props, { slots }) {
    return () => {
      const { defaultVNodes, noMatchVNodes } = deal({
        conditional: props.conditional,
        rule: 'display',
        ruleVisibleValue: '',
        ruleHideValue: 'none',
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
