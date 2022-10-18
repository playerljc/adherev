<template>
  <adv-pullrefresh class="Wrap" @pull-refresh="onCode1Refresh">
    <ul>
      <li v-for="index in Array.from({length: 100})">111</li>
    </ul>
  </adv-pullrefresh>
</template>

<script>
export default {
  methods: {
    onCode1Refresh(reset) {
      setTimeout(() => {
        reset();
      }, 1000 * 3);
    },
  }
};
</script>

<style lang="less">
 .Wrap {
   height: 300px;
 }
</style>
