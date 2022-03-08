import { defineComponent } from 'vue';

const selectorPrefix = 'adherev-ui-searchform-value';

export default defineComponent({
  name: 'adv-searchtable-searchform-value',
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
