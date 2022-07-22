import { VNode } from 'vue';
import classNames from 'classnames';

import { selectorPrefix as parentSelectorPrefix } from './flexlayout';

const selectorPrefix = `${parentSelectorPrefix}-fixed`;

export default {
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
      <div ref="ref" class={classNames(selectorPrefix, `${fit ? selectorPrefix + '-fit' : ''}`)}>
        {$slots.default}
      </div>
    );
  },
};
