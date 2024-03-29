import classNames from 'classnames';
import { defineComponent, ref } from 'vue';
import { bool } from 'vue-types';

import { selectorPrefix as parentSelectorPrefix } from './flexlayout';

const selectorPrefix = `${parentSelectorPrefix}-fixed`;

export const fixedProps = {
  fit: bool().def(true),
};

export default defineComponent({
  name: 'adv-flexlayout-fixed',
  props: fixedProps,
  setup(props, { slots, expose }) {
    const root = ref<HTMLDivElement | null>(null);

    const getEl = (): HTMLDivElement | null => root.value;

    expose({
      getEl,
    });

    return () => (
      <div
        ref={root}
        class={classNames(selectorPrefix, `${props.fit ? `${selectorPrefix}-fit` : ''}`)}
      >
        {slots.default ? slots.default() : null}
      </div>
    );
  },
});
