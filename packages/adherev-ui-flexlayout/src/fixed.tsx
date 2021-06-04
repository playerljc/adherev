// @ts-ignore
import classNames from 'classnames';

// @ts-ignore
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
  render(h) {
    // @ts-ignore
    const { $slots, className, fit } = this;

    return (
      // @ts-ignore
      <div
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
