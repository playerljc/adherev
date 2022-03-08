import { defineComponent } from 'vue';

const selectorPrefix = 'adherev-ui-searchform';

export default defineComponent({
  name: 'adv-searchtable-searchform',
  setup(props, { slots }) {
    return () => (
      <table
        // @ts-ignore
        class={selectorPrefix}
      >
        <tbody>{slots?.default?.()}</tbody>
      </table>
    );
  },
});
