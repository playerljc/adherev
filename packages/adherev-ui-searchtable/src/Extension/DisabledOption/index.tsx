import { defineComponent } from 'vue';

const selectorPrefix = `adherev-ui-searchtable-disabledoption`;

export default defineComponent({
  name: 'adv-searchtable-disabledoption',
  render() {
    return <div class={selectorPrefix}>{this?.$slots?.default?.()}</div>;
  },
});
