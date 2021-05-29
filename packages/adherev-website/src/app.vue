<template>
  <div :class="$style.App">
    <div :class="$style.Fixed">
      <div :class="$style.Fixed">
        <h2>adherev</h2>
      </div>
      <div :class="$style.Auto" />
    </div>
    <div :class="$style.Auto">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {};
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    > .Fixed {
      flex-shrink: 0;
      padding: 10px;
    }

    > .Auto {
      flex-grow: 1;
      min-width: 0;
    }
  }

  > .Auto {
    flex-grow: 1;
    min-height: 0;
  }
}
</style>
