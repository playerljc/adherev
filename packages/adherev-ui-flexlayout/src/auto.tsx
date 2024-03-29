import classNames from 'classnames';
import { defineComponent, ref } from 'vue';
import { bool } from 'vue-types';

import { selectorPrefix as parentSelectorPrefix } from './flexlayout';

const selectorPrefix = `${parentSelectorPrefix}-auto`;

export const autoProps = {
  autoFixed: bool().def(true),
  fit: bool().def(true),
};

export default defineComponent({
  name: 'adv-flexlayout-auto',
  props: autoProps,
  setup(props, { slots, expose }) {
    const root = ref<HTMLDivElement | null>(null);

    const getEl = (): HTMLDivElement | null => root.value;

    expose({
      getEl,
    });

    return () => (
      <div
        ref={root}
        class={classNames(
          selectorPrefix,
          `${props.autoFixed ? `${selectorPrefix}-autoFixed` : ''}`,
          `${props.fit ? `${selectorPrefix}-fit` : ''}`,
        )}
      >
        {slots.default ? slots.default() : null}
      </div>
    );
  },
});
