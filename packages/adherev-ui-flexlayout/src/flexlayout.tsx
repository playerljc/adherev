import classNames from 'classnames';
import { defineComponent, provide } from 'vue';
import { oneOf } from 'vue-types';

export const selectorPrefix = 'adherev-ui-flexlayout';

export const flexLayoutProps = {
  direction: oneOf(['vertical', 'horizontal']).def('vertical'),
};

export default defineComponent({
  name: 'adv-flexlayout',
  props: flexLayoutProps,
  setup(props, { slots }) {
    provide('direction', props.direction);

    return () => (
      <div class={classNames(selectorPrefix, `${selectorPrefix}-${props.direction}`)}>
        {slots.default ? slots.default() : null}
      </div>
    );
  },
});
