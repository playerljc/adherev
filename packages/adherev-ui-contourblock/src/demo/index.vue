<template>
  <div style="display: flex; flex-wrap: wrap">
    <adv-contourblock v-for="(item, index) in data" :key="index" style="width: 25%">
      <img src="https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF" alt="" />
    </adv-contourblock>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: Array.from({ length: 30 }),
    };
  },
};
</script>
