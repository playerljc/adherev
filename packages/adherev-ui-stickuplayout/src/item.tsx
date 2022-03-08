import { defineComponent } from 'vue';

const selectorPrefix = 'adherev-ui-stickuplayout-item';

export default defineComponent({
  name: 'adv-stickuplayout-item',
  slots: ['title'],
  setup(props, { slots }) {
    return () => (
      <div
        // @ts-ignore
        class={selectorPrefix}
      >
        <div
          // @ts-ignore
          class={`${selectorPrefix}-header`}
        >
          {slots?.title?.()}
        </div>
        <div
          // @ts-ignore
          class={`${selectorPrefix}-content`}
        >
          {slots?.default?.()}
        </div>
      </div>
    );
  },
});
