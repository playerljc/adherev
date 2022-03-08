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
    // const getDirection = () => props.direction;
    // provide('getDirection', getDirection);

    provide('direction', props.direction);

    return () => (
      // @ts-ignore
      <div class={classNames(selectorPrefix, `${selectorPrefix}-${props.direction}`)}>
        {slots.default ? slots.default() : null}
      </div>
    );
  },
});
