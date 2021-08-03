import classNames from 'classnames';

import { selectorPrefix as parentSelectorPrefix } from './flexlayout';

const selectorPrefix = `${parentSelectorPrefix}-fixed`;

export default {
  name: 'adv-flexlayout-fixed',
  props: {
    className: {
      type: String,
      default: '',
    },
    fit: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    getEl () {
      return this.$refs.ref
    }
  },
  render(h) {
    const { $slots, className, fit } = this;

    return (
      <div
        ref="ref"
        class={classNames(
          selectorPrefix,
          `${fit ? selectorPrefix + '-fit' : ''}`,
          className.split(' '),
        )}
      >
        {$slots.default}
      </div>
    );
  },
};
