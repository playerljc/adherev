<template>
  <div :class="$style.App">
    <div :class="$style.Fixed">
      <Header />
    </div>

    <div :class="$style.Auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/lib/Header';

export default {
  displayName: 'app',
  components: {
    Header,
  },
};
</script>

<style lang="less" module>
.App {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > .Fixed {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    > .Fixed {
      flex-shrink: 0;
      padding: 10px;
    }

    > .Auto {
      flex-grow: 1;
      min-width: 0;
      margin-right: 20px;
      text-align: right;
    }
  }

  > .Auto {
    flex-grow: 1;
    min-height: 0;
  }
}
</style>
