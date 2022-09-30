<template>
  <div :class="$style.Wrap">
    <div :class="$style.Body">
      <slot></slot>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/lib/Footer';

export default {
  components: {
    Footer,
  },
};
</script>

<style lang="less" module src="./index.less" />
