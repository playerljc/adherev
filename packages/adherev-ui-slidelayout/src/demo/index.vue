<template>
  <div>
    <a-button type="primary" @click="collapse1 = true">打开</a-button>
    <a-button @click="collapse1 = false">关闭</a-button>
  </div>

  <adv-space direction="vertical" />

  <div :style="horizontalCSS">
    <adv-slidelayout-overlay
      :default-collapse="collapse1"
      @after-close="collapse1 = false"
    >
      left
    </adv-slidelayout-overlay>
  </div>
</template>

<script>

export default {
  data() {
    return {
      collapse1: true,
    }
  },
  computed: {
    horizontalCSS() {
      return `
      	position: relative;
        width: 400px;
        height: 400px;
        border: 1px solid rgba(0,0,0,.1);
        overflow: hidden;
      `
    },
  }
};
</script>
