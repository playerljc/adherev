import { VNode } from 'vue';
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
  render(h): VNode {
    const { $slots, direction } = this;

    // @ts-ignore
    return (
      <div class={classNames(selectorPrefix, `${selectorPrefix}-${direction}`)}>
        {$slots.default}
      </div>
    );
  },
};
