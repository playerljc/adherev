// @ts-ignore
import classNames from 'classnames';

export const selectorPrefix = 'adherev-ui-flexlayout';

export default {
  name: 'adv-flexlayout',
  props: {
    direction: {
      type: String,
      require: true,
      default: 'vertical',
      validator: function (val) {
        return ['vertical', 'horizontal'].indexOf(val) !== -1;
      },
    },
    className: {
      type: String,
      default: '',
    },
  },
  render(h) {
    // @ts-ignore
    const { $slots, className, direction } = this;

    return (
      // @ts-ignore
      <div
        class={classNames(
          selectorPrefix,
          `${selectorPrefix}-${direction}`,
          ...className.split(' '),
        )}
      >
        {$slots.default}
      </div>
    );
  },
};
