import { defineComponent } from 'vue';

const selectorPrefix = 'adherev-ui-contourblock';

export default defineComponent({
  name: 'adv-contourblock',
  setup(props, { slots }) {
    return () => (
      <div>
        <div class={`${selectorPrefix}`}>
          <div class={`${selectorPrefix}-inner`}>{slots?.default?.()}</div>
        </div>
      </div>
    );
  },
});
