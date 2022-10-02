import classNames from 'classnames';
import { VNode } from 'vue';

export const selectorPrefix = 'adherev-ui-flexlayout';

const FlexLayout: any = {
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

    return (
      <div class={classNames(selectorPrefix, `${selectorPrefix}-${direction}`)}>
        {$slots.default}
      </div>
    );
  },
};

export default FlexLayout;
