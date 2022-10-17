import { defineComponent, provide, ref } from 'vue';
import { bool } from 'vue-types';

import { selectorPrefix as _selectorPrefix } from './flexlayout';

const selectorPrefix = `${_selectorPrefix}-scrolllayout`;

const props = {
  scrollY: bool().def(true),
};

export default defineComponent({
  name: 'adv-flexlayout-horizontal',
  props,
  setup(props, { slots }) {
    const wrapRef = ref<HTMLElement>();

    const getEl = () => wrapRef.value;

    provide('getEl', getEl);

    return () => (
      <div
        ref={wrapRef}
        class={selectorPrefix}
        style={`overflow-y: ${props.scrollY ? 'auto' : 'hidden'}`}
      >
        {slots?.default?.()}
      </div>
    );
  },
});
