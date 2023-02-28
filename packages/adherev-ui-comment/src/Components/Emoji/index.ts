import 'emoji-mart/dist/browser.js';
import { defineComponent, h, onBeforeUnmount, onMounted, ref } from 'vue';
import { func, object } from 'vue-types';

const props = {
  i18n: object().def({}),
  onEmojiSelect: func(),
};

export default defineComponent({
  props,
  setup(props) {
    const rootRef = ref<HTMLDivElement>();
    let picker;

    onMounted(() => {
      // @ts-ignore
      picker = new window.EmojiMart.Picker({ ...props });

      rootRef.value?.appendChild(picker);
    });

    onBeforeUnmount(() => {
      try {
        picker && rootRef.value?.removeChild(picker);
      } catch (e) {}
    });

    return () => h('div', { ref: rootRef });
  },
});
