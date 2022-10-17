import { defineComponent } from 'vue';

const selectorPrefix = 'adherev-ui-searchform-row';

export default defineComponent({
  name: 'adv-searchtable-searchform-row',
  setup(props, { slots }) {
    return () => <tr class={selectorPrefix}>{slots?.default?.()}</tr>;
  },
});
