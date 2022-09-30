import classNames from 'classnames';
import { defineComponent, ref } from 'vue';
import { bool } from 'vue-types';

import { selectorPrefix as parentSelectorPrefix } from './flexlayout';

const selectorPrefix = `${parentSelectorPrefix}-fixed`;

const props = {
  fit: bool().def(true),
};

export default defineComponent({
  name: 'adv-flexlayout-fixed',
  props,
  setup(props, { slots, expose }) {
    const root = ref<HTMLDivElement | null>(null);

    const getEl = (): HTMLDivElement | null => root.value;

    expose({
      getEl,
    });

    return () => (
      <div
        // @ts-ignore
        ref={root}
        class={classNames(selectorPrefix, `${props.fit ? selectorPrefix + '-fit' : ''}`)}
      >
        {slots.default ? slots.default() : null}
      </div>
    );
  },
});
