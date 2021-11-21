import classNames from 'classnames';

export const selectorPrefix = 'adherev-ui-flexlayout';

export default {
  name: 'adv-flexlayout',
  props: {
    direction: {
      type: String,
      default: 'vertical',
      validator(val) {
        return ['vertical', 'horizontal'].indexOf(val) !== -1;
      },
    },
    className: {
      type: String,
      default: '',
    },
  },
  methods: {
    getDirection(): string {
      return this.direction;
    },
  },
  provide() {
    return {
      getDirection: this.getDirection,
    };
  },
  render(h) {
    const { $slots, className, direction } = this;

    return (
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
