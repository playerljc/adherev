import { defineComponent } from 'vue';

const selectorPrefix = 'adherev-ui-searchform-label';

export default defineComponent({
  name: 'adv-searchtable-searchform-label',
  setup(props, { slots }) {
    return () => (
      <td
        // @ts-ignore
        class={selectorPrefix}
      >
        {slots?.default?.()}
      </td>
    );
  },
});
