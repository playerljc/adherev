<template>
  <div>
    <div><button @click="value1 = value1 + 1">addValue1</button></div>
    <div><button @click="value2 = value2 + 1">addValue2</button></div>
    <Sub :value1="value1" :value2="value2" />
  </div>
</template>

<script>
import Sub from './sub';

export default {
  data() {
    return {
      value1: 0,
      value2: 0,
    };
  },
  components: {
    Sub: Sub,
  },
};
</script>
