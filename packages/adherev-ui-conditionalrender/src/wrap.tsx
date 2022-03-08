import { defineComponent } from 'vue';

export default defineComponent({
  name: 'adv-conditionalrender-wrap',
  setup(props, { slots }) {
    return () => <div>{slots?.default?.()}</div>;
  },
});
