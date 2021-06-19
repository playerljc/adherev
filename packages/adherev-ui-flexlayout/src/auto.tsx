import classNames from 'classnames';

import { selectorPrefix as parentSelectorPrefix } from './flexlayout';

const selectorPrefix = `${parentSelectorPrefix}-auto`;

export default {
  name: 'adv-flexlayout-auto',
  props: {
    className: {
      type: String,
      default: '',
    },
    autoFixed: {
      type: Boolean,
      default: true,
    },
    fit: {
      type: Boolean,
      default: true,
    },
  },
  render(h) {
    const { $slots, autoFixed, className, fit } = this;

    return (
      <div
        class={classNames(
          selectorPrefix,
          `${autoFixed ? selectorPrefix + '-autoFixed' : ''}`,
          `${fit ? selectorPrefix + '-fit' : ''}`,
          className.split(' '),
        )}
      >
        {$slots.default}
      </div>
    );
  },
};
