import { defineComponent, provide, ref } from 'vue';
import { bool } from 'vue-types';

import { selectorPrefix as _selectorPrefix } from './flexlayout';

const selectorPrefix = `${_selectorPrefix}-scrolllayout`;

export const scrollLayoutProps = {
  scrollY: bool().def(true),
};

export default defineComponent({
  name: 'adv-flexlayout-scroll',
  props: scrollLayoutProps,
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
