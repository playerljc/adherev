import { ref } from 'vue';

export default () => {
  const count = ref(0);

  count.value = count.value + 1;
};
