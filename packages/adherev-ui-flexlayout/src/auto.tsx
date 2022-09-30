import classNames from 'classnames';
import { VNode } from 'vue';

import { selectorPrefix as parentSelectorPrefix } from './flexlayout';

const selectorPrefix = `${parentSelectorPrefix}-auto`;

export default {
  name: 'adv-flexlayout-auto',
  props: {
    autoFixed: {
      type: Boolean,
      default: true,
    },
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
    const { $slots, autoFixed, fit } = this;

    return (
      <div
        ref="ref"
        class={classNames(
          selectorPrefix,
          `${autoFixed ? selectorPrefix + '-autoFixed' : ''}`,
          `${fit ? selectorPrefix + '-fit' : ''}`,
        )}
      >
        {$slots.default}
      </div>
    );
  },
};
