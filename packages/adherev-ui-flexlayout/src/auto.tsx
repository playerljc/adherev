// @ts-ignore
import classNames from 'classnames';

// @ts-ignore
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
    // @ts-ignore
    const { $slots, autoFixed, className, fit } = this;

    return (
      // @ts-ignore
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
