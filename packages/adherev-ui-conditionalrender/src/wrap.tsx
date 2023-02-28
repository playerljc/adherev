import { defineComponent } from 'vue';

export default defineComponent({
  name: 'adv-conditionalrender-wrap',
  setup(props, { slots }) {
    // @ts-ignore
    return () => <div>{slots?.default?.()}</div>;
  },
});
