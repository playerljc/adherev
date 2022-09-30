import classNames from 'classnames';
import { defineComponent } from 'vue';

const selectorPrefix = 'adherev-ui-revolving-item';

export default defineComponent({
  name: 'adv-revolving-item',
  setup(props, { slots }) {
    return () => <div class={classNames(selectorPrefix, 'swiper-slide')}>{slots?.default?.()}</div>;
  },
});
