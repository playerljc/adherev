import classNames from 'classnames';
import { VNode } from 'vue';

import { selectorPrefix as parentSelectorPrefix } from './flexlayout';

const selectorPrefix = `${parentSelectorPrefix}-fixed`;

const Fixed: any = {
  name: 'adv-flexlayout-fixed',
  props: {
    fit: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    getEl() {
      return this.$refs.ref;
    },
  },
  render(h): VNode {
    const { $slots, fit } = this;

    return (
      <div ref="ref" class={classNames(selectorPrefix, `${fit ? `${selectorPrefix}-fit` : ''}`)}>
        {$slots.default}
      </div>
    );
  },
};

export default Fixed;
