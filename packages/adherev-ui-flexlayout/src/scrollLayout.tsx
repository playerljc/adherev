import { VNode } from 'vue';

import { selectorPrefix as _selectorPrefix } from './flexlayout';

const selectorPrefix = `${_selectorPrefix}-scrolllayout`;

const ScrollLayout: any = {
  name: 'adv-flexlayout-scrolllayout',
  props: {
    scrollY: {
      type: Boolean,
      default: true,
    },
  },
  provide: function () {
    return {
      getEl: this.getEl,
    };
  },
  methods: {
    getEl() {
      return this.$refs.wrapRef;
    },
  },
  render(h): VNode {
    return (
      <div
        ref="wrapRef"
        class={selectorPrefix}
        style={`overflow-y: ${this.scrollY ? 'auto' : 'hidden'}`}
      >
        {this.$slots.default}
      </div>
    );
  },
};

export default ScrollLayout;
