import classNames from 'classnames';
import { defineComponent, provide } from 'vue';
import { oneOf } from 'vue-types';

export const selectorPrefix = 'adherev-ui-flexlayout';

const props = {
  direction: oneOf(['vertical', 'horizontal']).def('vertical'),
};

export default defineComponent({
  name: 'adv-flexlayout',
  props,
  setup(props, { slots }) {
    provide('direction', props.direction);

    console.log('direction', props.direction);
    return () => (
      <div class={classNames(selectorPrefix, `${selectorPrefix}-${props.direction}`)}>
        {slots.default ? slots.default() : null}
      </div>
    );
  },
});
