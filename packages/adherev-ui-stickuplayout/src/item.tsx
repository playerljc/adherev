import { defineComponent } from 'vue';

const selectorPrefix = 'adherev-ui-stickuplayout-item';

export default defineComponent({
  name: 'adv-stickuplayout-item',
  slots: ['title'],
  setup(props, { slots }) {
    return () => (
      <div class={selectorPrefix}>
        <div class={`${selectorPrefix}-header`}>{slots?.title?.()}</div>
        <div class={`${selectorPrefix}-content`}>{slots?.default?.()}</div>
      </div>
    );
  },
});
